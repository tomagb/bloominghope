import type { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CookieNotice } from '@/components/CookieNotice';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blooming Hope - Education that Transforms',
  description: 'Blooming Hope Association: Building the place where children develop healthy roots and young people learn to change the world.',
  icons: {
    icon: '/logo-circle-transparent.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>
        <LanguageProvider>
          {children}
          <CookieNotice />
        </LanguageProvider>
      </body>
    </html>
  );
}
