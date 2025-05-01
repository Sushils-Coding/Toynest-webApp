import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);

  const systemPrompt = `You are a helpful friendly assistant for ToyNest, a toy renting and purchasing platform for parents. ToyNest works in two modes:

Non-Subscribers: Can purchase toys like a regular e-commerce website.

Subscribers: Pay a monthly fee (e.g., ₹799/month) and can borrow up to 5 toys, with 3 free exchanges per month. Once subscribed, all toys appear as ₹0 and work under the membership.

Key features to assist users with:

Wishlist and Add to Cart

Parental Insights Page: Toy suggestions based on child development.

Catalogue Page: Browse all toys/books by category and age.

Age-wise Filtering: Available on homepage and catalogue page.

Search Bar: Find toys by name in the catalogue page.

Plans & Pricing Page: Shows all subscription options.

About Us Page: Explains ToyNest’s mission and services.

Be a Seller: Direct users to a contact form to list/rent/sell their toys.

Login/Authentication: Help users sign in or resolve login issues.

FAQ Section: Answer common questions on borrowing, returns, plans, delivery, and membership benefits.

creator of you: Owner of ToyNest, Sushil & Anirud.

Always respond politely and guide users to the correct page or action. Be concise and clear in your responses. If you don't know the answer, say "I don't know" and suggest contacting customer support. Do not provide any personal opinions or information about yourself.`;

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = `${systemPrompt}\n\nUser: ${inputMessage}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const botMessage = { role: 'bot', content: response.text() };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'bot', content: 'Sorry, The server is busy. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 h-96 mr-4 flex flex-col animate-slideIn backdrop-blur-sm bg-opacity-95 border border-amber-200">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaRobot className="text-white animate-pulse" />
              <h3 className="text-white font-bold">ToyNest Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:rotate-90 transition-transform duration-300"
            >
              <FaTimes />
            </button>
          </div>

          <div ref={chatBoxRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-amber-200 scrollbar-track-transparent">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${msg.role === 'user'
                    ? 'ml-auto bg-gradient-to-r from-amber-100 to-amber-200'
                    : 'mr-auto bg-gradient-to-r from-gray-100 to-gray-200'
                  } p-3 rounded-lg max-w-[80%] shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="flex space-x-2 mr-auto bg-gray-100 p-3 rounded-lg animate-pulse">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-200"></div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-amber-100">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about toys..."
                className="flex-1 p-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-amber-50 placeholder-amber-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-2 rounded-lg hover:opacity-90 transition-opacity duration-300 focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                <FaPaperPlane className="transform hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group animate-floating relative cursor-pointer"
        onMouseEnter={(e) => e.currentTarget.querySelector('svg').classList.add('animate-wiggle')}
        onMouseLeave={(e) => e.currentTarget.querySelector('svg').classList.remove('animate-wiggle')}
      >
        <FaRobot
          size={24}
          className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
        {!isOpen && (
          <span className="absolute -top-2 -right-2 h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
