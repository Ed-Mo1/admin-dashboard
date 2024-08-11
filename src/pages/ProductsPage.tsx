import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { StatData } from "../types/statItemType";
import { PiCubeBold } from "react-icons/pi";
import { PiChartLineBold } from "react-icons/pi";
import { IoWarningOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
import Header from "../components/common/Header";
import SalesTrendChart from "../components/products/SalesTrendChart";
import ProductsTable from "../components/products/ProductsTable";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";

const data: StatData[] = [
  {
    title: "Total Products",
    icon: <PiCubeBold className="text-main-violet" size={18} />,
    value: "1243",
  },
  {
    title: "Top Selling",
    icon: <PiChartLineBold className="text-main-green" size={18} />,
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
const ProductsPage = () => {
  return (
    <>
      <Header title="Products" />
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

        {/* tabel */}

        <ProductsTable />

        {/* charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />

          <CategoryDistributionChart />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
