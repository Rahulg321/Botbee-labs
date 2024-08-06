import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import Placeholder from "@/public/placeholder.png";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

const SetUpAvatar = () => {
  return (
    <section className="block-space bg-mainDark text-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-8">
          <div className="content-center  space-y-4 md:space-y-6 animate-content lg:space-y-8">
            <h2>Set Up Your Avatar & Enjoy the Exclusive Features</h2>
            <p className="text-customMuted">
              Our platform is designed to scale effortlessly, allowing
              businesses to expand their support capabilities as they grow.
            </p>
            <Button
              className="rounded-full font-semibold w-full"
              variant={"secondary"}
              size={"lg"}
            >
              Build your Avatar
            </Button>
          </div>
          <div className="col-span-2 animate-content">
            <video
              src="/CreationVideo.mp4"
              controls
              className="w-full"
              poster="/path/to/your/poster-image.png"
              loop
              muted
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="flex items-center">
            <IconHeadingContent
              icon={<TbWorld />}
              heading="50+ Language Support"
              tagline="Our Avatar team is equipped to assist you in over 50 languages, ensuring seamless communication no matter where you're from."
              classname="md:border-r-2"
            />
          </div>
          <div className="flex items-center">
            <IconHeadingContent
              icon={<FaRegStar />}
              heading="Low Cost Service"
              tagline="AI can handle numerous customer interactions simultaneously without additional costs and reducing the need for a large customer support team."
              classname="md:border-r-2"
            />
          </div>
          <IconHeadingContent
            icon={<MdSecurity />}
            heading="Enhancing Data Security"
            tagline="AI can continuously monitor and detect suspicious activities or potential security threats in real-time, providing immediate alerts."
          />
        </div>
      </div>
    </section>
  );
};

export default SetUpAvatar;

function IconHeadingContent({
  heading,
  tagline,
  icon,
  classname,
}: {
  heading: string;
  tagline: string;
  icon: any;
  classname?: string;
}) {
  return (
    <div className={cn("space-y-2 box", classname)}>
      <div className="text-blue text-4xl">{icon}</div>
      <h3>{heading}</h3>
      <span className="text-customMuted block">{tagline}</span>
    </div>
  );
}
