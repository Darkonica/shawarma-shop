import styles from './styles.module.scss';

export const ProductsCategories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ul>
          <li className="active"><a href="#new-items">Новинки</a></li>
          <li><a href="#shawerma">Шаверма</a></li>
          <li><a href="#snacks">Закуски</a></li>
          <li><a href="#hot-drinks">Горячие напитки</a></li>
        </ul>
      </div>
    </div>
  )
}
