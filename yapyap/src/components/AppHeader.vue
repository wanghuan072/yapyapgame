<template>
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="#top" class="brand">
          <div class="brand-mark">✦</div>
          <div class="brand-text">
            <span class="brand-title">YAPYAP Guide</span>
            <span class="brand-sub">Fan-made Wiki & Guides</span>
          </div>
        </a>

        <button class="menu-toggle" @click="toggleMenu" aria-label="Switch navigation">
          <span :class="{ open: isOpen }"></span>
          <span :class="{ open: isOpen }"></span>
        </button>

        <nav class="nav" :class="{ open: isOpen }">
          <a href="/" @click="closeMenu">Home</a>
          <a href="/spells" @click="closeMenu">Spells</a>
          <a href="/spell-generator" @click="closeMenu">Spell Generator</a>
          <div class="nav-dropdown" :class="{ open: isOpen }">
            <span class="nav-trigger">Puzzles ▾</span>
            <div class="nav-dropdown-menu">
              <a href="/puzzle/ball-puzzle" @click="closeMenu">Ball Puzzle</a>
              <a href="/puzzle/balance-puzzle" @click="closeMenu">Balance Puzzle</a>
              <a href="/puzzle/door-puzzle" @click="closeMenu">Door Puzzle</a>
            </div>
          </div>
          <a href="/guides" @click="closeMenu">Guides</a>
          <a href="/wiki" @click="closeMenu">Wiki</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(14px);
  background: linear-gradient(90deg, rgba(7, 9, 18, 0.9), rgba(15, 17, 28, 0.72));
  border-bottom: 1px solid var(--border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 16px 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
  text-decoration: none;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: radial-gradient(circle at 30% 30%, rgba(74, 222, 128, 0.8), rgba(139, 92, 246, 0.95));
  display: grid;
  place-items: center;
  font-weight: 900;
  color: #0b0d16;
  box-shadow: 0 0 24px rgba(139, 92, 246, 0.4);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand-title {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.brand-sub {
  font-size: 12px;
  color: var(--muted);
}

.nav {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav a {
  padding: 10px 14px;
  border-radius: 12px;
  color: var(--muted);
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.2s ease;
}

.nav a:hover {
  color: var(--text);
  border-color: rgba(139, 92, 246, 0.35);
  box-shadow: 0 0 12px rgba(139, 92, 246, 0.28);
}

.nav-dropdown {
  position: relative;
}

.nav-trigger {
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 12px;
  color: var(--muted);
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.2s ease;
  cursor: pointer;
}

.nav-dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  padding: 8px;
  background: rgba(8, 10, 18, 0.98);
  border: 1px solid var(--border);
  border-radius: 12px;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.nav-dropdown:hover .nav-dropdown-menu {
  display: flex;
}

.nav-trigger:hover {
  color: var(--text);
  border-color: rgba(139, 92, 246, 0.35);
  box-shadow: 0 0 12px rgba(139, 92, 246, 0.28);
}

.nav-dropdown-menu a {
  padding: 10px 14px;
  border-radius: 10px;
  color: var(--muted);
  font-size: 14px;
}

.nav-dropdown-menu a:hover {
  color: var(--text);
  background: rgba(139, 92, 246, 0.12);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  width: 22px;
  height: 2px;
  background: var(--text);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.menu-toggle span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle span.open:nth-child(2) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 860px) {
  .nav {
    position: absolute;
    top: 64px;
    right: 20px;
    left: 20px;
    padding: 14px;
    border-radius: 14px;
    background: rgba(8, 10, 18, 0.96);
    border: 1px solid var(--border);
    flex-direction: column;
    align-items: flex-start;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-6px);
    transition: all 0.2s ease;
  }

  .nav.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .nav.open .nav-dropdown .nav-dropdown-menu {
    display: flex;
  }

  .nav-dropdown-menu {
    position: static;
    margin-top: 8px;
    margin-left: 12px;
    min-width: auto;
    box-shadow: none;
    border: none;
    padding: 0 0 0 12px;
    border-left: 1px solid var(--border);
  }

  .menu-toggle {
    display: inline-flex;
  }
}
</style>
