import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { manrope, poppins } from "../fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSidebar from "@/components/sidebars/product-sidebar";
import ProductSecondarySidebar from "@/components/sidebars/product-secondary-sidebar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Botbee Labs",
  description:
    "Your only AI Twin who knows your customers better than them. Save up to 50% Cost with our Multilingual Customer Support Avatar. It aims to revolutionize the B2B customer support sector.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          poppins.variable,
          manrope.variable
        )}
      >
        <div className="flex-1 items-start  md:grid md:grid-cols-[220px_220px_minmax(0,1fr)] lg:grid-cols-[240px_240px_minmax(0,1fr)] ">
          <ProductSidebar />
          {/* Only show CreateBotSidebar on create-new-bot routes */}
          <ProductSecondarySidebar />
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
