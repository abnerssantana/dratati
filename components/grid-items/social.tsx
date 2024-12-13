import Link from "next/link";
import Button from "../button";
import { GridItemInterface } from "./../../config/site-config";
import { IconType } from "react-icons";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Social = ({ item }: { item: GridItemInterface }) => {
  const iconComponents: { [key: string]: IconType } = {
    whatsapp: FaWhatsapp,
    instagram: FaInstagram,
  };

  const IconComponent = item.icon && iconComponents[item.icon];

  return (
    <Link href={item.buttonLink ?? ""} target="_blank">
      {/* Header */}
      <div className="flex items-center justify-between">
        {item.icon && IconComponent && (
          <IconComponent
            color={item.color ?? "#fff"}
            style={{ fontSize: "34px" }}
          />
        )}
        {item.layout === "2x2" && (
          <Button
            text={item.buttonTitle ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={item.color}
          />
        )}
      </div>
      {/* Content */}
      <div className="mt-1">
        <div className="@lg:text-lg font-semibold line-clamp-1">
          {item.title}
        </div>
        {item.description && (
          <div className="mt-1 mb-2 text-sm text-neutral-600 dark:text-neutral-50 line-clamp-2">
            {item.description}
          </div>
        )}

        {item.layout === "1x2" && (
          <div className="mt-2">
            <Button
              text={item.buttonTitle ?? ""}
              secondaryText={item.buttonSecondaryText}
              color={item.color}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default Social;
