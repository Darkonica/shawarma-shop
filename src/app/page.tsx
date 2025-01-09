import type { Metadata } from "next";
import { ProductsContainer, ProductsCategories } from "@/components/shared/index";

export const metadata: Metadata = {
  title: 'Shawarma Shop',
}

export async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, {
    next: { revalidate: 10 }, // Указывает частоту обновления данных (10 секунд)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function Page() {
  const products = await fetchProducts();
  
  const productsNewItems = products.filter(item => item.category === 'new-items');
  const productsShawerma = products.filter(item => item.category === 'shawerma');
  const productsSnacks = products.filter(item => item.category === 'snacks');
  const productsHotDrinks = products.filter(item => item.category === 'hot-drinks');

  return (
    <div>
      <ProductsCategories />

      <ProductsContainer
        anchor="new-items"
        title="Новинки"
        data={productsNewItems}
      />
      <ProductsContainer
        anchor="shawerma"
        title="Шаверма"
        data={productsShawerma}
      />
      <ProductsContainer
        anchor="snacks"
        title="Закуски"
        data={productsSnacks}
      />
      <ProductsContainer
        anchor="hot-drinks"
        title="Горячие напитки"
        data={productsHotDrinks}
      />
    </div>
  )
}