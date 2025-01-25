"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What age groups do you support?",
    answer:
      "We offer programming courses for students aged 7-16, with carefully curated curriculum tailored to different skill levels from absolute beginners to intermediate coders.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "Not at all! Our programs are designed to welcome complete beginners. We start from the fundamentals and progressively build complex skills through interactive, fun learning modules.",
  },
  {
    question: "What programming languages will I learn?",
    answer:
      "We focus on beginner-friendly languages like Python and Scratch, gradually introducing JavaScript and HTML/CSS. Our goal is to build a strong computational thinking foundation.",
  },
  {
    question: "How are online classes structured?",
    answer:
      "Our live online classes combine interactive tutorials, hands-on coding projects, real-time instructor support, and collaborative learning experiences to keep students engaged.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes! Students receive digital certificates upon completing each course level, acknowledging their programming skills and progress in their coding journey.",
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
