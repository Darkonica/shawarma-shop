'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './styles.module.scss';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={styles.logo}
      >
        Shawarma shop
      </Link>
      <nav>
        <Link href="/delivery" className={pathname === '/delivery' ? 'active' : ''}>Доставка</Link>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>О нас</Link>
        <Link href="/contacts" className={pathname === '/contacts' ? 'active' : ''}>Контакты</Link>
        <Link href="/cart" className={pathname === '/cart' ? 'active' : ''}>Корзина</Link>
      </nav>
    </header>
  )
}
