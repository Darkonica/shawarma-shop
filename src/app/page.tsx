import type { Metadata } from "next";
import { ProductsContainer, ProductsCategories } from "@/components/shared/index";

export const metadata: Metadata = {
  title: 'Shawarma Shop',
}

export default function Page() {
  return (
    <div>
      <ProductsCategories />
      <ProductsContainer
        anchor="new-items"
        title="Новинки"
      />
      <ProductsContainer
        anchor="shawerma"
        title="Шаверма"
      />
      <ProductsContainer
        anchor="snacks"
        title="Закуски"
      />
      <ProductsContainer
        anchor="sauces"
        title="Соусы"
      />
      <ProductsContainer
        anchor="hot-drinks"
        title="Горячие напитки"
      />
    </div>
  )
}