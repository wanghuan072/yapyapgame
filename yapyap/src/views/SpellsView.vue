<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <p class="pill">{{ $t('SpellsPage.hero.pill') }}</p>
        <h1 class="title">{{ $t('SpellsPage.hero.title') }}</h1>
        <p class="intro">
          {{ $t('SpellsPage.hero.intro') }}
        </p>
      </div>
    </section>
    <main class="container">
      <!-- Spells -->
      <section id="spells-list" class="section">
        <div class="section-head">
          <h2 class="section-title">{{ $t('SpellsPage.list.title') }}</h2>
          <p class="section-subtitle">
            {{ $t('SpellsPage.list.subtitle_1') }}
            <strong>{{ $t('SpellsPage.list.subtitle_bold') }}</strong>
            {{ $t('SpellsPage.list.subtitle_2') }}
            <a href="/spell-generator">{{ $t('SpellsPage.list.subtitle_link1') }}</a>
            {{ $t('SpellsPage.list.subtitle_3') }}
            <a href="/wiki/wands">{{ $t('SpellsPage.list.subtitle_link2') }}</a>
            {{ $t('SpellsPage.list.subtitle_4') }}
            <a href="/guides">{{ $t('SpellsPage.list.subtitle_link3') }}</a>
            {{ $t('SpellsPage.list.subtitle_5') }}
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
              <div class="icon">{{ $t('SpellsPage.list.table.icon') }}</div>
              <div class="spell">{{ $t('SpellsPage.list.table.spell') }}</div>
              <div class="effect">{{ $t('SpellsPage.list.table.effect') }}</div>
              <div class="tips">{{ $t('SpellsPage.list.table.tips') }}</div>
              <div class="action">{{ $t('SpellsPage.list.table.action') }}</div>
            </div>

            <div class="row" v-for="s in wand.spells" :key="s.spell">
              <div class="c icon">{{ s.icon }}</div>
              <div class="c spell">
                <strong>{{ s.spell }}</strong>
                <div class="small" v-if="s.misheard">
                  {{ $t('SpellsPage.list.table.misheard') }} <span class="mono">{{ s.misheard }}</span>
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
                  {{ $t('SpellsPage.list.table.generator') }}
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
                  <span class="label">{{ $t('SpellsPage.list.table.mobile.effect') }}</span>
                  <span>{{ s.effect }}</span>
                </div>
                <div class="spell-row">
                  <span class="label">{{ $t('SpellsPage.list.table.mobile.tips') }}</span>
                  <span>{{ s.tips }}</span>
                </div>
                <div class="spell-row" v-if="s.misheard">
                  <span class="label warn">{{ $t('SpellsPage.list.table.mobile.misheard') }}</span>
                  <span class="mono">{{ s.misheard }}</span>
                </div>
                <div class="spell-row" v-if="s.misheardTip">
                  <span class="label warn">{{ $t('SpellsPage.list.table.mobile.note') }}</span>
                  <span class="small muted">{{ s.misheardTip }}</span>
                </div>
                <div class="spell-actions">
                  <a
                    :href="`/spell-generator?spell=${encodeURIComponent(
                      s.spell.toLowerCase().replace(/\s+/g, '-')
                    )}`"
                    class="btn btn-ghost btn-sm"
                    >{{ $t('SpellsPage.list.table.view') }}</a
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
            <h2 class="section-title">{{ $t('SpellsPage.mic.title') }}</h2>
            <p class="section-subtitle">
              {{ $t('SpellsPage.mic.subtitle_1') }}
              <strong>{{ $t('SpellsPage.mic.subtitle_bold1') }}</strong>
              {{ $t('SpellsPage.mic.subtitle_2') }}
              <strong>{{ $t('SpellsPage.mic.subtitle_bold2') }}</strong>
              {{ $t('SpellsPage.mic.subtitle_3') }}
            </p>
          </div>
          <div class="mic-actions">
            <button class="btn btn-primary" @click="toggleMic" :disabled="isMicBusy">
              {{ micEnabled ? $t('SpellsPage.mic.stop') : $t('SpellsPage.mic.start') }}
            </button>
          </div>
        </div>

        <div class="meter-wrap" role="status" aria-live="polite">
          <div class="meter">
            <div class="meter-fill" :style="{ width: `${Math.round(level * 100)}%` }"></div>
          </div>
          <div class="meter-meta">
            <span class="tag">{{ $t('SpellsPage.mic.level') }} {{ Math.round(level * 100) }}%</span>
            <span class="tag" v-if="micEnabled">{{ $t('SpellsPage.mic.listening') }}</span>
            <span class="tag warn" v-else>{{ $t('SpellsPage.mic.notListening') }}</span>
          </div>
          <p class="error" v-if="micError">{{ $t('SpellsPage.mic.error') }}</p>
          <p class="hint">
            {{ $t('SpellsPage.mic.hint') }}
          </p>
        </div>
      </section>

      <!-- Hidden Interactions & Physics -->
      <section id="hidden-interactions" class="section card">
        <div class="section-head">
          <h2 class="section-title">{{ $t('SpellsPage.hidden.title') }}</h2>
          <p class="section-subtitle">
            {{ $t('SpellsPage.hidden.subtitle_1') }}
            <strong>{{ $t('SpellsPage.hidden.subtitle_bold1') }}</strong>
            {{ $t('SpellsPage.hidden.subtitle_2') }}
            <strong>{{ $t('SpellsPage.hidden.subtitle_bold2') }}</strong>
            {{ $t('SpellsPage.hidden.subtitle_3') }}
            <a href="/puzzles/ball-puzzle">{{ $t('SpellsPage.hidden.subtitle_link1') }}</a>
            {{ $t('SpellsPage.hidden.subtitle_4') }}
            <a href="/puzzles/door-puzzle">{{ $t('SpellsPage.hidden.subtitle_link2') }}</a>
            {{ $t('SpellsPage.hidden.subtitle_5') }}
          </p>
        </div>

        <div class="interactions-list">
          <div class="interaction-item">
            <h3 class="interaction-title">{{ $t('SpellsPage.hidden.items.p1.title') }}</h3>
            <p class="interaction-text">
              <strong>{{ $t('SpellsPage.hidden.items.p1.text_bold1') }}</strong>
              {{ $t('SpellsPage.hidden.items.p1.text_1') }}
              <strong>{{ $t('SpellsPage.hidden.items.p1.text_bold2') }}</strong>
              {{ $t('SpellsPage.hidden.items.p1.text_2') }}
              <strong>{{ $t('SpellsPage.hidden.items.p1.text_bold3') }}</strong>
              {{ $t('SpellsPage.hidden.items.p1.text_3') }}
            </p>
          </div>

          <div class="interaction-item">
            <h3 class="interaction-title">{{ $t('SpellsPage.hidden.items.p2.title') }}</h3>
            <p class="interaction-text">
              {{ $t('SpellsPage.hidden.items.p2.text_1') }}
              <strong>{{ $t('SpellsPage.hidden.items.p2.text_bold1') }}</strong>
              {{ $t('SpellsPage.hidden.items.p2.text_2') }}
              <strong>{{ $t('SpellsPage.hidden.items.p2.text_bold2') }}</strong>
              {{ $t('SpellsPage.hidden.items.p2.text_3') }}
              <strong>{{ $t('SpellsPage.hidden.items.p2.text_bold3') }}</strong>
              {{ $t('SpellsPage.hidden.items.p2.text_4') }}
              <a href="/puzzles/ball-puzzle">{{ $t('SpellsPage.hidden.items.p2.text_link1') }}</a>
              {{ $t('SpellsPage.hidden.items.p2.text_5') }}
            </p>
          </div>

          <div class="interaction-item">
            <h3 class="interaction-title">{{ $t('SpellsPage.hidden.items.p3.title') }}</h3>
            <p class="interaction-text">
              {{ $t('SpellsPage.hidden.items.p3.text_1') }}
              <strong>{{ $t('SpellsPage.hidden.items.p3.text_bold1') }}</strong>
              {{ $t('SpellsPage.hidden.items.p3.text_2') }}
              <strong>{{ $t('SpellsPage.hidden.items.p3.text_bold2') }}</strong>
              {{ $t('SpellsPage.hidden.items.p3.text_3') }}
              <strong>{{ $t('SpellsPage.hidden.items.p3.text_bold3') }}</strong>
              {{ $t('SpellsPage.hidden.items.p3.text_4') }}
            </p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" class="section card">
        <div class="section-head">
          <h2 class="section-title">{{ $t('SpellsPage.faq.title') }}</h2>
          <p class="section-subtitle">
            {{ $t('SpellsPage.faq.subtitle_1') }}
            <strong>{{ $t('SpellsPage.faq.subtitle_bold1') }}</strong>
            {{ $t('SpellsPage.faq.subtitle_2') }}
            <strong>{{ $t('SpellsPage.faq.subtitle_bold2') }}</strong>
            {{ $t('SpellsPage.faq.subtitle_3') }}
            <a href="/guides">{{ $t('SpellsPage.faq.subtitle_link1') }}</a>
            {{ $t('SpellsPage.faq.subtitle_4') }}
            <a href="/wiki">{{ $t('SpellsPage.faq.subtitle_link2') }}</a>
            {{ $t('SpellsPage.faq.subtitle_5') }}
          </p>
        </div>

        <div class="faq-list">
          <div class="faq-item">
            <h3 class="faq-question">{{ $t('SpellsPage.faq.q1') }}</h3>
            <p class="faq-answer">
              {{ $t('SpellsPage.faq.a1_1') }}
              <strong>{{ $t('SpellsPage.faq.a1_bold1') }}</strong>
              {{ $t('SpellsPage.faq.a1_2') }}
              <strong>{{ $t('SpellsPage.faq.a1_bold2') }}</strong>
              {{ $t('SpellsPage.faq.a1_3') }}
              <a href="/spell-generator">{{ $t('SpellsPage.faq.a1_link1') }}</a>
              {{ $t('SpellsPage.faq.a1_4') }}
            </p>
          </div>

          <div class="faq-item">
            <h3 class="faq-question">{{ $t('SpellsPage.faq.q2') }}</h3>
            <p class="faq-answer">
              {{ $t('SpellsPage.faq.a2_1') }}
              <strong>{{ $t('SpellsPage.faq.a2_bold1') }}</strong>
              {{ $t('SpellsPage.faq.a2_2') }}
              <a href="/spell-generator">{{ $t('SpellsPage.faq.a2_link1') }}</a>
              {{ $t('SpellsPage.faq.a2_3') }}
              <strong>{{ $t('SpellsPage.faq.a2_bold2') }}</strong>
              {{ $t('SpellsPage.faq.a2_4') }}
            </p>
          </div>

          <div class="faq-item">
            <h3 class="faq-question">{{ $t('SpellsPage.faq.q3') }}</h3>
            <p class="faq-answer">
              {{ $t('SpellsPage.faq.a3_1') }}
              <strong>{{ $t('SpellsPage.faq.a3_bold1') }}</strong>
              {{ $t('SpellsPage.faq.a3_2') }}
              <strong>{{ $t('SpellsPage.faq.a3_bold2') }}</strong>
              {{ $t('SpellsPage.faq.a3_3') }}
              <a href="/guides">{{ $t('SpellsPage.faq.a3_link1') }}</a>
              {{ $t('SpellsPage.faq.a3_4') }}
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useWands } from '@/composables/useWands'

// --- Wands data ---
const { wands: wandsData } = useWands()

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
  wandsData.value.map((wand) => ({
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


/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .row {
    grid-template-columns: 60px 150px 1fr 1fr 90px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  /* 板块间距 */
  .section {
    padding: 0.8rem 0;
    margin-top: 0.8rem;
  }

  /* card padding */
  .card {
    padding: 0.8rem;
  }

  /* h1 - 使用class选择器 */
  .title {
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
  .wand-title {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .interaction-title,
  .faq-question {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* p - 使用class选择器 */
  .intro {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .section-subtitle {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .wand-subtitle {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .faq-answer,
  .interaction-text {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* 布局调整 */
  .table {
    display: none;
  }

  .mobile-list {
    display: grid;
    gap: 0.8rem;
  }

  .section-head {
    margin: 0.7rem 0;
  }

  .wand-section {
    margin-top: 0.8rem;
  }

  .wand-header {
    margin-bottom: 0.7rem;
  }

  .mic-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
  }

  .spell-card {
    padding: 0.8rem;
  }

  .interaction-item,
  .faq-item {
    padding: 0.8rem;
  }

  .interactions-list,
  .faq-list {
    gap: 0.8rem;
    margin-top: 0.8rem;
  }

  .meter-wrap {
    margin-top: 0.7rem;
  }

  .meter-meta {
    gap: 0.5rem;
    margin-top: 0.7rem;
  }

  .error,
  .hint {
    margin-top: 0.7rem;
    font-size: 0.8rem;
    line-height: 1.2;
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

</style>

