import { GridItemInterface } from "@/config/site-config";
import { Ruler, Plug, Drill, Paintbrush, Wrench, ShowerHead, LampCeiling, LucideIcon, Guitar } from "lucide-react"; // Importe os ícones necessários

const iconMap: { [key: string]: LucideIcon } = {
  plug: Plug,
  drill: Drill,
  ruler: Ruler,
  paintbrush: Paintbrush,
  guitar: Guitar,
  wrench: Wrench,
  showerhead: ShowerHead,
  lampceiling: LampCeiling,
};

const Project = ({ item }: { item: GridItemInterface }) => {
  const IconComponent = item.icon && iconMap[item.icon] ? iconMap[item.icon] : null;

  return (
    <div className="flex items-center justify-between gap-4">
      {IconComponent && <div className="dark:text-neutral-50"><IconComponent /></div>} 
      <div className="w-full @lg:text-lg font-semibold">{item.title}</div>
      <div className="flex items-center gap-1">
        <div className="mt-[1px]">{item.stars}</div>
      </div>
    </div>
  );
};

export default Project;