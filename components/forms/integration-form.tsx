"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const integrations = [
  {
    id: "whatsapp",
    name: "Whatsapp Integration",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    description:
      "Connect your chatbot to WhatsApp to enable real-time messaging with your customers. Ideal for businesses aiming to reach their audience where they are. A popular messaging platform. Click here to view the documentation on how to set up WhatsApp Integration.",
    fields: [
      {
        name: "permanent_access_token",
        label: "Permanent Access Token",
        type: "text",
      },
      {
        name: "model_type",
        label: "Model Type",
        type: "select",
        options: ["GPT 3.5 Turbo", "GPT-4"],
      },
      {
        name: "whatsapp_business_id",
        label: "Whatsapp Business Account ID",
        type: "text",
      },
      { name: "phone_number_id", label: "Phone Number ID", type: "text" },
      {
        name: "graph_api_version",
        label: "Graph API Version",
        type: "select",
        options: ["v16.0", "v15.0"],
      },
      {
        name: "temporary_access_token",
        label: "Temporary Access Token",
        type: "text",
      },
    ],
  },
  {
    id: "intercom",
    name: "Intercom Integration",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Intercom_logo.svg",
    description:
      "Connect your chatbot to Intercom to enable real-time messaging with your customers. Click here to view the documentation on how to set up Intercom Integration.",
    fields: [
      { name: "app_id", label: "App ID", type: "text" },
      { name: "access_token", label: "Access Token", type: "text" },
      {
        name: "live_agent_email",
        label: "Live Agent Email Prompt",
        type: "text",
      },
    ],
  },
  {
    id: "slack",
    name: "Slack Integration",
    icon: "/placeholder.svg",
    description:
      "Connect your Botbee application with Slack through Zapier to automate your workplace interactions. By setting up this integration, you enable your AI to send channel messages, manage tasks, and support team workflows. Real-time notifications keep your team informed, streamlining team collaboration and enhancing your group's productivity and communication.",
    fields: [],
  },
  {
    id: "messenger",
    name: "Messenger Integration",
    icon: "/placeholder.svg",
    description:
      "Link your Botbee AI with Facebook Messenger via Zapier to expand your chatbot's reach across Facebook's massive user base. Create a more cohesive application, set it to trigger events on Messenger, and connect to your Facebook account for a seamless service experience. Zapier simplifies the process, facilitating communication between Botbee and your Facebook presence.",
    fields: [],
  },
  {
    id: "microsoft-teams",
    name: "Microsoft Team Integration",
    icon: "/placeholder.svg",
    description:
      "Enhance team collaboration by integrating Botbee with Microsoft Teams via Zapier. Enable your AI to participate in discussions, provide timely information, and automate responses. Select Botbee from Zapier's app list, establish the triggers, and connect your Teams account to start automating your team's communications.",
    fields: [],
  },
  {
    id: "discord",
    name: "Discord Integration",
    icon: "/placeholder.svg",
    description:
      "Automate your Discord server with Botbee AI via Zapier. Set up the Botbee AI application to send custom messages, alerts, or command set your Discord server based on specific triggers. Choose Botbee on Zapier, configure the interaction flow, and link your Discord account to bring intelligent automation to your community space.",
    fields: [],
  },
  {
    id: "zapier",
    name: "Zapier Integration",
    icon: "/placeholder.svg",
    description:
      "Use Zapier to connect your chatbot with thousands of apps for automation that can transform your workflow. Set up triggers and actions without writing any code.",
    fields: [],
  },
];

export default function IntegrationForm() {
  const [activeIntegrations, setActiveIntegrations] = useState<
    Record<string, boolean>
  >({});

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Integration</h1>
      <div className="bg-slate-50 rounded-lg p-6">
        <Accordion type="single" collapsible className="space-y-4">
          {integrations.map((integration) => (
            <AccordionItem
              key={integration.id}
              value={integration.id}
              className="border rounded-lg bg-white overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <img
                      src={integration.icon}
                      alt={`${integration.name} icon`}
                      className="w-6 h-6"
                    />
                    <span>{integration.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      {activeIntegrations[integration.id]
                        ? "Connected"
                        : "Not Connected"}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                  {integration.fields.length > 0 ? (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Toggle Off/On</span>
                        <Switch
                          checked={activeIntegrations[integration.id]}
                          onCheckedChange={(checked) =>
                            setActiveIntegrations((prev) => ({
                              ...prev,
                              [integration.id]: checked,
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-4">
                        {integration.fields.map((field) => (
                          <div key={field.name} className="space-y-2">
                            <label className="text-sm font-medium">
                              {field.label}
                            </label>
                            {field.type === "select" ? (
                              <Select>
                                <SelectTrigger>
                                  <SelectValue
                                    placeholder={`Select ${field.label}`}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  {field.options?.map((option) => (
                                    <SelectItem
                                      key={option}
                                      value={option.toLowerCase()}
                                    >
                                      {option}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            ) : (
                              <Input
                                type={field.type}
                                placeholder={`Enter ${field.label}`}
                              />
                            )}
                          </div>
                        ))}
                        <Button className="w-full">Connect</Button>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-sm">
                        Connect {integration.name.split(" ")[0]} Via Zapier{" "}
                        <Button variant="link" className="px-0">
                          Click here
                        </Button>{" "}
                        for more information.
                      </p>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
