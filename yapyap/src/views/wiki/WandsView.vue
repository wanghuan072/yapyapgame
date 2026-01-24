<template>
  <div class="page" id="top">
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">></span>
          <a href="/wiki">Wiki</a>
          <span class="separator">></span>
          <span>Wands</span>
        </nav>
        <p class="pill">Wands Database · Stats · Passive Effects</p>
        <h1 class="title">🪄 YAPYAP Wands List</h1>
        <p class="intro">
          Complete guide to all wands in YAPYAP. Each wand can cast multiple spells. Compare wands and their spell capabilities to find the best wand for your playstyle.
        </p>
      </div>
    </section>
    <main class="container">

      <!-- Introduction Section -->
      <section class="introduction-section">
        <div class="intro-card card">
          <h2 class="intro-title">What Are Wands in YAPYAP?</h2>
          <div class="intro-content">
            <p>
              <strong>Wands are the essential catalyst for casting spells in YAPYAP.</strong> Without a wand, you cannot cast any spells—no matter how loudly you shout the spell commands. Wands are not just cosmetic items; they fundamentally affect your gameplay experience.
            </p>
            <p>
              Different wands offer unique passive effects that impact your mana regeneration speed, spell recognition range, movement speed, and even your carrying capacity. Understanding <strong>wand mechanics</strong> and <strong>how to cast spells</strong> effectively is crucial for survival in the tower.
            </p>
            <p class="intro-tip">
              <strong>Pro Tip:</strong> New players should start with the <strong>Basic Wand</strong> to learn the fundamentals. Don't rush to buy the most expensive wand—master the basics first, then upgrade based on your playstyle.
            </p>
          </div>
        </div>
      </section>

      <section class="wiki-content card">
        <div class="section-head">
          <h2 class="section-title">All Wands</h2>
          <p class="section-subtitle">
            Which wand should you buy? Which wand is the strongest? Find out here.
          </p>
        </div>

        <!-- Desktop table -->
        <div class="table card" aria-label="All YAPYAP wands list">
          <div class="row head">
            <div class="image">Image</div>
            <div class="name">Name</div>
            <div class="spells">Spells</div>
            <div class="effects">Spell Effects</div>
          </div>

          <div class="row" v-for="wand in wands" :key="wand.name">
            <div class="c image">
              <div class="image-placeholder">
                <img :src="wand.image" :alt="wand.name" :srcset="wand.image">
              </div>
            </div>
            <div class="name">
              <strong>{{ wand.name }}</strong>
            </div>
            <div class="spells">
              <div class="spell-list">
                <div class="spell-item" v-for="spell in wand.spells" :key="spell.name">
                  <div class="spell-name">{{ spell.name }}</div>
                </div>
              </div>
            </div>
            <div class="effects">
              <div class="effect-list">
                <div class="effect-item" v-for="spell in wand.spells" :key="spell.name">
                  <div class="spell-effect">{{ spell.effect }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile cards -->
        <div class="cards-mobile">
          <div class="wand-card card" v-for="wand in wands" :key="wand.name">
            <div class="wand-card-header">
              <div class="wand-image">
                <div class="image-placeholder">🖼️</div>
              </div>
              <div class="wand-info">
                <h3 class="wand-name">{{ wand.name }}</h3>
              </div>
            </div>
            <div class="wand-spells">
              <h4 class="spells-title">Spells</h4>
              <div class="spell-item" v-for="spell in wand.spells" :key="spell.name">
                <div class="spell-name">{{ spell.name }}</div>
                <div class="spell-effect muted">{{ spell.effect }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How to Obtain Section -->
      <section class="acquisition-section">
        <div class="acquisition-card card">
          <h2 class="section-title">How to Obtain Wands</h2>
          <div class="acquisition-content">
            <p>
              Wands in YAPYAP can be obtained through several methods:
            </p>
            <ul class="acquisition-list">
              <li>
                <strong>Shop Purchase:</strong> Most wands can be bought from the in-game shop using gold earned during runs. Prices range from 50 gold (Basic Wand) to 300+ gold (premium wands).
              </li>
              <li>
                <strong>Opening Chests:</strong> Some rare wands can be found by opening chests in high-value areas. These are typically higher-tier wands with powerful passive effects.
              </li>
              <li>
                <strong>Quest Rewards:</strong> Completing specific objectives or puzzles may reward you with unique wands not available in the shop.
              </li>
              <li>
                <strong>Team Sharing:</strong> In co-op mode, teammates can drop wands for you to pick up. This is especially useful if you die and lose your equipment.
              </li>
            </ul>
            <p class="acquisition-note muted">
              <strong>Note:</strong> Always check your inventory weight before purchasing or picking up wands. Heavier wands may slow you down, making you vulnerable to fast enemies.
            </p>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="faq-card card">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <div class="faq-list">
            <div class="faq-item">
              <h3 class="faq-question">Do I lose my wand if I die?</h3>
              <p class="faq-answer">
                <strong>Yes, you drop all equipment including your wand when you die.</strong> However, your teammates can pick up your dropped items and return them to you. If you're playing solo or your team can't recover your gear, you'll need to purchase a new wand from the shop. This is why it's important to start with cheaper wands until you're comfortable with the game mechanics.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Does the wand affect my voice recognition?</h3>
              <p class="faq-answer">
                <strong>Yes, some wands improve voice recognition range and accuracy.</strong> The <strong>Voice Amplifier</strong> wand, for example, increases the distance from which your voice commands are detected. This means you can cast spells from further away, which is especially useful in stealth situations or when you need to maintain distance from enemies. Higher-tier wands may also reduce the required voice volume, making it easier to cast spells quietly.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Can I carry two wands?</h3>
              <p class="faq-answer">
                <strong>No, you can only equip one wand at a time.</strong> Wands occupy your main hand slot, similar to weapons in other games. You cannot dual-wield wands or carry multiple wands simultaneously. However, you can store extra wands in your inventory (if you have space), but they won't provide any passive effects until equipped. Switching wands requires opening your inventory and manually equipping the desired wand.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Do wands have durability? Will they break?</h3>
              <p class="faq-answer">
                <strong>No, wands do not have durability and will not break from use.</strong> Once you purchase or obtain a wand, it will last indefinitely unless you die and drop it (or sell it). You don't need to repair wands or worry about them degrading over time. This makes wands a long-term investment—once you find a wand that suits your playstyle, you can use it for as long as you can keep it safe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { wands as wandsData } from '@/data/wands.js'

const wands = wandsData.map(wand => ({
  name: wand.shortName,
  image: wand.image,
  spells: wand.spells.map(spell => ({
    name: spell.name,
    effect: spell.effect,
  })),
}))
</script>

<style scoped>

/* Introduction Section */
.introduction-section {
  margin-top: 32px;
}

.intro-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.intro-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: var(--text);
}

.intro-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.intro-content p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}

.intro-content strong {
  color: var(--text);
  font-weight: 600;
}

.intro-tip {
  padding: 16px;
  background: rgba(139, 92, 246, 0.1);
  border-left: 3px solid rgba(139, 92, 246, 0.5);
  border-radius: 8px;
  margin-top: 8px;
}

.intro-tip strong {
  color: var(--text);
}

.wiki-content {
  margin-top: 32px;
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.section-head {
  margin-bottom: 24px;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.section-subtitle {
  color: var(--muted);
  font-size: 14px;
  margin: 0;
}

.table {
  display: none;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
}

.table .row {
  display: grid;
  grid-template-columns: 140px 1fr 1.5fr 2fr;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  align-items: center;
}

.table .row:not(.head) {
  min-height: 80px;
}

.table .row:last-child {
  border-bottom: none;
}

.table .row.head {
  background: rgba(139, 92, 246, 0.08);
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  align-items: center;
}

.table .c {
  overflow: hidden;
}

.table .c.image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 20, 36, 0.6);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  font-size: 32px;
}

.image-placeholder img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.table .c.name strong {
  color: var(--text);
  font-size: 16px;
  font-weight: 700;
}

.spell-list,
.effect-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.spell-item,
.effect-item {
  padding: 8px 12px;
  background: rgba(139, 92, 246, 0.08);
  border-radius: 8px;
  border: 1px solid rgba(139, 92, 246, 0.15);
}

.spell-name {
  font-weight: 600;
  color: var(--text);
  font-size: 15px;
}

.spell-effect {
  font-size: 14px;
  line-height: 1.5;
  color: var(--muted);
}

.muted {
  color: var(--muted);
}

.cards-mobile {
  display: none;
  flex-direction: column;
  gap: 20px;
}

.wand-card {
  padding: 20px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
}

.wand-card-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

.wand-image {
  flex-shrink: 0;
}

.wand-image .image-placeholder {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 20, 36, 0.6);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  font-size: 32px;
}

.wand-info {
  flex-grow: 1;
}

.wand-name {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: var(--text);
}

.wand-spells {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.spells-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: var(--text);
}

.spell-item {
  padding: 12px;
  background: rgba(139, 92, 246, 0.08);
  border-radius: 10px;
  border: 1px solid rgba(139, 92, 246, 0.15);
}

.spell-item .spell-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 6px;
}

.spell-item .spell-effect {
  font-size: 13px;
  line-height: 1.5;
}

@media (min-width: 1024px) {
  .table {
    display: flex;
  }

  .cards-mobile {
    display: none;
  }
}

@media (max-width: 1023px) {
  .table {
    display: none;
  }

  .cards-mobile {
    display: flex;
  }


  .wiki-content {
    padding: 20px;
  }

  .intro-card,
  .acquisition-card,
  .faq-card {
    padding: 20px;
  }
}

/* Acquisition Section */
.acquisition-section {
  margin-top: 32px;
}

.acquisition-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.acquisition-content {
  margin-top: 16px;
}

.acquisition-content p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0 0 16px 0;
}

.acquisition-content strong {
  color: var(--text);
  font-weight: 600;
}

.acquisition-list {
  padding-left: 24px;
  margin: 0 0 16px 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.8;
}

.acquisition-list li {
  margin-bottom: 12px;
}

.acquisition-list strong {
  color: var(--text);
  font-weight: 600;
}

.acquisition-note {
  padding: 12px 16px;
  background: rgba(251, 191, 36, 0.1);
  border-left: 3px solid rgba(251, 191, 36, 0.5);
  border-radius: 8px;
  font-size: 14px;
  margin: 0;
}

.acquisition-note strong {
  color: var(--text);
}

/* FAQ Section */
.faq-section {
  margin-top: 32px;
}

.faq-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
}

.faq-item {
  padding: 20px;
  background: rgba(15, 20, 36, 0.6);
  border-radius: 12px;
  border: 1px solid var(--border);
}

.faq-question {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
}

.faq-answer {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}

.faq-answer strong {
  color: var(--text);
  font-weight: 600;
}
</style>
