'use client';

import { Header } from '@/components/Header';
import { MissionSection } from '@/components/MissionSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './about.module.css';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main>
      <Header />
      <section className={styles.aboutHero}>
        <div className="container">
          <h1 className={styles.title}>{t.about?.title || (language === 'ro' ? 'Despre Noi' : 'About Us')}</h1>
          <p className={styles.subtitle}>
            {t.about?.subtitle || (language === 'ro'
              ? 'Blooming Hope este o asociație dedicată transformării prin educație.'
              : 'Blooming Hope is an association dedicated to transformation through education.')}
          </p>
        </div>
      </section>
      <section className={styles.aboutContent}>
        <div className="container">
          <div className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>
              {language === 'ro' ? 'Viziunea Noastră' : 'Our Vision'}
            </h2>
            <p className={styles.text}>
              {language === 'ro'
                ? 'Visăm la o lume în care educația transformă nu doar indivizi, ci comunități întregi. Blooming Hope construiește rădăcini puternice pentru tinerii care vor schimba viitorul.'
                : 'We dream of a world where education transforms not just individuals, but entire communities. Blooming Hope builds strong roots for young people who will change the future.'}
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>
              {language === 'ro' ? 'Valorile Noastre' : 'Our Values'}
            </h2>
            <ul className={styles.valuesList}>
              <li>
                <strong>{language === 'ro' ? 'Excelență' : 'Excellence'}</strong> - {language === 'ro' ? 'Închidem standarde înalte în toate activitățile noastre.' : 'We maintain high standards in all our activities.'}
              </li>
              <li>
                <strong>{language === 'ro' ? 'Incluziune' : 'Inclusion'}</strong> - {language === 'ro' ? 'Toți tinerii merită o șansă de dezvoltare.' : 'Every young person deserves a chance to develop.'}
              </li>
              <li>
                <strong>{language === 'ro' ? 'Integritate' : 'Integrity'}</strong> - {language === 'ro' ? 'Acționăm cu onestitate și responsabilitate.' : 'We act with honesty and responsibility.'}
              </li>
              <li>
                <strong>{language === 'ro' ? 'Compasiune' : 'Compassion'}</strong> - {language === 'ro' ? 'Înțelegem și susținem fiecare individ.' : 'We understand and support each individual.'}
              </li>
            </ul>
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>
              {language === 'ro' ? 'Istoricul Nostru' : 'Our Story'}
            </h2>
            <p className={styles.text}>
              {language === 'ro'
                ? 'Blooming Hope a fost înființată cu o simplă, dar puternică constatare: educația are puterea de a transforma vieți. Din această convingere, am creat o platformă unde teoria devine practică, unde valorile morale sunt gurul care ghidează deciziile, și unde fiecare tânăr descoperă că poate face diferența.'
                : 'Blooming Hope was founded on a simple yet powerful realization: education has the power to transform lives. From this conviction, we created a platform where theory becomes practice, where moral values guide decisions, and where every young person discovers they can make a difference.'}
            </p>
          </div>
        </div>
      </section>
      <MissionSection />
      <CTASection />
      <Footer />
    </main>
  );
}
