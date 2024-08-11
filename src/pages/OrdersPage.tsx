import Header from "../components/common/Header";

import { motion } from "framer-motion";
import { StatData } from "../types/statItemType";
import { FiDollarSign, FiShoppingCart } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";

const statData: StatData[] = [
  {
    title: "Total Orders",
    icon: <FiShoppingCart className="text-main-indigo" size={18} />,
    value: "1,234",
  },
  {
    title: "Pending Orders",
    icon: <FiClock className="text-main-orange" size={18} />,
    value: "56",
  },
  {
    title: "total products",
    icon: <FiCheckCircle className="text-main-green" size={18} />,
    value: "567",
  },
  {
    title: "total sales",
    icon: <FiDollarSign className="text-main-red" size={18} />,
    value: "12.5%",
  },
];
const OrdersPage = () => {
  return (
    <>
      <Header title="Orders" />
      <div className="container py-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          <DailyOrders />
          <OrderDistribution />
        </div>
        <OrdersTable/>
      </div>
    </>
  );
};

export default OrdersPage;
