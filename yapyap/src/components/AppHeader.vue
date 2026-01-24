<template>
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="/" class="logo">
          <img src="/images/logo.png" alt="YAPYAP Game" class="brand-logo">
          <span class="logo-title">YAPYAP Game</span>
        </a>

        <button class="menu-toggle" @click="toggleMenu" aria-label="Switch navigation">
          <span :class="{ open: isOpen }"></span>
          <span :class="{ open: isOpen }"></span>
          <span :class="{ open: isOpen }"></span>
        </button>

        <nav class="nav" :class="{ open: isOpen }">
          <a href="/" @click="closeMenu">Home</a>
          <a href="/spells" @click="closeMenu">Spells</a>
          <a href="/spell-generator" @click="closeMenu">Spell Generator</a>
          <div class="nav-dropdown" :class="{ open: isDropdownOpen }">
            <span class="nav-trigger" @click="toggleDropdown">Puzzles ▾</span>
            <div class="nav-dropdown-menu">
              <a href="/puzzles/ball-puzzle" @click="closeMenu">Ball Puzzle</a>
              <a href="/puzzles/balance-puzzle" @click="closeMenu">Balance Puzzle</a>
              <a href="/puzzles/door-puzzle" @click="closeMenu">Door Puzzle</a>
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
const isDropdownOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    isDropdownOpen.value = false
  }
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeMenu = () => {
  isOpen.value = false
  isDropdownOpen.value = false
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

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
  text-decoration: none;
}

.logo img {
  width: 42px;
  height: 42px;
  border-radius: 12px;
}

.logo-title {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: var(--accent);
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
  transition: transform 0.3s ease, opacity 0.3s ease;
  display: block;
}

.menu-toggle span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}

.menu-toggle span.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .header-inner {
    padding: 14px 0;
  }

  .logo img {
    width: 38px;
    height: 38px;
  }

  .logo-title {
    font-size: 16px;
  }

  .nav {
    gap: 10px;
  }

  .nav a,
  .nav-trigger {
    padding: 8px 12px;
    font-size: 14px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .header-inner {
    padding: 0.8rem 0;
  }

  .logo {
    gap: 0.7rem;
  }

  .logo img {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }

  .logo-title {
    font-size: 0.9rem;
    line-height: 1.2;
  }

  .menu-toggle {
    display: flex;
    gap: 0.3rem;
  }

  .menu-toggle span {
    width: 20px;
    height: 2px;
  }

  .menu-toggle span.open:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }

  .menu-toggle span.open:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle span.open:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }

  .nav {
    position: fixed;
    top: 60px;
    right: 0.8rem;
    left: 0.8rem;
    padding: 0.8rem;
    border-radius: 12px;
    background: rgba(8, 10, 18, 0.98);
    border: 1px solid var(--border);
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    z-index: 50;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
  }

  .nav.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .nav a {
    width: 100%;
    padding: 0.7rem;
    font-size: 0.8rem;
    line-height: 1.2;
    text-align: left;
    border-radius: 8px;
  }

  .nav-dropdown {
    width: 100%;
  }

  .nav-trigger {
    width: 100%;
    padding: 0.7rem;
    font-size: 0.8rem;
    line-height: 1.2;
    text-align: left;
    border-radius: 8px;
  }

  .nav-dropdown-menu {
    position: static;
    display: none;
    margin-top: 0.5rem;
    margin-left: 0.7rem;
    min-width: auto;
    width: calc(100% - 0.7rem);
    padding: 0.5rem 0 0 0.7rem;
    border: none;
    border-left: 1px solid var(--border);
    box-shadow: none;
    background: transparent;
    gap: 0.3rem;
  }

  .nav.open .nav-dropdown.open .nav-dropdown-menu {
    display: flex;
  }

  /* 移动端禁用hover效果 */
  .nav-dropdown:hover .nav-dropdown-menu {
    display: none;
  }

  .nav-dropdown-menu a {
    padding: 0.5rem 0.7rem;
    font-size: 0.8rem;
    line-height: 1.2;
    border-radius: 6px;
  }
}
</style>
