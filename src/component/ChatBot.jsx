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

  const systemPrompt = `You are a helpful toy store assistant. Provide friendly, concise answers about toys, age-appropriate recommendations, and shopping assistance. Keep responses brief and child-friendly. Respond in a friendly tone.Toys are there in catalogue, and are filtered by age group. Each toy has a it's own price. There is also subscription service available. You can also suggest toys based on the age group of the child. The age groups are 0-2, 3-5, 6-8, 9-12, and 13+.`;

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
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 mb-4 flex flex-col">
          <div className="bg-amber-500 p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-white font-bold">ToyNest Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <FaTimes />
            </button>
          </div>
          
          <div ref={chatBoxRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.role === 'user' ? 'ml-auto bg-amber-100' : 'mr-auto bg-gray-100'
                } p-3 rounded-lg max-w-[80%]`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="flex space-x-2 mr-auto bg-gray-100 p-3 rounded-lg">
                <div className="animate-bounce">.</div>
                <div className="animate-bounce delay-100">.</div>
                <div className="animate-bounce delay-200">.</div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about toys..."
                className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-amber-500 text-white p-2 rounded-lg hover:bg-amber-600"
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(true)}
        className="bg-amber-500 text-white p-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
      >
        <FaRobot size={24} />
      </button>
    </div>
  );
};

export default ChatBot;
