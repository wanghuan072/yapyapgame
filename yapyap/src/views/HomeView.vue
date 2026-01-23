<template>
  <div id="top" class="home">
    <main>
      <!-- Hero -->
      <section id="hero" class="section hero">
        <div class="container hero-grid">
          <div class="hero-text card">
            <div class="pill">Voice Spells · Co-op Chaos · Light Horror</div>
            <h1>YAPYAP Game Ultimate Guide & Wiki</h1>
            <p class="lead">"Master the spell, solve the puzzle, and escape the tower."</p>
            
            <div class="hero-features">
              <div class="hero-feature-item">
                <div class="feature-icon">🎬</div>
                <div class="feature-content">
                  <h3>Spell Generator</h3>
                  <p>Practice voice commands with video tutorials. Master pronunciation for every spell before you play.</p>
                  <a href="/spell-generator" class="feature-link">Try Spell Generator →</a>
                </div>
              </div>
              <div class="hero-feature-item">
                <div class="feature-icon">📚</div>
                <div class="feature-content">
                  <h3>Complete Wiki</h3>
                  <p>Browse wands, monsters, potions, and items. Find stats, crafting recipes, and survival strategies.</p>
                  <a href="/wiki" class="feature-link">Explore Wiki →</a>
                </div>
              </div>
            </div>

            <div class="hero-stats">
              <div>
                <span class="label">Release Date</span>
                <span class="value">Feb 3, 2026</span>
              </div>
              <div>
                <span class="label">Core Tags</span>
                <span class="value">Co-op / Voice Spellcasting / Stealth Escape</span>
              </div>
              <div>
                <span class="label">Platform</span>
                <span class="value">Steam · Windows</span>
              </div>
            </div>
          </div>
          <div class="hero-media card">
            <div class="video-frame">
              <iframe
                src="https://www.youtube.com/embed/qjLDbxB-Xt4"
                title="YAPYAP Trailer"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <!-- Pain Points & Solutions -->
      <section id="pain-points" class="section pain-points-section">
        <div class="container">
          <div class="section-header">
            <p class="pill">Struggling?</p>
            <h2 class="section-title">Stop Fighting Alone</h2>
            <p class="section-subtitle">We've solved the most frustrating problems players face. Get instant answers.</p>
          </div>
          <div class="pain-points-grid">
            <div class="pain-point-card card">
              <div class="pain-icon">🎤</div>
              <div class="pain-content">
                <h3>"My spells never work!"</h3>
                <p class="pain-description">Voice recognition keeps failing? Learn the exact pronunciation for every spell with audio demos.</p>
                <div class="pain-stats">
                  <span class="stat-item">100+ spells</span>
                  <span class="stat-item">Audio guides</span>
                </div>
                <a href="/spells" class="pain-solution-btn">Fix Spell Recognition →</a>
              </div>
            </div>
            <div class="pain-point-card card">
              <div class="pain-icon">🎬</div>
              <div class="pain-content">
                <h3>"How do I say this spell?"</h3>
                <p class="pain-description">Not sure about pronunciation? Watch video demonstrations and practice with our interactive spell generator before you play.</p>
                <div class="pain-stats">
                  <span class="stat-item">Video tutorials</span>
                  <span class="stat-item">Practice mode</span>
                </div>
                <a href="/spell-generator" class="pain-solution-btn">Practice Spells →</a>
              </div>
            </div>
            <div class="pain-point-card card">
              <div class="pain-icon">📚</div>
              <div class="pain-content">
                <h3>"What does this item do?"</h3>
                <p class="pain-description">Need wand stats, potion recipes, or monster info? Complete game database with all items, effects, and crafting guides.</p>
                <div class="pain-stats">
                  <span class="stat-item">Complete database</span>
                  <span class="stat-item">All items & stats</span>
                </div>
                <a href="/wiki" class="pain-solution-btn">Browse Wiki →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Latest Guides -->
      <section id="guides" class="section">
        <div class="container">
          <div class="section-header">
            <p class="pill">yapyap guide</p>
            <h2 class="section-title">Latest Guides</h2>
            <p class="section-subtitle">Fresh updates from the community and demo learnings.</p>
          </div>
          <!-- Loading State -->
          <div v-if="loading" class="loading-state card">
            <p class="muted">Loading guides...</p>
          </div>
          <!-- Guides Grid -->
          <div v-if="!loading && homeGuides.length > 0" class="grid guide-grid">
            <article
              v-for="guide in homeGuides"
              :key="guide.id"
              class="card guide-card"
            >
              <div class="guide-image" v-if="guide.imageUrl">
                <img
                  :src="guide.imageUrl"
                  :alt="guide.imageAlt || guide.title"
                  class="guide-image-img"
                  loading="lazy"
                />
              </div>
              <div class="guide-image" v-else>
                <div class="image-placeholder">📖</div>
              </div>
              <div class="guide-content">
                <div class="guide-meta" v-if="guide.tags && guide.tags.length > 0">
                  <span
                    v-for="tag in guide.tags.slice(0, 3)"
                    :key="tag"
                    class="tag"
                  >{{ tag }}</span>
                </div>
                <h3>{{ guide.title }}</h3>
                <p>{{ guide.description }}</p>
                <a :href="`/guide/${guide.addressBar}`" class="guide-link">Read more →</a>
              </div>
            </article>
          </div>
          <!-- Empty State -->
          <div v-if="!loading && homeGuides.length === 0" class="empty-state card">
            <p class="muted">No guides available yet. Check back soon!</p>
          </div>
          <!-- View All Link -->
          <div v-if="!loading && homeGuides.length > 0" class="guides-actions">
            <a href="/guide/overview" class="btn btn-ghost">View All Guides</a>
          </div>
        </div>
      </section>

      <!-- Troubleshooting -->
      <section id="troubleshoot" class="section">
        <div class="container">
          <div class="trouble-card">
            <div class="trouble-content">
              <div class="trouble-icon-wrapper">
                <div class="trouble-icon">🎤</div>
              </div>
              <div class="trouble-text">
                <p class="pill warning-pill">Voice Recognition Issues</p>
                <h2 class="section-title">"Can't Hear Friends? Spells Not Working?"</h2>
                <p class="section-subtitle">
                  Voice recognition failing? Microphone problems? Learn the correct pronunciation for every spell with audio demos and troubleshooting tips.
                </p>
                <div class="trouble-features">
                  <div class="trouble-feature-item">
                    <span class="feature-check">✓</span>
                    <span>100+ spell pronunciations with audio</span>
                  </div>
                  <div class="trouble-feature-item">
                    <span class="feature-check">✓</span>
                    <span>Microphone setup & troubleshooting</span>
                  </div>
                  <div class="trouble-feature-item">
                    <span class="feature-check">✓</span>
                    <span>Common misheard spells guide</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="trouble-action">
              <a class="btn btn-primary" href="/spells">
                <span>Fix Voice Recognition</span>
                <span class="btn-arrow">→</span>
              </a>
              <p class="trouble-meta-text">Most common issue: #9 "yapyap can't hear friends"</p>
            </div>
          </div>
        </div>
      </section>

      <!-- What is YAPYAP? (SEO) -->
      <section id="what" class="section section-light">
        <div class="container what-grid">
          <div class="what-text card">
            <!-- <p class="pill">What is YAPYAP?</p> -->
            <h2 class="section-title">What is YAPYAP</h2>
            <p>
              YAPYAP is a multiplayer horror game on Steam that leans into voice activated spells and co-op vandalism. Players act as minions infiltrating a rival tower, smashing high-value objects, solving puzzles, and escaping monsters. This multiplayer horror game combines voice activated spells with cooperative gameplay.
            </p>
            <p>
              The game's core mechanic revolves around voice control co-op, where players must speak spell commands into their microphones to trigger magical effects. This voice activated spells system creates an immersive spellcasting with mic experience that sets YAPYAP apart from traditional co-op horror titles. The combination of vandalism and stealth escape mechanics makes each run unpredictable and thrilling.
            </p>
            <p class="seo-text">
              Keywords: yapyap game info, yapyap game, multiplayer horror game, voice activated spells, steam co-op, co-op horror, voice control co-op, spellcasting with mic, vandalism and stealth escape.
            </p>
          </div>
          <div class="what-visual card">
            <img src="/images/about-img.webp" alt="YAPYAP Game" class="what-image" />
          </div>
        </div>
      </section>

      <!-- Release Date / Countdown -->
      <section id="release" class="section release-section">
        <div class="container">
          <div class="release-hero">
            <p class="pill release-pill">Launch Countdown</p>
            <h2 class="section-title">Coming February 3, 2026</h2>
            <p class="release-description">
              YAPYAP launches on Steam (Windows). Master voice-activated spells, solve puzzles, and survive the tower with friends. Join the wishlist to get notified!
            </p>
          </div>
          
          <div class="countdown-container">
            <div class="countdown-grid">
              <div class="countdown-box">
                <div class="countdown-number">{{ daysLeft }}</div>
                <div class="countdown-unit">Days</div>
              </div>
              <div class="countdown-divider">:</div>
              <div class="countdown-box">
                <div class="countdown-number">{{ String(hoursLeft).padStart(2, '0') }}</div>
                <div class="countdown-unit">Hours</div>
              </div>
              <div class="countdown-divider">:</div>
              <div class="countdown-box">
                <div class="countdown-number">{{ String(minutesLeft).padStart(2, '0') }}</div>
                <div class="countdown-unit">Minutes</div>
              </div>
              <div class="countdown-divider">:</div>
              <div class="countdown-box">
                <div class="countdown-number">{{ String(secondsLeft).padStart(2, '0') }}</div>
                <div class="countdown-unit">Seconds</div>
              </div>
            </div>
          </div>

          <div class="release-info">
            <div class="release-meta">
              <span class="meta-item">Steam</span>
              <span class="meta-separator">·</span>
              <span class="meta-item">Windows</span>
              <span class="meta-separator">·</span>
              <span class="meta-item">Voice Co-op</span>
            </div>
          </div>

          <div class="release-actions">
            <a class="btn btn-primary release-btn" href="https://store.steampowered.com/app/3834090/YAPYAP/" target="_blank" rel="noopener">
              <span>Wishlist on Steam</span>
              <span class="btn-icon">→</span>
            </a>
            <a class="btn btn-ghost release-btn" href="https://store.steampowered.com/app/3834090/YAPYAP/" target="_blank" rel="noopener">
              <span>Try Demo</span>
            </a>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" class="section section-light">
        <div class="container">
          <div class="section-header">
            <p class="pill">faq</p>
            <h2 class="section-title">Common questions</h2>
          </div>
          <div class="faq-list">
            <div class="card faq-item">
              <h3>Voice recognition feels flaky?</h3>
              <p>Lower background noise, raise mic gain slightly, enunciate vowels, and test in settings. Some spells are syllable-sensitive.</p>
            </div>
            <div class="card faq-item">
              <h3>Monsters hit too hard?</h3>
              <p>Kite and avoid trading damage. Use Confuse/Disguise to break aggro; keep two escape routes and regroup points.</p>
            </div>
            <div class="card faq-item">
              <h3>Best objects to smash?</h3>
              <p>Instruments, lab gear, bathroom fixtures, and luxury decor tend to score higher. Tag props that only make noise vs. ones that award points.</p>
            </div>
            <div class="card faq-item">
              <h3>Can't hear friends in voice chat?</h3>
              <p>Check microphone permissions, verify input device in settings, reduce background noise, and ensure your mic isn't muted. See our troubleshooting guide for detailed fixes.</p>
            </div>
            <div class="card faq-item">
              <h3>How many players can play together?</h3>
              <p>YAPYAP supports up to 5-6 players in online co-op mode. Teams work together to infiltrate towers, solve puzzles, and escape monsters.</p>
            </div>
            <div class="card faq-item">
              <h3>What platforms is YAPYAP available on?</h3>
              <p>YAPYAP launches on Steam for Windows on February 3, 2026. A demo is available during Steam Next Fest events.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useGuideData } from '../composables/useGuideData'

const { guides, loading, loadHomeGuidesOnly } = useGuideData()

const homeGuides = computed(() => {
  return guides.value || []
})

const releaseDate = new Date('2026-02-03T00:00:00')
const daysLeft = ref(0)
const hoursLeft = ref(0)
const minutesLeft = ref(0)
const secondsLeft = ref(0)

const updateCountdown = () => {
  const now = new Date()
  const diff = releaseDate - now

  if (diff <= 0) {
    daysLeft.value = 0
    hoursLeft.value = 0
    minutesLeft.value = 0
    secondsLeft.value = 0
    return
  }

  daysLeft.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hoursLeft.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutesLeft.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  secondsLeft.value = Math.floor((diff % (1000 * 60)) / 1000)
}

let countdownInterval = null

onMounted(async () => {
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000) // Update every second
  await loadHomeGuidesOnly()
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>

<style scoped>
.home {
  color: var(--text);
  position: relative;
}

.section {
  padding: 40px 0;
}

.section-title {
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 0.01em;
  background: linear-gradient(120deg, var(--text), var(--accent));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px;
}

.section-subtitle {
  color: var(--muted);
  max-width: 720px;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 24px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--muted);
  font-size: 13px;
  letter-spacing: 0.02em;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 12px;
  font-weight: 700;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border 0.2s ease;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), #6d28d9);
  color: #0b0d16;
  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.35);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 30px rgba(109, 40, 217, 0.45);
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text);
  border-color: rgba(255, 255, 255, 0.12);
}

.btn-ghost:hover {
  transform: translateY(-1px);
  border-color: var(--accent);
  color: var(--accent);
}

.grid {
  display: grid;
  gap: 20px;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 10px;
  background: rgba(139, 92, 246, 0.12);
  color: #dcd7ff;
  font-size: 12px;
  border: 1px solid rgba(139, 92, 246, 0.25);
}

.home::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 12% 18%, rgba(132, 94, 247, 0.08), transparent 36%),
    radial-gradient(circle at 84% 10%, rgba(74, 222, 128, 0.08), transparent 32%),
    radial-gradient(circle at 70% 72%, rgba(59, 130, 246, 0.06), transparent 32%);
  z-index: 0;
}

.section {
  position: relative;
}

.section::before {
  content: '';
  position: absolute;
  inset: 12px 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.02), transparent 12%, transparent 88%, rgba(255, 255, 255, 0.02));
  z-index: 0;
  pointer-events: none;
}

.container {
  position: relative;
  z-index: 1;
}

.hero {
  padding-top: 64px;
  background:
    linear-gradient(180deg, rgba(7, 9, 18, 0.88), rgba(7, 9, 18, 0.92)),
    radial-gradient(circle at 10% 10%, rgba(132, 94, 247, 0.18), transparent 32%),
    radial-gradient(circle at 90% 0%, rgba(74, 222, 128, 0.16), transparent 34%),
    url('/images/bg.webp') center/cover no-repeat;
  border-bottom: 1px solid var(--border);
}

.hero-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: minmax(340px, 1.1fr) minmax(280px, 0.9fr);
}

.hero-text {
  background: linear-gradient(145deg, rgba(15, 20, 36, 0.92), rgba(18, 25, 48, 0.85));
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.45);
}

.hero-text h1 {
  font-size: 34px;
  line-height: 1.15;
  margin: 16px 0 12px 0;
}

.lead {
  color: var(--muted);
  margin-bottom: 20px;
}

.hero-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 24px 0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.hero-feature-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: start;
}

.feature-icon {
  font-size: 32px;
  filter: drop-shadow(0 4px 12px rgba(139, 92, 246, 0.3));
}

.feature-content h3 {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--text);
}

.feature-content p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 10px 0;
}

.feature-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.feature-link:hover {
  color: #dcd7ff;
  gap: 8px;
}

.hero-stats {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 12px;
  margin-top: 20px;
}

.label {
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 0.04em;
}

.value {
  display: block;
  font-weight: 700;
  margin-top: 4px;
}

.hero-media {
  display: grid;
  gap: 14px;
  background: linear-gradient(150deg, rgba(132, 94, 247, 0.08), rgba(74, 222, 128, 0.08));
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 4;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.35);
}

.video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}


.section-light {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.03));
}

.section-header {
  margin-bottom: 28px;
}

.pain-points-section {
  background: linear-gradient(180deg, rgba(7, 9, 18, 0.95), rgba(15, 20, 36, 0.98));
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.pain-points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.pain-point-card {
  background: linear-gradient(145deg, rgba(15, 20, 36, 0.95), rgba(18, 25, 48, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 28px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.pain-point-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), #6d28d9);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.pain-point-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: 0 20px 50px rgba(139, 92, 246, 0.25);
}

.pain-point-card:hover::before {
  opacity: 1;
}

.pain-icon {
  font-size: 48px;
  margin-bottom: 16px;
  filter: drop-shadow(0 4px 12px rgba(139, 92, 246, 0.3));
}

.pain-content h3 {
  font-size: 22px;
  font-weight: 800;
  margin: 0 0 12px 0;
  background: linear-gradient(120deg, var(--text), var(--accent));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.3;
}

.pain-description {
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 16px;
  font-size: 14px;
}

.pain-stats {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.stat-item {
  padding: 6px 12px;
  border-radius: 8px;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.25);
  color: #dcd7ff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.pain-solution-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--accent), #6d28d9);
  color: #0b0d16;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 16px rgba(109, 40, 217, 0.3);
}

.pain-solution-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.4);
}

.guide-grid {
  grid-template-columns: repeat(3, 1fr);
}

.guide-card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(150deg, rgba(15, 20, 36, 0.92), rgba(18, 25, 48, 0.88));
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.guide-image {
  width: 100%;
  height: 160px;
  background: linear-gradient(135deg, rgba(132, 94, 247, 0.2), rgba(74, 222, 128, 0.15));
  display: grid;
  place-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.guide-image-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-placeholder {
  font-size: 48px;
}

.loading-state,
.empty-state {
  padding: 40px;
  text-align: center;
}

.muted {
  color: var(--muted);
}

.guides-actions {
  margin-top: 32px;
  text-align: center;
}

.guide-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.guide-meta {
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
}

.guide-card h3 {
  margin: 0;
  font-size: 18px;
}

.guide-card p {
  color: var(--muted);
  margin: 0;
  flex: 1;
}

.guide-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  margin-top: auto;
}

.guide-link:hover {
  text-decoration: underline;
}

.trouble-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: center;
  background: linear-gradient(135deg, rgba(255, 149, 128, 0.15), rgba(139, 92, 246, 0.12));
  border: 1px solid rgba(255, 149, 128, 0.4);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 20px 50px rgba(255, 149, 128, 0.2);
  position: relative;
  overflow: hidden;
}

.trouble-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, rgba(255, 149, 128, 0.8), rgba(139, 92, 246, 0.8));
}

.trouble-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;
  align-items: start;
}

.trouble-icon-wrapper {
  position: relative;
}

.trouble-icon {
  font-size: 64px;
  filter: drop-shadow(0 8px 20px rgba(255, 149, 128, 0.4));
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.trouble-text {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.warning-pill {
  border-color: rgba(255, 149, 128, 0.6);
  color: #ffcbbf;
  background: rgba(255, 149, 128, 0.15);
}

.trouble-features {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
}

.trouble-feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  font-size: 14px;
}

.feature-check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(139, 92, 246, 0.2));
  border: 1px solid rgba(74, 222, 128, 0.4);
  color: #4ade80;
  font-weight: 700;
  font-size: 12px;
  flex-shrink: 0;
}

.trouble-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.trouble-action .btn {
  min-width: 200px;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.btn-arrow {
  font-size: 18px;
  transition: transform 0.2s ease;
}

.trouble-action .btn:hover .btn-arrow {
  transform: translateX(4px);
}

.trouble-meta-text {
  color: var(--muted);
  font-size: 12px;
  margin: 0;
  max-width: 200px;
}

.what-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: 1.1fr 0.9fr;
}

.what-text {
  background: linear-gradient(140deg, rgba(15, 20, 36, 0.92), rgba(18, 25, 48, 0.88));
}

.what-text p {
  color: var(--muted);
  line-height: 1.65;
  margin-bottom: 16px;
}

.seo-text {
  color: var(--muted);
  line-height: 1.65;
  margin-top: 12px;
  font-size: 13px;
}

.what-visual {
  display: grid;
  place-items: center;
  background: linear-gradient(120deg, rgba(139, 92, 246, 0.12), rgba(74, 222, 128, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  border-radius: 18px;
}

.what-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.release-section {
  background: linear-gradient(180deg, rgba(7, 9, 18, 0.95), rgba(15, 20, 36, 0.98));
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.release-hero {
  text-align: center;
  margin-bottom: 40px;
}

.release-pill {
  margin-bottom: 16px;
}

.release-description {
  color: var(--muted);
  max-width: 680px;
  margin: 16px auto 0;
  line-height: 1.6;
  font-size: 15px;
}

.countdown-container {
  margin: 40px 0;
  padding: 40px 20px;
  background: linear-gradient(145deg, rgba(132, 94, 247, 0.1), rgba(74, 222, 128, 0.08));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

.countdown-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), #6d28d9, #4ade80);
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

.countdown-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.countdown-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  padding: 24px 20px;
  background: linear-gradient(145deg, rgba(15, 20, 36, 0.95), rgba(18, 25, 48, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.countdown-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent);
  transition: left 0.5s ease;
}

.countdown-box:hover::before {
  left: 100%;
}

.countdown-box:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: 0 16px 40px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.countdown-number {
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--accent), #6d28d9, #4ade80);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
}

.countdown-unit {
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.countdown-divider {
  font-size: 32px;
  color: var(--accent);
  font-weight: 800;
  opacity: 0.6;
  padding: 0 4px;
}

.release-info {
  text-align: center;
  margin: 32px 0 24px;
}

.release-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.meta-item {
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
}

.meta-separator {
  color: var(--muted);
  opacity: 0.4;
}

.release-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;
}

.release-btn {
  min-width: 180px;
  padding: 16px 28px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-icon {
  font-size: 18px;
  transition: transform 0.2s ease;
}

.release-btn:hover .btn-icon {
  transform: translateX(4px);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item h3 {
  margin-bottom: 6px;
}

.faq-item p {
  color: var(--muted);
  margin: 0;
}

@media (max-width: 1024px) {
  .hero-grid,
  .what-grid {
    grid-template-columns: 1fr;
  }

  .release-description {
    font-size: 14px;
  }

  .trouble-card {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .trouble-content {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }

  .trouble-icon-wrapper {
    display: flex;
    justify-content: center;
  }

  .trouble-action {
    align-items: center;
  }

  .hero-text h1 {
    font-size: 30px;
  }

  .hero-features {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 16px;
  }

  .hero-feature-item {
    grid-template-columns: auto 1fr;
    gap: 12px;
    text-align: left;
  }

  .feature-icon {
    font-size: 28px;
  }

  .guide-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .pain-points-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .countdown-grid {
    gap: 12px;
  }

  .countdown-box {
    min-width: 90px;
    padding: 20px 16px;
  }

  .countdown-number {
    font-size: 40px;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 64px 0;
  }

  .hero-text h1 {
    font-size: 26px;
  }

  .hero-features {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 16px;
  }

  .hero-feature-item {
    grid-template-columns: auto 1fr;
  }

  .feature-icon {
    font-size: 24px;
  }

  .feature-content h3 {
    font-size: 16px;
  }

  .feature-content p {
    font-size: 13px;
  }

  .countdown-container {
    padding: 32px 16px;
    margin: 32px 0;
  }

  .countdown-grid {
    gap: 8px;
  }

  .countdown-box {
    min-width: 70px;
    padding: 16px 12px;
  }

  .countdown-number {
    font-size: 32px;
  }

  .countdown-unit {
    font-size: 10px;
  }

  .countdown-divider {
    font-size: 24px;
    padding: 0 2px;
  }

  .release-btn {
    min-width: 100%;
    width: 100%;
  }

  .guide-grid {
    grid-template-columns: 1fr;
  }

  .pain-points-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .pain-point-card {
    padding: 24px;
  }

  .pain-content h3 {
    font-size: 20px;
  }

  .pain-icon {
    font-size: 40px;
  }

  .trouble-card {
    padding: 24px;
  }

  .trouble-icon {
    font-size: 48px;
  }

  .trouble-action .btn {
    min-width: 100%;
  }
}
</style>
