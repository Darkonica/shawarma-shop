import { ProductItem } from './ProductItem';

import styles from './styles.module.scss';

export const ProductsContainer = ({ anchor, title, data }: { anchor: string, title: string, data: any }) => {
  return (
    <div className={styles.wrapper}>
      <h2 id={anchor}>{title}</h2>

      <div className={styles.productsContainer}>
        {data?.map(item => (
          <ProductItem
            title={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        )
        )}
      </div>
    </div>
  )
}
