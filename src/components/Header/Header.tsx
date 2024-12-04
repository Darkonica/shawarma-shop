import Link from 'next/link';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={styles.logo}
      >
        Shawarma shop
      </Link>
      <nav>
        <Link href="/delivery">Доставка</Link>
        <Link href="/about">О нас</Link>
        <Link href="/contacts">Контакты</Link>
        <Link href="/cart">Корзина</Link>
      </nav>
    </header>
  )
}
