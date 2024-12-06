import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AboutHero from "@/public/about/about-hero.jpg";

const teamMembers = [
  {
    name: "Prasenjit Sarkar",
    role: "CEO",
    image: "/placeholder.svg",
    bio: "With over 20 years of experience in the technology industry, Prasenjit is a seasoned product leader who is passionate about building and scaling innovative cloud native solutions.",
  },
  {
    name: "Amit Modi",
    role: "CTO",
    image: "/placeholder.svg",
    bio: "Passion and diligence are two traits that I believe most reflect me as an individual. It is my belief that this is the way to being successful in any endeavor that one sets their mind to.",
  },
  {
    name: "Anuj Modi",
    role: "COO",
    image: "/placeholder.svg",
    bio: "Technical Solutions Architect, - Sales at Cisco Systems to help the customers to grow their business. Earlier worked as Senior Services Consultant for planning, designing, architect and implementing data center & cloud computing solutions.",
  },
  {
    name: "Junaid K.",
    role: "Founding ML Engineer",
    image: "/placeholder.svg",
    bio: "As an AI Enthusiast have in hand experience in Machine Learning, Deep Learning, and Statistical Learning. Exploratory Data Analysis and Data Visualization with principal component analysis, TSNE, Data Preprocessing & Feature Engineering.",
  },
];

export default function AboutUs() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              Where AI Meets Human Interaction
            </h1>
            <p className="text-lg mb-6">
              Leveraging AI to Enhance Customer Engagement and Deliver
              Personalized Experiences. Innovative Solutions designed to
              streamline communication and build lasting connections.
            </p>
            <div className="space-x-4">
              <Button>Build Your Avatar</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src={AboutHero}
              alt="AI and Human Interaction"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg"
              alt="Our Mission"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-blue-600">Mission</span>
            </h2>
            <p className="text-lg">
              Our mission is to revolutionize the B2B customer support
              experience through cutting-edge AI technology. We strive to
              empower businesses worldwide with our multilingual, interactive AI
              Avatars that provide seamless, personalized support across diverse
              markets and languages.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg"
              alt="Our Vision"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-blue-600">Vision</span>
            </h2>
            <p className="text-lg">
              Botbee envisions a world where businesses can effortlessly connect
              with their global customer base, offering superior support
              experiences that foster trust, loyalty, and growth. We aspire to
              be the pioneers in providing AI-powered customer support avatars,
              enabling companies to provide round-the-clock assistance in native
              languages.
            </p>
          </div>
        </section>
      </div>
      <section className="py-16 bg-slate-950 -mx-4 px-4 mt-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Core Team</h2>
            <p className="text-slate-400">
              The expert team behind the success of this revolutionary project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-slate-700">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-indigo-400 mb-4">{member.role}</p>
                    <p className="text-slate-400 text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 bg-indigo-600 -mx-4 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book Your Free Consultation
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Call Today!
          </h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Our platform is designed to scale effortlessly, allowing businesses
            to expand their support capabilities as they grow.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-indigo-600 hover:bg-white/90"
          >
            Book a call now
          </Button>
        </div>
      </section>
    </div>
  );
}
