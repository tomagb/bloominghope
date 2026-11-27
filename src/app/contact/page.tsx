'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Icon, IconName } from '@/components/Icon';
import ui from '@/styles/ui.module.css';
import styles from './contact.module.css';
import { useState } from 'react';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Site-ul nu are server: mesajul se deschide în aplicația de email a vizitatorului.
    const body = `${formData.message}\n\n${formData.name}\n${formData.email}`;
    window.location.href = `mailto:contact@bloominghope.ro?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const contactInfo: { icon: IconName; title: string; content: string; link?: string }[] = [
    {
      icon: 'mail',
      title: language === 'ro' ? 'Email' : 'Email',
      content: 'contact@bloominghope.ro',
      link: 'mailto:contact@bloominghope.ro',
    },
    {
      icon: 'pin',
      title: language === 'ro' ? 'Locație' : 'Location',
      content: language === 'ro' ? 'Cluj-Napoca, România' : 'Cluj-Napoca, Romania',
    },
  ];

  return (
    <main>
      <Header />
      <section className={ui.top}>
        <div className={ui.wrap}>
          <h1>{t.contact.title}</h1>
          <p>{t.contact.subtitle}</p>
        </div>
      </section>

      <section className={styles.contactContent}>
        <div className={ui.wrap}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>
                {language === 'ro' ? 'Informații de Contact' : 'Contact Information'}
              </h2>
              <div className={styles.infoList}>
                {contactInfo.map((info) => {
                  const content = (
                    <>
                      <span className={ui.icon}>
                        <Icon name={info.icon} />
                      </span>
                      <span>
                        <strong className={styles.infoTitle}>{info.title}</strong>
                        <span className={styles.infoContent}>{info.content}</span>
                      </span>
                    </>
                  );
                  // Doar adresa de email duce undeva.
                  return info.link ? (
                    <a key={info.icon} href={info.link} className={`${styles.infoItem} ${styles.infoLink}`}>
                      {content}
                    </a>
                  ) : (
                    <div key={info.icon} className={styles.infoItem}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2 className={styles.sectionTitle}>
                {language === 'ro' ? 'Trimite-ne un Mesaj' : 'Send us a Message'}
              </h2>
              {submitted && (
                <div className={styles.successMessage}>
                  {language === 'ro'
                    ? 'Am deschis aplicația ta de email. Mesajul ajunge la noi după ce îl trimiți de acolo. Dacă nu s-a deschis, scrie-ne la contact@bloominghope.ro.'
                    : 'We opened your email app. Your message reaches us once you send it from there. If nothing opened, write to contact@bloominghope.ro.'}
                </div>
              )}
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    {language === 'ro' ? 'Nume' : 'Name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    {language === 'ro' ? 'Email' : 'Email'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.full}`}>
                  <label htmlFor="subject" className={styles.label}>
                    {language === 'ro' ? 'Subiect' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.full}`}>
                  <label htmlFor="message" className={styles.label}>
                    {language === 'ro' ? 'Mesaj' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className={styles.textarea}
                  />
                </div>

                <p className={styles.privacy}>
                  {language === 'ro' ? 'Cum folosim datele tale: ' : 'How we use your data: '}
                  <Link href="/privacy">
                    {language === 'ro' ? 'Politica de confidențialitate' : 'Privacy Policy'}
                  </Link>
                </p>

                <button type="submit" className={`${ui.btn} ${ui.purple} ${styles.submitBtn}`}>
                  {language === 'ro' ? 'Deschide în email' : 'Open in email'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
