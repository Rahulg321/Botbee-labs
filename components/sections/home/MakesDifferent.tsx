"use client";

import Image from "next/image";
import React, { useRef } from "react";
import PersonalizedInteraction from "@/public/PersonalizedInteraction.png";
import { cn } from "@/lib/utils";
import AiDrivenChat from "@/public/AI-DrivenChat.png";
import AiVoice from "@/public/AiVoice.png";
import BestAnswerChat from "@/public/BestAnswerChat.png";
import RealHumanChat from "@/public/RealHumanChat.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const MakesDifferent = () => {
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

      gsap.fromTo(
        ".box-5",
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
            trigger: ".box-5",
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
    <section
      className="block-space container overflow-hidden"
      ref={container}
      id="make-different"
    >
      <div className="text-center mb-6 md:mb-8 lg:mb-12 space-y-4">
        <span className="cursor-blink md:text-lg">How can you solve it?</span>
        <h2>
          What makes us <span className="text-blue">Different</span> from an{" "}
          <br /> Ordinary Customer Support?{" "}
        </h2>
        <span className="block text-customMuted text-sm">
          Unlock the essence of our offerings with these key highlights,
          showcasing <br /> the most impactful features and benefits tailored
          for you.
        </span>
      </div>

      <div className="">
        <GridItem
          imageLeft={false}
          imageAlt="flow chart of chatbot's appearance and conversational tone to match the brand
          identity."
          image={PersonalizedInteraction}
          heading="Personalized Interactions & Brand Customization"
          description="Use customer data to personalize interactions, making the chatbot feel
          more like a human assistant. Allow deep customization of the
          chatbot's appearance and conversational tone to match the brand
          identity."
          classname="box-1"
        />

        <GridItem
          imageLeft={true}
          imageAlt="text messages depicting the flow of AI workflow in response to user queries."
          image={AiDrivenChat}
          heading="Get AI-Driven Insights during Conversation"
          description="The AI avatar collects and analyzes customer interaction data to provide valuable insights into customer preferences, behavior, and common queries. This feature provides a human-like conversation between the user and our Avatar. Where AI can give suggestions to the user during communication."
          classname="box-2"
        />
        <GridItem
          imageLeft={false}
          imageAlt="image depicting a animated microphone"
          image={AiVoice}
          heading="Advanced Real-time Voice Communication"
          description="You can talk with Agents by typing in your question in the text input box, or by clicking the microphone icon and talking with the Agent just like you would talk with another person."
          classname="box-3"
        />

        <GridItem
          imageLeft={true}
          imageAlt="image depicting AI response and workflow based on customer feedback"
          image={BestAnswerChat}
          heading="Provides the Best Answer based on Customer feedbacks"
          description="RLHF enhances an agent's decision-making by incorporating nuanced human insights, leading to improved performance and faster learning. This approach is particularly useful for handling complex tasks that are difficult to encode with traditional reward functions."
          classname="box-4"
        />

        <GridItem
          imageLeft={false}
          imageAlt="image depicting human communication for advanced insights"
          image={RealHumanChat}
          heading="Communicate with Real Human for Extra Enquiry"
          description="This feature Implement a seamless transition from Al to human agents for complex queries. Incorporate mechanisms to flag Al errors and involve human agents for corrections."
          classname="box-5"
        />
      </div>
    </section>
  );
};

export default MakesDifferent;

const GridItem = ({
  heading,
  description,
  image,
  imageLeft = true,
  imageAlt,
  classname,
}: {
  heading: string;
  description: string;
  imageLeft: boolean;
  image: any;
  imageAlt: string;
  classname?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:flex-row gap-4 md:gap-8 lg:gap-12",
        {
          "md:flex-row-reverse": imageLeft,
        },
        classname
      )}
    >
      <div className="flex-1 content-center">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
      <div className="flex-1">
        <Image src={image} alt={imageAlt} />
      </div>
    </div>
  );
};
