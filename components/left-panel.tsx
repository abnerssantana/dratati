// First, update site-config.ts by adding timeweek to the type and config:

// In site-config.ts
export const siteConfig = {
  creator: "Mauro Brumato",
  title: "Pintura Residencial & Pequenos Reparos",
  bio: "Serviços de pintura residencial, reparos elétricos e hidráulicos eficientes para garantir que sua casa esteja sempre impecável.",
  location: "São José Rio Preto - SP",
  timeweek: "Seg-Sex: 8h-18h | Sáb: 8h-12h", // Add this line
  locationLink:
    "https://www.google.com/maps/place/São+José+do+Rio+Preto+-+SP/data=!4m2!3m1!1s0x94bc52ce6910005f:0xb39d5c0e3b8c5675?sa=X&ved=1t:242&ictx=111",
  email: "maurobrumato@gmail.com",
  items: GridItems,
} as const;

// Then update left-panel.tsx:
"use client";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin, Timer } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";

const LeftPanel = () => {
  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between pt-6 xl:max-w-sm xl:py-10 xl:h-full"
    >
      {/* Top Container */}
      <div>
        <div>
          <Image
            priority
            loading="eager"
            alt="avatar"
            placeholder="blur"
            src="/pp-new3.png"
            width={125}
            height={125}
            blurDataURL="/pp-new3.png"
          />
        </div>
        {/* Text Container */}
        <div className="my-6">
          <div className="text-base font-medium text-primary">
            {siteConfig.title}
          </div>
          <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
          <p className="text-2xl font-light text-neutral-500">
            {siteConfig.bio}
          </p>
        </div>
        {/* Buttons Container */}
        <div className="flex flex-col gap-3 mt-6">
          <div className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium bg-surface-light dark:bg-surface-dark border rounded-md border-border-light dark:border-border-dark">
            <Timer size="14" />
            {siteConfig.timeweek}
          </div>
          <a
            href={siteConfig.locationLink}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium bg-surface-light dark:bg-surface-dark border rounded-md border-border-light dark:border-border-dark"
          >
            <MapPin size="14" />
            {siteConfig.location}
          </a>
        </div>
        {/* Footer */}
        <div className="hidden mt-6 xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;