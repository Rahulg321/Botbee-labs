"use client";

import React, { useRef } from "react";
import RegularCustomService from "@/public/RegularCustomerService.png";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const SecondaryHeroSection = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom top",
          // restart each time it enters the viewport
          toggleActions: "restart pause resume pause",
        },
      });

      t1.fromTo(".box", { opacity: 0 }, { opacity: 1, duration: 0.5 });

      t1.fromTo(
        ".tech-item",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.3, ease: "power1.inOut" }
      );
      // t1.fromTo(
      //   ".tech-row",
      //   {
      //     x: (index) => {
      //       return index % 2 === 0
      //         ? gsap.utils.random(600, 400)
      //         : gsap.utils.random(-600, -400);
      //     },
      //   },
      //   {
      //     x: (index) => {
      //       return index % 2 === 0
      //         ? gsap.utils.random(-600, -400)
      //         : gsap.utils.random(600, 400);
      //     },
      //     ease: "power1.inOut",
      //     scrollTrigger: {
      //       trigger: container.current,
      //       start: "top bottom",
      //       end: "bottom top",
      //       scrub: 4,
      //     },
      //   }
      // );
    },
    {
      scope: container,
    }
  );

  return (
    <section className="block-space-large bg-mainDark text-white overflow-hidden">
      <div className="container" ref={container}>
        <div className="text-center box mb-6 md:mb-8 lg:mb-16 space-y-4">
          <span className="cursor-blink md:text-lg">What is the problem?</span>
          <h2>
            Regular Customer Support Service <br /> can be Frustrating
          </h2>
          <span className="text-customMuted block">
            With traditional customer support services, you can face major
            issues like high <br /> operational cost, inconsistent quality, long
            response time and many more.
          </span>
        </div>

        <div className="space-y-4">
          <div className="tech-row flex">
            <TextBox heading="How to handle massive Customer Support?" />
            <BlankBox classname="flex-1" />
            <TextBox heading="How can I elevate User Experience?" />
          </div>
          <div className="tech-row flex">
            <BlankBox classname="flex-1" />
            <TextBox heading="How can I save service cost?" />
            <BlankBox classname="flex-1" />
          </div>
          <div className="tech-row flex">
            <TextBox heading="How to save my valuable time from hiring process?" />
            <BlankBox classname="flex-1" />
            <TextBox heading="How can I attract more customers?" />
          </div>
          <div className="tech-row flex">
            <BlankBox classname="flex-1" />
            <TextBox heading="How can I increase engagement on my website?" />
            <BlankBox classname="flex-1" />
          </div>
          <div className="tech-row flex">
            <TextBox heading="How to serve quick results?" />
            <BlankBox classname="flex-1" />
            <TextBox heading="How can I automate the communication?" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryHeroSection;

function TextBox({ heading }: { heading: string }) {
  return (
    <div className="p-4 rounded-full tech-item  border border-white">
      <h5>{heading}</h5>
    </div>
  );
}

function BlankBox({ classname }: { classname?: string }) {
  return (
    <div
      className={cn("bg-[#1E1C2D] p-4 tech-item rounded-full", classname)}
    ></div>
  );
}
