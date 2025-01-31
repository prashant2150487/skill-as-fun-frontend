import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What age groups do you cater to?",
    answer:
      "We offer courses for students from 6th grade through undergraduate level, covering a wide range of educational needs and interests.",
  },
  {
    question: "How are the online classes conducted?",
    answer:
      "Our classes are conducted through a state-of-the-art virtual classroom platform, allowing for real-time interaction between students and teachers, screen sharing, and collaborative tools.",
  },
  {
    question: "Can I try a class before committing to a full course?",
    answer:
      "Yes, we offer trial classes for most of our courses. This allows you to experience our teaching style and ensure it's a good fit for your learning needs.",
  },
  {
    question: "How do you ensure the quality of your teachers?",
    answer:
      "All our teachers go through a rigorous selection process, including background checks, teaching demonstrations, and ongoing professional development to ensure they provide the highest quality education.",
  },
  {
    question: "Do you offer any certifications upon course completion?",
    answer:
      "Yes, upon successful completion of our courses, students receive a certificate of achievement that can be a valuable addition to their academic portfolio.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

