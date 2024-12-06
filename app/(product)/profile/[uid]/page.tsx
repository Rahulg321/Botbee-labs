"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex flex-1 gap-8 p-8">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-8">Profile</h1>

        <Card className="">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center mb-8">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                <AvatarFallback>RD</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-semibold">Hello Raunak</h2>
            </div>

            <div className="space-y-6 max-w-md mx-auto">
              <div className="relative">
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                  <Input id="name" value="Raunak Das" className="pr-10" />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-gray-600"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value="rk360ironjr@gmail.com"
                    className="pr-10"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-gray-600"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    value="••••••••••••"
                    className="pr-10"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-gray-600"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-80">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">Current Plan</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-6 w-6 rounded-full bg-primary/20" />
                  <div>
                    <div className="font-medium">Free Trial</div>
                    <div className="text-sm text-muted-foreground">
                      6 Days Left
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground">
                  Next payment on
                </div>
                <div className="font-medium text-primary">9th July, 2024</div>
              </div>

              <div className="pt-4 space-y-2">
                <Button className="w-full" size="lg">
                  Upgrade Plan
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Cancel Plan
                </Button>
              </div>

              <div className="pt-4 space-y-2">
                <Button variant="secondary" className="w-full" size="lg">
                  Billing Dashboard
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-destructive"
                  size="lg"
                >
                  Delete Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
