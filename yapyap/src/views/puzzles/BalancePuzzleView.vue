<template>
  <div class="page" id="top">
    <section class="page-hero">
      <div class="container">
        <p class="pill">{{ t('Puzzles.balance.hero.pill') }}</p>
        <h1 class="title">{{ t('Puzzles.balance.hero.title') }}</h1>
        <p class="intro">
          {{ t('Puzzles.balance.hero.intro_1') }}
          <a href="/spells">{{ t('Puzzles.balance.hero.intro_link1') }}</a>
          {{ t('Puzzles.balance.hero.intro_2') }}
          <a href="/spell-generator">{{ t('Puzzles.balance.hero.intro_link2') }}</a>
          {{ t('Puzzles.balance.hero.intro_3') }}
          <a href="/spells#mic-tester">{{ t('Puzzles.balance.hero.intro_link3') }}</a>
          {{ t('Puzzles.balance.hero.intro_4') }}
        </p>
        <div class="puzzle-meta">
          <span class="tag medium">{{ t('Puzzles.balance.hero.tags.medium') }}</span>
          <span class="tag voice">{{ t('Puzzles.balance.hero.tags.voice') }}</span>
          <span class="tag tricky">{{ t('Puzzles.balance.hero.tags.tricky') }}</span>
        </div>
      </div>
    </section>
    <main class="container">

      <!-- Quick Overview -->
      <section class="overview-section">
        <div class="overview-grid">
          <div class="overview-card card">
            <div class="overview-label">{{ t('Puzzles.balance.overview.difficulty.label') }}</div>
            <div class="overview-value">{{ t('Puzzles.balance.overview.difficulty.value') }}</div>
            <div class="overview-desc">{{ t('Puzzles.balance.overview.difficulty.desc') }}</div>
          </div>
          <div class="overview-card card">
            <div class="overview-label">{{ t('Puzzles.balance.overview.mechanic.label') }}</div>
            <div class="overview-value">{{ t('Puzzles.balance.overview.mechanic.value') }}</div>
            <div class="overview-desc">{{ t('Puzzles.balance.overview.mechanic.desc') }}</div>
          </div>
          <div class="overview-card card">
            <div class="overview-label">{{ t('Puzzles.balance.overview.tools.label') }}</div>
            <div class="overview-value">{{ t('Puzzles.balance.overview.tools.value') }}</div>
            <div class="overview-desc">
              {{ t('Puzzles.balance.overview.tools.desc_1') }}
              <a href="/wiki/wands">{{ t('Puzzles.balance.overview.tools.desc_link1') }}</a>
              {{ t('Puzzles.balance.overview.tools.desc_2') }}
              <a href="/wiki/wands">{{ t('Puzzles.balance.overview.tools.desc_link2') }}</a>
              {{ t('Puzzles.balance.overview.tools.desc_3') }}
            </div>
          </div>
          <div class="overview-card card">
            <div class="overview-label">{{ t('Puzzles.balance.overview.reward.label') }}</div>
            <div class="overview-value">{{ t('Puzzles.balance.overview.reward.value') }}</div>
            <div class="overview-desc">{{ t('Puzzles.balance.overview.reward.desc') }}</div>
          </div>
        </div>
        <div class="pain-points card">
          <div class="pain-label">{{ t('Puzzles.balance.pain.label') }}</div>
          <div class="pain-items">
            <span class="pain-tag">{{ t('Puzzles.balance.pain.items.spin') }}</span>
            <span class="pain-tag">{{ t('Puzzles.balance.pain.items.mic') }}</span>
            <span class="pain-tag">{{ t('Puzzles.balance.pain.items.team') }}</span>
          </div>
        </div>
      </section>

      <!-- Video Section -->
      <section class="video-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.balance.video.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.balance.video.subtitle') }}</p>
        </div>
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/FAIY5sW9aK4"
            title="Pitch Wheel Puzzle walkthrough"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <!-- Objective Section -->
      <section class="objective-section card">
          <div class="section-head">
            <h2 class="section-title">{{ t('Puzzles.balance.objective.title') }}</h2>
            <p class="section-subtitle">{{ t('Puzzles.balance.objective.subtitle') }}</p>
          </div>
        <div class="objective-content">
          <div class="objective-main">
            <p class="objective-text">{{ t('Puzzles.balance.objective.text') }}</p>
          </div>

          <div class="control-methods">
            <div class="control-box">
              <h3 class="control-title">{{ t('Puzzles.balance.objective.low.title') }}</h3>
              <p class="control-desc">{{ t('Puzzles.balance.objective.low.desc') }}</p>
            </div>
            <div class="control-box">
              <h3 class="control-title">{{ t('Puzzles.balance.objective.high.title') }}</h3>
              <p class="control-desc">{{ t('Puzzles.balance.objective.high.desc') }}</p>
            </div>
          </div>

          <div class="final-step warning-box">
            <h3 class="warning-title">{{ t('Puzzles.balance.objective.final.title') }}</h3>
            <p class="warning-text">{{ t('Puzzles.balance.objective.final.warning') }}</p>
            <p>{{ t('Puzzles.balance.objective.final.text') }}</p>
          </div>
        </div>
      </section>

      <!-- Core Technique -->
      <section class="technique-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.balance.technique.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.balance.technique.subtitle') }}</p>
        </div>
        <div class="technique-content">
          <div class="technique-comparison">
            <div class="technique-box wrong-technique">
              <h3 class="technique-title">{{ t('Puzzles.balance.technique.wrong.title') }}</h3>
              <p class="technique-desc">{{ t('Puzzles.balance.technique.wrong.desc') }}</p>
            </div>

            <div class="technique-box correct-technique">
              <h3 class="technique-title">{{ t('Puzzles.balance.technique.correct.title') }}</h3>
              <div class="technique-details">
                <p class="technique-desc">{{ t('Puzzles.balance.technique.correct.desc') }}</p>
                <div class="technique-examples">
                  <div class="example-item">{{ t('Puzzles.balance.technique.correct.examples.rhythm') }}</div>
                  <div class="example-item">{{ t('Puzzles.balance.technique.correct.examples.low') }}</div>
                  <div class="example-item">{{ t('Puzzles.balance.technique.correct.examples.high') }}</div>
                </div>
                <div class="technique-tip">{{ t('Puzzles.balance.technique.correct.tip') }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Step-by-Step Guide -->
      <section class="walkthrough-section card">
          <div class="section-head">
            <h2 class="section-title">{{ t('Puzzles.balance.walkthrough.title') }}</h2>
            <p class="section-subtitle">{{ t('Puzzles.balance.walkthrough.subtitle') }}</p>
          </div>
        <div class="walkthrough-steps">
          <div class="walkthrough-step">
            <div class="step-header">
              <span class="step-number">1</span>
              <h3 class="step-title">{{ t('Puzzles.balance.walkthrough.step1.title') }}</h3>
            </div>
            <p class="step-description">{{ t('Puzzles.balance.walkthrough.step1.desc') }}</p>
          </div>

          <div class="walkthrough-step">
            <div class="step-header">
              <span class="step-number">2</span>
              <h3 class="step-title">{{ t('Puzzles.balance.walkthrough.step2.title') }}</h3>
            </div>
            <p class="step-description">{{ t('Puzzles.balance.walkthrough.step2.desc') }}</p>
          </div>

          <div class="walkthrough-step highlight-step">
            <div class="step-header">
              <span class="step-number">3</span>
              <h3 class="step-title">{{ t('Puzzles.balance.walkthrough.step3.title') }}</h3>
            </div>
            <p class="step-description">
              {{ t('Puzzles.balance.walkthrough.step3.desc_1') }}
              <a href="/spells">{{ t('Puzzles.balance.walkthrough.step3.desc_link1') }}</a>
              {{ t('Puzzles.balance.walkthrough.step3.desc_2') }}
              <a href="/guides">{{ t('Puzzles.balance.walkthrough.step3.desc_link2') }}</a>
              {{ t('Puzzles.balance.walkthrough.step3.desc_3') }}
            </p>
          </div>

          <div class="walkthrough-step warning-step">
            <div class="step-header">
              <span class="step-number">4</span>
              <h3 class="step-title">{{ t('Puzzles.balance.walkthrough.step4.title') }}</h3>
            </div>
            <div class="step-warning-box">
              <p class="warning-text">{{ t('Puzzles.balance.walkthrough.step4.warning.text') }}</p>
              <p class="step-description">{{ t('Puzzles.balance.walkthrough.step4.action') }}</p>
            </div>
          </div>

          <div class="walkthrough-step">
            <div class="step-header">
              <span class="step-number">5</span>
              <h3 class="step-title">{{ t('Puzzles.balance.walkthrough.step5.title') }}</h3>
            </div>
            <p class="step-description">{{ t('Puzzles.balance.walkthrough.step5.desc') }}</p>
          </div>
        </div>
      </section>

      <!-- Troubleshooting -->
      <section class="troubleshooting-section card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Puzzles.balance.faq.title') }}</h2>
          <p class="section-subtitle">{{ t('Puzzles.balance.faq.subtitle') }}</p>
        </div>
        <div class="troubleshooting-content">
          <div class="trouble-item">
            <h3 class="trouble-question">{{ t('Puzzles.balance.faq.q1.q') }}</h3>
            <p class="trouble-answer">
              {{ t('Puzzles.balance.faq.q1.a') }}
            </p>
            <div class="trouble-suggestion" v-if="t('Puzzles.balance.faq.q1.s')">
                {{ t('Puzzles.balance.faq.q1.s') }}
            </div>
          </div>
          <div class="trouble-item">
            <h3 class="trouble-question">{{ t('Puzzles.balance.faq.q2.q') }}</h3>
            <p class="trouble-answer">
              {{ t('Puzzles.balance.faq.q2.a_1') }}
              <a href="/wiki/wands">{{ t('Puzzles.balance.faq.q2.a_link1') }}</a>
              {{ t('Puzzles.balance.faq.q2.a_2') }}
              <a href="/spell-generator">{{ t('Puzzles.balance.faq.q2.a_link2') }}</a>
              {{ t('Puzzles.balance.faq.q2.a_3') }}
            </p>
          </div>
          <div class="trouble-item">
             <h3 class="trouble-question">{{ t('Puzzles.balance.faq.q3.q') }}</h3>
             <p class="trouble-answer">{{ t('Puzzles.balance.faq.q3.a') }}</p>
          </div>
          <div class="trouble-item">
            <h3 class="trouble-question">{{ t('Puzzles.balance.faq.q4.q') }}</h3>
            <p class="trouble-answer">
              {{ t('Puzzles.balance.faq.q4.a_1') }}
              <a href="/spell-generator">{{ t('Puzzles.balance.faq.q4.a_link1') }}</a>
              {{ t('Puzzles.balance.faq.q4.a_2') }}
              <a href="/spells">{{ t('Puzzles.balance.faq.q4.a_link2') }}</a>
              {{ t('Puzzles.balance.faq.q4.a_3') }}
            </p>
          </div>
          <div class="trouble-item">
            <h3 class="trouble-question">{{ t('Puzzles.balance.faq.q5.q') }}</h3>
            <p class="trouble-answer">
              {{ t('Puzzles.balance.faq.q5.a_1') }}
              <a href="/wiki/wands">{{ t('Puzzles.balance.faq.q5.a_link1') }}</a>
              {{ t('Puzzles.balance.faq.q5.a_2') }}
              <a href="/puzzles/ball-puzzle">{{ t('Puzzles.balance.faq.q5.a_link2') }}</a>
              {{ t('Puzzles.balance.faq.q5.a_3') }}
              <a href="/puzzles/door-puzzle">{{ t('Puzzles.balance.faq.q5.a_link3') }}</a>
              {{ t('Puzzles.balance.faq.q5.a_4') }}
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

.tag.medium {
  background: rgba(251, 191, 36, 0.12);
  border-color: rgba(251, 191, 36, 0.25);
  color: #fcd34d;
}

.tag.voice {
  background: rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.25);
  color: #93c5fd;
}

.tag.tricky {
  background: rgba(239, 68, 68, 0.12);
  border-color: rgba(239, 68, 68, 0.25);
  color: #fca5a5;
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

.pain-points {
  padding: 20px;
  background: rgba(239, 68, 68, 0.08);
  border-color: rgba(239, 68, 68, 0.25);
}

.pain-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pain-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pain-tag {
  padding: 6px 12px;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  font-size: 13px;
  color: #fca5a5;
  font-weight: 500;
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

/* Objective Section */
.objective-section {
  margin: 40px 0;
}

.objective-content {
  margin-top: 20px;
}

.objective-main {
  margin-bottom: 24px;
}

.objective-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--muted);
  margin: 0;
}

.objective-text strong {
  color: var(--text);
  font-weight: 600;
}

.control-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.control-box {
  padding: 20px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
}

.control-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--text);
}

.control-desc {
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
  font-size: 14px;
}

.final-step {
  padding: 20px;
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.3);
  border-left: 4px solid rgba(251, 191, 36, 0.6);
  border-radius: 12px;
}

.warning-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: #fcd34d;
}

.warning-text {
  font-size: 16px;
  color: #fcd34d;
  margin: 0 0 12px 0;
  font-weight: 600;
}

.final-step p {
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
  font-size: 14px;
}

/* Technique Section */
.technique-section {
  margin: 40px 0;
}

.technique-content {
  margin-top: 20px;
}

.technique-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.technique-box {
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.wrong-technique {
  background: rgba(239, 68, 68, 0.08);
  border-color: rgba(239, 68, 68, 0.25);
}

.correct-technique {
  background: rgba(74, 222, 128, 0.08);
  border-color: rgba(74, 222, 128, 0.25);
}

.technique-title {
  font-size: 20px;
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

.technique-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.technique-examples {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.example-item {
  color: var(--muted);
  line-height: 1.6;
  font-size: 14px;
}

.example-item strong {
  color: var(--text);
  font-weight: 600;
}

.technique-tip {
  padding: 12px;
  background: rgba(74, 222, 128, 0.1);
  border-left: 3px solid rgba(74, 222, 128, 0.5);
  border-radius: 8px;
  font-size: 14px;
  color: var(--text);
  line-height: 1.6;
}

.technique-tip strong {
  font-weight: 600;
}

/* Walkthrough Section */
.walkthrough-section {
  margin: 40px 0;
}

.walkthrough-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.walkthrough-step {
  padding: 24px;
  background: rgba(15, 20, 36, 0.6);
  border: 1px solid var(--border);
  border-radius: 14px;
  transition: all 0.2s ease;
}

.walkthrough-step:hover {
  background: rgba(15, 20, 36, 0.8);
  border-color: rgba(139, 92, 246, 0.3);
}

.walkthrough-step.highlight-step {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(74, 222, 128, 0.08));
  border-color: rgba(139, 92, 246, 0.3);
}

.walkthrough-step.warning-step {
  background: rgba(251, 191, 36, 0.08);
  border-color: rgba(251, 191, 36, 0.3);
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
  margin: 0;
  font-size: 15px;
}

.step-warning-box {
  margin-top: 16px;
  padding: 16px;
  background: rgba(251, 191, 36, 0.1);
  border-left: 3px solid rgba(251, 191, 36, 0.5);
  border-radius: 8px;
}

.step-warning-box .warning-text {
  color: #fcd34d;
  font-size: 15px;
  margin: 0 0 12px 0;
  font-weight: 600;
}

.step-warning-box .step-description {
  margin: 0;
}

.step-warning-box strong {
  color: var(--text);
  font-weight: 600;
}

/* Troubleshooting Section */
.troubleshooting-section {
  margin: 40px 0;
}

.troubleshooting-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.trouble-item {
  padding: 24px;
  background: rgba(15, 20, 36, 0.6);
  border: 1px solid var(--border);
  border-radius: 14px;
  transition: all 0.2s ease;
}

.trouble-item:hover {
  background: rgba(15, 20, 36, 0.8);
  border-color: rgba(139, 92, 246, 0.3);
}

.trouble-item.critical {
  background: rgba(239, 68, 68, 0.08);
  border-color: rgba(239, 68, 68, 0.25);
}

.trouble-question {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
  line-height: 1.4;
}

.trouble-answer {
  color: var(--muted);
  line-height: 1.7;
  margin: 0 0 12px 0;
  font-size: 15px;
}

.trouble-answer strong {
  color: var(--text);
  font-weight: 600;
}

.trouble-suggestion {
  padding: 12px;
  background: rgba(74, 222, 128, 0.1);
  border-left: 3px solid rgba(74, 222, 128, 0.5);
  border-radius: 8px;
  font-size: 14px;
  color: var(--text);
  line-height: 1.6;
  margin-top: 12px;
}

.trouble-suggestion strong {
  font-weight: 600;
}

.workaround-box {
  margin-top: 16px;
  padding: 20px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
}

.workaround-title {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
}

.workaround-steps {
  padding-left: 24px;
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.workaround-steps li {
  margin-bottom: 8px;
}

.link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .overview-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .technique-comparison {
    grid-template-columns: 1fr;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  /* 板块间距 */
  .overview-section,
  .objective-section,
  .technique-section,
  .step-by-step-section,
  .troubleshooting-section {
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

  .control-box {
    padding: 0.8rem;
  }

  .final-step {
    padding: 0.8rem;
  }

  .technique-box {
    padding: 0.8rem;
  }

  .step-card {
    padding: 0.8rem;
  }

  .trouble-item {
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
  .control-title,
  .warning-title,
  .step-title,
  .technique-title,
  .trouble-question {
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

  .control-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .warning-text {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .step-description {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .technique-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .trouble-answer {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .overview-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .final-step p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .example-item {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .technique-tip {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* 布局调整 */
  .overview-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .control-methods {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .technique-comparison {
    grid-template-columns: 1fr;
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

  .objective-content {
    margin-top: 0.7rem;
  }

  .objective-main {
    margin-bottom: 0.7rem;
  }

  .technique-content {
    margin-top: 0.7rem;
  }

  .technique-details {
    gap: 0.7rem;
  }

  .technique-examples {
    gap: 0.7rem;
    padding: 0.8rem;
  }

  .pain-points {
    margin-top: 0.8rem;
  }

  .pain-items {
    gap: 0.5rem;
  }

  .pain-tag {
    padding: 0.4rem 0.7rem;
    font-size: 0.8rem;
  }

  .section-head {
    margin-bottom: 0.7rem;
  }

  .overview-label {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
  }

  .overview-value {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .pain-label {
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
  }

  .puzzle-meta {
    gap: 0.5rem;
    margin-top: 0.7rem;
  }

  .tag {
    padding: 0.4rem 0.7rem;
    font-size: 0.7rem;
  }
}

/* Internal Links Styling */
.intro a,
.section-subtitle a,
.step-description a,
.overview-desc a,
.objective-text a,
.trouble-answer a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.intro a:hover,
.section-subtitle a:hover,
.step-description a:hover,
.overview-desc a:hover,
.objective-text a:hover,
.trouble-answer a:hover {
  text-decoration: underline;
  color: var(--accent-2, rgba(139, 92, 246, 0.8));
}
</style>
