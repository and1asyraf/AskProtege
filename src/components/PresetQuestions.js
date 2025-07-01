import React from 'react';
import { motion } from 'framer-motion';

const questions = [
  "What is Protege USM?",
  "What kind of events do you organize?",
  "Who can join Protege?",
  "How do I apply to be part of Protege?",
  "What skills can I gain from joining?",
  "Can I join if I'm not from a cultural background?",
  "Who are the current committee members?",
  "What's the next upcoming event?",
  "Where can I follow you on social media?"
];

const PresetQuestions = ({ onQuestionClick }) => {
  return (
    <div className="border-t border-gray-200 p-2 sm:p-4 bg-white sticky bottom-0 z-10">
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {questions.map((question, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onQuestionClick(question)}
            className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-200 border border-gray-200 hover:border-gray-300 whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {question}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default PresetQuestions; 