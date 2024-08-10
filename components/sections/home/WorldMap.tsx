import React from "react";
import Map from "@/public/Map.png";
import Image from "next/image";

const WorldMapSection = () => {
  return (
    <section className="container block-space">
      <h2 className="text-center mb-4 md:mb-6 lg:mb-8">
        Why Personalized Customer Engagement <br /> is a{" "}
        <span className="text-blue">High Priority</span> in 2024
      </h2>
      <Image
        src={Map}
        alt="image depiciting the world map in the form of dots"
      />
      <div className="grid  grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <GridItem
          heading="$27 billion"
          description="could be the size of global chatbot market by the year 2030"
        />
        <GridItem
          heading="123%"
          description="Average revenue increased in 2023 due to investments in customer engagement by the companies."
        />
        <GridItem
          heading="3 in 4"
          description="That introduce AI technology see new product sales increase by over 10%"
        />
        <GridItem
          heading="48%"
          description="of consumers made a repeat purchase from a company based on the level of personalization they received."
        />
      </div>
    </section>
  );
};

export default WorldMapSection;

function GridItem({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div className="box">
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
}
