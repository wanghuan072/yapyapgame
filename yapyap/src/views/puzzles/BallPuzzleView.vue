<template>
  <div class="page" id="top">
    <section class="page-hero">
      <div class="container">
        <p class="pill">{{ t('Puzzles.ball.hero.pill') }}</p>
        <h1 class="title">{{ t('Puzzles.ball.hero.title') }}</h1>
        <p class="intro">{{ t('Puzzles.ball.hero.intro') }}</p>
        <div class="puzzle-meta">
          <span class="tag easy">{{ t('Puzzles.ball.hero.tags.easy') }}</span>
          <span class="tag solo">{{ t('Puzzles.ball.hero.tags.solo') }}</span>
          <span class="tag loot">{{ t('Puzzles.ball.hero.tags.loot') }}</span>
        </div>
      </div>
    </section>
    <main class="container">

      <!-- Quick Overview -->
      <section class="overview-section">
        <div class="overview-grid">
          <div class="overview-card card">
            <div class="overview-label">{{ t('Puzzles.ball.overview.difficulty.label') }}</div>
            <div class="overview-value">{{ t('Puzzles.ball.overview.difficulty.value') }}</div>
            <div class="overview-desc">{{ t('Puzzles.ball.overview.difficulty.desc') }}</div>
          </div>
          <div class="overview-card card">
            <div class="overview-label">{{ t('Puzzles.ball.overview.spells.label') }}</div>
            <div class="overview-value">{{ t('Puzzles.ball.overview.spells.value') }}</div>
            <div class="overview-desc">{{ t('Puzzles.ball.overview.spells.desc') }}</div>
          </div>
          <div class="overview-card card">
            <div class="overview-label">{{ t('Puzzles.ball.overview.mechanic.label') }}</div>
            <div class="overview-value">{{ t('Puzzles.ball.overview.mechanic.value') }}</div>
            <div class="overview-desc">{{ t('Puzzles.ball.overview.mechanic.desc') }}</div>
          </div>
          <div class="overview-card card highlight-card">
            <div class="overview-label">{{ t('Puzzles.ball.overview.reward.label') }}</div>
            <div class="overview-value">{{ t('Puzzles.ball.overview.reward.value') }}</div>
            <div class="overview-desc">{{ t('Puzzles.ball.overview.reward.desc') }}</div>
          </div>
        </div>
      </section>

      <!-- Video Section -->
      <section class="video-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.ball.video.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.ball.video.subtitle') }}</p>
        </div>
        <div class="video-container">
          <div class="video-frame">
            <iframe
              src="https://www.youtube.com/embed/3ljYkNgczdY"
              title="Orb Drop Challenge walkthrough"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <!-- Objective Section -->
      <section class="objective-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.ball.objective.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.ball.objective.subtitle') }}</p>
        </div>
        <div class="objective-content">
          <p class="objective-text">
            {{ t('Puzzles.ball.objective.text_1') }}
            <strong>{{ t('Puzzles.ball.objective.text_bold') }}</strong>
            {{ t('Puzzles.ball.objective.text_2') }}
          </p>
          <div class="approach-comparison">
            <div class="approach-box wrong-approach">
              <h3 class="approach-title">{{ t('Puzzles.ball.objective.wrong.title') }}</h3>
              <ul class="approach-list">
                <li>{{ t('Puzzles.ball.objective.wrong.l1') }}</li>
                <li>{{ t('Puzzles.ball.objective.wrong.l2') }}</li>
              </ul>
            </div>
            <div class="approach-box correct-approach">
              <h3 class="approach-title">{{ t('Puzzles.ball.objective.correct.title') }}</h3>
              <ol class="approach-list">
                <li>{{ t('Puzzles.ball.objective.correct.l1') }}</li>
                <li>{{ t('Puzzles.ball.objective.correct.l2') }}</li>
                <li>{{ t('Puzzles.ball.objective.correct.l3') }}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <!-- Strategy Section -->
      <section class="strategy-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.ball.strategy.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.ball.strategy.subtitle') }}</p>
        </div>
        <div class="strategy-steps">
          <div class="strategy-step">
            <div class="step-header">
              <span class="step-number">1</span>
              <h3 class="step-title">{{ t('Puzzles.ball.strategy.step1.title') }}</h3>
            </div>
            <p class="step-description">{{ t('Puzzles.ball.strategy.step1.desc') }}</p>
          </div>

          <div class="strategy-step highlight-step">
            <div class="step-header">
              <span class="step-number">2</span>
              <h3 class="step-title">{{ t('Puzzles.ball.strategy.step2.title') }}</h3>
            </div>
            <p class="step-description">{{ t('Puzzles.ball.strategy.step2.desc') }}</p>
            <div class="step-details">
              <h4 class="details-title">{{ t('Puzzles.ball.strategy.step2.loop.title') }}</h4>
              <ol class="details-list">
                <li>{{ t('Puzzles.ball.strategy.step2.loop.l1') }}</li>
                <li>{{ t('Puzzles.ball.strategy.step2.loop.l2') }}</li>
                <li>{{ t('Puzzles.ball.strategy.step2.loop.l3') }}</li>
                <li>{{ t('Puzzles.ball.strategy.step2.loop.l4') }}</li>
              </ol>
              <div class="step-tip">
                <strong>{{ t('Puzzles.ball.strategy.step2.tip_bold') }}</strong>
                {{ t('Puzzles.ball.strategy.step2.tip_text') }}
              </div>
            </div>
          </div>

          <div class="strategy-step">
            <div class="step-header">
              <span class="step-number">3</span>
              <h3 class="step-title">{{ t('Puzzles.ball.strategy.step3.title') }}</h3>
            </div>
            <p class="step-description">{{ t('Puzzles.ball.strategy.step3.desc') }}</p>
          </div>
        </div>
      </section>

      <!-- Warning Section -->
      <section class="warning-section card">
        <div class="warning-content">
          <div class="warning-icon">⚠️</div>
          <div class="warning-text">
            <h3 class="warning-title">{{ t('Puzzles.ball.warning.title') }}</h3>
            <p class="warning-main"><strong>{{ t('Puzzles.ball.warning.main_bold') }}</strong></p>
            <p>
              {{ t('Puzzles.ball.warning.text_1') }}
              <strong>{{ t('Puzzles.ball.warning.text_bold') }}</strong>
              {{ t('Puzzles.ball.warning.text_2') }}
            </p>
            <ul class="warning-list">
              <li>
                <strong>{{ t('Puzzles.ball.warning.location_bold') }}</strong>
                {{ t('Puzzles.ball.warning.location_text') }}
              </li>
              <li>
                <strong>{{ t('Puzzles.ball.warning.reward_bold') }}</strong>
                {{ t('Puzzles.ball.warning.reward_text') }}
              </li>
            </ul>
            <p class="warning-conclusion">
              <strong>{{ t('Puzzles.ball.warning.conclusion_bold') }}</strong>
              {{ t('Puzzles.ball.warning.conclusion_text') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Spells & Alternatives -->
      <section class="spells-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.ball.spells.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.ball.spells.subtitle') }}</p>
        </div>
        <div class="spells-grid">
          <div class="spell-card tier-best">
            <div class="spell-tier">{{ t('Puzzles.ball.spells.teleport.tier') }}</div>
            <h3 class="spell-name">{{ t('Puzzles.ball.spells.teleport.name') }}</h3>
            <p class="spell-description">{{ t('Puzzles.ball.spells.teleport.desc') }}</p>
          </div>

          <div class="spell-card tier-strong">
            <div class="spell-tier">{{ t('Puzzles.ball.spells.updog.tier') }}</div>
            <h3 class="spell-name">{{ t('Puzzles.ball.spells.updog.name') }}</h3>
            <p class="spell-description">{{ t('Puzzles.ball.spells.updog.desc') }}</p>
          </div>

          <div class="spell-card tier-control">
            <div class="spell-tier">{{ t('Puzzles.ball.spells.aerobis.tier') }}</div>
            <h3 class="spell-name">{{ t('Puzzles.ball.spells.aerobis.name') }}</h3>
            <p class="spell-description">{{ t('Puzzles.ball.spells.aerobis.desc') }}</p>
          </div>

          <div class="spell-card tier-avoid">
            <div class="spell-tier">{{ t('Puzzles.ball.spells.damage.tier') }}</div>
            <h3 class="spell-name">{{ t('Puzzles.ball.spells.damage.name') }}</h3>
            <p class="spell-description">{{ t('Puzzles.ball.spells.damage.desc') }}</p>
          </div>
        </div>
      </section>

      <!-- Co-op Tactics -->
      <section class="coop-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.ball.coop.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.ball.coop.subtitle') }}</p>
        </div>
        <div class="tactics-grid">
          <div class="tactic-card">
            <h3 class="tactic-name">{{ t('Puzzles.ball.coop.planA.name') }}</h3>
            <p class="tactic-description">{{ t('Puzzles.ball.coop.planA.desc') }}</p>
            <div class="tactic-benefit">
              <strong>{{ t('Puzzles.ball.coop.planA.benefit_bold') }}</strong>
              {{ t('Puzzles.ball.coop.planA.benefit_text') }}
            </div>
          </div>

          <div class="tactic-card">
            <h3 class="tactic-name">{{ t('Puzzles.ball.coop.planB.name') }}</h3>
            <p class="tactic-description">{{ t('Puzzles.ball.coop.planB.desc') }}</p>
            <div class="tactic-benefit">
              <strong>{{ t('Puzzles.ball.coop.planB.benefit_bold') }}</strong>
              {{ t('Puzzles.ball.coop.planB.benefit_text') }}
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.ball.faq.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.ball.faq.subtitle') }}</p>
        </div>
        <div class="faq-grid">
          <div class="faq-item">
            <h3 class="faq-question">{{ t('Puzzles.ball.faq.q1.q') }}</h3>
            <p class="faq-answer">{{ t('Puzzles.ball.faq.q1.a') }}</p>
          </div>

          <div class="faq-item">
            <h3 class="faq-question">{{ t('Puzzles.ball.faq.q2.q') }}</h3>
            <p class="faq-answer">{{ t('Puzzles.ball.faq.q2.a') }}</p>
          </div>

          <div class="faq-item">
            <h3 class="faq-question">{{ t('Puzzles.ball.faq.q3.q') }}</h3>
            <p class="faq-answer">{{ t('Puzzles.ball.faq.q3.a') }}</p>
          </div>
        </div>
      </section>

      <!-- Loot Table -->
      <section class="loot-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.ball.loot.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.ball.loot.subtitle') }}</p>
        </div>
        <div class="table-container">
          <table class="loot-table">
            <thead>
              <tr>
                <th>{{ t('Puzzles.ball.loot.th.source') }}</th>
                <th>{{ t('Puzzles.ball.loot.th.item') }}</th>
                <th>{{ t('Puzzles.ball.loot.th.quantity') }}</th>
                <th>{{ t('Puzzles.ball.loot.th.notes') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ t('Puzzles.ball.loot.rows.r1.source') }}</td>
                <td>{{ t('Puzzles.ball.loot.rows.r1.item') }}</td>
                <td>{{ t('Puzzles.ball.loot.rows.r1.qty') }}</td>
                <td>{{ t('Puzzles.ball.loot.rows.r1.notes') }}</td>
              </tr>
              <tr>
                <td>{{ t('Puzzles.ball.loot.rows.r2.source') }}</td>
                <td>{{ t('Puzzles.ball.loot.rows.r2.item') }}</td>
                <td>{{ t('Puzzles.ball.loot.rows.r2.qty') }}</td>
                <td>{{ t('Puzzles.ball.loot.rows.r2.notes') }}</td>
              </tr>
              <tr class="highlight-row">
                <td>{{ t('Puzzles.ball.loot.rows.r3.source') }}</td>
                <td>{{ t('Puzzles.ball.loot.rows.r3.item') }}</td>
                <td>{{ t('Puzzles.ball.loot.rows.r3.qty') }}</td>
                <td>
                  <strong>{{ t('Puzzles.ball.loot.rows.r3.notes_bold') }}</strong>
                  {{ t('Puzzles.ball.loot.rows.r3.notes_text') }}
                </td>
              </tr>
            </tbody>
          </table>
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

.tag.easy {
  background: rgba(74, 222, 128, 0.12);
  border-color: rgba(74, 222, 128, 0.25);
  color: #86efac;
}

.tag.solo {
  background: rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.25);
  color: #93c5fd;
}

.tag.loot {
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
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.12), rgba(139, 92, 246, 0.08));
  border-color: rgba(74, 222, 128, 0.3);
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

/* Video Section */
.video-section {
  margin: 40px 0;
}

.video-container {
  margin-top: 20px;
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

/* Objective Section */
.objective-section {
  margin: 40px 0;
}

.objective-content {
  margin-top: 20px;
}

.objective-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--muted);
  margin: 0 0 24px 0;
}

.objective-text strong {
  color: var(--text);
  font-weight: 600;
}

.approach-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.approach-box {
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.wrong-approach {
  background: rgba(239, 68, 68, 0.08);
  border-color: rgba(239, 68, 68, 0.25);
}

.correct-approach {
  background: rgba(74, 222, 128, 0.08);
  border-color: rgba(74, 222, 128, 0.25);
}

.approach-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
}

.approach-list {
  padding-left: 24px;
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.approach-list li {
  margin-bottom: 8px;
}

/* Strategy Section */
.strategy-section {
  margin: 40px 0;
}

.strategy-steps {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
}

.strategy-step {
  padding: 24px;
  background: rgba(15, 20, 36, 0.6);
  border: 1px solid var(--border);
  border-radius: 14px;
  transition: all 0.2s ease;
}

.strategy-step:hover {
  background: rgba(15, 20, 36, 0.8);
  border-color: rgba(139, 92, 246, 0.3);
}

.strategy-step.highlight-step {
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
  margin: 0 0 16px 0;
  font-size: 15px;
}

.step-details {
  margin-top: 16px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.details-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: var(--text);
}

.details-list {
  padding-left: 24px;
  margin: 0 0 16px 0;
  color: var(--muted);
  line-height: 1.8;
}

.details-list li {
  margin-bottom: 8px;
}

.step-tip {
  padding: 12px;
  background: rgba(74, 222, 128, 0.1);
  border-left: 3px solid rgba(74, 222, 128, 0.5);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--text);
}

.step-tip strong {
  color: var(--text);
  font-weight: 600;
}

/* Warning Section */
.warning-section {
  margin: 40px 0;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05));
  border-color: rgba(251, 191, 36, 0.3);
}

.warning-header {
  margin-bottom: 20px;
}

.warning-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.warning-main-text {
  font-size: 18px;
  color: #fcd34d;
  margin: 0;
  font-weight: 600;
}

.warning-body p {
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
}

.warning-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.warning-item {
  color: var(--muted);
  line-height: 1.6;
  font-size: 14px;
}

.warning-item.highlight {
  color: #fcd34d;
  font-weight: 600;
}

.warning-conclusion {
  padding: 16px;
  background: rgba(74, 222, 128, 0.1);
  border-left: 3px solid rgba(74, 222, 128, 0.5);
  border-radius: 8px;
  color: var(--text);
  font-size: 15px;
  line-height: 1.6;
}

.warning-conclusion strong {
  font-weight: 600;
}

/* Spells Section */
.spells-section {
  margin: 40px 0;
}

.spells-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.spell-card {
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: all 0.2s ease;
}

.spell-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.tier-best {
  background: rgba(251, 191, 36, 0.1);
  border-color: rgba(251, 191, 36, 0.3);
}

.tier-strong {
  background: rgba(156, 163, 175, 0.1);
  border-color: rgba(156, 163, 175, 0.3);
}

.tier-control {
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.3);
}

.tier-avoid {
  background: rgba(239, 68, 68, 0.08);
  border-color: rgba(239, 68, 68, 0.25);
}

.spell-tier {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
  color: var(--muted);
}

.spell-name {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
}

.spell-description {
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
  font-size: 14px;
}

/* Co-op Section */
.coop-section {
  margin: 40px 0;
}

.tactics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.tactic-card {
  padding: 24px;
  background: rgba(15, 20, 36, 0.6);
  border: 1px solid var(--border);
  border-radius: 14px;
  transition: all 0.2s ease;
}

.tactic-card:hover {
  background: rgba(15, 20, 36, 0.8);
  border-color: rgba(139, 92, 246, 0.3);
}

.tactic-name {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
}

.tactic-description {
  color: var(--muted);
  line-height: 1.7;
  margin: 0 0 16px 0;
  font-size: 15px;
}

.tactic-benefit {
  padding: 12px;
  background: rgba(74, 222, 128, 0.1);
  border-left: 3px solid rgba(74, 222, 128, 0.5);
  border-radius: 8px;
  font-size: 14px;
  color: var(--text);
  line-height: 1.6;
}

.tactic-benefit strong {
  font-weight: 600;
}

/* FAQ Section */
.faq-section {
  margin: 40px 0;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.faq-item {
  padding: 20px;
  background: rgba(15, 20, 36, 0.6);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: all 0.2s ease;
}

.faq-item:hover {
  background: rgba(15, 20, 36, 0.8);
  border-color: rgba(139, 92, 246, 0.3);
}

.faq-question {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
  line-height: 1.4;
}

.faq-answer {
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
  font-size: 14px;
}

/* Loot Table */
.loot-section {
  margin: 40px 0;
}

.table-container {
  margin-top: 20px;
  overflow-x: auto;
}

.loot-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(15, 20, 36, 0.6);
  border-radius: 12px;
  overflow: hidden;
}

.loot-table thead {
  background: rgba(139, 92, 246, 0.1);
}

.loot-table th {
  padding: 14px 18px;
  text-align: left;
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text);
  border-bottom: 2px solid var(--border);
}

.loot-table td {
  padding: 16px 18px;
  border-bottom: 1px solid var(--border);
  color: var(--muted);
  font-size: 14px;
}

.loot-table tbody tr:last-child td {
  border-bottom: none;
}

.loot-table tbody tr:hover {
  background: rgba(139, 92, 246, 0.05);
}

.loot-table tr.highlight-row {
  background: rgba(251, 191, 36, 0.08);
}

.loot-table tr.highlight-row td {
  color: #fcd34d;
  font-weight: 600;
}

.loot-table tr.highlight-row:hover {
  background: rgba(251, 191, 36, 0.12);
}

@media (max-width: 1024px) {
  .overview-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .spells-grid,
  .tactics-grid,
  .faq-grid {
    grid-template-columns: 1fr;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  /* 板块间距 */
  .overview-section,
  .objective-section,
  .strategy-section,
  .spells-section,
  .tactics-section,
  .loot-section,
  .faq-section {
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

  .approach-box {
    padding: 0.8rem;
  }

  .step-card {
    padding: 0.8rem;
  }

  .spell-card,
  .tactic-card,
  .faq-item {
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
  .approach-title,
  .step-title,
  .strategy-title,
  .tactics-title,
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

  .objective-text {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .step-description {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .faq-answer {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .overview-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* 布局调整 */
  .overview-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .approach-comparison {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .strategy-steps {
    gap: 0.8rem;
  }

  .step-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
  }

  .step-number {
    align-self: flex-start;
  }

  .section-head {
    margin-bottom: 0.7rem;
  }

  .objective-content {
    margin-top: 0.7rem;
  }

  .approach-list {
    gap: 0.5rem;
  }

  .approach-list li {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .loot-table {
    font-size: 0.7rem;
  }

  .loot-table th,
  .loot-table td {
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

  .spell-name,
  .tactic-name {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .spell-desc,
  .tactic-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }
}
</style>
