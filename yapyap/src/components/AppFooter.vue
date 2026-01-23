<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="logo-line">
            <div class="logo-mark">✦</div>
            <div class="logo-text">
              <span class="title">YAPYAP Guide Hub</span>
              <span class="sub">Unofficial fan wiki & strategy</span>
            </div>
          </div>
          <p class="desc">
            聚合 YAPYAP 的资讯、攻略、法术与解谜思路。非官方站点，旨在帮助玩家快速入门与提升合作效率。
          </p>
        </div>
        <div class="links">
          <h3>快速导航</h3>
          <div class="link-list">
            <a href="#hero">Home</a>
            <a href="#wiki">yapyap wiki</a>
            <a href="#guide">yapyap guide</a>
            <a href="#spells">yapyap spells</a>
            <a href="#puzzle">yapyap puzzle</a>
          </div>
        </div>
        <div class="cta">
          <h3>加入愿望单</h3>
          <p class="desc">Steam 版计划 2026-02-03 上线，提前关注获取最新更新。</p>
          <a class="btn btn-primary" href="https://store.steampowered.com/app/3834090/YAPYAP/" target="_blank" rel="noopener">
            去 Steam 查看
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 yapyapgame.com · Fan-made. All trademarks belong to their owners.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border);
  padding: 40px 0 26px 0;
  background: linear-gradient(180deg, rgba(7, 9, 18, 0.9), rgba(7, 9, 18, 0.96));
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.logo-line {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.logo-mark {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: radial-gradient(circle at 20% 20%, rgba(74, 222, 128, 0.9), rgba(139, 92, 246, 0.95));
  display: grid;
  place-items: center;
  font-weight: 900;
  color: #0b0d16;
  box-shadow: 0 0 22px rgba(139, 92, 246, 0.45);
}

.title {
  font-weight: 800;
  font-size: 16px;
}

.sub {
  display: block;
  color: var(--muted);
  font-size: 12px;
}

.desc {
  color: var(--muted);
  margin: 0;
  line-height: 1.6;
}

.links h3,
.cta h3 {
  margin: 0 0 10px 0;
  font-size: 15px;
  letter-spacing: 0.02em;
}

.link-list {
  display: grid;
  gap: 8px;
}

.link-list a {
  color: var(--muted);
  padding: 6px 0;
  border-bottom: 1px dashed transparent;
  transition: color 0.2s ease, border 0.2s ease;
}

.link-list a:hover {
  color: var(--text);
  border-color: rgba(139, 92, 246, 0.4);
}

.cta .btn {
  margin-top: 12px;
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
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), #6d28d9);
  color: #0b0d16;
  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.35);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 30px rgba(109, 40, 217, 0.45);
}

.footer-bottom {
  margin-top: 28px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 12px;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
