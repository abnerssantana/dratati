"use client";

import { siteConfig } from "@/config/site-config";
import { Mail, MapPin, CalendarRange } from "lucide-react";
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
            alt="Dra. Tatiana"
            placeholder="blur"
            src="/avatar.jpg"
            width={130}
            height={130}
            blurDataURL="/avatar.jpg"
            className="rounded-full"
          />
        </div>
        {/* Text Container with Glassmorphism */}
        <div className="relative my-6 p-6 rounded-xl overflow-hidden">
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30 dark:bg-neutral-950/30" />
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-xl border border-white/20 dark:border-neutral-800/20" />
          {/* Content */}
          <div className="relative">
            <div className="text-base font-medium text-primary">
              {siteConfig.title}
            </div>
            <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
            <p className="text-2xl font-light text-neutral-600 dark:text-slate-200">
              {siteConfig.bio}
            </p>
          </div>
        </div>
        {/* Buttons Container */}
        <div className="flex flex-col gap-3 mt-6">
          <div className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium bg-surface-light dark:bg-surface-dark border rounded-md border-border-light dark:border-border-dark">
            <CalendarRange size="14" />
            {siteConfig.timeweek}
          </div>
          <a
            href={siteConfig.locationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium bg-surface-light dark:bg-surface-dark border rounded-md border-border-light dark:border-border-dark"
          >
            <CalendarRange size="14" />
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
