"use client";

import React, { useRef } from "react";
import ClientGirl from "@/public/ClientGirl.png";
import Image from "next/image";
import Quote, { QuoteIcon } from "lucide-react";
import SegmentIcon from "@/public/SegmentLogo.png";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const ClientsSection = () => {
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
        ".animate-heading",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut" }
      );

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
    },
    { scope: container }
  );

  return (
    <section
      className="block-space-large big-container overflow-hidden"
      id="clients"
      ref={container}
    >
      <h2 className="animate-heading text-center mb-4 md:mb-6 lg:mb-8">
        Check what our <span className="text-blue">clients</span> are saying‍‍
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="animate-image">
          <Image
            src={ClientGirl}
            alt="image depicting a women with her arms crossed"
          />
        </div>
        <div className=" animate-content content-center space-y-4">
          <div className="text-4xl text-[#5D5FEF]">
            <FaQuoteLeft />
          </div>
          <div className="flex gap-2 items-center text-yellow-400 text-2xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h3 className="leading-relaxed">
            My company saved 36% cost using botbee. Really boy law county she
            unable her sister. Feet you off its like like six. Among sex are
            leave law built now.
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="text-blue">AR Shakir</h4>
              <span>CEO GetNextDesign</span>
            </div>
            <Image src={SegmentIcon} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
