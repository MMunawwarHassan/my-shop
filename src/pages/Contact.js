import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-layout">
          {/* Info */}
          <div className="contact-info">
            <div className="contact-info__label">Get in Touch</div>
            <h1 className="contact-info__title">We'd love to hear from you</h1>
            <p className="contact-info__text">
              Have a question about an order, a product, or just want to say hello? Our team typically responds within 24 hours on business days.
            </p>

            <div className="contact-detail-list">
              <div className="contact-detail">
                <div className="contact-detail__icon">📧</div>
                <span>hello@shopwave.com</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail__icon">📞</div>
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail__icon">🕐</div>
                <span>Mon–Fri, 9am–6pm EST</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail__icon">📍</div>
                <span>123 Commerce Street, New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <div className="form-success__icon">✅</div>
                <h3 className="form-success__title">Message Sent!</h3>
                <p className="form-success__text">
                  Thank you, {form.name}! We'll get back to you at {form.email} shortly.
                </p>
                <button
                  className="btn-primary"
                  style={{ marginTop: '1.5rem', border: 'none' }}
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-control"
                    placeholder="Order question, return request…"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={6}
                    placeholder="Tell us how we can help…"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="form-submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
