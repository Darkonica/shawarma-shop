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
      <Link href="/cart">Корзина</Link>
    </header>
  )
}
