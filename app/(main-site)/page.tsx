import BenefitSection from "@/components/sections/home/Benefits";
import ClientsSection from "@/components/sections/home/Clients";
import ConsultationSection from "@/components/sections/home/Consultation";
import EmojiSection from "@/components/sections/home/EmojiSection";
import ExistingPlatforms from "@/components/sections/home/ExistingPlatforms";
import HeroSection from "@/components/sections/home/HeroSection";
import MakesDifferent from "@/components/sections/home/MakesDifferent";
import MeetOurTeam from "@/components/sections/home/MeetOurTeam";
import SecondaryHeroSection from "@/components/sections/home/SecondaryHero";
import SetUpAvatar from "@/components/sections/home/SetUpAvatar";
import SetupProcess from "@/components/sections/home/SetupProcess";
import WorldMapSection from "@/components/sections/home/WorldMap";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <SecondaryHeroSection />
      <MakesDifferent />
      <EmojiSection />
      <SetUpAvatar />
      <BenefitSection />
      <ClientsSection />
      <SetupProcess />
      <MeetOurTeam />
      <ExistingPlatforms />
      <WorldMapSection />
      <ConsultationSection />
    </React.Fragment>
  );
}
