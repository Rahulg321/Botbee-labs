"use client";

import { Button } from "@/components/ui/button";
import { LucideAtom } from "lucide-react";
import React, { useRef } from "react";
import Placeholder from "@/public/placeholder.png";
import Image from "next/image";
import AvatarHeroGroup from "@/public/AvatarHeroGroup.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroGraphics from "@/public/Hero-Graphics.png";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      let t1 = gsap.timeline();

      t1.fromTo(
        ".main-content",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.inOut",
        }
      );

      t1.fromTo(
        ".animate-image",
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.inOut",
        }
      );
    },
    {
      scope: container,
    }
  );

  // const renderLetters = (name: string, key: string) => {
  //   if (!name) return;
  //   return name.split("").map((letter, index) => (
  //     <span
  //       key={index}
  //       className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
  //     >
  //       {letter}
  //     </span>
  //   ));
  // };

  return (
    <section className="block-space-large bg-mainDark overflow-hidden text-white">
      <div
        className="container grid grid-cols-1 lg:grid-cols-2 gap-8"
        ref={container}
      >
        <div className="content-center space-y-4 md:space-y-8 main-content">
          <span className="flex items-center gap-2">
            {" "}
            <LucideAtom className="text-blue text-4xl" />
            AI-Powered Voice Assistants 24/7 at your Service
          </span>
          <h1>
            Your{" "}
            <span className="text-blue">
              only AI Twin who <br /> knows
            </span>{" "}
            your customers better than them
          </h1>
          <span className="text-customMuted block">
            Save up to 50% Cost with our Multilingual Customer Support Avatar.
            It aims to revolutionize the B2B customer support sector.
          </span>
          <div className="flex flex-col md:flex-row gap-4">
            <Button
              className="rounded-full font-semibold"
              variant={"secondary"}
              size={"lg"}
            >
              Build your Avatar
            </Button>
            <Button
              className="rounded-full font-semibold border-white border-2"
              size={"lg"}
            >
              Learn More
            </Button>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <h4>50+</h4>
            <h4>Happy Customers</h4>
            <Image src={AvatarHeroGroup} alt="" />
          </div>
        </div>
        <div>
          <Image
            src={HeroGraphics}
            alt="hero image of botbee illustrating use cases for the product itself"
            className="animate-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
