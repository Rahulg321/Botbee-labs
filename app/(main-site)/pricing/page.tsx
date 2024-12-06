"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { PricingCard } from "@/components/pricing-card";

const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    description: "Best for no-commitment testing.",
    features: [
      "Limited study materials access",
      "Participation in basic contests",
      "Limited personalized learning",
      "Access to a community forum",
    ],
  },
  {
    title: "Entry",
    price: "$49",
    description: "Best for experimenting & enhanced features.",
    features: [
      "Full access to all study materials",
      "Participation in all contests",
      "Full use of personalized learning",
      "Monthly study report & feedback",
      "Base AI/API 10% for staffing (Proactively talent)",
      "An Additional 2% API% each Specialized Outcome certification obtained",
      "Access to exclusive webinars and workshops",
    ],
  },
  {
    title: "Premium",
    price: "$99",
    description: "Best for full-time, hands-on experience.",
    isPopular: true,
    features: [
      "All features from Quarterly plan",
      "Access to confidential opportunities portal",
      "Base AI/API 20% for staffing (Proactively talent)",
      "Additional 3% API% for each Specialized Outcome certification",
      "Priority support",
      "Early access to new features and beta programs",
      "Opportunities for paid in-app ETL and consulting",
    ],
  },
  {
    title: "Ultra",
    price: "$299",
    description: "Best for power users and agencies.",
    features: [
      "All features from Yearly plan",
      "Access to confidential opportunities portal (Special level)",
      "Base AI/API 30% for staffing (Proactively talent)",
      "Additional 4% API% for each Specialized Outcome certification completed",
      "Lifetime access to all updates and new features",
      "Participation in exclusive collaboration projects and partnerships",
      "Higher staffing rewards and revenue sharing from the Proactively marketplace",
      "Exclusive access to invest in emerging AI and staffing technology startups and GameFi opportunities",
    ],
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 mb-4">
            Transparent Pricing for Your Perfect Chatbot
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get the Best Chatbot
            <br />
            Without Breaking the Bank
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            Choose a Plan that Fits Your Needs and Budget - No Hidden Fees, Just
            <br />
            Clear Value. Start enhancing your customer interactions today!
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className={`${!isAnnual ? "text-white" : "text-slate-400"}`}>
              Monthly
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`${isAnnual ? "text-white" : "text-slate-400"}`}>
              Annual
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={
                isAnnual ? `$${parseInt(plan.price.slice(1)) * 10}` : plan.price
              }
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
