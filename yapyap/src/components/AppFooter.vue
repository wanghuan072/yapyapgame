<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/logo.webp" :alt="$t('Footer.logoTitle')" class="brand-logo" />
            <span class="logo-text">{{ $t('Footer.logoTitle') }}</span>
          </div>
          <p class="footer-text">
            {{ $t('Footer.description') }}
          </p>
        </div>
        <div class="link-column">
          <h2>{{ $t('Footer.navigate') }}</h2>
          <ul>
            <li><a :href="getLocalizedPath('/')">{{ $t('Footer.nav.home') }}</a></li>
            <li><a :href="getLocalizedPath('/spells')">{{ $t('Footer.nav.spells') }}</a></li>
            <li><a :href="getLocalizedPath('/spell-generator')">{{ $t('Footer.nav.spellGenerator') }}</a></li>
            <li><a :href="getLocalizedPath('/guides')">{{ $t('Footer.nav.guides') }}</a></li>
            <li><a :href="getLocalizedPath('/wiki')">{{ $t('Footer.nav.wiki') }}</a></li>
          </ul>
        </div>
        <div class="link-column">
          <h2>{{ $t('Footer.legal') }}</h2>
          <ul>
            <li>
              <a :href="getLocalizedPath('/privacy-policy')" rel="nofollow">{{ $t('Footer.legalLinks.privacyPolicy') }}</a>
            </li>
            <li>
              <a :href="getLocalizedPath('/terms-of-service')" rel="nofollow">{{ $t('Footer.legalLinks.termsOfService') }}</a>
            </li>
            <li>
              <a :href="getLocalizedPath('/copyright')" rel="nofollow">{{ $t('Footer.legalLinks.copyright') }}</a>
            </li>
            <li>
              <a :href="getLocalizedPath('/about-us')" rel="nofollow">{{ $t('Footer.legalLinks.aboutUs') }}</a>
            </li>
            <li>
              <a :href="getLocalizedPath('/contact-us')" rel="nofollow">{{ $t('Footer.legalLinks.contactUs') }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ $t('Footer.copyright') }}</p>
        <p>{{ $t('Footer.disclaimer') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLocalizedPath } from '@/composables/useLocalizedPath'

const { getLocalizedPath } = useLocalizedPath()
</script>

<style scoped>
.site-footer {
  padding: 30px 0 20px 0;
  background: rgba(7, 9, 18, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-grid {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

.footer-brand {
  flex: 1;
  max-width: 35%;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.footer-logo img {
  width: 42px;
  height: 42px;
  border-radius: 12px;
}

.footer-logo span {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: var(--accent);
}

.footer-text {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
  line-height: 1.6;
  font-size: 0.9rem;
}

.link-column {
  flex: 0 0 auto;
}

.link-column h2 {
  color: #ffdede;
  font-size: 1.3rem;
  margin-bottom: 16px;
  font-weight: 600;
}

.link-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.link-column a {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.9rem;
}

.link-column a:hover {
  color: #ffffff;
}

.footer-bottom {
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 20px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .footer-grid {
    flex-wrap: wrap;
    gap: 30px;
  }

  .footer-brand {
    max-width: 100%;
  }

  .link-column {
    flex: 1 1 calc(50% - 15px);
  }

  .link-column h2 {
    font-size: 1.2rem;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .site-footer {
    padding: 20px 0;
  }

  .footer-grid {
    flex-direction: column;
    gap: 20px;
  }

  .footer-brand {
    max-width: 100%;
  }

  .link-column {
    flex: 1 1 100%;
  }

  .footer-logo {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .footer-text {
    font-size: 0.85rem;
    margin-bottom: 10px;
  }

  .link-column h2 {
    font-size: 16px;
    margin-bottom: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .link-column ul {
    gap: 10px;
  }

  .link-column a {
    font-size: 0.85rem;
  }

  .footer-bottom {
    margin-top: 20px;
    padding-top: 20px;
    gap: 10px;
    font-size: 0.75rem;
  }

  .footer-bottom p {
    font-size: 0.75rem;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .footer-text,
  .link-column a {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
}
</style>
