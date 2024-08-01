import ConsultationSection from "@/components/sections/home/Consultation";
import ExistingPlatforms from "@/components/sections/home/ExistingPlatforms";
import HeroSection from "@/components/sections/home/HeroSection";
import MeetOurTeam from "@/components/sections/home/MeetOurTeam";
import SetupProcess from "@/components/sections/home/SetupProcess";
import WorldMapSection from "@/components/sections/home/WorldMap";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <SetupProcess />
      <MeetOurTeam />
      <ExistingPlatforms />
      <WorldMapSection />
      <ConsultationSection />
    </React.Fragment>
  );
}
