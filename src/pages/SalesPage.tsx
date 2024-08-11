import { FaDollarSign } from "react-icons/fa6";
import Header from "../components/common/Header";

import { motion } from "framer-motion";
import { StatData } from "../types/statItemType";
import { FiShoppingCart } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const data: StatData[] = [
  {
    title: "Total Revenue",
    icon: <FaDollarSign className="text-main-violet" size={18} />,
    value: "$1,234,567",
  },
  {
    title: "Avg. Order Value",
    icon: <FiShoppingCart className="text-main-green" size={18} />,
    value: "100",
  },
  {
    title: "Low Stock",
    icon: <IoWarningOutline className="text-yellow-300" size={18} />,
    value: "1243",
  },
  {
    title: "Total Revenute",
    icon: <FaDollarSign className="text-main-red" size={18} />,
    value: "$534,231",
  },
];
const SalesPage = () => {
  return (
    <>
      <Header title="Sales Dashboard" />

      <div className="container py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8"
        >
          {data.map(({ title, icon, value }) => {
            return <StatCard title={title} icon={icon} value={value} />;
          })}
        </motion.div>
        <SalesOverviewChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <SalesByCategoryChart />

          <DailySalesTrend />
        </div>
      </div>
    </>
  );
};

export default SalesPage;
