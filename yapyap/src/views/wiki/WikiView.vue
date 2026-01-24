<template>
  <div class="page" id="top">
    <section class="page-hero">
      <div class="container">
        <p class="pill">Game Database · Items · Enemies · Crafting</p>
        <h1 class="title">YAPYAP Game Database & Wiki</h1>
        <p class="intro">
          The complete index of Items, Enemies, and Magic.
        </p>
      </div>
    </section>
    <main class="container">
      <div class="work-in-progress card">
        <span class="wip-icon">⚠️</span>
        <div>
          <p><strong>Work in Progress</strong></p>
          <p class="muted">Data is based on the Demo version. We are updating daily!</p>
        </div>
      </div>

      <!-- Core Loop Introduction -->
      <section class="core-loop-section">
        <h2 class="section-title">Mastering the Tower</h2>
        <div class="core-loop-content card">
          <p>
            Welcome to the comprehensive YAPYAP Wiki. To survive the tower, wizards must balance their inventory weight with loot value. This database breaks down every item's scrap price, the passive effects of different <strong>Wands</strong>, and the distinct sound cues of every <strong>Monster</strong>. The core gameplay loop follows: <strong>Infiltrate</strong> the tower, <strong>Loot</strong> valuable items while managing your weight limit, <strong>Survive</strong> encounters with enemies using <strong>Spells</strong> and stealth, and <strong>Upgrade</strong> your equipment with better <strong>Wands</strong> and crafted <strong>Potions</strong>. Understanding <strong>Scrap Value</strong>, meeting your <strong>Quota</strong>, and knowing which items to prioritize is essential for successful runs.
          </p>
        </div>
      </section>

      <!-- Wiki Navigation Grid -->
      <section class="wiki-grid-section">
        <h2 class="section-title">Browse by Category</h2>
        <div class="wiki-grid">
          <a href="/wiki/wands" class="wiki-card card">
            <div class="wiki-card-icon">🪄</div>
            <h2 class="wiki-card-title">Wands</h2>
            <p class="wiki-card-desc">Stats, Prices, and Passive Effects.</p>
            <div class="wiki-card-keywords muted">yapyap wands list, best wand</div>
          </a>

          <a href="/wiki/bestiary" class="wiki-card card">
            <div class="wiki-card-icon">👹</div>
            <h2 class="wiki-card-title">Bestiary</h2>
            <p class="wiki-card-desc">Enemy behaviors, weaknesses & sound cues.</p>
            <div class="wiki-card-keywords muted">yapyap monsters, enemies</div>
          </a>

          <a href="/wiki/potions" class="wiki-card card">
            <div class="wiki-card-icon">🧪</div>
            <h2 class="wiki-card-title">Potions & Crafting</h2>
            <p class="wiki-card-desc">Recipes, ingredients, and effects.</p>
            <div class="wiki-card-keywords muted">yapyap crafting recipes</div>
          </a>
        </div>
      </section>

      <!-- Featured / Meta Picks -->
      <section class="featured-section">
        <h2 class="section-title">Current Meta Picks</h2>
        <div class="featured-grid">
          <div class="featured-card card">
            <div class="featured-header">
              <span class="featured-icon">💰</span>
              <h3 class="featured-title">Top 3 Most Valuable Loot</h3>
            </div>
            <ul class="featured-list">
              <li><a href="/wiki/potions">Golden Chalice</a> - Highest scrap value</li>
              <li><a href="/wiki/potions">Crystal Shard</a> - Essential for crafting</li>
              <li><a href="/wiki/potions">Ancient Tome</a> - Rare find, high value</li>
            </ul>
          </div>
          <div class="featured-card card">
            <div class="featured-header">
              <span class="featured-icon">🪄</span>
              <h3 class="featured-title">Best Starter Wand</h3>
            </div>
            <p class="featured-content">
              <a href="/wiki/wands">Voice Amplifier</a> - Increases spell recognition range, perfect for beginners learning voice commands.
            </p>
          </div>
          <div class="featured-card card">
            <div class="featured-header">
              <span class="featured-icon">👹</span>
              <h3 class="featured-title">Most Dangerous Enemy</h3>
            </div>
            <p class="featured-content">
              <a href="/wiki/bestiary">The Librarian</a> - Extremely sound-sensitive, requires perfect stealth. Highest death rate in co-op runs.
            </p>
          </div>
        </div>
      </section>

      <!-- Global Mechanics Breakdown -->
      <section class="mechanics-section">
        <h2 class="section-title">Game Mechanics Explained</h2>
        
        <div class="mechanics-grid">
          <!-- Rarity Guide -->
          <div class="mechanic-card card">
            <h3 class="mechanic-title">Loot Rarity & Colors</h3>
            <p class="mechanic-desc">Understanding item rarity helps you prioritize valuable loot during runs.</p>
            <div class="rarity-list">
              <div class="rarity-item">
                <span class="rarity-color common">⬜</span>
                <div>
                  <strong>Common (White):</strong> Low-value items like stones and basic scrap.
                </div>
              </div>
              <div class="rarity-item">
                <span class="rarity-color rare">🔵</span>
                <div>
                  <strong>Rare (Blue):</strong> Medium-value items with decent scrap prices.
                </div>
              </div>
              <div class="rarity-item">
                <span class="rarity-color legendary">🟨</span>
                <div>
                  <strong>Legendary (Gold):</strong> High-value treasures, essential for meeting quota.
                </div>
              </div>
            </div>
            <p class="mechanic-note muted">
              Keywords: Rarity, Legendary items, item value, scrap price
            </p>
          </div>

          <!-- Weight & Stamina System -->
          <div class="mechanic-card card">
            <h3 class="mechanic-title">Weight & Stamina System</h3>
            <p class="mechanic-desc">
              Every item in YAPYAP has a weight stat. Carrying too much <strong>Heavy Scrap</strong> will drain your stamina and make you easy prey for fast monsters. When your inventory is full, movement speed decreases and stamina regeneration slows significantly.
            </p>
            <ul class="mechanic-list">
              <li>Overweight players move slower and can't sprint</li>
              <li>Stamina drains faster when carrying heavy items</li>
              <li>Check item weights in this Wiki before prioritizing loot</li>
            </ul>
            <p class="mechanic-note muted">
              Always balance loot value with weight to maintain mobility and survival chances.
            </p>
          </div>

          <!-- Sound & Noise Tiers -->
          <div class="mechanic-card card">
            <h3 class="mechanic-title">Sound & Noise Tiers</h3>
            <p class="mechanic-desc">
              Understanding noise levels is crucial for stealth gameplay. The "Sound Sensitivity" rating in our Bestiary indicates how enemies react to different noise levels.
            </p>
            <div class="noise-tiers">
              <div class="noise-tier">
                <strong>Whisper:</strong> Barely audible, safe distance ~5 meters
              </div>
              <div class="noise-tier">
                <strong>Talk:</strong> Normal speaking volume, detectable ~15 meters
              </div>
              <div class="noise-tier">
                <strong>Shout:</strong> Loud voice commands, can be heard ~30+ meters
              </div>
            </div>
            <p class="mechanic-note muted">
              Use crouch-walking to reduce noise. Some enemies are completely deaf, while others have extreme sensitivity.
            </p>
          </div>
        </div>
      </section>

      <!-- Contribution & Patch Notes -->
      <section class="contribution-section">
        <div class="contribution-card card">
          <h3 class="contribution-title">Data Validity & Updates</h3>
          <p class="contribution-text">
            <strong>Current Data:</strong> Based on Patch v0.8 (Demo). We update this Wiki regularly as new patches and content are released.
          </p>
          <p class="contribution-text">
            <strong>Found a new secret item?</strong> Discovered a better strategy? Join our community to submit data and help keep this Wiki accurate and up-to-date!
          </p>
          <!-- <div class="contribution-cta">
            <a href="#" class="btn btn-primary">Join Discord Community</a>
          </div> -->
        </div>
      </section>
    </main>
  </div>
</template>

<script setup></script>

<style scoped>

.work-in-progress {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 20px;
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.35);
  border-radius: 12px;
}

.wip-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.work-in-progress p {
  margin: 0 0 4px 0;
  line-height: 1.5;
}

.work-in-progress p:last-child {
  margin: 0;
}

.muted {
  color: var(--muted);
  font-size: 13px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: var(--text);
}

/* Core Loop Section */
.core-loop-section {
  margin-top: 40px;
}

.core-loop-content {
  padding: 24px 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.core-loop-content p {
  font-size: 16px;
  line-height: 1.8;
  color: var(--muted);
  margin: 0;
}

.core-loop-content strong {
  color: var(--text);
  font-weight: 600;
}

/* Featured Section */
.featured-section {
  margin-top: 48px;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.featured-card {
  padding: 20px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.featured-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.featured-icon {
  font-size: 28px;
}

.featured-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: var(--text);
}

.featured-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.featured-list li {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
  color: var(--muted);
  font-size: 14px;
}

.featured-list li:last-child {
  border-bottom: none;
}

.featured-list a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s ease;
}

.featured-list a:hover {
  color: var(--accent-2);
}

.featured-content {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.featured-content a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s ease;
}

.featured-content a:hover {
  color: var(--accent-2);
}

/* Wiki Grid Section */
.wiki-grid-section {
  margin-top: 48px;
}

.wiki-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.wiki-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.wiki-card:hover {
  transform: translateY(-4px);
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4), 0 0 24px rgba(139, 92, 246, 0.2);
}

.wiki-card-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.wiki-card-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 10px 0;
  line-height: 1.2;
}

.wiki-card-desc {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 12px 0;
  flex-grow: 1;
}

.wiki-card-keywords {
  font-size: 12px;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

/* Mechanics Section */
.mechanics-section {
  margin-top: 48px;
}

.mechanics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.mechanic-card {
  padding: 24px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.mechanic-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
}

.mechanic-desc {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.mechanic-desc strong {
  color: var(--text);
  font-weight: 600;
}

.rarity-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.rarity-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: rgba(15, 20, 36, 0.6);
  border-radius: 10px;
}

.rarity-color {
  font-size: 20px;
  flex-shrink: 0;
}

.rarity-item strong {
  color: var(--text);
  display: block;
  margin-bottom: 4px;
}

.mechanic-list {
  padding-left: 20px;
  margin: 0 0 16px 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
}

.mechanic-list li {
  margin-bottom: 8px;
}

.noise-tiers {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.noise-tier {
  padding: 10px 14px;
  background: rgba(139, 92, 246, 0.08);
  border-radius: 10px;
  font-size: 14px;
  color: var(--muted);
}

.noise-tier strong {
  color: var(--text);
}

.mechanic-note {
  font-size: 12px;
  margin: 0;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

/* Contribution Section */
.contribution-section {
  margin-top: 48px;
}

.contribution-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
  text-align: center;
}

.contribution-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: var(--text);
}

.contribution-text {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 12px 0;
}

.contribution-text strong {
  color: var(--text);
  font-weight: 600;
}

.contribution-cta {
  margin-top: 20px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: rgba(139, 92, 246, 0.2);
  border: 1px solid rgba(139, 92, 246, 0.4);
  color: var(--text);
}

.btn-primary:hover {
  background: rgba(139, 92, 246, 0.3);
  border-color: rgba(139, 92, 246, 0.6);
}

@media (max-width: 768px) {

  .section-title {
    font-size: 24px;
  }

  .wiki-grid,
  .featured-grid,
  .mechanics-grid {
    grid-template-columns: 1fr;
  }
}
</style>
