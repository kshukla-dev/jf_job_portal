'use client';

import React, { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import styles from './contact.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Employer Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Container>
          <h1 className={styles.title}>Contact Jackson & Frank</h1>
          <p className={styles.subtitle}>
            Connect with our international recruitment advisory team. We are here to support your cross-border talent acquisition or international relocation.
          </p>
        </Container>
      </div>

      <Container>
        <div className={styles.layout}>
          {/* Contact Form */}
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Send an Inquiry</h2>

            {submitted ? (
              <div className={styles.successMsg}>
                ✓ Thank you for reaching out, {formData.name}. An international talent consultant will contact you within 24 business hours.
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.label}>Full Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.label}>Business Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john.doe@company.com"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-subject" className={styles.label}>Inquiry Type</label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={styles.select}
                >
                  <option value="Employer Inquiry">Employer - International Hiring</option>
                  <option value="Executive Search">Employer - Executive Search</option>
                  <option value="Candidate Inquiry">Candidate - Career Relocation</option>
                  <option value="General Inquiry">General / Press / Partnership</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-msg" className={styles.label}>Message *</label>
                <textarea
                  id="contact-msg"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your requirements, location preferences, or hiring mandates..."
                  className={styles.textarea}
                />
              </div>

              <Button type="submit" size="lg" variant="primary">
                Send Message →
              </Button>
            </form>
          </div>

          {/* Global Office Hubs */}
          <aside className={styles.infoCard}>
            <h2 className={styles.infoTitle}>Global Office Hubs</h2>

            <div className={styles.hubItem}>
              <div className={styles.hubCity}>Amsterdam (Headquarters)</div>
              <p className={styles.hubDetail}>
                Keizersgracht 421, 1016 EK Amsterdam, Netherlands<br />
                +31 (0)20 890 4500
              </p>
            </div>

            <div className={styles.hubItem}>
              <div className={styles.hubCity}>London</div>
              <p className={styles.hubDetail}>
                1 Canada Square, Canary Wharf, London E14 5AA, UK<br />
                +44 (0)20 7946 0192
              </p>
            </div>

            <div className={styles.hubItem}>
              <div className={styles.hubCity}>Frankfurt</div>
              <p className={styles.hubDetail}>
                Mainzer Landstraße 50, 60325 Frankfurt am Main, Germany<br />
                +49 (0)69 9002 8110
              </p>
            </div>

            <div className={styles.hubItem}>
              <div className={styles.hubCity}>Bangalore</div>
              <p className={styles.hubDetail}>
                UB City, Vittal Mallya Road, Bangalore 560001, India<br />
                +91 (0)80 4120 7700
              </p>
            </div>

            <div className={styles.hubItem}>
              <div className={styles.hubCity}>Singapore</div>
              <p className={styles.hubDetail}>
                Marina Bay Financial Centre, Tower 1, Singapore 018981<br />
                +65 6812 9000
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
