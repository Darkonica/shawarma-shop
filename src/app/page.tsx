import type { Metadata } from "next";
import { ProductsContainer, ProductsCategories } from "@/components/shared/index";

export const metadata: Metadata = {
  title: 'Shawarma Shop',
}

export default function Page() {
  return (
    <div>
      <ProductsCategories />
      <ProductsContainer />
    </div>
  )
}