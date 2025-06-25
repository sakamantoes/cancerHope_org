import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How will I receive information about my service or support?",
      answer:
        "All service details and support updates will be sent directly through our official Telegram or email communication channels.",
    },
    {
      question: "Do I need to pay for any services upfront?",
      answer:
        "No payment should be made unless instructed by our official Telegram consultant. Do not trust unofficial contacts.",
    },
    {
      question: "How do I verify the official Telegram consultant?",
      answer:
        "The Telegram link is available on our official website or shared via verified email. Always confirm before making any commitments.",
    },
    {
      question:
        "What should I do if someone contacts me outside Telegram or email?",
      answer:
        "Do not respond. Report any unknown or suspicious contact to our official Telegram or email. Stay alert.",
    },
    {
      question: "Where can I find the official Telegram or email contact?",
      answer:
        "Our verified Telegram and email contact details are listed in the contact section of our website.",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-700 mb-10">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md transition-all"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <span
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-5 pb-4 text-sm text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            For all updates and communication, always use our verified Telegram
            or email. <br />
            Never send payments unless clearly instructed by our official
            Telegram consultant.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
