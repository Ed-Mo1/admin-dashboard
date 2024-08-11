import { motion } from "framer-motion";
import { StatData } from "../../types/statItemType";


const StatCard = ({ icon, title, value }: StatData) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
      className="px-4 py-5 sm:p-6 cursor-default bg-gray-800 space-y-1 rounded-xl border border-gray-700 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg "
    >
      <div className="flex gap-2 items-center">
        {icon}
        <h5 className="capitalize text-sm font-medium text-gray-400">
          {title}
        </h5>
      </div>
      <h3 className="text-3xl font-semibold text-gray-100 ">{value}</h3>
    </motion.div>
  );
};

export default StatCard;
