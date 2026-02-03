<template>
  <div id="top" class="home">
    <main>
      <!-- Hero -->
      <section id="hero" class="section hero">
        <div class="container hero-grid">
          <div class="hero-text card">
            <div class="pill">Voice Spells · Co-op Chaos · Light Horror</div>
            <h1>YAPYAP Game Ultimate Guide & Wiki</h1>
            <p class="lead">Master the <a href="/spell-generator">spell</a>, solve the <a href="/puzzles/ball-puzzle">puzzle</a>, and escape the tower. The ultimate <strong>YAPYAP game</strong> resource for voice commands, co-op tips, and wiki.</p>
            
            <div class="hero-features">
              <div class="hero-feature-item">
                <div class="feature-icon">🎬</div>
                <div class="feature-content">
                  <p class="feature-title">Spell Generator</p>
                  <p>Practice <strong>YAPYAP game</strong> voice commands with video tutorials. Master pronunciation for every spell before you play.</p>
                  <a href="/spell-generator" class="feature-link">Try Spell Generator →</a>
                </div>
              </div>
              <div class="hero-feature-item">
                <div class="feature-icon">📚</div>
                <div class="feature-content">
                  <p class="feature-title">Complete Wiki</p>
                  <p>Browse <a href="/wiki/wands">wands</a>, <a href="/wiki/bestiary">monsters</a>, <a href="/wiki/potions">potions</a>, and items. Find stats, crafting recipes, and survival strategies for the YAPYAP game.</p>
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
              <template v-if="!heroVideoLoaded">
                <div
                  class="video-mask"
                  :style="{ backgroundImage: 'url(https://img.youtube.com/vi/vzl2ljQ8OaQ/hqdefault.jpg)' }"
                >
                  <div class="video-mask-overlay"></div>
                  <button type="button" class="video-play-btn" aria-label="Play YAPYAP Trailer" @click="heroVideoLoaded = true">
                    <span class="play-icon"></span>
                  </button>
                </div>
              </template>
              <iframe
                v-else
                src="https://www.youtube.com/embed/vzl2ljQ8OaQ?autoplay=1"
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
            <h2 class="section-title">YAPYAP Game Trainer</h2>
            <p class="section-subtitle">We've solved the most frustrating problems players face. Get instant answers.</p>
          </div>
          <div class="pain-points-grid">
            <div class="pain-point-card card">
              <div class="pain-icon">🎤</div>
              <div class="pain-content">
                <h3>"My spells never work!"</h3>
                <p class="pain-description">In the <strong>YAPYAP game</strong>, voice recognition keeps failing? Learn the exact pronunciation for every spell with audio demos on our <a href="/spells">Spells</a> page.</p>
                <div class="pain-stats">
                  <span class="stat-item">All spells</span>
                  <span class="stat-item">Audio guides</span>
                </div>
                <a href="/spells" class="pain-solution-btn">Fix Spell Recognition →</a>
              </div>
            </div>
            <div class="pain-point-card card">
              <div class="pain-icon">🎬</div>
              <div class="pain-content">
                <h3>"How do I say this spell?"</h3>
                <p class="pain-description">Not sure about <strong>YAPYAP game</strong> spell pronunciation? Watch video demos and practice with our <a href="/spell-generator">Spell Generator</a> before you play.</p>
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
                <p class="pain-description">Need wand stats, potion recipes, or monster info for the YAPYAP game? Our <a href="/wiki">Wiki</a> has the complete database: items, effects, and crafting guides.</p>
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
            <h2 class="section-title">YAPYAP Game Latest Guides</h2>
            <p class="section-subtitle">
              Fresh <strong>YAPYAP game</strong> updates from our <a href="https://www.youtube.com/watch?v=FAIY5sW9aK4&list=PLRDGNl7G_p442o1bzxUpvwEkTBpK4x8PH">YouTube channel</a> and demo insights. <a href="/guides">View all guides</a>.
            </p>
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
                <a :href="`/guides/${guide.addressBar}`" class="guide-link">Read more →</a>
              </div>
            </article>
          </div>
          <!-- Empty State -->
          <div v-if="!loading && homeGuides.length === 0" class="empty-state card">
            <p class="muted">No guides available yet. Check back soon!</p>
          </div>
          <!-- View All Link -->
          <div v-if="!loading && homeGuides.length > 0" class="guides-actions">
            <a href="/guides" class="btn btn-ghost">View All Guides</a>
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
                <h2 class="section-title">YAPYAP can't hear friends</h2>
                <p class="section-subtitle">
                  <strong>YAPYAP game</strong> voice recognition failing? Microphone problems? Learn the correct pronunciation for every spell with <a href="/spells">audio demos</a> and <a href="/spell-generator">practice mode</a>. Fix "yapyap can't hear friends" fast.
                </p>
                <div class="trouble-features">
                  <div class="trouble-feature-item">
                    <span class="feature-check">✓</span>
                    <span>100+ <strong>YAPYAP game</strong> spell pronunciations with audio</span>
                  </div>
                  <div class="trouble-feature-item">
                    <span class="feature-check">✓</span>
                    <span>Microphone setup & troubleshooting for YAPYAP game</span>
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
            <h2 class="section-title">What is the YAPYAP Game?</h2>
            <p>
              The <strong>YAPYAP game</strong> is a multiplayer horror game on Steam that leans into voice-activated spells and co-op vandalism. Players act as minions infiltrating a rival tower, smashing high-value objects, solving <a href="/puzzles/ball-puzzle">puzzles</a>, and escaping monsters. Use our <a href="/spells">Spells</a> and <a href="/wiki">Wiki</a> to master the <strong>YAPYAP game</strong>.
            </p>
            <p>
              The YAPYAP game core mechanic revolves around voice control co-op: speak spell commands into your mic to trigger magical effects. This voice-activated spell system creates an immersive spellcasting experience. Check the <a href="/spell-generator">Spell Generator</a> and <a href="/guides">Guides</a> for tips. Vandalism and stealth escape mechanics make each run unpredictable and thrilling.
            </p>
            <p class="seo-text">
              Keywords: <strong>yapyap game</strong>, yapyap game info, multiplayer horror, voice activated spells, steam co-op, co-op horror, spellcasting with mic, vandalism and stealth escape.
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
            <h2 class="section-title">YAPYAP Release Date</h2>
            <p class="release-description">
              <strong>YAPYAP game release date:</strong> February 3, 2026. <strong>Steam YAPYAP game</strong> launches with voice-activated spells, co-op gameplay, and tower survival. Master <a href="/spells">voice commands</a>, solve <a href="/puzzles/ball-puzzle">puzzles</a>, and escape with friends. See <a href="#system-requirements">system requirements</a> below. Join the wishlist to get notified!
            </p>
          </div>
          
          <div class="release-info">
            <div class="release-meta">
              <span class="meta-item">Steam</span>
              <span class="meta-separator">·</span>
              <span class="meta-item">Voice Co-op</span>
            </div>
          </div>

          <!-- Countdown -->
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

          <!-- System Requirements -->
          <div id="system-requirements" class="system-requirements card">
            <h3 class="requirements-title">YAPYAP Game System Requirements</h3>
            <div class="requirements-grid">
              <div class="requirement-item">
                <span class="requirement-label">OS</span>
                <span class="requirement-value">Windows® 10</span>
              </div>
              <div class="requirement-item">
                <span class="requirement-label">Processor</span>
                <span class="requirement-value">Core i5 6600</span>
              </div>
              <div class="requirement-item">
                <span class="requirement-label">Memory</span>
                <span class="requirement-value">8 GB RAM</span>
              </div>
              <div class="requirement-item">
                <span class="requirement-label">Graphics</span>
                <span class="requirement-value">GTX 970</span>
              </div>
              <div class="requirement-item">
                <span class="requirement-label">DirectX</span>
                <span class="requirement-value">Version 10</span>
              </div>
              <div class="requirement-item">
                <span class="requirement-label">Network</span>
                <span class="requirement-value">Broadband Internet</span>
              </div>
              <div class="requirement-item">
                <span class="requirement-label">Storage</span>
                <span class="requirement-value">2 GB available</span>
              </div>
            </div>
          </div>

          <div class="release-actions">
            <a class="btn btn-primary release-btn" href="https://store.steampowered.com/app/3834090/YAPYAP/" target="_blank" rel="noopener noreferrer nofollow">
              <span>Wishlist on Steam</span>
              <span class="btn-icon">→</span>
            </a>
            <a class="btn btn-ghost release-btn" href="https://store.steampowered.com/app/3834090/YAPYAP/" target="_blank" rel="noopener noreferrer nofollow">
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
              <h3>YAPYAP Can't Hear Friends?</h3>
              <p>If you can't hear friends in the <strong>YAPYAP game</strong>, check mic permissions, verify input device in settings, and ensure your mic isn't muted. Visit our <a href="/spells">Spells</a> and <a href="/spell-generator">Spell Generator</a> for voice command fixes and pronunciation demos.</p>
            </div>
            <div class="card faq-item">
              <h3>How to Start in YAPYAP?</h3>
              <p>If you're searching <span class="mono">how to start in yapyap</span>, begin by enabling "Hold Right Mouse Button for Spell" in Accessibility if your mic fails. Learn controls, inventory, and spell casting in our <a href="/guides">Getting Started</a> and <a href="/wiki">Wiki</a> guides.</p>
            </div>
            <div class="card faq-item">
              <h3>YAPYAP How to Revive Players?</h3>
              <p>If you're looking for <span class="mono">yapyap how to revive players</span>, prioritize team safety first: clear nearby threats, regroup, then attempt the revive when voice-casting and movement are stable. For co-op survival and recovery tips, read our <a href="/guides">Guides</a> and learn reliable spell control on the <a href="/spells">Spells</a> page.</p>
            </div>
            <div class="card faq-item">
              <h3>When Does YAPYAP Release?</h3>
              <p>The <strong>YAPYAP game</strong> release date is February 3, 2026 on Steam for Windows. It features voice-activated spells, co-op, and tower survival. See <a href="#release">release countdown</a> and <a href="#system-requirements">system requirements</a> above. Join the wishlist to get notified!</p>
            </div>
            <div class="card faq-item">
              <h3>How to Do the Scale Puzzle in YAPYAP?</h3>
              <p>The scale puzzle in the <strong>YAPYAP game</strong> requires balancing objects on scales to unlock doors. Use inventory items to match weight. See our <a href="/puzzles/ball-puzzle">Ball Puzzle</a>, <a href="/puzzles/balance-puzzle">Balance Puzzle</a>, and <a href="/puzzles/door-puzzle">Door Puzzle</a> guides for solutions.</p>
            </div>
            <div class="card faq-item">
              <h3>How Many Players Can Play Together?</h3>
              <p>The <strong>YAPYAP game</strong> supports up to 5 players in online co-op. Teams infiltrate towers, solve puzzles, and escape using <a href="/spells">voice spells</a> and <a href="/guides">strategies</a>.</p>
            </div>
            <div class="card faq-item">
              <h3>What Platforms is YAPYAP Available On?</h3>
              <p>The <strong>YAPYAP game</strong> is on Steam for Windows (Feb 3, 2026). A demo runs during Steam Next Fest. Check <a href="#system-requirements">system requirements</a> above. Our <a href="/wiki">Wiki</a> covers items and mechanics.</p>
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

const heroVideoLoaded = ref(false)
const releaseDate = new Date('2026-02-04T00:00:00')
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
  padding: 20px;
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
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 0%, #f5f3ff 30%, #e9d5ff 60%, #ddd6fe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 16px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 32px rgba(139, 92, 246, 0.35)) drop-shadow(0 0 48px rgba(196, 181, 253, 0.25));
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

.feature-content .feature-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--text);
}

.feature-content .feature-description {
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

.video-mask {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: rgba(15, 20, 36, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-mask-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
  pointer-events: none;
}

.video-play-btn {
  position: relative;
  z-index: 1;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.9);
  background: rgba(139, 92, 246, 0.85);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.5);
}

.video-play-btn:hover {
  transform: scale(1.08);
  background: rgba(139, 92, 246, 0.95);
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.6);
}

.video-play-btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

.play-icon {
  width: 0;
  height: 0;
  margin-left: 6px;
  border-style: solid;
  border-width: 14px 0 14px 24px;
  border-color: transparent transparent transparent rgba(255, 255, 255, 0.95);
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
  aspect-ratio: 16 / 9;
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  max-height: calc(1.4em * 2);
}

.guide-card p {
  color: var(--muted);
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  max-height: calc(1.5em * 3);
  word-wrap: break-word;
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

.release-description strong {
  color: var(--text);
  font-weight: 600;
}

.countdown-container {
  margin: 40px auto;
  max-width: 900px;
  padding: 48px 32px;
  background: linear-gradient(145deg, rgba(132, 94, 247, 0.12), rgba(74, 222, 128, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.12);
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

.system-requirements {
  margin: 32px auto 0;
  max-width: 900px;
  padding: 40px;
  background: linear-gradient(150deg, rgba(15, 20, 36, 0.95), rgba(18, 25, 48, 0.92));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.requirements-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 28px 0;
  color: var(--text);
  text-align: center;
  letter-spacing: -0.01em;
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.requirement-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.requirement-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(139, 92, 246, 0.4);
  transform: translateY(-2px);
}

.requirement-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.requirement-value {
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  line-height: 1.4;
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
  line-height: 1.6;
}

.faq-item a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.faq-item a:hover {
  color: var(--accent);
  text-decoration: underline;
}

.lead a,
.section-subtitle a,
.pain-description a,
.what-text a,
.release-description a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.lead a:hover,
.section-subtitle a:hover,
.pain-description a:hover,
.what-text a:hover,
.release-description a:hover {
  text-decoration: underline;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .hero-grid,
  .what-grid {
    grid-template-columns: 1fr;
  }

  .guide-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .pain-points-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  /* 板块间距 */
  .section {
    padding: 0.8rem 0;
  }

  /* card padding */
  .card {
    padding: 0.8rem;
  }

  /* 容器 padding */
  .hero-features {
    padding: 0.8rem;
  }

  .pain-point-card {
    padding: 0.8rem;
  }

  .guide-content {
    padding: 0.8rem;
  }

  .trouble-card {
    padding: 0.8rem;
  }

  .countdown-container {
    padding: 0.8rem;
  }

  .system-requirements {
    padding: 0.8rem;
  }

  .requirement-item {
    padding: 0.8rem;
  }

  .loading-state,
  .empty-state {
    padding: 0.8rem;
  }

  /* h1 - 使用class选择器 */
  .hero-text h1 {
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* h2 - 使用class选择器 */
  .section-title {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* h3 - 使用class选择器 */
  .pain-content h3 {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .guide-content h3 {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .faq-item h3 {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .requirements-title {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* h4 - 使用class选择器 */
  .feature-content .feature-title {
    font-size: 0.9rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* p - 使用class选择器 */
  .lead {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .section-subtitle {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .pain-description {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .feature-content .feature-description {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .what-text p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .release-description {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .guide-content p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .faq-item p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* 布局调整 */
  .hero-grid,
  .what-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .guide-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .pain-points-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .trouble-card {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .trouble-content {
    grid-template-columns: 1fr;
    gap: 0.7rem;
  }

  .hero-features {
    grid-template-columns: 1fr;
    gap: 0.7rem;
  }

  .hero-feature-item {
    gap: 0.7rem;
  }

  .section-header {
    margin-bottom: 0.7rem;
  }

  .countdown-grid {
    gap: 0.3rem;
  }

  .countdown-container {
    margin: 0.8rem auto;
  }

  .countdown-box {
    min-width: auto;
    padding: 0.5rem;
  }

  .countdown-number {
    font-size: 1.2rem;
    line-height: 1.2;
    margin-bottom: 0.2rem;
  }

  .countdown-unit {
    font-size: 0.7rem;
    line-height: 1.2;
  }

  .countdown-divider {
    font-size: 1.2rem;
    padding: 0;
  }

  .requirements-grid {
    grid-template-columns: 1fr;
    gap: 0.7rem;
  }
}

</style>
