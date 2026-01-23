<template>
  <div class="page">
    <main class="container">
      <section class="page-hero">
        <p class="pill">Spell Forge · Animations · Audio Pronunciations</p>
        <h1 class="title">YAPYAP Spell Forge</h1>
        <p class="intro">
          Choose your wand, select an incantation, and forge your spell. Watch animations and learn pronunciations.
        </p>
      </section>

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

      <!-- Spell Display Area (shown after manifest, below the layout) -->
      <div class="spell-display" v-if="manifestedSpell">
        <div class="spell-display-content card">
          <!-- Video/Animation Area -->
          <div class="spell-media" v-if="showMedia">
            <video
              v-if="mediaType === 'video'"
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
              v-else-if="mediaType === 'gif'"
              :src="mediaPath"
              alt="Spell animation"
              class="spell-gif"
              @error="handleMediaError"
            />
            <div v-else class="media-placeholder">
              <div class="placeholder-icon">🎬</div>
              <p>Spell animation not available</p>
              <p class="small muted">Place animation file in: <code>public/videos/spells/</code></p>
            </div>
          </div>

          <!-- Spell Info -->
          <div class="spell-info">
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

            <!-- Audio Player (hidden, auto-plays on manifest) -->
            <div class="audio-controls">
              <audio
                ref="spellAudio"
                :src="audioPath"
                class="audio-player"
              ></audio>
            </div>
          </div>
        </div>
      </div>
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
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(237, 240, 255, 0.72);
  font-size: 13px;
  letter-spacing: 0.02em;
}

.title {
  margin: 14px 0 12px 0;
  font-size: 42px;
  line-height: 1.12;
  letter-spacing: -0.01em;
}

.intro {
  color: rgba(237, 240, 255, 0.72);
  max-width: 980px;
  line-height: 1.7;
}

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
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 18px;
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
  margin: 40px auto 0 auto;
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
  .title {
    font-size: 32px;
  }

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
</style>
