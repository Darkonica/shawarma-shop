import Link from 'next/link';
import { LogIn, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui';

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
        <Button>
          <LogIn size={20} />
          Войти
        </Button>
        <Button>
          <ShoppingCart size={20} /> Корзина
        </Button>
      </nav>
    </header>
  )
}
