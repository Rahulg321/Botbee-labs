"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp, LogOut, Settings, User } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navItems = [
  { name: "Personalization", href: "/personalization" },
  { name: "Upload Bot", href: "/upload-bot" },
  { name: "Integration", href: "/integration" },
  { name: "Documents", href: "/documents" },
  { name: "Analytics", href: "/analytics" },
  { name: "Chat Record", href: "/chat-record" },
];

const ProductSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="border-r p-4 flex flex-col h-screen sticky top-0">
      <div className="mb-6">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold mb-8">Botbee</h1>
        </Link>
        <Button className="w-full justify-start gap-2 mb-4" variant="outline">
          <span className="text-primary">+</span> Create New Bot
        </Button>
      </div>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-between pl-4 pr-2 text-sm font-medium"
          >
            Create New Bot <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-sm ml-2",
              pathname.includes("customer-support-bot") &&
                "bg-primary/10 text-primary"
            )}
            asChild
          >
            <Link href="/create-new-bot/customer-support-bot">
              Customer Support Bot
            </Link>
          </Button>
        </CollapsibleContent>
      </Collapsible>

      <nav className="space-y-2 flex-1">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className={cn(
              "w-full justify-start text-gray-600 hover:text-primary hover:bg-primary/5",
              pathname === item.href && "bg-primary/10 text-primary"
            )}
            asChild
          >
            <Link href={item.href}>{item.name}</Link>
          </Button>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>HN</AvatarFallback>
            </Avatar>
            <span className="flex items-center font-medium">
              Account <ChevronUp className="ml-1 h-4 w-4" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                router.push("/profile/312312");
              }}
            >
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ProductSidebar;
