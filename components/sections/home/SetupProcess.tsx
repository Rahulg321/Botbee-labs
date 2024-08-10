"use client";

import Image from "next/image";
import React, { useRef } from "react";
import IconGrid from "@/public/IconGrid.png";
import One from "@/public/1.png";
import Two from "@/public/2.png";
import Three from "@/public/3.png";
import Four from "@/public/4.png";
import PdfCircle from "@/public/pdfCircle.png";
import MeetTeam from "@/public/MeetTeamNull.png";
import { cn } from "@/lib/utils";
import ChatGirl from "@/public/ChatGirl.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SetupProcess = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".box-1",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".box-1",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "restart pause resume pause",
          },
        }
      );
      gsap.fromTo(
        ".box-2",
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".box-2",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "restart pause resume pause",
          },
        }
      );
      gsap.fromTo(
        ".box-3",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".box-3",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "restart pause resume pause",
          },
        }
      );
      gsap.fromTo(
        ".box-4",
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".box-4",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "restart pause resume pause",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section className="bg-mainDark text-white block-space-large overflow-hidden">
      <div className="container" ref={container}>
        <div className="animate-content text-center mb-6 md:mb-8 lg:mb-12 space-y-4">
          <h2>Easy to setup Process</h2>
          <span className="block text-customMuted text-sm">
            Step by step process to train your Avatar. Select your preferable
            language and <br />
            favourite Avatar. Upload the files regarding your website and train
            your bot.
          </span>
        </div>

        <div className="space-y-12">
          <GridItem
            heading="Pick your favourite Avatar based on your preference"
            image={IconGrid}
            backgroundImage={One}
            imageLeft={false}
            classname="box-1 box-odd box"
            imageAlt="image depicting a grid showing flags of different countries"
            backgroundImageAlt="background image of the number ONE"
          />

          <GridItem
            heading="Pick your favourite Avatar based on your preference"
            image={MeetTeam}
            backgroundImage={Two}
            classname="box-2 box-even box"
            imageAlt="animated image showing a group of different people"
            backgroundImageAlt="background image of the number TWO"
          />

          <GridItem
            heading="Test your avatar and copy the link to upload in your website"
            image={PdfCircle}
            backgroundImage={Three}
            imageLeft={false}
            classname="box-3 box-odd box"
            imageAlt="image showing a circle of logos for different tools like Github, PDF, etc."
            backgroundImageAlt="background image of the number THREE"
          />
          <GridItem
            heading="Test your avatar and copy the link to upload in your website"
            image={ChatGirl}
            backgroundImage={Four}
            classname="box-4 box-even box"
            imageAlt="animated image showing a women asking a question to a chatbot"
            backgroundImageAlt="background image of the number FOUR"
          />
        </div>
      </div>
    </section>
  );
};

export default SetupProcess;

function GridItem({
  heading,
  image,
  imageAlt,
  backgroundImageAlt,
  backgroundImage,
  imageLeft = true,
  classname,
}: {
  heading: string;
  imageAlt: string;
  backgroundImageAlt: string;
  image: any;
  backgroundImage: any;
  imageLeft?: boolean;
  classname?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-12",
        {
          "md:flex-row-reverse": !imageLeft,
        },
        classname
      )}
    >
      <div className="flex-1 p-4">
        <Image src={image} alt={imageAlt} />
      </div>
      <div className="relative overflow-hidden flex-1">
        <div className="z-10 absolute content-center inset-0 lg:px-12">
          <h2>{heading}</h2>
        </div>
        <div className="">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
