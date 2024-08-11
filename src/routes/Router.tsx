import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading";

// Lazy load the page components
const OverviewPage = lazy(() => import("../pages/OverviewPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const UsersPage = lazy(() => import("../pages/UsersPage"));
const SalesPage = lazy(() => import("../pages/SalesPage"));
const OrdersPage = lazy(() => import("../pages/OrdersPage"));
const AnalyticsPage = lazy(() => import("../pages/AnalyticsPage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage"));

const routes = createBrowserRouter([
  {
    path: "/admin-dashboard/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading/>}>
            <OverviewPage />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<Loading/>}>
            <ProductsPage />
          </Suspense>
        ),
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<Loading/>}>
            <UsersPage />
          </Suspense>
        ),
      },
      {
        path: "sales",
        element: (
          <Suspense fallback={<Loading/>}>
            <SalesPage />
          </Suspense>
        ),
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<Loading/>}>
            <OrdersPage />
          </Suspense>
        ),
      },
      {
        path: "analytics",
        element: (
          <Suspense fallback={<Loading/>}>
            <AnalyticsPage />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<Loading/>}>
            <SettingsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
