import React from "react";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { motion } from "framer-motion";
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
