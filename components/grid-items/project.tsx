import { GridItemInterface } from "@/config/site-config";
import { Baby, Heart, ContactRound, Cake, LucideIcon } from "lucide-react";

const iconMap: { [key: string]: LucideIcon } = {
  baby: Baby,
  contact: ContactRound,
  heart: Heart,
  cake: Cake,
};

const Project = ({ item }: { item: GridItemInterface }) => {
  const IconComponent = item.icon && iconMap[item.icon] ? iconMap[item.icon] : null;
  
  return (
    <div className="flex items-center justify-between gap-4 pb-2">
      {IconComponent && <div className="dark:text-neutral-50"><IconComponent /></div>}
      <div className="w-full @lg:text-lg font-semibold">{item.title}</div>
      <div className="flex items-center gap-1">
        <div className="mt-[1px]">{item.stars}</div>
      </div>
    </div>
  );
};

export default Project;