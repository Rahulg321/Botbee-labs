import Image from "next/image";
import React from "react";
import BlurImage from "@/public/Blur.png";
import { Button } from "@/components/ui/button";

const ExistingPlatforms = () => {
  return (
    <section className="container block-space grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="content-center">
        <h2>
          <span className="text-blue">Integrate</span> with your existing <br />
          platforms
        </h2>
        <p>
          Integrate Siena with your help desk with one click and start using
          your autonomous customer service with minimal setup. Get your AI
          superhuman up and running 90% faster and more efficient than the
          average automation tools.
        </p>

        <Button
          className="rounded-full mt-4 font-semibold bg-[#4339F2]"
          size={"lg"}
        >
          Coming Soon
        </Button>
      </div>
      <div>
        <Image
          src={BlurImage}
          alt="blured image showing a circle of different logos of tools"
        />
      </div>
    </section>
  );
};

export default ExistingPlatforms;
