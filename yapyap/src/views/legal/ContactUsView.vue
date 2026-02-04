<template>
  <div class="legal-page">
    <section class="legal-header">
      <div class="container">
        <h1 class="page-title">{{ t('Legal.ContactUs.title') }}</h1>
        <p class="page-date">{{ t('Legal.ContactUs.lastUpdated') }}</p>
      </div>
    </section>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>{{ t('Legal.ContactUs.touch.title') }}</h2>
            <p>
              {{ t('Legal.ContactUs.touch.text') }}
            </p>

            <h2>{{ t('Legal.ContactUs.email.title') }}</h2>
            <p>
              {{ t('Legal.ContactUs.email.text') }}<a href="mailto:wyong@yapyapgame.com">wyong@yapyapgame.com</a>
            </p>

            <h2>{{ t('Legal.ContactUs.help.title') }}</h2>
            <p>
              {{ t('Legal.ContactUs.help.text') }}
            </p>
            <ul>
              <li>{{ t('Legal.ContactUs.help.list.questions') }}</li>
              <li>{{ t('Legal.ContactUs.help.list.suggestions') }}</li>
              <li>{{ t('Legal.ContactUs.help.list.errors') }}</li>
              <li>{{ t('Legal.ContactUs.help.list.copyright') }}</li>
              <li>{{ t('Legal.ContactUs.help.list.partnership') }}</li>
              <li>{{ t('Legal.ContactUs.help.list.feedback') }}</li>
            </ul>

            <h2>{{ t('Legal.ContactUs.response.title') }}</h2>
            <p>
              {{ t('Legal.ContactUs.response.text') }}
            </p>

            <h2>{{ t('Legal.ContactUs.contributions.title') }}</h2>
            <p>
              {{ t('Legal.ContactUs.contributions.text') }}
            </p>

            <h2>{{ t('Legal.ContactUs.privacy.title') }}</h2>
            <p>
              {{ t('Legal.ContactUs.privacy.text_1') }}<a href="/privacy-policy">{{ t('Legal.ContactUs.privacy.link') }}</a>{{ t('Legal.ContactUs.privacy.text_2') }}
            </p>

            <h2>{{ t('Legal.ContactUs.thanks.title') }}</h2>
            <p>
              {{ t('Legal.ContactUs.thanks.text') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO is set in router/index.js via route.meta.seo
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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
