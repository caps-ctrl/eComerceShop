import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Lazy imports
const Home = React.lazy(() => import("./pages/Home"));
const RootLayout = React.lazy(() => import("./layouts/RootLayout"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Products = React.lazy(() => import("./pages/Products"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));

const PageWraper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRouter = () => {
  const location = useLocation();
  const router = useRoutes([
    {
      element: <RootLayout />,
      path: "/",
      children: [
        {
          element: (
            <PageWraper>
              {" "}
              <Home />
            </PageWraper>
          ),
          index: true,
        },
        {
          element: (
            <PageWraper>
              <Contact />{" "}
            </PageWraper>
          ),
          path: "contact",
        },
        {
          element: (
            <PageWraper>
              <Products />
            </PageWraper>
          ),
          path: "products",
        },
        {
          element: (
            <PageWraper>
              {" "}
              <Cart />{" "}
            </PageWraper>
          ),
          path: "cart",
        },
        {
          element: (
            <PageWraper>
              <Register />
            </PageWraper>
          ),
          path: "register",
        },
        {
          element: (
            <PageWraper>
              <Login />
            </PageWraper>
          ),
          path: "login",
        },
      ],
    },
  ]);

  return (
    <AnimatePresence mode="wait">
      {" "}
      <React.Fragment key={location.pathname}>{router}</React.Fragment>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AnimatedRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
