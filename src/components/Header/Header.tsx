import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="logo">
        Shawarma shop
      </div>
      <menu>
        <li>Меню</li>
        <li>Доставка</li>
        <li>О нас</li>
        <li>Контакты</li>
        <li>Корзина</li>
      </menu>
    </header>
  )
}
