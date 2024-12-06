import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import NewsletterFooterForm from "./forms/NewsletterFooterForm";
import BotbeeWhiteLogo from "@/public/BotbeeWhiteLogo.png";

const footerLinks = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/product", label: "Product" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/service", label: "Terms of Service" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-mainDark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src={BotbeeWhiteLogo}
              width={200}
              height={60}
              alt="Botbee Logo"
              className="w-auto h-auto"
            />
            <p className="text-customMuted text-sm">
              Save up to 50% Cost with our Multilingual Customer Support Avatar
            </p>
            <a
              href="https://twitter.com/botbee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
              className="inline-block hover:text-blue-400 transition-colors"
            >
              <FaXTwitter className="text-2xl" />
            </a>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="font-semibold text-lg">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-customMuted hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Join Our Newsletter</h4>
            <NewsletterFooterForm />
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-sm text-customMuted">
          <p>&copy; {new Date().getFullYear()} Botbee. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
