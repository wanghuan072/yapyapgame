<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <p class="pill">Voice Commands · Database · Pronunciation Guide</p>
        <h1 class="title">YAPYAP Spells List &amp; Pronunciation Guide</h1>
        <p class="intro">
          The complete YAPYAP spells list with voice commands, pronunciation, and quick “listen”
          demos—plus common misheard phrases to improve voice recognition.
        </p>
      </div>
    </section>
    <main class="container">
      <!-- Spells -->
      <section id="spells-list" class="section">
        <div class="section-head">
          <h2 class="section-title">The Complete YAPYAP Spells List</h2>
          <p class="section-subtitle">
            This comprehensive <strong>YAPYAP Spells List</strong> includes all voice commands, effects, and tips. Click <a href="/spell-generator">Spell Generator</a> to hear pronunciation demos and practice voice commands with audio guides. For wand details, check our <a href="/wiki/wands">Wands Wiki</a>, or explore <a href="/guides">YAPYAP guides</a> for advanced strategies.
          </p>
        </div>

        <!-- Wand Tables -->
        <div v-for="wand in wands" :key="wand.id" class="wand-section">
          <div class="wand-header">
            <h3 class="wand-title">{{ wand.name }}</h3>
            <p class="wand-subtitle" v-if="wand.subtitle">{{ wand.subtitle }}</p>
          </div>

          <!-- Desktop table -->
          <div class="table card" :aria-label="`${wand.name} spells list`">
            <div class="row head">
              <div class="icon">Icon</div>
              <div class="spell">Spell</div>
              <div class="effect">Effect</div>
              <div class="tips">Tips</div>
              <div class="action">Action</div>
            </div>

            <div class="row" v-for="s in wand.spells" :key="s.spell">
              <div class="c icon">{{ s.icon }}</div>
              <div class="c spell">
                <strong>{{ s.spell }}</strong>
                <div class="small" v-if="s.misheard">
                  Misheard as: <span class="mono">{{ s.misheard }}</span>
                </div>
              </div>
              <div class="c effect">{{ s.effect }}</div>
              <div class="c tips">
                <div>{{ s.tips }}</div>
                <div class="small muted" v-if="s.misheardTip">{{ s.misheardTip }}</div>
              </div>
              <div class="c action">
                <a
                  :href="`/spell-generator?spell=${encodeURIComponent(
                    s.spell.toLowerCase().replace(/\s+/g, '-')
                  )}`"
                  class="btn btn-ghost btn-sm"
                >
                  Spell Generator
                </a>
              </div>
            </div>
          </div>

          <!-- Mobile cards -->
          <div class="mobile-list">
            <article
              class="card spell-card"
              v-for="s in wand.spells"
              :key="`m-${wand.id}-${s.spell}`"
            >
              <div class="spell-top">
                <div class="spell-icon">{{ s.icon }}</div>
                <div class="spell-main">
                  <h3>{{ s.spell }}</h3>
                </div>
              </div>
              <div class="spell-body">
                <div class="spell-row">
                  <span class="label">Effect:</span>
                  <span>{{ s.effect }}</span>
                </div>
                <div class="spell-row">
                  <span class="label">Tips:</span>
                  <span>{{ s.tips }}</span>
                </div>
                <div class="spell-row" v-if="s.misheard">
                  <span class="label warn">Misheard:</span>
                  <span class="mono">{{ s.misheard }}</span>
                </div>
                <div class="spell-row" v-if="s.misheardTip">
                  <span class="label warn">Note:</span>
                  <span class="small muted">{{ s.misheardTip }}</span>
                </div>
                <div class="spell-actions">
                  <a
                    :href="`/spell-generator?spell=${encodeURIComponent(
                      s.spell.toLowerCase().replace(/\s+/g, '-')
                    )}`"
                    class="btn btn-ghost btn-sm"
                    >View</a
                  >
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Mic Tester -->
      <section id="mic-tester" class="section mic card">
        <div class="mic-head">
          <div>
            <h2 class="section-title">Mic Tester</h2>
            <p class="section-subtitle">Can't cast spells from the <strong>YAPYAP Spells List</strong>? Test your mic volume here! If spells from the <strong>YAPYAP Spells List</strong> keep failing, use this tool to diagnose microphone issues.</p>
          </div>
          <div class="mic-actions">
            <button class="btn btn-primary" @click="toggleMic" :disabled="isMicBusy">
              {{ micEnabled ? 'Stop Test' : 'Start Mic Test' }}
            </button>
          </div>
        </div>

        <div class="meter-wrap" role="status" aria-live="polite">
          <div class="meter">
            <div class="meter-fill" :style="{ width: `${Math.round(level * 100)}%` }"></div>
          </div>
          <div class="meter-meta">
            <span class="tag">Input level: {{ Math.round(level * 100) }}%</span>
            <span class="tag" v-if="micEnabled">Listening… speak loudly</span>
            <span class="tag warn" v-else>Not listening</span>
          </div>
          <p class="error" v-if="micError">{{ micError }}</p>
          <p class="hint">
            Tip: if the bar barely moves, check Windows privacy settings, the correct input device,
            and in-game mic gain.
          </p>
        </div>
      </section>

      <!-- Hidden Interactions & Physics -->
      <section id="hidden-interactions" class="section card">
        <div class="section-head">
          <h2 class="section-title">YAPYAP Hidden Spell Interactions & Physics</h2>
          <p class="section-subtitle">
            Many spells from the <strong>YAPYAP Spells List</strong> affect objects, not just enemies. Discover these hidden mechanics to gain an edge. These interactions aren't obvious when browsing the <strong>YAPYAP Spells List</strong>, but they can save you time in <a href="/puzzle/ball-puzzle">puzzle rooms</a> and <a href="/puzzle/door-puzzle">treasure vaults</a>.
          </p>
        </div>

        <div class="interactions-list">
          <div class="interaction-item">
            <h3 class="interaction-title">Breakable Objects</h3>
            <p class="interaction-text">
              <strong>Aero-Bis</strong> from the <strong>YAPYAP Spells List</strong> can shatter glass windows and weak wooden fences, saving you time finding keys. This hidden interaction makes the <strong>YAPYAP Spells List</strong> more versatile than it appears.
            </p>
          </div>

          <div class="interaction-item">
            <h3 class="interaction-title">Loot Movement</h3>
            <p class="interaction-text">
              Use <strong>Tempest</strong> from the <strong>YAPYAP Spells List</strong> to pull loot items from unreachable ledges down to the floor. This technique isn't mentioned in the standard <strong>YAPYAP Spells List</strong> descriptions but is crucial for efficient farming in <a href="/puzzle/ball-puzzle">challenge rooms</a>.
            </p>
          </div>

          <div class="interaction-item">
            <h3 class="interaction-title">Heavy Items</h3>
            <p class="interaction-text">
              Spells from the <strong>YAPYAP Spells List</strong> have stronger knockback on lighter items. Heavy statues won't move much, even with powerful spells from the <strong>YAPYAP Spells List</strong>. Understanding physics interactions helps you use the <strong>YAPYAP Spells List</strong> more effectively.
            </p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" class="section card">
        <div class="section-head">
          <h2 class="section-title">Common Casting Issues</h2>
          <p class="section-subtitle">
            Troubleshooting guide for voice casting problems with the <strong>YAPYAP Spells List</strong>. If spells from the <strong>YAPYAP Spells List</strong> aren't working, check these common issues. For more help, visit our <a href="/guides">YAPYAP guides</a> or check the <a href="/wiki">Wiki</a>.
          </p>
        </div>

        <div class="faq-list">
          <div class="faq-item">
            <h3 class="faq-question">Q1: Why do my spells keep failing?</h3>
            <p class="faq-answer">
              If spells from the <strong>YAPYAP Spells List</strong> keep failing, check your background noise. The game hates mechanical keyboard clicks. Make sure you're pronouncing spells from the <strong>YAPYAP Spells List</strong> clearly and using the <a href="/spell-generator">Spell Generator</a> to practice.
            </p>
          </div>

          <div class="faq-item">
            <h3 class="faq-question">Q2: Do accents matter?</h3>
            <p class="faq-answer">
              Slightly. When using the <strong>YAPYAP Spells List</strong>, try to mimic the "American English" pronunciation in our <a href="/spell-generator">Spell Generator</a> if you are struggling. The <strong>YAPYAP Spells List</strong> works best with clear pronunciation.
            </p>
          </div>

          <div class="faq-item">
            <h3 class="faq-question">Q3: Can I play without a microphone?</h3>
            <p class="faq-answer">
              Yes, you can use the <strong>YAPYAP Spells List</strong> without a microphone by enabling "Right Click Casting" in settings, but it's less fun! The full experience of the <strong>YAPYAP Spells List</strong> requires voice commands. Check our <a href="/guides">YAPYAP guides</a> for microphone setup tips.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { wands as wandsData } from '@/data/wands.js'

// --- Mic tester state ---
const micEnabled = ref(false)
const isMicBusy = ref(false)
const micError = ref('')
const level = ref(0)

let stream = null
let audioCtx = null
let analyser = null
let source = null
let rafId = null

function cleanupMic() {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = null
  level.value = 0

  if (source) {
    try {
      source.disconnect()
    } catch {}
  }
  source = null

  if (analyser) {
    try {
      analyser.disconnect()
    } catch {}
  }
  analyser = null

  if (audioCtx) {
    try {
      audioCtx.close()
    } catch {}
  }
  audioCtx = null

  if (stream) {
    stream.getTracks().forEach((t) => t.stop())
  }
  stream = null
}

async function startMic() {
  micError.value = ''
  isMicBusy.value = true
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    analyser = audioCtx.createAnalyser()
    analyser.fftSize = 1024
    source = audioCtx.createMediaStreamSource(stream)
    source.connect(analyser)

    const data = new Uint8Array(analyser.frequencyBinCount)
    const tick = () => {
      if (!analyser) return
      analyser.getByteTimeDomainData(data)
      let sum = 0
      for (let i = 0; i < data.length; i++) {
        const v = (data[i] - 128) / 128
        sum += v * v
      }
      const rms = Math.sqrt(sum / data.length) // 0..1
      level.value = Math.min(1, Math.max(0, rms * 2.2))
      rafId = requestAnimationFrame(tick)
    }
    tick()
    micEnabled.value = true
  } catch (e) {
    micError.value =
      'Microphone access failed. Please allow mic permissions and select the correct input device.'
  } finally {
    isMicBusy.value = false
  }
}

function stopMic() {
  cleanupMic()
  micEnabled.value = false
}

async function toggleMic() {
  if (isMicBusy.value) return
  if (micEnabled.value) stopMic()
  else await startMic()
}

onUnmounted(() => {
  stopMic()
})

// --- Wands data (grouped by wand) ---
const wands = computed(() =>
  wandsData.map((wand) => ({
    id: wand.id,
    name: wand.name,
    subtitle: wand.subtitle,
    spells: wand.spells.map((spell) => ({
      icon: spell.icon,
      spell: spell.spell,
      effect: spell.effect,
      tips: spell.tips,
    })),
  }))
)

</script>

<style scoped>
.section {
  margin-top: 22px;
}

.section-head {
  margin: 26px 0 14px 0;
}

.section-title {
  font-size: 26px;
  font-weight: 800;
  margin: 0 0 8px 0;
}

.section-subtitle {
  margin: 0;
  color: rgba(237, 240, 255, 0.72);
  line-height: 1.6;
}

.section-subtitle a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.section-subtitle a:hover {
  text-decoration: underline;
}

.card {
  background: rgba(15, 20, 36, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  font-weight: 800;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border 0.2s ease;
  text-decoration: none;
  user-select: none;
}

.btn-sm {
  padding: 8px 10px;
  border-radius: 10px;
  font-weight: 800;
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  color: #0b0d16;
  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.35);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 30px rgba(109, 40, 217, 0.45);
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(237, 240, 255, 0.92);
  border-color: rgba(255, 255, 255, 0.12);
}

.btn-ghost:hover {
  transform: translateY(-1px);
  border-color: rgba(139, 92, 246, 0.55);
  color: #fff;
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

.tag.warn {
  background: rgba(255, 149, 128, 0.12);
  border-color: rgba(255, 149, 128, 0.35);
  color: #ffcbbf;
}

.mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
}

.small {
  font-size: 12px;
}

.muted {
  color: rgba(237, 240, 255, 0.72);
}

/* Mic tester */
.mic-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.meter-wrap {
  margin-top: 14px;
}

.meter {
  height: 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  overflow: hidden;
}

.meter-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, rgba(74, 222, 128, 0.9), rgba(139, 92, 246, 0.9));
  box-shadow: 0 0 18px rgba(74, 222, 128, 0.25);
  transition: width 80ms linear;
}

.meter-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.error {
  margin: 10px 0 0 0;
  color: #ffcbbf;
}

.hint {
  margin: 10px 0 0 0;
  color: rgba(237, 240, 255, 0.72);
}

/* Wand Section */
.wand-section {
  margin-top: 32px;
}

.wand-section:first-child {
  margin-top: 0;
}

.wand-header {
  margin-bottom: 16px;
}

.wand-title {
  font-size: 22px;
  font-weight: 800;
  margin: 0 0 6px 0;
  color: rgba(237, 240, 255, 0.95);
}

.wand-subtitle {
  margin: 0;
  color: rgba(237, 240, 255, 0.65);
  font-size: 14px;
}

/* Table */
.table {
  overflow: hidden;
  padding: 0;
  margin-top: 0;
}

.row {
  display: grid;
  grid-template-columns: 70px 120px 1fr 1.2fr 160px;
  gap: 12px;
  padding: 14px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  align-items: start;
}

.row.head {
  border-top: none;
  background: rgba(255, 255, 255, 0.03);
  font-weight: 900;
  color: rgba(237, 240, 255, 0.8);
}

.c.icon {
  font-size: 22px;
}

.c.spell strong {
  display: inline-block;
  margin-bottom: 4px;
}

.c.effect,
.c.tips {
  color: rgba(237, 240, 255, 0.82);
}

/* Mobile spell cards */
.mobile-list {
  display: none;
  margin-top: 14px;
  gap: 14px;
}

.spell-card {
  padding: 16px;
}

.spell-top {
  display: grid;
  grid-template-columns: 44px 1fr auto;
  gap: 12px;
  align-items: center;
}

.spell-icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 20px;
}

.spell-main h3 {
  margin: 0;
  font-size: 16px;
}

.spell-main p {
  margin: 0;
  font-size: 12px;
}

.spell-line {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px;
  margin-top: 10px;
}

.spell-line .k {
  color: rgba(237, 240, 255, 0.65);
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.spell-line .v {
  color: rgba(237, 240, 255, 0.82);
}


@media (max-width: 1100px) {
  .row {
    grid-template-columns: 60px 150px 1fr 1fr 90px;
  }
}

@media (max-width: 920px) {
  .table {
    display: none;
  }
  .mobile-list {
    display: grid;
  }
  .wand-title {
    font-size: 20px;
  }
  .mic-head {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* Hidden Interactions & Physics */
.interactions-list {
  display: grid;
  gap: 20px;
  margin-top: 20px;
}

.interaction-item {
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.interaction-item:hover {
  border-color: rgba(139, 92, 246, 0.3);
  background: rgba(255, 255, 255, 0.04);
}

.interaction-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: rgba(237, 240, 255, 0.95);
}

.interaction-text {
  margin: 8px 0 0 0;
  line-height: 1.6;
  color: rgba(237, 240, 255, 0.85);
}

.interaction-text strong {
  color: var(--accent);
  font-weight: 600;
}

.interaction-text.muted {
  font-size: 13px;
  color: rgba(237, 240, 255, 0.6);
  margin-top: 4px;
}

/* FAQ */
.faq-list {
  display: grid;
  gap: 20px;
  margin-top: 20px;
}

.faq-item {
  padding: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.faq-item:hover {
  border-color: rgba(139, 92, 246, 0.3);
  background: rgba(255, 255, 255, 0.04);
}

.faq-question {
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: rgba(237, 240, 255, 0.95);
}

.faq-answer {
  margin: 8px 0 0 0;
  line-height: 1.6;
  color: rgba(237, 240, 255, 0.85);
}

.faq-answer a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.faq-answer a:hover {
  text-decoration: underline;
}

.faq-answer.muted {
  font-size: 13px;
  color: rgba(237, 240, 255, 0.6);
  margin-top: 4px;
}

@media (max-width: 920px) {
  .interaction-item,
  .faq-item {
    padding: 14px;
  }

  .interaction-title,
  .faq-question {
    font-size: 16px;
  }
}
</style>

