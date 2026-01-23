<template>
  <div id="top" class="home">
    <main>
      <!-- Hero -->
      <section id="hero" class="section hero">
        <div class="container hero-grid">
          <div class="hero-text card">
            <div class="pill">Voice Spells · Co-op Chaos · Light Horror</div>
            <h1>YAPYAP Game Ultimate Guide & Wiki</h1>
            <p class="lead">"Master the Spells, Solve the Puzzles, and Fix Your Mic."</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="https://store.steampowered.com/app/3834090/YAPYAP/" target="_blank" rel="noopener">
                Wishlist on Steam
              </a>
              <a class="btn btn-ghost" href="#guides">See guides</a>
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
            <div class="media-overlay">
              <p class="meta">Steam Next Fest demo · Heavily discussed</p>
              <h3>"Say the spell, smash the tower, stay alive."</h3>
              <p class="meta">
                Up to 5-6 players · Vandalism points · Voice-triggered spells · Patrol monsters to evade
              </p>
              <div class="tags">
                <span class="tag">Voice Spells</span>
                <span class="tag">Co-op Chaos</span>
                <span class="tag">Run & Hide</span>
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

      <!-- Quick Access Cards: Spells / Puzzle / Wiki -->
      <section id="quick-access" class="section section-light">
        <div class="container">
          <div class="section-header">
            <p class="pill">Quick Access</p>
            <h2 class="section-title">Navigate to Essential Guides</h2>
            <p class="section-subtitle">Jump to the most-searched topics: pronunciation, puzzle solutions, crafting & items.</p>
          </div>
          <div class="grid feature-cards">
            <a href="/spells" class="card feature-card">
              <div class="feature-icon">🪄</div>
              <div>
                <p class="pill">Core</p>
                <h3>Spells & Pronunciation</h3>
                <p>All spell commands, MP3 pronunciation demos, and voice-recognition tuning tips.</p>
              </div>
            </a>
            <a href="/puzzle/scales-room" class="card feature-card">
              <div class="feature-icon">⚖️</div>
              <div>
                <p class="pill">Pain Point</p>
                <h3>Puzzle Solutions</h3>
                <p>Balance/scale puzzle diagrams, how to revive teammates, and survival routing.</p>
              </div>
            </a>
            <a href="/wiki" class="card feature-card">
              <div class="feature-icon">🧪</div>
              <div>
                <p class="pill">Wiki</p>
                <h3>Crafting & Items</h3>
                <p>Crafting recipes, wand stats, potion effects, and a compact monster compendium.</p>
              </div>
            </a>
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
          <div class="grid guide-grid">
            <article class="card guide-card">
              <div class="guide-image">
                <div class="image-placeholder">📖</div>
              </div>
              <div class="guide-content">
                <div class="guide-meta">
                  <span class="tag">Starter</span>
                  <span class="tag">Must-read</span>
                </div>
                <h3>Voice Calibration & Spell Reliability</h3>
                <p>Step-by-step mic tuning, syllable-sensitive spells, and ambient noise control.</p>
                <a href="/guide/voice-calibration" class="guide-link">Read more →</a>
              </div>
            </article>
            <article class="card guide-card">
              <div class="guide-image">
                <div class="image-placeholder">⚖️</div>
              </div>
              <div class="guide-content">
                <div class="guide-meta">
                  <span class="tag">Puzzle</span>
                </div>
                <h3>Scale Puzzle & Safe Resurrections</h3>
                <p>Diagrammed solutions for the balance puzzle, plus reviving teammates without wiping.</p>
                <a href="/guide/scale-puzzle" class="guide-link">Read more →</a>
              </div>
            </article>
            <article class="card guide-card">
              <div class="guide-image">
                <div class="image-placeholder">🗺️</div>
              </div>
              <div class="guide-content">
                <div class="guide-meta">
                  <span class="tag">Co-op</span>
                </div>
                <h3>High-Value Smash Routes (Co-op)</h3>
                <p>Instrument → lab gear → bathrooms → luxury decor, with two fallback exits.</p>
                <a href="/guide/smash-routes" class="guide-link">Read more →</a>
              </div>
            </article>
            <article class="card guide-card">
              <div class="guide-image">
                <div class="image-placeholder">✨</div>
              </div>
              <div class="guide-content">
                <div class="guide-meta">
                  <span class="tag">Spells</span>
                </div>
                <h3>Spell Combo Toolkit</h3>
                <p>Push/Pull separation, Levitate+Teleport for speed, Disguise/Confuse to reset aggro.</p>
                <a href="/guide/spell-combo" class="guide-link">Read more →</a>
              </div>
            </article>
            <article class="card guide-card">
              <div class="guide-image">
                <div class="image-placeholder">👥</div>
              </div>
              <div class="guide-content">
                <div class="guide-meta">
                  <span class="tag">Team</span>
                </div>
                <h3>Team Roles & Comms Pack</h3>
                <p>Scout, Bait, Demolition, Timekeeper, Support — callout templates for fast runs.</p>
                <a href="/guide/team-roles" class="guide-link">Read more →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Troubleshooting -->
      <section id="troubleshoot" class="section">
        <div class="container">
          <div class="trouble-card">
            <div>
              <p class="pill warning-pill">Troubleshooting</p>
              <h2 class="section-title">"Can't Hear Friends?"</h2>
              <p class="section-subtitle">
                Microphone not working? Voice delay? Check our Fix Guide to get chatting instantly.
              </p>
            </div>
            <div class="trouble-meta">
              <span class="tag">#9 "yapyap can't hear friends"</span>
              <a class="btn btn-primary" href="/troubleshooting/mic-fix">Open Fix Guide</a>
            </div>
          </div>
        </div>
      </section>

      <!-- What is YAPYAP? (SEO) -->
      <section id="what" class="section section-light">
        <div class="container what-grid">
          <div class="what-text card">
            <p class="pill">What is YAPYAP?</p>
            <h2 class="section-title">Co-op, Horror, Voice Control</h2>
            <p>
              YAPYAP is a multiplayer horror game on Steam that leans into voice activated spells and co-op vandalism. Players act as minions infiltrating a rival tower, smashing high-value objects, solving puzzles, and escaping monsters. This multiplayer horror game combines voice activated spells with cooperative gameplay, creating a unique steam co-op experience where teams of 5-6 players work together to cause chaos and escape alive.
            </p>
            <p>
              The game's core mechanic revolves around voice control co-op, where players must speak spell commands into their microphones to trigger magical effects. This voice activated spells system creates an immersive spellcasting with mic experience that sets YAPYAP apart from traditional co-op horror titles. The combination of vandalism and stealth escape mechanics makes each run unpredictable and thrilling.
            </p>
            <p class="seo-text">
              Keywords: yapyap game info, yapyap game, multiplayer horror game, voice activated spells, steam co-op, co-op horror, voice control co-op, spellcasting with mic, vandalism and stealth escape.
            </p>
          </div>
          <div class="what-visual card">
            <div class="what-illustration">🎴</div>
            <p class="meta">Illustrative cover — swap with gameplay art later.</p>
          </div>
        </div>
      </section>

      <!-- Release Date / Countdown -->
      <section id="release" class="section">
        <div class="container release-card card">
          <div>
            <p class="pill">yapyap release date</p>
            <h2 class="section-title">Countdown to Launch</h2>
            <p class="section-subtitle">
              YAPYAP launches on Steam (Windows) on February 3, 2026. Join the wishlist to get notified when it's available!
            </p>
            <div class="countdown-panel card">
              <div class="countdown">
                <div class="countdown-item">
                  <span class="countdown-value">{{ daysLeft }}</span>
                  <span class="countdown-label">Days</span>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-item">
                  <span class="countdown-value">{{ String(hoursLeft).padStart(2, '0') }}</span>
                  <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-item">
                  <span class="countdown-value">{{ String(minutesLeft).padStart(2, '0') }}</span>
                  <span class="countdown-label">Minutes</span>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-item">
                  <span class="countdown-value">{{ String(secondsLeft).padStart(2, '0') }}</span>
                  <span class="countdown-label">Seconds</span>
                </div>
              </div>
              <div class="countdown-sub">
                <span class="dot"></span>
                <span>Feb 3, 2026 · Steam (Windows) · Voice-activated co-op</span>
              </div>
            </div>
            <div class="release-actions">
              <a class="btn btn-primary" href="https://store.steampowered.com/app/3834090/YAPYAP/" target="_blank" rel="noopener">
                Wishlist on Steam
              </a>
              <a class="btn btn-ghost" href="https://store.steampowered.com/app/3834090/YAPYAP/" target="_blank" rel="noopener">
                Try Demo
              </a>
            </div>
          </div>
          <div class="release-art">
            <div class="orb orb-1"></div>
            <div class="orb orb-2"></div>
            <div class="release-badge">
              <span class="badge-label">Steam</span>
              <strong>Coming Soon</strong>
              <p>Feb 3, 2026</p>
            </div>
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
import { ref, onMounted, onUnmounted } from 'vue'

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

onMounted(() => {
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000) // Update every second
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
  padding: 88px 0;
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
  margin-bottom: 32px;
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

.hero-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
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
  padding-top: 56.25%;
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

.media-overlay {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.meta {
  color: var(--muted);
  font-size: 13px;
}

.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.section-light {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.03));
}

.section-header {
  margin-bottom: 28px;
}

.feature-cards {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.feature-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}

.feature-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 24px;
  background: rgba(139, 92, 246, 0.16);
  border: 1px solid rgba(139, 92, 246, 0.25);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.guide-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
}

.image-placeholder {
  font-size: 48px;
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
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
  align-items: center;
  background: linear-gradient(135deg, rgba(255, 149, 128, 0.12), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 149, 128, 0.35);
  border-radius: 16px;
  padding: 22px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

.warning-pill {
  border-color: rgba(255, 149, 128, 0.55);
  color: #ffcbbf;
  background: rgba(255, 149, 128, 0.12);
}

.trouble-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
  flex-wrap: wrap;
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
  border: 1px dashed rgba(255, 255, 255, 0.12);
}

.what-illustration {
  font-size: 56px;
}

.release-card {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
  background: linear-gradient(135deg, rgba(132, 94, 247, 0.08), rgba(7, 9, 18, 0.92));
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.countdown-panel {
  margin: 18px 0;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(145deg, rgba(132, 94, 247, 0.12), rgba(74, 222, 128, 0.08));
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
  text-align: center;
}

.countdown {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 82px;
  padding: 10px 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
}

.countdown-value {
  font-size: 34px;
  font-weight: 900;
  letter-spacing: 0.02em;
  background: linear-gradient(135deg, var(--accent), #6d28d9);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.countdown-label {
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.countdown-separator {
  font-size: 22px;
  color: var(--accent);
  font-weight: 800;
  padding: 0 2px;
}

.countdown-sub {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  color: var(--muted);
  font-size: 13px;
}

.countdown-sub .dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.8);
}

.release-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.release-art {
  position: relative;
  min-height: 240px;
  background: radial-gradient(circle at 30% 30%, rgba(132, 94, 247, 0.45), rgba(7, 9, 18, 0.9));
  border-radius: 18px;
  border: 1px solid var(--border);
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(14px);
}

.orb-1 {
  width: 170px;
  height: 170px;
  background: rgba(132, 94, 247, 0.45);
  top: 14%;
  left: 10%;
}

.orb-2 {
  width: 200px;
  height: 200px;
  background: rgba(74, 222, 128, 0.32);
  bottom: 10%;
  right: 6%;
}

.release-badge {
  position: absolute;
  inset: 18px;
  padding: 18px;
  border-radius: 14px;
  background: rgba(7, 9, 18, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

.badge-label {
  color: var(--muted);
  letter-spacing: 0.08em;
}

.faq-list {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  .release-card,
  .trouble-card,
  .what-grid {
    grid-template-columns: 1fr;
  }

  .hero-text h1 {
    font-size: 30px;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 64px 0;
  }

  .hero-text h1 {
    font-size: 26px;
  }

  .countdown-value {
    font-size: 30px;
  }

  .countdown-item {
    min-width: 74px;
  }
}
</style>
