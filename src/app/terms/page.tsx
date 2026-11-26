import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Termeni și condiții - Blooming Hope',
};

export default function TermsPage() {
  return <LegalPage slug="terms" />;
}
