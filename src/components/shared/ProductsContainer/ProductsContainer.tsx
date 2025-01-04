import { ProductItem } from './ProductItem';

import styles from './styles.module.scss';

export const ProductsContainer = ({ anchor, title }: { anchor: string, title: string }) => {
  return (
    <div className={styles.wrapper}>
      <h2 id={anchor}>{title}</h2>

      <div className={styles.productsContainer}>
        <ProductItem
          title="Двойная шаверма"
          image="/images/shawarma.jpg"
          description="Состав: Курица , свежий огурец, помидоры, морковь по-корейски, капуста салатная или капуста квашеная, красный лук, наш фирменный соус. 440гр."
          price="360"
        />
        <ProductItem
          title="Двойная шаверма"
          image="/images/shawarma.jpg"
          description="Состав: Курица , свежий огурец, помидоры, морковь по-корейски, капуста салатная или капуста квашеная, красный лук, наш фирменный соус. 440гр."
          price="360"
        />
        <ProductItem
          title="Двойная шаверма"
          image="/images/shawarma.jpg"
          description="Состав: Курица , свежий огурец, помидоры, морковь по-корейски, капуста салатная или капуста квашеная, красный лук, наш фирменный соус. 440гр."
          price="360"
        />
        <ProductItem
          title="Двойная шаверма"
          image="/images/shawarma.jpg"
          description="Состав: Курица , свежий огурец, помидоры, морковь по-корейски, капуста салатная или капуста квашеная, красный лук, наш фирменный соус. 440гр."
          price="360"
        />
        <ProductItem
          title="Двойная шаверма"
          image="/images/shawarma.jpg"
          description="Состав: Курица , свежий огурец, помидоры, морковь по-корейски, капуста салатная или капуста квашеная, красный лук, наш фирменный соус. 440гр."
          price="360"
        />
        
      </div>
    </div>
  )
}
