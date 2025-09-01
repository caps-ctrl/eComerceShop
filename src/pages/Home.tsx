import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import ProductCard from "../components/ui/ProductCard";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store/store";
import { createSelector } from "@reduxjs/toolkit";

export default function Home() {
  const selectProductsWithTags = createSelector(
    (state: RootState) => state.products.products,
    (products) => products.filter((p) => p.tags && p.tags.length > 0)
  );

  const data = useSelector(selectProductsWithTags);

  return (
    <div className="min-h-screen flex flex-col caret-transparent dark:bg-stone-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Witamy w <span className="text-yellow-300">Mini Shop</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl mb-6"
          >
            Najlepsze produkty w świetnych cenach 🚀
          </motion.p>
          <NavLink to={"/products"}>
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              Zobacz ofertę
            </Button>
          </NavLink>
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popularne produkty
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {data.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-16 text-center  dark:text-white dark:bg-stone-900">
        <h2 className="text-3xl font-bold mb-4">
          Dołącz do naszej społeczności
        </h2>
        <p className="mb-6 text-gray-600">
          Zyskaj dostęp do promocji i nowości jako pierwszy
        </p>
        <NavLink to={"register"}>
          <Button size="lg">Zarejestruj się</Button>
        </NavLink>
      </section>
    </div>
  );
}
