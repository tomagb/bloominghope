import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Politica de confidențialitate - Blooming Hope',
};

export default function PrivacyPage() {
  return <LegalPage slug="privacy" />;
}
