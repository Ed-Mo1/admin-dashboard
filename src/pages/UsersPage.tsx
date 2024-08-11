import { motion } from "framer-motion";
import { TbUserPlus } from "react-icons/tb";
import { LuUserCheck } from "react-icons/lu";
import { LuUserX } from "react-icons/lu";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UserGrowthChart from "../components/users/UserGrowthChart";
import { StatData } from "../types/statItemType";
import { FiUsers } from "react-icons/fi";
import UsersTable from "../components/users/UsersTable";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";

const data: StatData[] = [
  {
    title: "Total Users",
    icon: <FiUsers className="text-main-indigo" size={18} />,
    value: 152845,
  },
  {
    title: "New Users Today",
    icon: <TbUserPlus className="text-main-green" size={18} />,
    value: 243,
  },
  {
    title: "Active Users",

    icon: <LuUserCheck className="text-main-orange" size={18} />,

    value: 98520,
  },
  {
    title: "Churn Rate",

    icon: <LuUserX className="text-main-red" size={18} />,

    value: "2.4%",
  },
];

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {data.map(({ icon, title, value }) => {
            return <StatCard title={title} icon={icon} value={value} />;
          })}
        </motion.div>

        <UsersTable />

        {/* USER CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};
export default UsersPage;
