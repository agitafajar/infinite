"use server";

import { Product } from "../component/Products";

export async function fetchProducts(page: number) {
  const perPage = 10;
  const apiUrl = `https://fakestoreapi.com/products?offset=${page}&limit=${perPage}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data as Product[];
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
