<template>
  <div class="legal-page">
    <section class="legal-header">
      <div class="container">
        <h1 class="page-title">Contact Us</h1>
        <p class="page-date">Last Updated: January 23, 2026</p>
      </div>
    </section>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>Get in Touch</h2>
            <p>
              We'd love to hear from you! Whether you have questions, suggestions, feedback, or just want to say hello, please don't hesitate to contact us.
            </p>

            <h2>Email</h2>
            <p>
              For general inquiries, please email us at: <a href="mailto:wyong@yapyapgame.com">wyong@yapyapgame.com</a>
            </p>

            <h2>What We Can Help With</h2>
            <p>
              We're here to assist with:
            </p>
            <ul>
              <li>Questions about our website or content</li>
              <li>Suggestions for improvements or new features</li>
              <li>Reporting errors or outdated information</li>
              <li>Copyright or legal inquiries</li>
              <li>Partnership or collaboration opportunities</li>
              <li>General feedback about YAPYAP Game Guide Hub</li>
            </ul>

            <h2>Response Time</h2>
            <p>
              We strive to respond to all inquiries within 2-3 business days. Please be patient as we review and respond to your message.
            </p>

            <h2>Community Contributions</h2>
            <p>
              If you'd like to contribute content, corrections, or updates to our website, please contact us with details about your contribution. We appreciate all community support!
            </p>

            <h2>Privacy</h2>
            <p>
              Any information you provide in your correspondence will be kept confidential and used only for the purpose of responding to your inquiry. Please review our <a href="/privacy-policy">Privacy Policy</a> for more information.
            </p>

            <h2>Thank You</h2>
            <p>
              Thank you for your interest in YAPYAP Game Guide Hub. We look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO is set in router/index.js via route.meta.seo
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
}

.legal-header {
  padding: 60px 0 40px;
  background: linear-gradient(180deg, rgba(18, 0, 0, 0.4), transparent);
}

.page-title {
  font-size: 3rem;
  margin: 0 0 16px;
  color: var(--text);
  font-weight: 700;
  text-align: center;
}

.page-date {
  text-align: center;
  color: rgba(255, 210, 210, 0.6);
  font-size: 0.9rem;
  margin: 0;
}

.legal-content {
  padding: 40px 0 80px;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.legal-text {
  color: rgba(255, 210, 210, 0.85);
  line-height: 1.8;
}

.legal-text h2 {
  font-size: 1.8rem;
  color: rgba(255, 230, 230, 0.95);
  margin: 40px 0 16px;
  font-weight: 600;
}

.legal-text h2:first-child {
  margin-top: 0;
}

.legal-text p {
  font-size: 1rem;
  margin-bottom: 20px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.legal-text ul {
  margin: 20px 0;
  padding-left: 30px;
  list-style: disc;
}

.legal-text li {
  font-size: 1rem;
  margin-bottom: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.legal-text a {
  color: var(--accent);
  text-decoration: none;
}

.legal-text a:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .legal-header {
    padding: 50px 0 30px;
  }

  .page-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .legal-header {
    padding: 40px 0 20px;
  }

  .page-title {
    font-size: 24px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .page-date {
    font-size: 12px;
  }

  .legal-content {
    padding: 30px 0 60px;
  }

  .legal-text h2 {
    font-size: 20px;
    margin: 30px 0 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .legal-text p {
    font-size: 12px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .legal-text ul {
    padding-left: 20px;
  }

  .legal-text li {
    font-size: 12px;
    margin-bottom: 8px;
  }
}
</style>
