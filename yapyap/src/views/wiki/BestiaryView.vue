<template>
  <div class="page" id="top">
    <main class="container">
      <section class="page-hero">
        <nav class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">></span>
          <a href="/wiki">Wiki</a>
          <span class="separator">></span>
          <span>Bestiary</span>
        </nav>
        <p class="pill">Monsters · Enemies · Sound Cues · Strategies</p>
        <h1 class="title">YAPYAP Bestiary: All Monsters & Survival Guide</h1>
        <p class="intro">
          Complete guide to all enemies in YAPYAP. Learn their behaviors, weaknesses, sound sensitivity, and how to counter them.
        </p>
      </section>

      <!-- Enemy List -->
      <section class="wiki-content card">
        <div class="section-head">
          <h2 class="section-title">All Enemies</h2>
          <p class="section-subtitle">
            Quick reference guide to all monsters, their threat levels, and detection methods.
          </p>
        </div>

        <!-- Desktop table -->
        <div class="table card" aria-label="All YAPYAP enemies list">
          <div class="row head">
            <div class="image">Image</div>
            <div class="name">Monster Name</div>
            <div class="danger">Threat Level</div>
            <div class="characteristics">Characteristics & Strategy</div>
          </div>

          <div class="row" v-for="enemy in enemies" :key="enemy.name">
            <div class="c image">
              <div class="image-placeholder">
                <img :src="enemy.image" :alt="enemy.name" />
              </div>
            </div>
            <div class="c name">
              <strong>{{ enemy.name }}</strong>
            </div>
            <div class="c danger">
              <div class="threat-info">
                <span class="threat-badge" :class="`threat-${enemy.threatLevel}`">
                  {{ enemy.threat }}
                </span>
                <span class="threat-desc">{{ enemy.threatDesc }}</span>
              </div>
            </div>
            <div class="c characteristics">
              <div class="characteristics-content">
                <div class="traits-section" v-if="enemy.traits">
                  <strong class="section-label">Traits:</strong>
                  <p class="traits-text">{{ enemy.traits }}</p>
                </div>
                <div class="strategy-section" v-if="enemy.strategy">
                  <strong class="section-label">Strategy:</strong>
                  <ol class="strategy-list" v-if="Array.isArray(enemy.strategy)">
                    <li v-for="(item, idx) in enemy.strategy" :key="idx">{{ item }}</li>
                  </ol>
                  <p class="strategy-text" v-else>{{ enemy.strategy }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile cards -->
        <div class="cards-mobile">
          <div class="enemy-card card" v-for="enemy in enemies" :key="enemy.name">
            <div class="enemy-card-header">
              <div class="enemy-image">
                <div class="image-placeholder">
                  <img v-if="enemy.image" :src="enemy.image" :alt="enemy.name" />
                  <span v-else>{{ enemy.icon }}</span>
                </div>
              </div>
              <div>
                <h3 class="enemy-name">{{ enemy.name }}</h3>
                <div class="enemy-meta">
                  <span class="threat-badge" :class="`threat-${enemy.threatLevel}`">
                    {{ enemy.threat }}
                  </span>
                  <span class="threat-desc">{{ enemy.threatDesc }}</span>
                </div>
              </div>
            </div>
            <div class="enemy-characteristics">
              <div class="traits-section" v-if="enemy.traits">
                <strong class="section-label">Traits:</strong>
                <p class="traits-text">{{ enemy.traits }}</p>
              </div>
              <div class="strategy-section" v-if="enemy.strategy">
                <strong class="section-label">Strategy:</strong>
                <ol class="strategy-list" v-if="Array.isArray(enemy.strategy)">
                  <li v-for="(item, idx) in enemy.strategy" :key="idx">{{ item }}</li>
                </ol>
                <p class="strategy-text" v-else>{{ enemy.strategy }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Mechanics: Two Column Layout -->
      <section class="mechanics-section">
        <div class="mechanics-grid">
          <!-- Audio Detection -->
          <div class="mechanics-card card">
            <h2 class="section-title">How Monsters Hear You</h2>
            <div class="mechanics-content">
              <p>
                YAPYAP is a voice-controlled game. Your microphone is always active—even casual conversation or coughing can attract nearby <strong>Guards</strong> and sound-sensitive enemies.
              </p>
              
              <div class="mechanics-topic">
                <h3 class="topic-title">Microphone Threshold</h3>
                <p>
                  <strong>Warning:</strong> Loud talking or coughing will attract enemies even if you're not casting spells. Adjust your mic sensitivity in settings, but remember: <strong>silence is often the best strategy.</strong>
                </p>
              </div>

              <div class="mechanics-topic">
                <h3 class="topic-title">Spell Noise</h3>
                <p>
                  <strong>Casting spells makes noise.</strong> Every spell command you shout produces sound that can alert nearby enemies. Don't randomly shout spells while sneaking unless you're prepared to fight.
                </p>
              </div>

              <div class="mechanics-topic">
                <h3 class="topic-title">Detection Types</h3>
                <ul class="topic-list">
                  <li><strong>Sound-Based (Guards, Goblins):</strong> Break Line of Sight by hiding behind walls or objects.</li>
                  <li><strong>Vision-Based (The Eye):</strong> Doesn't react to sound but tracks visually. Hide behind cover.</li>
                  <li><strong>Lock-On (The Jester):</strong> Once spotted, it's locked on. Your only option is to run.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Farming Strategy -->
          <div class="mechanics-card card">
            <h2 class="section-title">Farming Enemies for Points</h2>
            <div class="mechanics-content">
              <p>
                Killing enemies isn't just about survival—it's about maximizing your quota. Understanding which enemies are worth farming is key to successful runs.
              </p>

              <div class="mechanics-topic">
                <h3 class="topic-title">Goblins: The Perfect ATM</h3>
                <p>
                  <strong>Best point farm in the game.</strong> Use <strong>Piss-Yuk</strong> to hit them multiple times for +5 points per hit, rather than killing them instantly. Keep your distance and use terrain to avoid being swarmed.
                </p>
                <p class="topic-note">
                  <strong>Pro Tip:</strong> Don't get too greedy. Balance point farming with your escape timeline.
                </p>
              </div>

              <div class="mechanics-topic">
                <h3 class="topic-title">Guards: Helmet Bonus</h3>
                <p>
                  Shooting off their helmets first grants extra points before you kill them. Use terrain to your advantage—Guards can't climb, so elevated positions are safer.
                </p>
              </div>

              <div class="mechanics-topic warning-topic">
                <h3 class="topic-title">⚠️ The Cost of Greed</h3>
                <p>
                  Spending too much time farming can lead to disaster: Time Ghost spawns at 00:00, dangerous enemies spawn more frequently, and team wipe risks increase.
                </p>
                <p class="topic-warning">
                  <strong>Golden Rule:</strong> Always prioritize escape over farming. Set a time limit (e.g., leave by 23:30) and stick to it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Death Penalties -->
      <section class="death-section">
        <div class="death-card card">
          <h2 class="section-title">Death Penalties</h2>
          <div class="death-content">
            <p>
              When you die, <strong>all items in your inventory drop at your death location</strong>, including Scrap, your equipped Wand, and consumables. Your corpse remains visible to teammates who can recover your items.
            </p>
            <p>
              Each death reduces your team's quota progress. Dead players cannot contribute to the quota, so it's crucial to keep at least one person alive.
            </p>
            <div class="death-warning">
              <div class="warning-icon">⚠️</div>
              <div class="warning-content">
                <strong>Warning: Full Team Wipe</strong>
                <p>If everyone dies, you lose ALL items on the ship. Always leave one person alive on the ship as a safety net!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Guides -->
      <section class="related-section">
        <div class="related-card card">
          <h2 class="section-title">Prepared for Battle?</h2>
          <div class="related-links">
            <a href="/wiki/wands" class="related-link">
              <div class="link-icon">🪄</div>
              <div class="link-content">
                <h3 class="link-title">Get the Right Weapons</h3>
                <p class="link-desc">Which wands knock back Guards? Find the perfect wand for your survival strategy.</p>
              </div>
            </a>
            <a href="/spells" class="related-link">
              <div class="link-icon">✨</div>
              <div class="link-content">
                <h3 class="link-title">Learn Defense Spells</h3>
                <p class="link-desc">Spells to block lasers and slow enemies. Master Aero-bis, Duplico, and more.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const enemies = [
  {
    name: 'Goblins',
    image: '/images/bestiary/bestiary-01.webp',
    threat: '🟢 Low',
    threatLevel: 'low',
    threatDesc: 'Dangerous in swarms',
    traits: 'Small creatures that spawn in large groups later in the stage.',
    strategy: [
      'Use the Wind Wand (Aero-bis) to easily push them away.',
      'Use Piss-Yuk on them to farm points (+5 per hit).',
      'Be careful not to get cornered; they deal small damage individually but melt HP quickly in groups.',
    ],
  },
  {
    name: 'Guards',
    image: '/images/bestiary/bestiary-02.webp',
    threat: '🟠 High',
    threatLevel: 'high',
    threatDesc: '2-Hit Kill',
    traits: 'Red armored knights. They deal massive damage (50% HP per hit). They have poor pathfinding and cannot climb.',
    strategy: [
      'Shoot off their helmets for points, then run.',
      'Use the Duplico spell to create a decoy and distract them.',
      'Use objects/terrain to block them since they have to walk around.',
    ],
  },
  {
    name: 'Headless Guards',
    image: '/images/bestiary/bestiary-03.webp',
    threat: '🔴 Very High',
    threatLevel: 'very-high',
    threatDesc: '2-Hit Kill',
    traits: 'A more dangerous version of the standard Guard. They also kill in 2 hits but move and attack much faster.',
    strategy: 'Extremely dangerous. Keep maximum distance and avoid narrow corridors.',
  },
  {
    name: 'The Jester',
    image: '/images/bestiary/bestiary-04.webp',
    threat: '⚫ CRITICAL',
    threatLevel: 'critical',
    threatDesc: 'Insta-Kill',
    traits: 'The deadliest enemy in the demo. It moves extremely fast and will instantly kill you upon contact.',
    strategy: 'Do not fight. As soon as you see or hear it, RUN away immediately.',
  },
  {
    name: 'The Eye',
    image: '/images/bestiary/bestiary-05.webp',
    threat: '🟠 High',
    threatLevel: 'high',
    threatDesc: 'Ranged Damage',
    traits: 'A stationary, turret-like enemy that spawns randomly. It tracks players with a damaging laser beam.',
    strategy: [
      'Break Line of Sight (LOS) by hiding behind walls or pillars.',
      'Be careful: The Eye often distracts you so other monsters can finish you off.',
    ],
  },
  {
    name: 'The Slime',
    image: '/images/bestiary/bestiary-06.webp',
    threat: '🟣 Situational',
    threatLevel: 'situational',
    threatDesc: 'Path Blocker',
    traits: 'A giant green gelatinous cube. Easy to avoid in open rooms, but deadly in tight spaces.',
    strategy: 'Its main threat is blocking your path (e.g., staircases). If a Slime traps you in a dead-end with other monsters, you will die.',
  },
  {
    name: 'Time Ghost',
    image: '/images/bestiary/bestiary-07.webp',
    threat: '⚫ Unavoidable',
    threatLevel: 'unavoidable',
    threatDesc: 'Game Over',
    traits: 'Spawns when the level timer hits 00:00.',
    strategy: 'Instantly kills the player to end the night/run. Cannot be fought.',
  },
]
</script>

<style scoped>

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
  grid-template-columns: 140px 1fr 180px 2.5fr;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid var(--border);
  align-items: center;
  transition: background-color 0.2s ease;
}

.table .row:not(.head):hover {
  background: rgba(139, 92, 246, 0.05);
}

.table .row:not(.head) {
  min-height: 120px;
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.table .row:not(.head):hover .image-placeholder {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.3);
}

.image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.table .c.name {
  display: flex;
  align-items: center;
}

.table .c.name strong {
  color: var(--text);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
}

.table .c.danger {
  display: flex;
  align-items: flex-start;
}

.threat-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.threat-desc {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.4;
}

.table .c.characteristics {
  min-width: 0;
}

.characteristics-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.traits-section,
.strategy-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

.traits-text {
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

.strategy-list {
  padding-left: 20px;
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
  list-style: decimal;
}

.strategy-list li::marker {
  color: rgba(139, 92, 246, 0.6);
}

.strategy-text {
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

.threat-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
}

.threat-low {
  background: rgba(74, 222, 128, 0.15);
  border: 1px solid rgba(74, 222, 128, 0.35);
  color: #86efac;
}

.threat-high {
  background: rgba(251, 191, 36, 0.15);
  border: 1px solid rgba(251, 191, 36, 0.35);
  color: #fcd34d;
}

.threat-very-high {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.35);
  color: #fca5a5;
}

.threat-critical,
.threat-unavoidable {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(239, 68, 68, 0.6);
  color: #ef4444;
  font-weight: 700;
}

.threat-situational {
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.35);
  color: #dcd7ff;
}

.sensitivity-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
}

.sensitivity-high,
.sensitivity-extreme {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.35);
  color: #fca5a5;
}

.sensitivity-medium {
  background: rgba(251, 191, 36, 0.15);
  border: 1px solid rgba(251, 191, 36, 0.35);
  color: #fcd34d;
}

.sensitivity-low {
  background: rgba(74, 222, 128, 0.15);
  border: 1px solid rgba(74, 222, 128, 0.35);
  color: #86efac;
}

.sensitivity-deaf {
  background: rgba(156, 163, 175, 0.15);
  border: 1px solid rgba(156, 163, 175, 0.35);
  color: #d1d5db;
}

.strategy-text {
  font-size: 13px;
  line-height: 1.5;
  color: var(--muted);
}

.cards-mobile {
  display: none;
  flex-direction: column;
  gap: 16px;
}

.enemy-card {
  padding: 20px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
}

.enemy-card-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}

.enemy-image {
  flex-shrink: 0;
}

.enemy-image .image-placeholder {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 20, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.enemy-image .image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.enemy-name {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.enemy-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.enemy-characteristics {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.enemy-characteristics .traits-section,
.enemy-characteristics .strategy-section {
  padding: 16px;
  background: rgba(15, 20, 36, 0.4);
  border-radius: 10px;
  border: 1px solid var(--border);
}

/* Mechanics Section */
.mechanics-section {
  margin-top: 32px;
}

.mechanics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
}

.mechanics-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.mechanics-content p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0 0 20px 0;
}

.mechanics-content strong {
  color: var(--text);
  font-weight: 600;
}

.mechanics-topic {
  margin-top: 20px;
  padding: 16px;
  background: rgba(15, 20, 36, 0.6);
  border-radius: 12px;
  border: 1px solid var(--border);
}

.mechanics-topic:first-of-type {
  margin-top: 0;
}

.mechanics-topic.warning-topic {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
}

.topic-title {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
}

.topic-list {
  padding-left: 24px;
  margin: 12px 0 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.topic-list li {
  margin-bottom: 8px;
}

.topic-list strong {
  color: var(--text);
  font-weight: 600;
}

.topic-note {
  padding: 12px;
  background: rgba(139, 92, 246, 0.1);
  border-left: 3px solid rgba(139, 92, 246, 0.5);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
  margin-top: 12px;
}

.topic-note strong {
  color: var(--text);
  font-weight: 600;
}

.topic-warning {
  padding: 12px;
  background: rgba(251, 191, 36, 0.1);
  border-left: 3px solid rgba(251, 191, 36, 0.5);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
  margin-top: 12px;
}

.topic-warning strong {
  color: var(--text);
  font-weight: 600;
}

/* Death Section */
.death-section {
  margin-top: 32px;
}

.death-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.death-content p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0 0 16px 0;
}

.death-content strong {
  color: var(--text);
  font-weight: 600;
}

.death-warning {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: rgba(239, 68, 68, 0.1);
  border: 2px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  margin-top: 20px;
}

.warning-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.warning-content {
  flex-grow: 1;
}

.warning-content strong {
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
}

.warning-content p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

/* Related Section */
.related-section {
  margin-top: 32px;
}

.related-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.related-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.related-link {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}

.related-link:hover {
  background: rgba(139, 92, 246, 0.15);
  border-color: rgba(139, 92, 246, 0.4);
  transform: translateY(-2px);
}

.link-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.link-content {
  flex-grow: 1;
}

.link-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--text);
}

.link-desc {
  font-size: 14px;
  line-height: 1.5;
  color: var(--muted);
  margin: 0;
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


  .wiki-content,
  .mechanics-card,
  .death-card,
  .related-card {
    padding: 20px;
  }

  .mechanics-grid {
    grid-template-columns: 1fr;
  }

  .related-links {
    grid-template-columns: 1fr;
  }
}
</style>
