import React, { useState } from 'react';
import { cn } from '../libs/utils';

const faqs = [
  {
    question: 'How to create an account?',
    answer:
      "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
  },
  {
    question: 'Have any trust issue?',
    answer:
      'Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.',
  },
  {
    question: 'How can I reset my password?',
    answer:
      'To reset your password, click on the "Forgot Password" link on the login page, enter your email, and follow the instructions sent to your inbox.',
  },
  {
    question: 'What is the payment process?',
    answer:
      'We support a variety of payment methods including credit/debit cards, UPI, and net banking. After selecting your plan, proceed to checkout and follow the secure payment steps.',
  },
];

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="relative w-full h-[45rem] bg-orange-100">
      {/* background grid */}
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#facc15_1px,transparent_1px),linear-gradient(to_bottom,#facc15_1px,transparent_1px)]'
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-b from-orange-100 to-orange-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" >
      </div>



      {/* FAQ floating on top */}
      <section className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-full px-4 py-10 sm:px-6 lg:px-8 max-w-7xl animate-fade-up duration-1000 ease-in-out">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl transition-all duration-500 hover:text-orange-600">
            Explore Common Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-300 bg-white border border-gray-200 shadow-md hover:shadow-xl cursor-pointer hover:bg-orange-50 hover:scale-[1.02] rounded-md"
            >
              <button
                type="button"
                onClick={() => toggleAnswer(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black group-hover:text-orange-600">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openQuestion === index ? 'rotate-0' : '-rotate-180'
                    }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openQuestion === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-700 transition-opacity duration-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-base mt-9 transition-all duration-300 hover:text-orange-500">
          Still have questions?{' '}
          <span className="cursor-pointer font-medium text-tertiary underline hover:text-orange-600 transition-colors duration-300">
            Contact our support
          </span>
        </p>
      </section>
    </div>
  );
};

export default FAQ;
