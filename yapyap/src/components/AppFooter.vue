<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="logo-mark">✦</div>
            <span class="logo-text">YAPYAP Game</span>
          </div>
          <p class="footer-text">
            Comprehensive YAPYAP game resources including guides, wiki, spells database, and puzzle solutions to help you master the voice-activated magic and survive the tower.
          </p>
        </div>
        <div class="link-column">
          <h2>Navigate</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/spells">Spells</a></li>
            <li><a href="/spell-generator">Spell Generator</a></li>
            <li><a href="/guide/overview">Guides</a></li>
            <li><a href="/wiki">Wiki</a></li>
          </ul>
        </div>
        <div class="link-column">
          <h2>Legal</h2>
          <ul>
            <li>
              <a href="/privacy-policy" rel="nofollow">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service" rel="nofollow">Terms of Service</a>
            </li>
            <li>
              <a href="/copyright" rel="nofollow">Copyright</a>
            </li>
            <li>
              <a href="/about-us" rel="nofollow">About Us</a>
            </li>
            <li>
              <a href="/contact-us" rel="nofollow">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 yapyapgame.com. All rights reserved.</p>
        <p>yapyapgame.com is not affiliated with, endorsed by, or connected to the original game or its publishers. This is an independent fan site created for informational purposes only. All trademarks and copyrights belong to their respective owners.</p>
      </div>
    </div>
  </footer>
</template>

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

.logo-mark {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: radial-gradient(circle at 20% 20%, rgba(74, 222, 128, 0.9), rgba(139, 92, 246, 0.95));
  display: grid;
  place-items: center;
  font-weight: 900;
  color: #0b0d16;
  box-shadow: 0 0 22px rgba(139, 92, 246, 0.45);
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--accent);
  text-transform: uppercase;
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
