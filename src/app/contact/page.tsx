'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: language === 'ro' ? 'Email' : 'Email',
      content: 'contact@bloominghope.ro',
      link: 'mailto:contact@bloominghope.ro',
    },
    {
      icon: '📱',
      title: language === 'ro' ? 'Telefon' : 'Phone',
      content: '+40 XXX XXX XXX',
      link: 'tel:+40XXXXXXXXX',
    },
    {
      icon: '📍',
      title: language === 'ro' ? 'Locație' : 'Location',
      content: language === 'ro' ? 'București, România' : 'Bucharest, Romania',
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

              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>
                  {language === 'ro' ? 'Urmărește-ne' : 'Follow Us'}
                </h3>
                <div className={styles.socialLinks}>
                  <a href="#" aria-label="Facebook" className={styles.socialLink}>f</a>
                  <a href="#" aria-label="Instagram" className={styles.socialLink}>📷</a>
                  <a href="#" aria-label="Twitter" className={styles.socialLink}>𝕏</a>
                  <a href="#" aria-label="LinkedIn" className={styles.socialLink}>in</a>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2 className={styles.sectionTitle}>
                {language === 'ro' ? 'Trimite-ne un Mesaj' : 'Send us a Message'}
              </h2>
              {submitted && (
                <div className={styles.successMessage}>
                  {language === 'ro'
                    ? '✓ Mulțumim! Am primit mesajul tău. Te vom contacta în curând.'
                    : '✓ Thank you! We received your message. We\'ll get back to you soon.'}
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

                <button type="submit" className={styles.submitBtn}>
                  {language === 'ro' ? 'Trimite' : 'Send'}
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
