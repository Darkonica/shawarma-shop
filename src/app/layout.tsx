import { Header, Footer } from '@/components/shared/index';

import 'normalize.css';
import '@/styles/base.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}