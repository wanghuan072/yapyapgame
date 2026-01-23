<template>
  <div class="page">
    <main class="container">
      <section class="hero">
        <p class="pill">Placeholder</p>
        <h1 class="title">{{ title }}</h1>
        <p class="subtitle">
          This page is planned but not published yet. Check back soon.
        </p>
        <div class="actions">
          <a class="btn btn-primary" href="/">Back to Home</a>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.page {
  min-height: 70vh;
}

.hero {
  padding: 90px 0 60px 0;
}

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
  margin: 14px 0 10px 0;
  font-size: 38px;
  line-height: 1.15;
  letter-spacing: -0.01em;
}

.subtitle {
  color: rgba(237, 240, 255, 0.72);
  max-width: 760px;
}

.actions {
  margin-top: 22px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 12px;
  font-weight: 700;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
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

@media (max-width: 720px) {
  .hero {
    padding: 70px 0 50px 0;
  }

  .title {
    font-size: 28px;
  }
}
</style>

