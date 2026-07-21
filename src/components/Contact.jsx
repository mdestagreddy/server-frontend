const API_URL = import.meta.env.VITE_API_URL || '/api';

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    }

    try {
      const response = await fetch(API_URL + '/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok && data.emailSent) {
        alert('Message sent successfully!')
        form.reset()
      } else if (response.ok && !data.emailSent) {
        alert('Message saved to database, but email notification failed. Check console for details.')
      } else {
        alert(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      alert('Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's work together</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-description">
              I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">@</div>
                <div>
                  <h4>Email</h4>
                  <p>destagreddy1206@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">#</div>
                <div>
                  <h4>Location</h4>
                  <p>Indonesia</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
        }
        .contact-info h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .contact-description {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .contact-icon {
          width: 48px;
          height: 48px;
          background: var(--gradient-1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }
        .contact-item h4 {
          font-size: 0.875rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .contact-item p {
          color: var(--text-primary);
          font-weight: 500;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-link {
          padding: 0.75rem 1.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .social-link:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-2px);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-muted);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
