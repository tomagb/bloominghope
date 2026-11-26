'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
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

  const contactInfo = [
    {
      icon: '📧',
      title: language === 'ro' ? 'Email' : 'Email',
      content: 'contact@bloominghope.ro',
      link: 'mailto:contact@bloominghope.ro',
    },
    {
      icon: '📍',
      title: language === 'ro' ? 'Locație' : 'Location',
      content: language === 'ro' ? 'Cluj-Napoca, România' : 'Cluj-Napoca, Romania',
      link: '#',
    },
  ];

  return (
    <main>
      <Header />
      <section className={styles.contactHero}>
        <div className="container">
          <h1 className={styles.title}>{t.contact?.title || (language === 'ro' ? 'Contact' : 'Contact')}</h1>
          <p className={styles.subtitle}>
            {t.contact?.subtitle || (language === 'ro'
              ? 'Suntem dornici să auzim de la tine. Conectează-te cu noi pentru întrebări sau colaborări.'
              : 'We\'d love to hear from you. Get in touch with us for any questions or collaborations.')}
          </p>
        </div>
      </section>

      <section className={styles.contactContent}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>
                {language === 'ro' ? 'Informații de Contact' : 'Contact Information'}
              </h2>
              <div className={styles.infoList}>
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.link} className={styles.infoItem}>
                    <div className={styles.infoIcon}>{info.icon}</div>
                    <div>
                      <h3 className={styles.infoTitle}>{info.title}</h3>
                      <p className={styles.infoContent}>{info.content}</p>
                    </div>
                  </a>
                ))}
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

                <div className={styles.formGroup}>
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

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    {language === 'ro' ? 'Mesaj' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={styles.textarea}
                  />
                </div>

                <p>
                  <Link href="/privacy">
                    {language === 'ro'
                      ? 'Cum folosim datele tale: Politica de confidențialitate'
                      : 'How we use your data: Privacy Policy'}
                  </Link>
                </p>

                <button type="submit" className={styles.submitBtn}>
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
