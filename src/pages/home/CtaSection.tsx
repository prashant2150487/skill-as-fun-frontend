import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CtaSection = () => {
  
  return (
    <div className="w-full h-96 flex flex-col justify-center items-center">
      <div>
        <h1>Shape their tomorrow, start today!</h1>
        <p className="mt-1">
          Start early and equip your child with the tools and confidence to
          navigate tomorrow's challenges with ease.
        </p>
        <Button className="bg-[#2E31A6] px-5 py-7 rounded-full flex gap-1 shadow-sm text-white mx-auto mt-10 text-lg font-normal">
          <span>Register Now! </span>
          <ArrowUpRight />
        </Button>
      </div>
    </div>
  );
};

export default CtaSection;
