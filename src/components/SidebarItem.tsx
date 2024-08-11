import { AnimatePresence, motion } from "framer-motion";
import { SidebartItemType } from "../types/sidebarItemType";
import { NavLink } from "react-router-dom";

const SidebarItem = ({
  to,
  icon,
  name,
  isOpen,
}: SidebartItemType & { isOpen: boolean }) => {
  return (
    <NavLink
      end={true}
      to={to}
      className={({ isActive }) =>
        `flex p-4 items-center font-medium rounded-lg gap-5 hover:bg-gray-700 ${
          isActive && "bg-gray-700"
        }`
      }
    >
      <span className="flex-shrink-0">{icon}</span>

      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="capitalize text-sm whitespace-nowrap"
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>
    </NavLink>
  );
};

export default SidebarItem;
