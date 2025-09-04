import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import ChatMessage from './components/ChatMessage';
import { faqCategories } from './utils/faqData';

function App() {
  const [messages, setMessages] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add welcome message on first load
    if (messages.length === 0) {
      setMessages([
        {
          id: Date.now(),
          text: "Hey there! Wanna know what Protege USM is all about?\nDrop a question — I can tell you about our events, team life, or how to join the chaos 💥 (the good kind)!\n",
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    }
  }, []);

  const handleQuestionClick = (question, answer) => {
    const now = Date.now();
    setMessages(prev => [
      ...prev,
      {
        id: now,
        text: question,
        sender: 'user',
        timestamp: new Date()
      },
      {
        id: now + 1,
        text: answer,
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  const handleRestartChat = () => {
    setMessages([
      {
        id: Date.now(),
        text: "Hey there! Wanna know what Protege USM is all about?\nDrop a question — I can tell you about our events, team life, or how to join the chaos 💥 (the good kind)!\n",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4"
      >
        <div className="w-full max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Ask Protege!</h1>
              <p className="text-xs sm:text-sm text-gray-500">Chat with me to learn more</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRestartChat}
            className="flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Restart Chat</span>
          </motion.button>
        </div>
      </motion.header>

      {/* Chat Container */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-0 sm:px-4 py-2 sm:py-6 flex flex-col relative">
        <div className="bg-white rounded-none sm:rounded-2xl shadow-none sm:shadow-lg border-0 sm:border border-gray-200 h-full flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-2 sm:p-6 space-y-3 sm:space-y-4 max-h-[60vh] sm:max-h-full pb-32 sm:pb-0">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* FAQ Categories as Accordions - fixed bottom on mobile */}
          <div className="border-t border-gray-200 bg-white w-full fixed left-0 bottom-0 z-20 sm:static sm:rounded-b-2xl sm:z-auto sm:p-4 max-h-60 overflow-y-auto sm:max-h-none p-2">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((cat, idx) => (
                <motion.div key={cat.title} className="mb-2">
                  <button
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-left font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
                    aria-expanded={openCategory === idx}
                  >
                    <span>{cat.icon} {cat.title}</span>
                    <span className="ml-2">{openCategory === idx ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openCategory === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-2 mt-2 px-2 pb-2">
                          {cat.questions.map((q, qidx) => (
                            <motion.button
                              key={q.q}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => handleQuestionClick(q.q, q.a)}
                              className="text-left px-3 py-2 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-100 shadow-sm transition-colors text-sm"
                            >
                              {q.q}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 
