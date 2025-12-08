'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: 'How can I add a new team member?',
    answer:
      "You can add a new team member by navigating to the 'Team' section in the dashboard and clicking on 'Add Member'. Fill in the details and send an invitation.",
  },
  {
    question: 'Can I assign roles to team members?',
    answer:
      "Yes, you can assign different roles to team members under the 'Settings' section. Roles help in defining permissions and access levels.",
  },
  {
    question: 'How do I track project progress?',
    answer:
      'You can track project progress using the built-in project dashboard. It provides real-time updates on tasks, deadlines, and overall project completion.',
  },
  {
    question: 'Is there a way to integrate third-party tools?',
    answer:
      "Yes, our system allows integration with various third-party tools like Slack, Google Drive, and Trello. You can find integrations under the 'Settings' section.",
  },
];

const FaqData = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white">
      <div className=" space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            {/* Divider before each question */}
            <hr className="border border-white mb-2" />

            <button
              className="w-full text-left p-4 flex justify-between items-center font-semibold text-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span
                className="flex items-center justify-center bg-[#FF9500] rounded-full text-white font-bold"
                style={{
                  width: '37.43px',
                  height: '37.43px',
                  fontSize: '18.5px',
                  lineHeight: '18.5px',
                }}
              >
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? 'auto' : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="p-4 text-white font-bold">{faq.answer}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqData;
