import {
  IconAddCircle,
  IconAnalytics,
  IconAvatar,
  IconHome,
  IconTransactions,
} from "@/assets/images/nav";

export const navData = [
  {
    icon: IconHome,
    name: "Home",
    route: "/home" as const,
  },
  {
    icon: IconTransactions,
    name: "Transactions",
    route: "/home/transactions" as const,
  },
  {
    icon: IconAddCircle,
    name: "Add",
    route: "/home/add" as const,
  },
  {
    icon: IconAnalytics,
    name: "Analytics",
    route: "/home/analytics" as const,
  },
  {
    icon: IconAvatar,
    name: "Profile",
    route: "/home/profile" as const,
  },
];