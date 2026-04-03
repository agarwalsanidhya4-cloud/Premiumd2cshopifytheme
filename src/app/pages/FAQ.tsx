import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What is the Daily Drop model?',
      answer: 'Every night at 12:00 AM IST, we release one exclusive ethnic wear piece. Each design is available in extremely limited quantities based on fabric availability. Once sold out, that design is gone forever—no restocks, no reproductions.'
    },
    {
      question: 'How do I know when a new drop is available?',
      answer: 'Visit our website anytime to see the current drop and a countdown timer to the next release. We recommend setting an alarm for 11:55 PM to be ready for the midnight drop.'
    },
    {
      question: 'Can I return or exchange my purchase?',
      answer: 'Since each piece is made-to-order and crafted specifically for you, we do not accept returns or exchanges unless there is a manufacturing defect. Please review all details carefully before placing your order.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Our artisans begin handcrafting your piece immediately after you order. The entire process takes 10-12 days from order confirmation to delivery at your doorstep.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Currently, we only ship within India. International shipping is in our roadmap and will be announced soon.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, UPI, net banking, and digital wallets. All orders must be prepaid—we do not offer cash on delivery to maintain the exclusivity of our drops.'
    },
    {
      question: 'Can I customize the design or size?',
      answer: 'Each piece is made-to-order, so you can provide your exact measurements during checkout. However, the design itself cannot be modified as it maintains the integrity of the artist\'s vision.'
    },
    {
      question: 'What if the fabric runs out before I can order?',
      answer: 'Unfortunately, once the fabric meter hits zero, that design is sold out forever. We encourage you to act quickly when you see a design you love. You can browse past sold-out designs in our Archive section.'
    },
    {
      question: 'Are the pieces suitable for weddings?',
      answer: 'Absolutely! Our pieces are crafted with premium materials and intricate work that makes them perfect for weddings, grand celebrations, and special occasions where you want to stand out.'
    },
    {
      question: 'Can I see the quality before I buy?',
      answer: 'We provide high-definition images and detailed descriptions including fabric type, work style, and craftsmanship hours. Each piece is handcrafted by master artisans in Surat with 240+ hours of work—quality is our guarantee.'
    },
    {
      question: 'What happens to unsold pieces?',
      answer: 'At 12:00 AM the next day, any remaining fabric from the current drop is archived and never used again. The design moves to our "Missed Forever" vault as a reminder of what could have been.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-['Playfair_Display']">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-lg font-['Montserrat']">
            Everything you need to know about 12AM ETHNIC
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <h3 className="font-semibold text-white font-['Montserrat'] pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-300 leading-relaxed font-['Montserrat']">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-black/40 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-6 font-['Montserrat']">
            Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#D4AF37] hover:bg-[#F4E4B0] text-[#001b3a] font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 font-['Montserrat']"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
