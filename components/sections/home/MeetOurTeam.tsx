import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import TeamPortrait from "@/public/3d-portrait-people 1.png";

const MeetOurTeam = () => {
  return (
    <section className="container block-space">
      <div className="rounded-lg border-2 ">
        <div className="text-center my-4 lg:my-8 space-y-6">
          <h2>Meet Our Team‍️</h2>
          <p>
            Get 6 different personalities to guide your users. This Avatars can
            assist your <br /> users like a human. Offer a better user
            experience with our different Avatars.
          </p>
          <Button
            className="bg-[#4339F2] rounded-full font-semibold"
            size={"lg"}
          >
            Build your Avatar
          </Button>
        </div>
        <Image
          src={TeamPortrait}
          alt="animated image showing a group of different people"
        />
      </div>
    </section>
  );
};

export default MeetOurTeam;
