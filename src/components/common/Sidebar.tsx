import { useState } from "react";
import SidebarItem from "../SidebarItem";

import {
  FiBarChart2,
  FiShoppingBag,
  FiUsers,
  FiDollarSign,
  FiMenu,
  FiShoppingCart,
} from "react-icons/fi";
import { GrLineChart } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { SidebartItemType } from "../../types/sidebarItemType";

import { motion } from "framer-motion";
const sidebarItems: SidebartItemType[] = [
  {
    name: "overview",
    icon: <FiBarChart2 className="text-main-indigo" size={20} />,
    to: "/admin-dashboard/",
  },
  {
    name: "products",
    icon: <FiShoppingBag className="text-main-violet" size={20} />,
    to: "/admin-dashboard/products",
  },
  {
    name: "users",
    icon: <FiUsers className="text-main-pink" size={20} />,
    to: "/admin-dashboard/users",
  },
  {
    name: "sales",
    icon: <FiDollarSign className="text-main-green" size={20} />,
    to: "/admin-dashboard/sales",
  },
  {
    name: "orders",
    icon: <FiShoppingCart className="text-main-orange" size={20} />,
    to: "/admin-dashboard/orders",
  },
  {
    name: "analytics",
    icon: <GrLineChart className="text-main-blue" size={20} />,
    to: "/admin-dashboard/analytics",
  },
  {
    name: "settings",
    icon: <IoSettingsOutline className="text-main-mint" size={20} />,
    to: "/admin-dashboard/settings",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <motion.div
      animate={{ width: isOpen ? 256 : 80 }}
      className={`z-20 h-screen ${
        isOpen ? "w-64" : "w-[80px]"
      }  transition-all  ease-in-out flex-shrink-0`}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 gap-10 flex flex-col border-r border-r-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 rounded-full hover:bg-gray-700 text-2xl transition-colors max-w-fit"
        >
          <FiMenu />
        </motion.button>

        <nav className="space-y-2">
          {sidebarItems.map(({ name, to, icon }) => {
            return (
              <SidebarItem isOpen={isOpen} name={name} icon={icon} to={to} />
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
