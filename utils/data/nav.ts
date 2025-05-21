import { BanknoteArrowDown, ChartNoAxesCombined, DiamondPlus, House, UserRound } from "lucide-react-native";

export const navData = [
  {
    icon: House,
    name: "Home",
    route: "/home" as const,
  },
  {
    icon: BanknoteArrowDown,
    name: "Expense", 
    route: "/home/transactions" as const,
  },
  {
    icon: DiamondPlus,
    name: "Add",
    route: "/home/add" as const,
  },
  {
    icon: ChartNoAxesCombined,
    name: "Analytics",
    route: "/home/analytics" as const,
  },
  {
    icon: UserRound,
    name: "Me",
    route: "/home/profile" as const,
  },
];
