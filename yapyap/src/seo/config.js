// SEO配置文件
export const seoConfig = {
  // 域名配置
  domain: 'yapyapgame.com',
  fullDomain: 'https://yapyapgame.com',
  protocol: 'https://',

  // 社交媒体配置
  social: {
    twitter: '@yapyapgame',
    facebook: 'yapyapgame',
    instagram: 'yapyapgame',
    discord: 'yapyapgame'
  },

  // 默认SEO设置
  defaults: {
    title: 'YAPYAP Game Ultimate Guide & Wiki - Master the Spells, Solve the Puzzles',
    description: 'The ultimate YAPYAP game resource. Complete spell pronunciation guide, puzzle solutions, wiki database, and voice command tips. Master the voice-activated spells and survive the tower.',
    keywords: 'YAPYAP game, YAPYAP guide, YAPYAP wiki, YAPYAP spells, YAPYAP puzzle, voice activated spells, multiplayer horror game, steam co-op',
    author: 'YAPYAP Game Community',
    image: 'https://yapyapgame.com/images/og-image.webp',
    type: 'website'
  },

  // 页面优先级设置
  priorities: {
    home: 1.0,
    spells: 0.9,
    'spell-generator': 0.8,
    'ball-puzzle': 0.8,
    'balance-puzzle': 0.8,
    'door-puzzle': 0.8,
    guides: 0.9,
    guideDetail: 0.8,
    wiki: 0.8,
    'wiki-wands': 0.7,
    'wiki-bestiary': 0.7,
    'wiki-potions': 0.7,
    'troubleshooting-mic-fix': 0.6
  },

  // 更新频率设置
  changefreq: {
    home: 'weekly',
    spells: 'weekly',
    'spell-generator': 'monthly',
    'ball-puzzle': 'monthly',
    'balance-puzzle': 'monthly',
    'door-puzzle': 'monthly',
    guides: 'weekly',
    guideDetail: 'monthly',
    wiki: 'weekly',
    'wiki-wands': 'monthly',
    'wiki-bestiary': 'monthly',
    'wiki-potions': 'monthly',
    'troubleshooting-mic-fix': 'monthly'
  }
}
