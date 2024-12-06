import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  isPopular = false,
}: PricingCardProps) {
  return (
    <Card
      className={`flex flex-col border-1 border-slate-50 ${
        isPopular ? "bg-indigo-600 text-white" : "bg-slate-900 text-slate-200"
      }`}
    >
      <CardHeader>
        {isPopular && (
          <div className="px-3 py-1 text-sm text-indigo-600 bg-white rounded-full w-fit mb-2">
            Most Popular
          </div>
        )}
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="text-4xl font-bold">
          {price}
          <span className="text-lg font-normal">/month</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm mb-4 text-white">{description}</p>
        <h4 className="font-semibold mb-2">What&apos;s included</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${
            isPopular
              ? "bg-white text-indigo-600 hover:bg-slate-100"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          Get started
        </Button>
      </CardFooter>
    </Card>
  );
}
