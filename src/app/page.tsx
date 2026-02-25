'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MottoSection } from '@/components/MottoSection';
import { MissionSection } from '@/components/MissionSection';
import { KindergartenSection } from '@/components/KindergartenSection';
import { GrowthLabSection } from '@/components/GrowthLabSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MottoSection />
      <MissionSection />
      <KindergartenSection />
      <GrowthLabSection />
      <CTASection />
      <Footer />
    </main>
  );
}
