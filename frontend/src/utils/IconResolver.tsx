/* eslint-disable @typescript-eslint/no-explicit-any */
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi";
import * as DiIcons from "react-icons/di";
import * as Lucide from "lucide-react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as PiIcons from "react-icons/pi";
export const IconResolver = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const AllIcons: Record<string, any> = {
    ...Lucide,
    ...RiIcons,
    ...SiIcons,
    ...BiIcons,
    ...DiIcons,
    ...FaIcons,
    ...FiIcons,
    ...PiIcons,
  };
  const ResolvedIcon = AllIcons[name];
  if (!ResolvedIcon) return <Lucide.Terminal className={className} />;
  return <ResolvedIcon className={className} />;
};
