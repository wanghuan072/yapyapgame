<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <p class="pill">Spell Generator · Animations · Audio Pronunciations</p>
        <h1 class="title">YAPYAP Spell Generator</h1>
        <p class="intro">
          Choose your wand, select an incantation, and forge your spell. Watch animations and learn pronunciations.
        </p>
      </div>
    </section>
    <main class="container">
      <div class="spell-forge-wrapper">
        <div class="spell-forge-layout">
          <!-- Left Column: Wand & Spell Selection -->
          <div class="selection-panel">
            <!-- Wands Selection -->
            <div class="selection-card">
              <div class="selection-header">
                <span class="section-icon wand-icon">🪄</span>
                <h2 class="selection-title">Choose Your Wand</h2>
              </div>
              <div class="wand-list">
                <button
                  v-for="wand in wands"
                  :key="wand.id"
                  :class="['wand-item', { active: selectedWand?.id === wand.id }]"
                  @click="selectWand(wand)"
                >
                  <div 
                    class="wand-accent" 
                    :style="{ background: wand.accentGradient }"
                  ></div>
                  <div class="wand-text">
                    <span class="wand-name-cn">{{ wand.shortName }}</span>
                  </div>
                </button>
              </div>
            </div>

            <!-- Incantations Selection -->
            <div class="selection-card" v-if="selectedWand">
              <div class="selection-header">
                <span class="section-icon scroll-icon">📜</span>
                <h2 class="selection-title">Select Incantation</h2>
              </div>
              <div class="incantation-list">
                <button
                  v-for="spell in selectedWand.spells"
                  :key="spell.spell"
                  :class="['incantation-item', { active: selectedSpell?.spell === spell.spell }]"
                  @click="selectSpell(spell)"
                >
                  {{ spell.spell }}
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column: Spell Forge Controls -->
          <div class="forge-panel">
            <div class="forge-content">
              <div class="selection-header">
                <h2 class="selection-title">Spell Forge</h2>
              </div>
              <div class="forge-controls">
                <div class="vocal-timbre-section">
                  <label class="vocal-timbre-label">Vocal Timbre</label>
                  <div class="dropdown-wrapper">
                    <select class="vocal-timbre-dropdown" v-model="selectedTimbre">
                      <option v-for="timbre in timbres" :key="timbre.value" :value="timbre.value">
                        {{ timbre.label }}
                      </option>
                    </select>
                  </div>
                </div>

                <button 
                  class="manifest-button" 
                  @click="manifestSpell"
                  :disabled="!selectedSpell || !selectedTimbre"
                >
                  Manifest Spell
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Spell Display Area (always visible) -->
      <div class="spell-display">
        <div class="spell-display-content card">
          <!-- Video/Animation Area -->
          <div class="spell-media">
            <div v-if="!manifestedSpell" class="media-placeholder">
              <p class="placeholder-text">Select a wand and spell, then click "Manifest Spell" to view the animation</p>
            </div>
            <video
              v-else-if="mediaType === 'video' && mediaPath"
              :src="mediaPath"
              :key="mediaPath"
              autoplay
              loop
              muted
              playsinline
              class="spell-video"
              @error="handleMediaError"
            >
              Your browser does not support the video tag.
            </video>
            <img
              v-else-if="mediaType === 'gif' && mediaPath"
              :src="mediaPath"
              alt="Spell animation"
              class="spell-gif"
              @error="handleMediaError"
            />
            <div v-else-if="manifestedSpell" class="media-placeholder">
              <div class="placeholder-icon">🎬</div>
              <p>Spell animation not available</p>
              <p class="small muted">Place animation file in: <code>public/videos/spells/</code></p>
            </div>
          </div>

          <!-- Spell Info -->
          <div class="spell-info" v-if="manifestedSpell">
            <div class="spell-header-info">
              <h3 class="spell-name-large">{{ manifestedSpell.spell }}</h3>
            </div>

            <div class="spell-effect-section">
              <h4>Effect</h4>
              <p>{{ manifestedSpell.effect }}</p>
            </div>

            <div class="spell-tips-section" v-if="manifestedSpell.tips">
              <h4>Tips & Strategy</h4>
              <p>{{ manifestedSpell.tips }}</p>
            </div>
          </div>

          <!-- Audio Player (hidden, auto-plays on manifest) -->
          <div class="audio-controls" style="display: none;">
            <audio
              ref="spellAudio"
              :src="audioPath"
              class="audio-player"
            ></audio>
          </div>
        </div>
      </div>

      <!-- How to Use the Spell Forge -->
      <section class="guide-section">
        <div class="guide-header">
          <h2 class="guide-title">How to Use the Spell Generator</h2>
          <p class="guide-intro">
            Master the <strong>YAPYAP demo game pronunciation</strong> with our interactive spell generator. Follow these simple steps to practice voice commands.
          </p>
        </div>

        <div class="steps-container">
          <div class="step-card">
            <div class="step-number">01</div>
            <div class="step-content">
              <h3 class="step-title">Select Your Catalyst</h3>
              <p class="step-text">
                Choose a Wand archetype from the left panel. Different wands may have different casting animations or visual styles.
              </p>
            </div>
          </div>

          <div class="step-connector"></div>

          <div class="step-card">
            <div class="step-number">02</div>
            <div class="step-content">
              <h3 class="step-title">Choose an Incantation</h3>
              <p class="step-text">
                Pick a spell you want to learn, such as <strong>Aero-Bis</strong> or <strong>Up-Dog</strong>. Each spell in the <strong>YAPYAP demo game</strong> requires precise pronunciation.
              </p>
            </div>
          </div>

          <div class="step-connector"></div>

          <div class="step-card">
            <div class="step-number">03</div>
            <div class="step-content">
              <h3 class="step-title">Manifest & Listen</h3>
              <p class="step-text">
                Click the "Manifest Spell" button. Watch the visual effect and listen carefully to the audio guide to hear the correct <strong>YAPYAP demo game pronunciation</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Use This Tool? -->
      <section class="why-section">
        <div class="why-card">
          <div class="why-header">
            <div class="why-icon">⚡</div>
            <h2 class="why-title">Why Practice in the Spell Generator?</h2>
          </div>
          <div class="why-body">
            <div class="why-highlight">
              <h3 class="why-subtitle">Stop Fizzling, Start Casting.</h3>
            </div>
            <div class="why-text-block">
              <p class="why-text">
                In the heat of battle, a mispronounced spell can cost you the game. This tool allows you to practice in a safe environment without the pressure of being chased by monsters.
              </p>
              <p class="why-text">
                Especially for players struggling with the strict voice recognition in the <strong>YAPYAP demo game</strong>, <strong>pronunciation accuracy</strong> is the key to survival. Our generator provides the "Golden Standard" audio—if you mimic the rhythm and tone you hear here, your success rate in-game will skyrocket.
              </p>
              <p class="why-text">
                Perfect your <strong>YAPYAP demo game pronunciation</strong> before entering the tower. Every spell in the <strong>YAPYAP demo game</strong> requires precise voice commands, and this tool helps you master them all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pro Tips: Voice Command Mechanics -->
      <section class="tips-section">
        <div class="tips-header">
          <div class="tips-title-wrapper">
            <span class="tips-badge">Pro Tips</span>
            <h2 class="tips-title">Voice Command Mechanics</h2>
          </div>
          <p class="tips-subtitle">
            Expert advice for mastering <strong>YAPYAP demo game pronunciation</strong> and voice recognition.
          </p>
        </div>

        <div class="tips-grid">
          <div class="tip-card">
            <div class="tip-header">
              <div class="tip-number">1</div>
              <h3 class="tip-title">It's About Rhythm, Not Volume</h3>
            </div>
            <p class="tip-text">
              You don't need to shout! The <strong>YAPYAP demo game</strong> analyzes distinct syllables. Try to speak with a staccato rhythm (e.g., "AIR... OH... BISS" instead of "Aerobis"). This is crucial for accurate <strong>YAPYAP demo game pronunciation</strong>.
            </p>
          </div>

          <div class="tip-card">
            <div class="tip-header">
              <div class="tip-number">2</div>
              <h3 class="tip-title">Background Noise</h3>
            </div>
            <p class="tip-text">
              Mechanical keyboards and fans are your enemies. Use Push-to-Talk or lower your mic sensitivity if spells are casting randomly. Clean audio input is essential for the <strong>YAPYAP demo game</strong> voice recognition system.
            </p>
          </div>

          <div class="tip-card">
            <div class="tip-header">
              <div class="tip-number">3</div>
              <h3 class="tip-title">Confidence Matters</h3>
            </div>
            <p class="tip-text">
              Hesitation often leads to failure. Listen to the audio above, memorize it, and say it with confidence. Practice the <strong>YAPYAP demo game pronunciation</strong> until it becomes second nature.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { wands } from '@/data/wands.js'

const route = useRoute()

// Vocal Timbre options
const timbres = [
  { value: 'kore', label: 'Kore (Ancient)' },
  { value: 'puck', label: 'Puck (Playful)' },
]

const selectedWand = ref(null)
const selectedSpell = ref(null)
const manifestedSpell = ref(null)
const selectedTimbre = ref('kore')
const spellAudio = ref(null)
const showMedia = ref(false)
const mediaType = ref(null)
const mediaPath = ref(null)

// Helper function to convert spell name to audio file name format (for media files)
function getSpellFileName(spellName) {
  return spellName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

// Computed paths - get audio from data
const audioPath = computed(() => {
  if (!manifestedSpell.value || !selectedTimbre.value) return ''
  if (manifestedSpell.value.audio && manifestedSpell.value.audio[selectedTimbre.value]) {
    return manifestedSpell.value.audio[selectedTimbre.value]
  }
  return ''
})

function selectWand(wand) {
  selectedWand.value = wand
  selectedSpell.value = null
  manifestedSpell.value = null
  showMedia.value = false
  mediaPath.value = null
}

function selectSpell(spell) {
  selectedSpell.value = spell
  manifestedSpell.value = null
  showMedia.value = false
  mediaPath.value = null
}

function manifestSpell() {
  if (selectedSpell.value && selectedTimbre.value) {
    manifestedSpell.value = selectedSpell.value
    loadMedia(selectedSpell.value)
    
    // Play audio after a short delay to ensure audio element is updated
    setTimeout(() => {
      if (spellAudio.value) {
        // Reload audio source to ensure it uses the new path
        spellAudio.value.load()
        spellAudio.value.play().catch(err => {
          console.log('Audio playback failed:', err)
        })
      }
    }, 300)
  }
}

function loadMedia(spell) {
  // Use video path from data if available
  if (spell.video) {
    mediaType.value = 'video'
    mediaPath.value = spell.video
    showMedia.value = true
  } else {
    // Fallback: try to load video using old method
    const fileName = getSpellFileName(spell.spell)
    const videoPath = `/videos/spells/${fileName}.mp4`
    const video = new Image()
    video.onload = () => {
      mediaType.value = 'video'
      mediaPath.value = videoPath
      showMedia.value = true
    }
    video.onerror = () => {
      // Try GIF
      const gifPath = `/videos/spells/${fileName}.gif`
      const gif = new Image()
      gif.onload = () => {
        mediaType.value = 'gif'
        mediaPath.value = gifPath
        showMedia.value = true
      }
      gif.onerror = () => {
        showMedia.value = true
        mediaType.value = null
        mediaPath.value = null
      }
      gif.src = gifPath
    }
    video.src = videoPath
  }
}

function handleMediaError(event) {
  console.warn('Media error:', event.target.src)
  // Only show placeholder if we don't have a valid video path
  if (!manifestedSpell.value?.video) {
    showMedia.value = true
    mediaType.value = null
    mediaPath.value = null
  }
}


// Watch for route query parameter
onMounted(() => {
  if (route.query.spell) {
    const spellId = decodeURIComponent(route.query.spell)
    for (const wand of wands) {
      const spell = wand.spells.find(s => getSpellFileName(s.spell) === spellId)
      if (spell) {
        selectWand(wand)
        setTimeout(() => {
          selectSpell(spell)
        }, 100)
        break
      }
    }
  }
})
</script>

<style scoped>

.spell-forge-wrapper {
  max-width: 1000px;
  margin: 40px auto 0;
}

.spell-forge-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  align-items: start;
}

.selection-panel {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.selection-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.selection-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.section-icon {
  font-size: 18px;
  filter: drop-shadow(0 0 4px rgba(139, 92, 246, 0.6));
}

.section-icon.wand-icon {
  filter: drop-shadow(0 0 4px rgba(139, 92, 246, 0.8));
}

.section-icon.scroll-icon {
  filter: drop-shadow(0 0 4px rgba(139, 92, 246, 0.6));
}

.selection-title {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: rgba(196, 181, 253, 1);
  margin: 0;
  text-transform: uppercase;
}

.wand-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.wand-item {
  position: relative;
  background: rgba(15, 23, 42, 0.5);
  border: 2px solid rgba(30, 41, 59, 1);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  text-align: left;
}

.wand-item:hover {
  border-color: rgba(71, 85, 105, 1);
  background: rgba(15, 23, 42, 0.8);
}

.wand-item.active {
  border: 2px solid rgba(196, 181, 253, 1);
  background: rgba(15, 23, 42, 1);
  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);
}

.wand-accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 8px;
  flex-shrink: 0;
}

.wand-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 1;
  padding-left: 12px;
}

.wand-text .wand-name-cn {
  font-size: 14px;
  font-weight: 700;
  color: rgba(248, 250, 252, 1);
  line-height: 1.2;
}

.wand-text .wand-name-en {
  font-size: 12px;
  font-weight: 500;
  font-style: italic;
  color: rgba(100, 116, 139, 1);
  line-height: 1.2;
}

.incantation-list {
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex-wrap: wrap;
}

.incantation-item {
  background: rgba(15, 23, 42, 1);
  border: 2px solid rgba(30, 41, 59, 1);
  border-radius: 999px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 700;
  color: rgba(203, 213, 225, 1);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  white-space: nowrap;
}

.incantation-item:hover {
  border-color: rgba(71, 85, 105, 1);
  background: rgba(15, 23, 42, 0.8);
}

.incantation-item.active {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  border-color: rgba(196, 181, 253, 1);
  color: #fff;
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3);
  transform: scale(1.05);
}

.forge-panel {
  position: sticky;
  top: 24px;
}

.forge-content {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(30, 41, 59, 1);
  border-radius: 24px;
  padding: 24px;
  backdrop-filter: blur(16px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
}

.forge-content .selection-header {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(30, 41, 59, 1);
}

.forge-content .selection-title {
  color: rgba(241, 245, 249, 1);
  font-size: 20px;
}

.forge-controls {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.vocal-timbre-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.vocal-timbre-label {
  font-size: 14px;
  font-weight: 500;
  color: rgba(148, 163, 184, 1);
  display: block;
}

.dropdown-wrapper {
  position: relative;
}

.vocal-timbre-dropdown {
  width: 100%;
  background: rgba(30, 41, 59, 1);
  border: 1px solid rgba(51, 65, 85, 1);
  border-radius: 12px;
  padding: 12px 16px;
  padding-right: 40px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(203, 213, 225, 1);
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  transition: all 0.3s ease;
}

.vocal-timbre-dropdown:hover {
  border-color: rgba(71, 85, 105, 1);
}

.vocal-timbre-dropdown:focus {
  outline: none;
  border-color: rgba(139, 92, 246, 1);
  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);
}

.manifest-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.2);
}

.manifest-button:hover:not(:disabled) {
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  box-shadow: 0 12px 30px rgba(139, 92, 246, 0.3);
  transform: translateY(-2px);
}

.manifest-button:active:not(:disabled) {
  transform: translateY(0);
}

.manifest-button:disabled {
  background: rgba(30, 41, 59, 1);
  color: rgba(100, 116, 139, 1);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.manifest-button:disabled:hover {
  transform: none;
  box-shadow: none;
}

.star-icon {
  font-size: 18px;
  filter: drop-shadow(0 0 4px rgba(251, 191, 36, 0.8));
}

.spell-display {
  max-width: 1000px;
  margin: 20px auto 0 auto;
}

.spell-display-content {
  background: rgba(15, 20, 36, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.spell-media {
  width: 100%;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spell-video,
.spell-gif {
  width: 100%;
  height: auto;
  display: block;
  max-height: 500px;
  object-fit: contain;
}

.media-placeholder {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: rgba(237, 240, 255, 0.7);
  gap: 12px;
  padding: 20px;
}

.placeholder-text {
  margin: 0;
  font-size: 16px;
  color: rgba(237, 240, 255, 0.8);
  text-align: center;
}

.placeholder-icon {
  font-size: 64px;
  opacity: 0.5;
}

.spell-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.spell-header-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.spell-name-large {
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  color: rgba(237, 240, 255, 0.95);
}


.spell-effect-section,
.spell-tips-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.spell-effect-section h4,
.spell-tips-section h4 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: rgba(237, 240, 255, 0.95);
}

.spell-effect-section p,
.spell-tips-section p {
  margin: 0;
  color: rgba(237, 240, 255, 0.82);
  line-height: 1.7;
}

.audio-controls {
  display: none;
}

.audio-player {
  display: none;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 12px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  user-select: none;
  font-size: 15px;
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  color: #fff;
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.35);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(139, 92, 246, 0.45);
}

.btn-play {
  width: 100%;
}

.play-icon {
  font-size: 16px;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 10px;
  background: rgba(139, 92, 246, 0.12);
  color: #dcd7ff;
  font-size: 12px;
  border: 1px solid rgba(139, 92, 246, 0.25);
}

.mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}

.small {
  font-size: 12px;
}

.muted {
  color: rgba(237, 240, 255, 0.6);
}

code {
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 11px;
}

@media (max-width: 1024px) {
  .spell-forge-layout {
    grid-template-columns: 1fr;
  }

  .forge-panel {
    position: static;
  }

  .wand-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {

  .wand-list {
    grid-template-columns: 1fr;
  }

  .forge-content {
    padding: 20px;
  }

  .spell-name-large {
    font-size: 24px;
  }
}

/* Guide Section - How to Use */
.guide-section {
  margin-top: 60px;
  padding: 40px 0;
}

.guide-header {
  text-align: center;
  margin-bottom: 48px;
}

.guide-title {
  font-size: 32px;
  font-weight: 800;
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, #ffffff 0%, #e9d5ff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 8px rgba(139, 92, 246, 0.3));
}

.guide-intro {
  max-width: 700px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(237, 240, 255, 0.75);
}

.guide-intro strong {
  color: var(--accent);
  font-weight: 600;
}

.steps-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.step-card {
  flex: 1;
  max-width: 320px;
  padding: 32px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.05) 100%);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
}

.step-card:hover {
  transform: translateY(-4px);
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.2);
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(59, 130, 246, 0.08) 100%);
}

.step-number {
  position: absolute;
  top: -20px;
  left: 32px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border-radius: 50%;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4);
}

.step-content {
  margin-top: 20px;
}

.step-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: rgba(237, 240, 255, 0.95);
}

.step-text {
  margin: 0;
  line-height: 1.7;
  color: rgba(237, 240, 255, 0.8);
  font-size: 14px;
}

.step-text strong {
  color: var(--accent);
  font-weight: 600;
}

.step-connector {
  width: 2px;
  height: 120px;
  background: linear-gradient(180deg, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%);
  margin-top: 60px;
  position: relative;
}

.step-connector::after {
  content: '→';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: rgba(139, 92, 246, 0.6);
  background: rgba(15, 20, 36, 0.95);
  padding: 4px 8px;
  border-radius: 8px;
}

/* Why Section */
.why-section {
  margin-top: 60px;
}

.why-card {
  max-width: 900px;
  margin: 0 auto;
  padding: 48px;
  background: linear-gradient(135deg, rgba(18, 12, 32, 0.95) 0%, rgba(15, 20, 36, 0.95) 100%);
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

.why-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
}

.why-icon {
  font-size: 40px;
  line-height: 1;
}

.why-title {
  font-size: 28px;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, #e9d5ff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.why-body {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.why-highlight {
  padding: 20px 24px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%);
  border-left: 4px solid var(--accent);
  border-radius: 12px;
}

.why-subtitle {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  color: rgba(237, 240, 255, 0.95);
}

.why-text-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.why-text {
  margin: 0;
  line-height: 1.8;
  color: rgba(237, 240, 255, 0.85);
  font-size: 15px;
}

.why-text strong {
  color: var(--accent);
  font-weight: 600;
}

/* Tips Section */
.tips-section {
  margin-top: 60px;
  padding: 48px 0;
}

.tips-header {
  text-align: center;
  margin-bottom: 48px;
}

.tips-title-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
}

.tips-badge {
  padding: 8px 16px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
  border: 1px solid rgba(139, 92, 246, 0.4);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tips-title {
  font-size: 32px;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, #e9d5ff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 8px rgba(139, 92, 246, 0.3));
}

.tips-subtitle {
  max-width: 600px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(237, 240, 255, 0.75);
}

.tips-subtitle strong {
  color: var(--accent);
  font-weight: 600;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.tip-card {
  padding: 28px;
  background: rgba(15, 20, 36, 0.8);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tip-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #8b5cf6, #3b82f6);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tip-card:hover {
  transform: translateY(-4px);
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.2);
  background: rgba(15, 20, 36, 0.95);
}

.tip-card:hover::before {
  opacity: 1;
}

.tip-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.tip-number {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  color: var(--accent);
  flex-shrink: 0;
}

.tip-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: rgba(237, 240, 255, 0.95);
}

.tip-text {
  margin: 0;
  line-height: 1.7;
  color: rgba(237, 240, 255, 0.8);
  font-size: 14px;
}

.tip-text strong {
  color: var(--accent);
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .steps-container {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .step-connector {
    width: 120px;
    height: 2px;
    margin: 0;
    transform: rotate(90deg);
  }

  .step-connector::after {
    content: '↓';
    transform: translate(-50%, -50%) rotate(-90deg);
  }

  .step-card {
    max-width: 100%;
    width: 100%;
  }

  .tips-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .guide-section,
  .why-section,
  .tips-section {
    margin-top: 40px;
  }

  .guide-title,
  .tips-title {
    font-size: 24px;
  }

  .why-card {
    padding: 32px 24px;
  }

  .why-title {
    font-size: 22px;
  }

  .why-subtitle {
    font-size: 20px;
  }

  .why-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .tip-card {
    padding: 20px;
  }
}
</style>
