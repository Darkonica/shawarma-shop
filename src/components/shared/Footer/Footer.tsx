'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './styles.module.scss';

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div></div>
      <nav>
        <Link href="/delivery" className={pathname === '/delivery' ? 'active' : ''}>Доставка</Link>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>О нас</Link>
        <Link href="/contacts" className={pathname === '/contacts' ? 'active' : ''}>Контакты</Link>
      </nav>
    </footer>
  )
}
