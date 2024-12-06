"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, ShoppingCart, MessagesSquare, Clock } from "lucide-react";

const metrics = [
  {
    title: "Total Users",
    value: "12,489",
    change: "+0.43%",
    icon: Users,
    className: "text-blue-500",
  },
  {
    title: "Unique Users",
    value: "9,572",
    change: "+4.35%",
    icon: ShoppingCart,
    className: "text-blue-500",
  },
  {
    title: "Total Conversations",
    value: "40,510",
    change: "+2.59%",
    icon: MessagesSquare,
    className: "text-blue-500",
  },
  {
    title: "Time Spent",
    value: "2h 34m",
    change: "+0.95%",
    icon: Clock,
    className: "text-blue-500",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-6 p-8 overflow-auto">
      <h1 className="text-2xl font-semibold">Analytics</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <metric.icon className={`h-5 w-5 ${metric.className}`} />
                  <span className="text-sm text-muted-foreground">
                    {metric.title}
                  </span>
                </div>
                <span className="text-sm text-green-500">{metric.change}</span>
              </div>
              <div className="mt-2 text-2xl font-bold">{metric.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">2,053</div>
                <div className="text-sm text-muted-foreground">
                  Visitors in August
                </div>
              </div>
              <Select defaultValue="monthly">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="h-[300px] mt-4 bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">
                Analytics chart will be added here
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Visitors Location</h3>
              <div className="text-sm text-muted-foreground">
                Last updated: 7 days ago
              </div>
            </div>
            <div className="aspect-[2/1] relative bg-muted">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <p>World map visualization would go here</p>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center space-x-2">
                  <div className="font-semibold">180</div>
                  <div className="text-sm text-muted-foreground">Brazil</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
