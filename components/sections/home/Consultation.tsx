import { Button } from "@/components/ui/button";
import React from "react";

const ConsultationSection = () => {
  return (
    <section className="blue-gradient block-space lg:relative lg:bottom-[-50px] container md:rounded-lg text-white">
      <div className="big-container text-center space-y-4">
        <h2>
          Book your Free Consultation <br /> Call Today!
        </h2>
        <span className="block">
          Our platform is designed to scale effortlessly, allowing businesses to
          expand their support <br /> capabilities as they grow.
        </span>
        <Button variant={"secondary"} className="rounded-full font-semibold">
          Book a Call Now
        </Button>
      </div>
    </section>
  );
};

export default ConsultationSection;
