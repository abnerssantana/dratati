"use client";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
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
            src="/avatar.jpg"
            width={125}
            height={125}
            blurDataURL="/avatar.jpg"
            className="rounded-full"
          />
        </div>
        {/* Text Container */}
        <div className="my-6">
          <div className="text-base font-medium text-primary dark:text-[#EDE0D4]">
            {siteConfig.title}
          </div>
          <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
          <p className="text-lg font-light text-neutral-600 dark:text-white">
            {siteConfig.bio}
          </p>
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
