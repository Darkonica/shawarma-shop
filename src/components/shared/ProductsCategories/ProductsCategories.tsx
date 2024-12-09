import styles from './styles.module.scss';

export const ProductsCategories = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li className="active">Новинки</li>
        <li>Шаверма</li>
        <li>Закуски</li>
        <li>Соусы</li>
        <li>Горячие напитки</li>
      </ul>
    </div>
  )
}
