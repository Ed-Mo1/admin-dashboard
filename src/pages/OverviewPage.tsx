import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { BsLightningCharge } from "react-icons/bs";
import { FiBarChart2, FiShoppingBag, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import { StatData } from "../types/statItemType";

const statData: StatData[] = [
  {
    title: "total sales",
    icon: <BsLightningCharge className="text-main-indigo" size={18} />,
    value: "$12,345",
  },
  {
    title: "new users",
    icon: <FiUsers className="text-main-violet" size={18} />,
    value: "1,234",
  },
  {
    title: "total products",
    icon: <FiShoppingBag className="text-main-pink" size={18} />,
    value: "567",
  },
  {
    title: "total sales",
    icon: <FiBarChart2 className="text-main-green" size={18} />,
    value: "12.5%",
  },
];

const OverviewPage = () => {
  return (
    <>
      <Header title="Overview" />

      <main className="container py-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8"
        >
          {statData.map(({ title, icon, value }) => {
            return <StatCard title={title} icon={icon} value={value} />;
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart/>
          <SalesChannelChart/>
        </div>
      </main>
    </>
  );
};

export default OverviewPage;
