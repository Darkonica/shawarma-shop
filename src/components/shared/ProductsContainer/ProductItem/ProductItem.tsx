import styles from './styles.module.scss';

export const ProductItem = ({ title, image, description, price }) => {
  return (
    <div className={styles.productItem}>
      <img className={styles.image} src={image} alt="" />
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.description}>{description}</div>

      <div className={styles.priceCont}>
        <div className={styles.price}>{price} ₽</div>
        <button className={styles.cart}>В корзину</button>
      </div>
    </div>
  )
}
