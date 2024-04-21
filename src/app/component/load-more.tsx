/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { Product } from "./Products";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@chakra-ui/react";
import { fetchProducts } from "../actions/fetch-product";

export function LoadMore() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreProducts = async () => {
    await delay(2000);
    const nextPage = (page % 7) + 1;
    const newProducts = (await fetchProducts(nextPage)) ?? [];
    setProducts((prevProducts: Product[]) => [...prevProducts, ...newProducts]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  }, [inView]);

  return (
    <>
      <Product products={products} />
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
}
