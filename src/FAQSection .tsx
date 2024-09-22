import Container from './utils/Container';

// Sample FAQ Data
const faqData = [
   {
      question: 'What types of plants do you sell?',
      answer:
         'We offer a wide variety of indoor and outdoor plants including succulents, flowering plants, shrubs, and trees.',
   },
   {
      question: 'Do you offer plant care tips?',
      answer:
         'Yes! Each plant comes with detailed care instructions, and we also provide free consultation to help you take care of your plants.',
   },
   {
      question: 'How do you ship your plants?',
      answer:
         'Our plants are carefully packaged in eco-friendly materials and shipped with care to ensure they arrive in perfect condition.',
   },
   {
      question: 'Do you offer discounts for bulk orders?',
      answer:
         'Yes, we offer discounts for bulk purchases. Contact us for more details.',
   },
   {
      question: 'Do you offer discounts for bulk orders?',
      answer:
         'Yes, we offer discounts for bulk purchases. Contact us for more details.',
   },
];

const FAQSection = () => {
   return (
      <section className="py-12 bg-green-50">
         <Container className=" px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-800">
               {/* Frequently Asked Questions */}FAQ
            </h2>

            {/* Daisy UI Accordion */}
            <div className="join join-vertical w-full space-y-2">
               {faqData.map((item, idx) => (
                  <div
                     key={idx}
                     className="collapse collapse-arrow join-item border border-base-300"
                  >
                     <input
                        type="radio"
                        name="faq-accordion"
                        defaultChecked={idx === 0}
                     />
                     <div className="collapse-title md:text-xl font-medium">
                        {item.question}
                     </div>
                     <div className="collapse-content text-xs md:text-base">
                        <p>{item.answer}</p>
                     </div>
                  </div>
               ))}
            </div>
         </Container>
      </section>
   );
};

export default FAQSection;
