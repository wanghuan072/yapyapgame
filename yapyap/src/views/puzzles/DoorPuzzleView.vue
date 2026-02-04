<template>
  <div class="page" id="top">
    <section class="page-hero">
      <div class="container">
        <p class="pill">{{ t('Puzzles.door.hero.pill') }}</p>
        <h1 class="title">{{ t('Puzzles.door.hero.title') }}</h1>
        <p class="intro">
          {{ t('Puzzles.door.hero.intro_1') }}
          <strong>{{ t('Puzzles.door.hero.intro_bold1') }}</strong>
          {{ t('Puzzles.door.hero.intro_2') }}
          <a href="/puzzles/balance-puzzle">{{ t('Puzzles.door.hero.intro_link1') }}</a>
          {{ t('Puzzles.door.hero.intro_3') }}
          <strong>{{ t('Puzzles.door.hero.intro_bold2') }}</strong>
          {{ t('Puzzles.door.hero.intro_4') }}
          <a href="/spells">{{ t('Puzzles.door.hero.intro_link2') }}</a>
          {{ t('Puzzles.door.hero.intro_5') }}
          <a href="/spell-generator">{{ t('Puzzles.door.hero.intro_link3') }}</a>
          {{ t('Puzzles.door.hero.intro_6') }}
        </p>
        <div class="puzzle-meta">
          <span class="tag hard">{{ t('Puzzles.door.hero.tags.hard') }}</span>
          <span class="tag voice">{{ t('Puzzles.door.hero.tags.voice') }}</span>
          <span class="tag reward">{{ t('Puzzles.door.hero.tags.reward') }}</span>
        </div>
      </div>
    </section>
    <main class="container">

      <!-- Quick Overview -->
      <section class="overview-section">
        <div class="overview-grid">
          <div class="overview-card card">
            <div class="overview-label">{{ t('Puzzles.door.overview.difficulty.label') }}</div>
            <div class="overview-value">{{ t('Puzzles.door.overview.difficulty.value') }}</div>
            <div class="overview-desc">{{ t('Puzzles.door.overview.difficulty.desc') }}</div>
          </div>
          <div class="overview-card card">
            <div class="overview-label">{{ t('Puzzles.door.overview.mechanic.label') }}</div>
            <div class="overview-value">{{ t('Puzzles.door.overview.mechanic.value') }}</div>
            <div class="overview-desc">{{ t('Puzzles.door.overview.mechanic.desc') }}</div>
          </div>
          <div class="overview-card card">
            <div class="overview-label">{{ t('Puzzles.door.overview.items.label') }}</div>
            <div class="overview-value">{{ t('Puzzles.door.overview.items.value') }}</div>
            <div class="overview-desc">{{ t('Puzzles.door.overview.items.desc') }}</div>
          </div>
          <div class="overview-card card highlight-card">
            <div class="overview-label">{{ t('Puzzles.door.overview.reward.label') }}</div>
            <div class="overview-value">{{ t('Puzzles.door.overview.reward.value') }}</div>
            <div class="overview-desc">{{ t('Puzzles.door.overview.reward.desc') }}</div>
          </div>
        </div>
        <div class="warning-box critical-warning card">
          <div class="warning-title">{{ t('Puzzles.door.overview.warning.title') }}</div>
          <p class="warning-text">
            <strong>{{ t('Puzzles.door.overview.warning.text_bold') }}</strong>
            {{ t('Puzzles.door.overview.warning.text_text') }}
          </p>
        </div>
      </section>

      <!-- Video Section -->
      <section class="video-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.door.video.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.door.video.subtitle') }}</p>
        </div>
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/PAGjfkcmlAk"
            title="Face Door & Treasure Room walkthrough"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <!-- Puzzle Logic -->
      <section class="logic-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.door.logic.title') }}</h2>
          <p class="section-subtitle">
            {{ t('Puzzles.door.logic.subtitle_1') }}
            <strong>{{ t('Puzzles.door.logic.subtitle_bold1') }}</strong>
            {{ t('Puzzles.door.logic.subtitle_2') }}
            <a href="/puzzles/balance-puzzle">{{ t('Puzzles.door.logic.subtitle_link1') }}</a>
            {{ t('Puzzles.door.logic.subtitle_3') }}
            <a href="/spells">{{ t('Puzzles.door.logic.subtitle_link2') }}</a>
            {{ t('Puzzles.door.logic.subtitle_4') }}
            <a href="/spell-generator">{{ t('Puzzles.door.logic.subtitle_link3') }}</a>
            {{ t('Puzzles.door.logic.subtitle_5') }}
          </p>
        </div>
        <div class="logic-content">
          <div class="logic-steps">
            <div class="logic-step">
              <div class="step-header">
                <span class="step-number">1</span>
                <h3 class="step-title">{{ t('Puzzles.door.logic.step1.title') }}</h3>
              </div>
              <p class="step-description">
                {{ t('Puzzles.door.logic.step1.desc_1') }}
                <strong>{{ t('Puzzles.door.logic.step1.desc_bold') }}</strong>
                {{ t('Puzzles.door.logic.step1.desc_2') }}
              </p>
            </div>

            <div class="logic-step">
              <div class="step-header">
                <span class="step-number">2</span>
                <h3 class="step-title">{{ t('Puzzles.door.logic.step2.title') }}</h3>
              </div>
              <p class="step-description">
                {{ t('Puzzles.door.logic.step2.desc_1') }}
                <strong>{{ t('Puzzles.door.logic.step2.desc_bold') }}</strong>
                {{ t('Puzzles.door.logic.step2.desc_2') }}
              </p>
            </div>

            <div class="logic-step highlight-step">
              <div class="step-header">
                <span class="step-number">3</span>
                <h3 class="step-title">{{ t('Puzzles.door.logic.step3.title') }}</h3>
              </div>
              <p class="step-description">
                {{ t('Puzzles.door.logic.step3.desc_1') }}
                <strong>{{ t('Puzzles.door.logic.step3.desc_bold1') }}</strong>
                {{ t('Puzzles.door.logic.step3.desc_2') }}
                <strong>{{ t('Puzzles.door.logic.step3.desc_bold2') }}</strong>
                {{ t('Puzzles.door.logic.step3.desc_3') }}
              </p>
              <div class="step-tip">
                <strong>{{ t('Puzzles.door.logic.step3.tip_bold') }}</strong>
                {{ t('Puzzles.door.logic.step3.tip_text') }}
              </div>
            </div>

            <div class="logic-step">
              <div class="step-header">
                <span class="step-number">4</span>
                <h3 class="step-title">{{ t('Puzzles.door.logic.step4.title') }}</h3>
              </div>
              <p class="step-description">
                {{ t('Puzzles.door.logic.step4.desc_1') }}
                <strong>{{ t('Puzzles.door.logic.step4.desc_bold1') }}</strong>
                {{ t('Puzzles.door.logic.step4.desc_2') }}
                <strong>{{ t('Puzzles.door.logic.step4.desc_bold2') }}</strong>
                {{ t('Puzzles.door.logic.step4.desc_3') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Symbol Decoder -->
      <section class="decoder-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.door.decoder.title') }}</h2>
          <p class="section-subtitle">
            {{ t('Puzzles.door.decoder.subtitle_1') }}
            <strong>{{ t('Puzzles.door.decoder.subtitle_bold') }}</strong>
            {{ t('Puzzles.door.decoder.subtitle_2') }}
          </p>
        </div>
        <div class="decoder-note">
          <p class="note-text">
            <strong>{{ t('Puzzles.door.decoder.note_bold') }}</strong>
            {{ t('Puzzles.door.decoder.note_text') }}
          </p>
        </div>
        <div class="table-container">
          <table class="decoder-table">
            <thead>
              <tr>
                <th>{{ t('Puzzles.door.decoder.th.icon') }}</th>
                <th>{{ t('Puzzles.door.decoder.th.word') }}</th>
                <th>{{ t('Puzzles.door.decoder.th.pronunciation') }}</th>
                <th>{{ t('Puzzles.door.decoder.th.notes') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ t('Puzzles.door.decoder.rows.r1.icon') }}</td>
                <td>{{ t('Puzzles.door.decoder.rows.r1.word') }}</td>
                <td>{{ t('Puzzles.door.decoder.rows.r1.pron') }}</td>
                <td>{{ t('Puzzles.door.decoder.rows.r1.notes') }}</td>
              </tr>
              <tr>
                <td>{{ t('Puzzles.door.decoder.rows.r2.icon') }}</td>
                <td>{{ t('Puzzles.door.decoder.rows.r2.word') }}</td>
                <td>{{ t('Puzzles.door.decoder.rows.r2.pron') }}</td>
                <td>{{ t('Puzzles.door.decoder.rows.r2.notes') }}</td>
              </tr>
              <tr class="highlight-row">
                <td>{{ t('Puzzles.door.decoder.rows.r3.icon') }}</td>
                <td>{{ t('Puzzles.door.decoder.rows.r3.word') }}</td>
                <td>{{ t('Puzzles.door.decoder.rows.r3.pron') }}</td>
                <td>
                  <strong>{{ t('Puzzles.door.decoder.rows.r3.notes_bold') }}</strong>
                  {{ t('Puzzles.door.decoder.rows.r3.notes_text') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="decoder-note">
          <p class="note-text muted">{{ t('Puzzles.door.decoder.footer') }}</p>
        </div>
      </section>

      <!-- Visual Trap Comparison -->
      <section class="visual-trap-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.door.trap.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.door.trap.subtitle') }}</p>
        </div>
        <div class="trap-comparison">
          <div class="trap-view">
            <h3 class="trap-label">{{ t('Puzzles.door.trap.view1') }}</h3>
            <div class="trap-placeholder">
              <p class="muted">{{ t('Puzzles.door.trap.placeholder1') }}</p>
            </div>
          </div>
          <div class="trap-view">
            <h3 class="trap-label">{{ t('Puzzles.door.trap.view2') }}</h3>
            <div class="trap-placeholder">
              <p class="muted">{{ t('Puzzles.door.trap.placeholder2') }}</p>
            </div>
          </div>
        </div>
        <div class="trap-warning">
          <strong>{{ t('Puzzles.door.trap.warning_bold') }}</strong>
          {{ t('Puzzles.door.trap.warning_text') }}
        </div>
      </section>

      <!-- Skip Strategy -->
      <section class="skip-section card warning-card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.door.skip.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.door.skip.subtitle') }}</p>
        </div>
        <div class="skip-content">
          <div class="skip-when">
            <h3 class="skip-title">{{ t('Puzzles.door.skip.when.title') }}</h3>
            <p class="skip-quote">{{ t('Puzzles.door.skip.when.quote') }}</p>
            <ul class="skip-list">
              <li>{{ t('Puzzles.door.skip.when.l1') }}</li>
              <li>{{ t('Puzzles.door.skip.when.l2') }}</li>
              <li>{{ t('Puzzles.door.skip.when.l3') }}</li>
            </ul>
            <div class="skip-suggestion">
              <strong>{{ t('Puzzles.door.skip.when.suggestion_bold') }}</strong>
              {{ t('Puzzles.door.skip.when.suggestion_text1') }}
              <strong>{{ t('Puzzles.door.skip.when.suggestion_bold2') }}</strong>
              {{ t('Puzzles.door.skip.when.suggestion_text2') }}
            </div>
          </div>
        </div>
      </section>

      <!-- Treasure Room Guide -->
      <section class="treasure-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.door.treasure.title') }}</h2>
          <p class="section-subtitle">
            {{ t('Puzzles.door.treasure.subtitle_1') }}
            <strong>{{ t('Puzzles.door.treasure.subtitle_bold') }}</strong>
            {{ t('Puzzles.door.treasure.subtitle_2') }}
          </p>
        </div>
        <div class="treasure-content">
          <div class="treasure-intro">
            <p>
              {{ t('Puzzles.door.treasure.intro_1') }}
              <strong>{{ t('Puzzles.door.treasure.intro_bold') }}</strong>
              {{ t('Puzzles.door.treasure.intro_2') }}
              <strong>{{ t('Puzzles.door.treasure.intro_bold2') }}</strong>
              {{ t('Puzzles.door.treasure.intro_3') }}
            </p>
          </div>

          <div class="looting-techniques">
            <div class="technique-item">
              <h3 class="technique-name">{{ t('Puzzles.door.treasure.tech1.title') }}</h3>
              <p class="technique-desc">
                {{ t('Puzzles.door.treasure.tech1.desc_1') }}
                <strong>{{ t('Puzzles.door.treasure.tech1.desc_bold1') }}</strong>
                {{ t('Puzzles.door.treasure.tech1.desc_2') }}
                <a href="/wiki/wands">{{ t('Puzzles.door.treasure.tech1.desc_link1') }}</a>
                {{ t('Puzzles.door.treasure.tech1.desc_3') }}
                <strong>{{ t('Puzzles.door.treasure.tech1.desc_bold2') }}</strong>
                {{ t('Puzzles.door.treasure.tech1.desc_4') }}
                <a href="/spells">{{ t('Puzzles.door.treasure.tech1.desc_link2') }}</a>
                {{ t('Puzzles.door.treasure.tech1.desc_5') }}
              </p>
            </div>

            <div class="technique-item">
              <h3 class="technique-name">{{ t('Puzzles.door.treasure.tech2.title') }}</h3>
              <p class="technique-desc">
                {{ t('Puzzles.door.treasure.tech2.desc_1') }}
                <strong>{{ t('Puzzles.door.treasure.tech2.desc_bold') }}</strong>
                {{ t('Puzzles.door.treasure.tech2.desc_2') }}
                <a href="/spells">{{ t('Puzzles.door.treasure.tech2.desc_link1') }}</a>
                {{ t('Puzzles.door.treasure.tech2.desc_3') }}
                <a href="/spells">{{ t('Puzzles.door.treasure.tech2.desc_link2') }}</a>
                {{ t('Puzzles.door.treasure.tech2.desc_4') }}
                <a href="/spells">{{ t('Puzzles.door.treasure.tech2.desc_link3') }}</a>
                {{ t('Puzzles.door.treasure.tech2.desc_5') }}
              </p>
            </div>

            <div class="technique-item highlight-technique">
              <h3 class="technique-name">{{ t('Puzzles.door.treasure.tech3.title') }}</h3>
              <p class="technique-desc">
                {{ t('Puzzles.door.treasure.tech3.desc_1') }}
                <strong>{{ t('Puzzles.door.treasure.tech3.desc_bold') }}</strong>
                {{ t('Puzzles.door.treasure.tech3.desc_2') }}
                <a href="/wiki/wands">{{ t('Puzzles.door.treasure.tech3.desc_link1') }}</a>
                {{ t('Puzzles.door.treasure.tech3.desc_3') }}
                <a href="/spells">{{ t('Puzzles.door.treasure.tech3.desc_link2') }}</a>
                {{ t('Puzzles.door.treasure.tech3.desc_4') }}
              </p>
              <div class="technique-demo">
                <p class="demo-text">
                  <strong>{{ t('Puzzles.door.treasure.tech3.demo.text_bold') }}</strong>
                  {{ t('Puzzles.door.treasure.tech3.demo.text_text') }}
                </p>
                <div class="demo-placeholder">
                  <p class="muted">{{ t('Puzzles.door.treasure.tech3.demo.placeholder') }}</p>
                  <p class="demo-caption">
                    <strong>{{ t('Puzzles.door.treasure.tech3.demo.caption_bold') }}</strong>
                    {{ t('Puzzles.door.treasure.tech3.demo.caption_text') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="guaranteed-reward">
            <div class="reward-box">
              <div class="reward-label">{{ t('Puzzles.door.treasure.guaranteed.label') }}</div>
              <div class="reward-value">{{ t('Puzzles.door.treasure.guaranteed.value') }}</div>
              <div class="reward-desc">{{ t('Puzzles.door.treasure.guaranteed.desc') }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Voice Recognition Warning -->
      <section class="voice-warning-section card warning-card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.door.voice.title') }}</h2>
        </div>
        <div class="voice-warning-content">
          <p class="warning-main">
            <strong>{{ t('Puzzles.door.voice.main_bold') }}</strong>
            {{ t('Puzzles.door.voice.main_text') }}
          </p>
          <div class="voice-tips">
            <h3 class="tips-title">{{ t('Puzzles.door.voice.tips.title') }}</h3>
            <ul class="tips-list">
              <li>{{ t('Puzzles.door.voice.tips.l1') }}</li>
              <li>{{ t('Puzzles.door.voice.tips.l2') }}</li>
              <li>{{ t('Puzzles.door.voice.tips.l3') }}</li>
              <li>{{ t('Puzzles.door.voice.tips.l4') }}</li>
              <li>
                {{ t('Puzzles.door.voice.tips.l5_1') }}
                <strong>{{ t('Puzzles.door.voice.tips.l5_bold1') }}</strong>
                {{ t('Puzzles.door.voice.tips.l5_2') }}
                <strong>{{ t('Puzzles.door.voice.tips.l5_bold2') }}</strong>
                {{ t('Puzzles.door.voice.tips.l5_3') }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Value Assessment -->
      <section class="value-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.door.value.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.door.value.subtitle') }}</p>
        </div>
        <div class="value-content">
          <div class="value-pros">
            <h3 class="value-title">{{ t('Puzzles.door.value.pros.title') }}</h3>
            <ul class="value-list">
              <li>{{ t('Puzzles.door.value.pros.l1') }}</li>
              <li>{{ t('Puzzles.door.value.pros.l2') }}</li>
              <li>{{ t('Puzzles.door.value.pros.l3') }}</li>
              <li>{{ t('Puzzles.door.value.pros.l4') }}</li>
            </ul>
          </div>
          <div class="value-cons">
            <h3 class="value-title">{{ t('Puzzles.door.value.cons.title') }}</h3>
            <ul class="value-list">
              <li>{{ t('Puzzles.door.value.cons.l1') }}</li>
              <li>{{ t('Puzzles.door.value.cons.l2') }}</li>
              <li>{{ t('Puzzles.door.value.cons.l3') }}</li>
              <li>{{ t('Puzzles.door.value.cons.l4') }}</li>
            </ul>
          </div>
          <div class="value-verdict">
            <p class="verdict-text">
              <strong>{{ t('Puzzles.door.value.verdict_bold') }}</strong>
              {{ t('Puzzles.door.value.verdict_text1') }}
              <a href="/wiki/wands">{{ t('Puzzles.door.value.verdict_link1') }}</a>
              {{ t('Puzzles.door.value.verdict_text2') }}
              <strong>{{ t('Puzzles.door.value.verdict_bold2') }}</strong>
              {{ t('Puzzles.door.value.verdict_text3') }}
              <a href="/puzzles/balance-puzzle">{{ t('Puzzles.door.value.verdict_link2') }}</a>
              {{ t('Puzzles.door.value.verdict_text4') }}
              <strong>{{ t('Puzzles.door.value.verdict_bold3') }}</strong>
              {{ t('Puzzles.door.value.verdict_text5') }}
              <a href="/guides">{{ t('Puzzles.door.value.verdict_link3') }}</a>
              {{ t('Puzzles.door.value.verdict_text6') }}
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.page {
  color: var(--text);
  position: relative;
}


.puzzle-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.tag {
  padding: 6px 12px;
  border-radius: 8px;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.25);
  color: #dcd7ff;
  font-size: 12px;
  font-weight: 600;
}

.tag.hard {
  background: rgba(239, 68, 68, 0.12);
  border-color: rgba(239, 68, 68, 0.25);
  color: #fca5a5;
}

.tag.voice {
  background: rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.25);
  color: #93c5fd;
}

.tag.reward {
  background: rgba(251, 191, 36, 0.12);
  border-color: rgba(251, 191, 36, 0.25);
  color: #fcd34d;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
}

.section-head {
  margin-bottom: 24px;
}

.section-title {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.01em;
  background: linear-gradient(120deg, var(--text), var(--accent));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 8px 0;
}

.section-subtitle {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
}

/* Overview Section */
.overview-section {
  margin: 40px 0;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.overview-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.overview-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.overview-card.highlight-card {
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.12), rgba(74, 222, 128, 0.08));
  border-color: rgba(251, 191, 36, 0.3);
}

.overview-label {
  font-size: 12px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.overview-value {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
}

.overview-desc {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.5;
  margin-top: 4px;
}

.warning-box {
  padding: 20px;
  background: rgba(239, 68, 68, 0.08);
  border-color: rgba(239, 68, 68, 0.25);
}

.warning-box.critical-warning {
  background: rgba(239, 68, 68, 0.12);
  border-left: 4px solid rgba(239, 68, 68, 0.6);
}

.warning-title {
  font-size: 16px;
  font-weight: 700;
  color: #fca5a5;
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.warning-text {
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
  font-size: 15px;
}

.warning-text strong {
  color: #fca5a5;
  font-weight: 600;
}

/* Video Section */
.video-section {
  margin: 40px 0;
}

.video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}

.video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* Logic Section */
.logic-section {
  margin: 40px 0;
}

.logic-content {
  margin-top: 20px;
}

.logic-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.logic-step {
  padding: 24px;
  background: rgba(15, 20, 36, 0.6);
  border: 1px solid var(--border);
  border-radius: 14px;
  transition: all 0.2s ease;
}

.logic-step:hover {
  background: rgba(15, 20, 36, 0.8);
  border-color: rgba(139, 92, 246, 0.3);
}

.logic-step.highlight-step {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(74, 222, 128, 0.08));
  border-color: rgba(139, 92, 246, 0.3);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.step-number {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 92, 246, 0.2);
  border: 2px solid rgba(139, 92, 246, 0.4);
  border-radius: 50%;
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
}

.step-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: var(--text);
}

.step-description {
  color: var(--muted);
  line-height: 1.7;
  margin: 0 0 12px 0;
  font-size: 15px;
}

.step-description strong {
  color: var(--text);
  font-weight: 600;
}

.step-tip {
  padding: 12px;
  background: rgba(251, 191, 36, 0.1);
  border-left: 3px solid rgba(251, 191, 36, 0.5);
  border-radius: 8px;
  font-size: 14px;
  color: var(--text);
  line-height: 1.6;
  margin-top: 12px;
}

.step-tip strong {
  font-weight: 600;
}

/* Decoder Section */
.decoder-section {
  margin: 40px 0;
}

.decoder-note {
  margin: 20px 0;
  padding: 16px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
}

.note-text {
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
  font-size: 14px;
}

.note-text strong {
  color: var(--text);
  font-weight: 600;
}

.note-text.muted {
  font-size: 13px;
  color: var(--muted);
}

.table-container {
  margin-top: 20px;
  overflow-x: auto;
}

.decoder-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(15, 20, 36, 0.6);
  border-radius: 12px;
  overflow: hidden;
}

.decoder-table thead {
  background: rgba(139, 92, 246, 0.1);
}

.decoder-table th {
  padding: 14px 18px;
  text-align: left;
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text);
  border-bottom: 2px solid var(--border);
}

.decoder-table td {
  padding: 16px 18px;
  border-bottom: 1px solid var(--border);
  color: var(--muted);
  font-size: 14px;
}

.decoder-table tbody tr:last-child td {
  border-bottom: none;
}

.decoder-table tbody tr:hover {
  background: rgba(139, 92, 246, 0.05);
}

.decoder-table tr.highlight-row {
  background: rgba(251, 191, 36, 0.08);
}

.decoder-table tr.highlight-row td {
  color: #fcd34d;
  font-weight: 600;
}

.decoder-table tr.highlight-row:hover {
  background: rgba(251, 191, 36, 0.12);
}

/* Visual Trap Section */
.visual-trap-section {
  margin: 40px 0;
}

.trap-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 20px;
}

.trap-view {
  padding: 20px;
  background: rgba(15, 20, 36, 0.6);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.trap-label {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: var(--text);
}

.trap-placeholder {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 20px;
}

.trap-placeholder p {
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  margin: 0;
}

.trap-warning {
  margin-top: 20px;
  padding: 16px;
  background: rgba(251, 191, 36, 0.1);
  border-left: 4px solid rgba(251, 191, 36, 0.6);
  border-radius: 10px;
  font-size: 16px;
  color: #fcd34d;
  font-weight: 600;
  text-align: center;
}

.muted {
  color: var(--muted);
  font-size: 14px;
}

/* Skip Section */
.skip-section {
  margin: 40px 0;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(239, 68, 68, 0.08));
  border-color: rgba(251, 191, 36, 0.3);
}

.skip-content {
  margin-top: 20px;
}

.skip-when {
  padding: 24px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
}

.skip-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: var(--text);
}

.skip-quote {
  padding: 16px;
  background: rgba(139, 92, 246, 0.08);
  border-left: 3px solid rgba(139, 92, 246, 0.5);
  border-radius: 8px;
  font-style: italic;
  color: var(--muted);
  line-height: 1.7;
  margin: 0 0 20px 0;
  font-size: 15px;
}

.skip-list {
  padding-left: 24px;
  margin: 0 0 20px 0;
  color: var(--muted);
  line-height: 1.8;
}

.skip-list li {
  margin-bottom: 8px;
}

.skip-suggestion {
  padding: 16px;
  background: rgba(74, 222, 128, 0.1);
  border-left: 3px solid rgba(74, 222, 128, 0.5);
  border-radius: 8px;
  font-size: 15px;
  color: var(--text);
  line-height: 1.7;
}

.skip-suggestion strong {
  font-weight: 600;
}

/* Treasure Section */
.treasure-section {
  margin: 40px 0;
}

.treasure-content {
  margin-top: 20px;
}

.treasure-intro {
  margin-bottom: 24px;
}

.treasure-intro p {
  font-size: 16px;
  line-height: 1.8;
  color: var(--muted);
  margin: 0;
}

.treasure-intro strong {
  color: var(--text);
  font-weight: 600;
}

.looting-techniques {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
}

.technique-item {
  padding: 20px;
  background: rgba(15, 20, 36, 0.6);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.technique-item.highlight-technique {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(74, 222, 128, 0.08));
  border-color: rgba(139, 92, 246, 0.3);
}

.technique-name {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
}

.technique-desc {
  color: var(--muted);
  line-height: 1.7;
  margin: 0 0 16px 0;
  font-size: 15px;
}

.technique-desc strong {
  color: var(--text);
  font-weight: 600;
}

.technique-demo {
  margin-top: 16px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.demo-text {
  color: var(--muted);
  line-height: 1.7;
  margin: 0 0 12px 0;
  font-size: 14px;
}

.demo-text strong {
  color: var(--text);
  font-weight: 600;
}

.demo-placeholder {
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 10px;
}

.demo-placeholder p {
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  margin: 0;
}

.demo-caption {
  font-size: 14px;
  color: var(--text);
  font-weight: 600;
  text-align: center;
}

.guaranteed-reward {
  margin-top: 24px;
}

.reward-box {
  padding: 24px;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(74, 222, 128, 0.1));
  border: 2px solid rgba(251, 191, 36, 0.4);
  border-radius: 14px;
  text-align: center;
}

.reward-label {
  font-size: 12px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-bottom: 8px;
}

.reward-value {
  font-size: 32px;
  font-weight: 800;
  color: #fcd34d;
  margin-bottom: 8px;
}

.reward-desc {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.6;
}

/* Voice Warning Section */
.voice-warning-section {
  margin: 40px 0;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(239, 68, 68, 0.08));
  border-color: rgba(251, 191, 36, 0.3);
}

.voice-warning-content {
  margin-top: 20px;
}

.warning-main {
  font-size: 16px;
  line-height: 1.8;
  color: #fcd34d;
  margin: 0 0 20px 0;
  font-weight: 600;
}

.voice-tips {
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
}

.tips-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
}

.tips-list {
  padding-left: 24px;
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.tips-list li {
  margin-bottom: 8px;
}

/* Value Section */
.value-section {
  margin: 40px 0;
}

.value-content {
  margin-top: 20px;
}

.value-pros,
.value-cons {
  margin-bottom: 24px;
  padding: 24px;
  background: rgba(15, 20, 36, 0.6);
  border: 1px solid var(--border);
  border-radius: 14px;
}

.value-pros {
  border-color: rgba(74, 222, 128, 0.3);
}

.value-cons {
  border-color: rgba(239, 68, 68, 0.3);
}

.value-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: var(--text);
}

.value-list {
  padding-left: 24px;
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.value-list li {
  margin-bottom: 10px;
}

.value-verdict {
  padding: 24px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(74, 222, 128, 0.08));
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 14px;
}

.verdict-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text);
  margin: 0;
}

.verdict-text strong {
  font-weight: 700;
  color: var(--text);
}

@media (max-width: 1024px) {
  .overview-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .trap-comparison {
    grid-template-columns: 1fr;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  /* 板块间距 */
  .overview-section,
  .logic-section,
  .decoder-section,
  .treasure-section,
  .voice-warning-section,
  .technique-section,
  .tips-section,
  .verdict-section {
    padding: 0.8rem 0;
    margin: 0.8rem 0;
  }

  /* card padding */
  .card {
    padding: 0.8rem;
  }

  .overview-card {
    padding: 0.8rem;
  }

  .warning-box {
    padding: 0.8rem;
  }

  .logic-step {
    padding: 0.8rem;
  }

  .technique-box {
    padding: 0.8rem;
  }

  .tip-card {
    padding: 0.8rem;
  }

  .verdict-card {
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
  .step-title,
  .technique-title,
  .tips-title,
  .warning-title {
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

  .step-description {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .warning-text {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .technique-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .tips-text {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .verdict-text {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .overview-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .voice-warning-content {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .skip-suggestion {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .step-tip {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* 布局调整 */
  .overview-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    margin-bottom: 0.8rem;
  }

  .logic-steps {
    gap: 0.8rem;
  }

  .step-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
    margin-bottom: 0.7rem;
  }

  .step-number {
    align-self: flex-start;
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }

  .section-head {
    margin-bottom: 0.7rem;
  }

  .logic-content {
    margin-top: 0.7rem;
  }

  .trap-comparison {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .technique-grid {
    gap: 0.8rem;
  }

  .tips-list {
    gap: 0.7rem;
  }

  .tips-list li {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .decoder-table {
    font-size: 0.7rem;
  }

  .decoder-table th,
  .decoder-table td {
    padding: 0.5rem 0.7rem;
  }

  .puzzle-meta {
    gap: 0.5rem;
    margin-top: 0.7rem;
  }

  .tag {
    padding: 0.4rem 0.7rem;
    font-size: 0.7rem;
  }

  .overview-label {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
  }

  .overview-value {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .treasure-list {
    gap: 0.7rem;
  }

  .treasure-item {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }
}

/* Internal Links Styling */
.intro a,
.section-subtitle a,
.step-description a,
.overview-desc a,
.technique-desc a,
.warning-text a,
.verdict-text a,
.voice-warning-content a,
.tips-list a,
.skip-suggestion a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.intro a:hover,
.section-subtitle a:hover,
.step-description a:hover,
.overview-desc a:hover,
.technique-desc a:hover,
.warning-text a:hover,
.verdict-text a:hover,
.voice-warning-content a:hover,
.tips-list a:hover,
.skip-suggestion a:hover {
  text-decoration: underline;
  color: var(--accent-2, rgba(139, 92, 246, 0.8));
}
</style>
