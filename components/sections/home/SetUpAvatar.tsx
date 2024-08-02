import { Button } from "@/components/ui/button";
import React from "react";
import Placeholder from "@/public/placeholder.png";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

const SetUpAvatar = () => {
  return (
    <section className="block-space bg-mainDark text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="content-center space-y-4 md:space-y-6 lg:space-y-8">
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
          <div className="col-span-2">
            <Image src={Placeholder} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="flex items-center">
            <IconHeadingContent
              icon={<TbWorld />}
              heading="50+ Language Support"
              tagline="Our Avatar team is equipped to assist you in over 50 languages, ensuring seamless communication no matter where you're from."
            />
            <Separator orientation="vertical" className="hidden md:block" />
          </div>
          <div className="flex items-center">
            <IconHeadingContent
              icon={<FaRegStar />}
              heading="Low Cost Service"
              tagline="AI can handle numerous customer interactions simultaneously without additional costs and reducing the need for a large customer support team."
            />
            <Separator orientation="vertical" className="hidden md:block" />
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
}: {
  heading: string;
  tagline: string;
  icon: any;
}) {
  return (
    <div className="space-y-2">
      <div className="text-blue text-4xl">{icon}</div>
      <h3>{heading}</h3>
      <span className="text-customMuted block">{tagline}</span>
    </div>
  );
}
