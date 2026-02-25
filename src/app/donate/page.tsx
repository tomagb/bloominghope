'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './donate.module.css';

export default function Donate() {
  const { language } = useLanguage();
  const t = translations[language];

  const donationTiers = [
    {
      name: language === 'ro' ? 'Sprijinitor' : 'Supporter',
      amount: '50 RON / €10',
      benefits: language === 'ro'
        ? ['Recunoaștere pe site', 'Newsletter lunar']
        : ['Recognition on website', 'Monthly newsletter'],
      icon: '🌱',
    },
    {
      name: language === 'ro' ? 'Partener' : 'Partner',
      amount: '500 RON / €100',
      benefits: language === 'ro'
        ? ['Recunoaștere pe site', 'Newsletter lunar', 'Rapoarte de impact', 'Invitații la evenimente']
        : ['Recognition on website', 'Monthly newsletter', 'Impact reports', 'Event invitations'],
      icon: '🌿',
      featured: true,
    },
    {
      name: language === 'ro' ? 'Fondator' : 'Founder',
      amount: '5,000 RON / €1,000',
      benefits: language === 'ro'
        ? ['Recunoaștere pe site', 'Newsletter lunar', 'Rapoarte de impact', 'Invitații la evenimente', 'Placă de omagiere']
        : ['Recognition on website', 'Monthly newsletter', 'Impact reports', 'Event invitations', 'Commemorative plaque'],
      icon: '🌸',
    },
  ];

  return (
    <main>
      <Header />
      <section className={styles.donateHero}>
        <div className="container">
          <h1 className={styles.title}>{t.donate?.title || (language === 'ro' ? 'Donează' : 'Donate')}</h1>
          <p className={styles.subtitle}>
            {t.donate?.subtitle || (language === 'ro'
              ? 'Ajută-ne să construim un viitor mai bun prin educație.'
              : 'Help us build a better future through education.')}
          </p>
        </div>
      </section>

      <section className={styles.donateContent}>
        <div className="container">
          <div className={styles.introBlock}>
            <h2 className={styles.sectionTitle}>
              {language === 'ro' ? 'De ce să donezi?' : 'Why Donate?'}
            </h2>
            <p className={styles.text}>
              {language === 'ro'
                ? 'Donațiile tale fac posibilă transformarea prin educație. Susțineri grădinița noastră, atelierele Growth Laboratory și programele de voluntariat care schimbă vieți.'
                : 'Your donations make transformation through education possible. You support our kindergarten, Growth Laboratory workshops, and volunteering programs that change lives.'}
            </p>
          </div>

          <div className={styles.tiersGrid}>
            {donationTiers.map((tier, index) => (
              <div
                key={index}
                className={`${styles.tierCard} ${tier.featured ? styles.featured : ''}`}
              >
                <div className={styles.tierIcon}>{tier.icon}</div>
                <h3 className={styles.tierName}>{tier.name}</h3>
                <p className={styles.tierAmount}>{tier.amount}</p>
                <ul className={styles.benefitsList}>
                  {tier.benefits.map((benefit, i) => (
                    <li key={i}>✓ {benefit}</li>
                  ))}
                </ul>
                <button className={styles.donateBtn}>
                  {language === 'ro' ? 'Donează Acum' : 'Donate Now'}
                </button>
              </div>
            ))}
          </div>

          <div className={styles.impactBlock}>
            <h2 className={styles.sectionTitle}>
              {language === 'ro' ? 'Impactul Tău' : 'Your Impact'}
            </h2>
            <div className={styles.impactGrid}>
              <div className={styles.impactItem}>
                <h4 className={styles.impactTitle}>
                  {language === 'ro' ? '100 RON' : '€20'}
                </h4>
                <p className={styles.impactDesc}>
                  {language === 'ro' ? 'Echipează un copil cu materiale educative' : 'Equips one child with educational materials'}
                </p>
              </div>
              <div className={styles.impactItem}>
                <h4 className={styles.impactTitle}>
                  {language === 'ro' ? '500 RON' : '€100'}
                </h4>
                <p className={styles.impactDesc}>
                  {language === 'ro' ? 'Finanțează un workshop complet' : 'Funds a complete workshop'}
                </p>
              </div>
              <div className={styles.impactItem}>
                <h4 className={styles.impactTitle}>
                  {language === 'ro' ? '2,000 RON' : '€400'}
                </h4>
                <p className={styles.impactDesc}>
                  {language === 'ro' ? 'Sprijină educația unui copil pentru 1 an' : 'Supports one child\'s education for 1 year'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
