"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data
const faqData = [
  {
    question: "Why is this free?",
    answer:
      " Our mission is to break down the jargon and educate millenials with conversations about money and we feel charging our attendees contradicts that mission",
  },
  {
    question: "Do I need to attend every session?",
    answer:
      "Some key features of React include: Virtual DOM for better performance, JSX for easier component writing, component-based architecture, unidirectional data flow, and strong community support.",
  },
  {
    question: "Will replays be available if I miss the sessions?",
    answer:
      "JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks similar to HTML, and it allows you to write HTML-like code in your JavaScript files.",
  },
  {
    question: "What is your code of conduct?",
    answer:
      "The Virtual DOM is a programming concept where an ideal, or 'virtual', representation of a UI is kept in memory and synced with the 'real' DOM by a library such as ReactDOM. This process is called reconciliation.",
  },
  {
    question: "How do I join the day of the event?",
    answer:
      "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. They allow you to use state and other React features without writing a class.",
  },
];

export default function FAQ() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-20">
      <h1 className="mb-6 text-center font-normal">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full mt-14">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-gray-500 mt-4 px-5 py-2 rounded-2xl bg-white"
          >
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
