import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Politica de cookie-uri - Blooming Hope',
};

export default function CookiesPage() {
  return <LegalPage slug="cookies" />;
}
