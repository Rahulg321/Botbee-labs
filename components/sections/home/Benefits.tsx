"use client";

import Image from "next/image";
import React, { useRef } from "react";
import BenefitsLeft from "@/public/BenefitsLeft.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const BenefitSection = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart pause resume pause",
        },
      });

      t1.fromTo(
        ".animate-image",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.inOut" }
      );

      t1.fromTo(
        ".animate-content",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );

      t1.fromTo(
        ".box",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.3, duration: 0.5, ease: "power2.inOut" }
      );
    },
    { scope: container }
  );
  return (
    <section
      className="block-space-large overflow-hidden big-container grid grid-cols-1 md:grid-cols-2 gap-4"
      id="benefits"
      ref={container}
    >
      <div className="animate-image">
        <Image src={BenefitsLeft} alt="" />
      </div>
      <div className=" animate-content space-y-4 md:space-y-6 lg:space-y-8">
        <h2>
          <span className="text-blue">A Top-notch Product</span> with <br />
          Interesting Benefits{" "}
        </h2>
        <p>
          By automating customer support with AI avatars, businesses can
          significantly reduce the costs associated with hiring and training
          multilingual support staff.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GridItem
            heading="50%"
            tagline="Average Cost Savings"
            description="Save a big amount and get an immersive experience at the same time with the Avatars."
          />
          <GridItem
            heading="24/7"
            tagline="Customer Support"
            description="Advanced AI chatbots can handle a large volume of inquiries round the clock, offering consistent and instant responses."
          />
          <GridItem
            heading="0.4 sec"
            tagline="average response time"
            description="Another unique feature is real-time data analysis and instant decision-making."
          />
          <GridItem
            heading="6"
            tagline="Different Personalities"
            description="Get 6 different personalities to guide your users. This Avatars can assist your users like a human."
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;

function GridItem({
  heading,
  description,
  tagline,
}: {
  heading: string;
  tagline: string;
  description: string;
}) {
  return (
    <div className="box">
      <h3>{heading}</h3>
      <h4>{tagline}</h4>
      <span>{description}</span>
    </div>
  );
}
