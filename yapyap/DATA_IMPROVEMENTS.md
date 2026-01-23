# YAPYAP 项目数据改进清单

## 📋 一、数据结构问题

### 1.1 法术数据 (wands.js) - 🔴 高优先级

**问题：**
- ❌ 缺少 `misheard` 字段：视图中有显示逻辑，但数据中没有
- ❌ 缺少 `misheardTip` 字段：用于提示常见误听问题
- ❌ 缺少数值数据：冷却时间、消耗、伤害值等
- ⚠️ 数据不完整标记：`Lux-anna` 的 tips 中有 "(needs in-game verification)"

**需要添加的字段：**
```javascript
{
  spell: 'AERO-BIS',
  misheard: 'Aero-Biss', // 常见误听
  misheardTip: '强调 "BIS" 部分，避免被识别为其他法术',
  cooldown: '3s', // 冷却时间
  manaCost: null, // 如果游戏有魔法值系统
  damage: null, // 伤害值（如果有）
  range: 'Medium', // 射程
  castTime: 'Instant', // 施法时间
}
```

**建议改进：**
1. 为所有法术添加 `misheard` 和 `misheardTip` 字段
2. 补充数值数据（如果游戏中有）
3. 验证并完善标记为 "needs verification" 的内容

---

### 1.2 怪物数据 (BestiaryView.vue) - 🔴 高优先级

**问题：**
- ❌ 数据硬编码在组件中，应该提取到独立数据文件
- ❌ 缺少指南中提到的怪物：
  - `The Librarian`（指南中提到，但怪物列表中没有）
  - `The Screamer`（指南中提到，但怪物列表中没有）
- ❌ 缺少数值数据：HP、伤害值、移动速度等
- ❌ 缺少声音敏感度等级（虽然文本中有描述，但没有结构化数据）

**建议改进：**
1. 创建 `src/data/bestiary.js` 文件
2. 添加缺失的怪物数据
3. 添加结构化字段：
```javascript
{
  name: 'Goblins',
  hp: 10, // HP值
  damage: 5, // 伤害值
  moveSpeed: 'Fast', // 移动速度
  soundSensitivity: 'Medium', // 声音敏感度：Low/Medium/High/Extreme
  detectionRange: 5, // 检测范围（米）
  spawnConditions: 'Later in stage', // 生成条件
  points: 5, // 击杀/刷分获得的点数
}
```

---

### 1.3 药水数据 (PotionsView.vue) - 🔴 高优先级

**问题：**
- ❌ 数据硬编码在组件中，应该提取到独立数据文件
- ❌ 缺少数值数据：恢复量、持续时间（部分有，但不统一）
- ❌ 缺少制作难度/成功率
- ❌ 缺少稀有度/获取方式

**建议改进：**
1. 创建 `src/data/potions.js` 文件
2. 统一数据结构：
```javascript
{
  item: 'Vitality Potion',
  healAmount: 100, // 恢复量（百分比或数值）
  duration: 0, // 持续时间（秒），0表示瞬间
  rarity: 'Common', // 稀有度
  craftingDifficulty: 'Easy', // 制作难度
  ingredients: [
    { name: 'Carrot', quantity: 1, required: true },
    { name: 'Five-leaf Clover', quantity: 1, required: false },
    { name: 'Feather', quantity: 1, required: false },
  ],
}
```

---

### 1.4 误听字典数据 (SpellsView.vue) - 🟡 中优先级

**问题：**
- ❌ `misheard` 计算属性返回空数组 `[]`
- ❌ 视图中有完整的显示逻辑，但没有数据源

**当前代码：**
```javascript
const misheard = computed(() => [])
```

**建议改进：**
1. 创建 `src/data/misheard.js` 文件
2. 添加常见误听数据：
```javascript
export const misheardSpells = [
  {
    spell: 'Up Dog',
    bad: 'Hot Dog',
    tip: '强调 "Up" 部分，避免快速连读',
  },
  {
    spell: 'AERO-BIS',
    bad: 'Aero-Biss',
    tip: '清晰发音 "BIS"，避免吞音',
  },
  // ... 更多
]
```

---

## 📊 二、数据完整性问题

### 2.1 指南与怪物数据不一致 - 🔴 高优先级

**问题：**
- `guide/en.js` 中提到的怪物在 `BestiaryView.vue` 中不存在：
  - `The Librarian` - 指南中描述为"最危险的敌人之一，极度声音敏感"
  - `The Screamer` - 指南中描述为"追逐型敌人，可被暂时禁用"

**建议：**
1. 在怪物数据中添加这两个怪物
2. 或者从指南中移除这些引用
3. 建立数据一致性检查机制

---

### 2.2 法术数据不完整标记 - 🟡 中优先级

**问题：**
- `Lux-anna` 的 tips 中有 "(needs in-game verification)"
- 说明该法术的功能描述可能不准确

**建议：**
1. 验证并更新该法术的完整功能描述
2. 移除所有 "(needs verification)" 标记
3. 添加数据验证标记系统

---

## 🔧 三、数据架构问题

### 3.1 数据分散在组件中 - 🔴 高优先级

**当前问题：**
- 怪物数据在 `BestiaryView.vue` 中
- 药水数据在 `PotionsView.vue` 中
- 只有法杖数据在独立文件 `wands.js` 中

**建议改进：**
```
src/data/
  ├── wands.js          ✅ 已存在
  ├── bestiary.js       ❌ 需要创建
  ├── potions.js        ❌ 需要创建
  ├── misheard.js       ❌ 需要创建
  ├── ingredients.js     ❌ 可以创建（原料数据）
  └── guide/
      └── en.js         ✅ 已存在
```

---

### 3.2 缺少数据验证 - 🟡 中优先级

**问题：**
- 没有数据完整性检查
- 没有必填字段验证
- 没有数据类型验证

**建议改进：**
1. 创建数据验证工具：
```javascript
// src/utils/validateData.js
export function validateWandData(wand) {
  const required = ['id', 'name', 'spells']
  const missing = required.filter(field => !wand[field])
  if (missing.length) {
    console.warn(`Wand ${wand.id} missing fields:`, missing)
  }
  // 验证 spells
  wand.spells?.forEach(spell => {
    if (!spell.audio?.kore || !spell.audio?.puck) {
      console.warn(`Spell ${spell.spell} missing audio files`)
    }
  })
}
```

---

## 📈 四、数据增强建议

### 4.1 添加关联数据 - 🟢 低优先级

**建议添加：**
1. **法术组合数据**：哪些法术可以组合使用
2. **怪物弱点数据**：哪些法术对哪些怪物更有效
3. **药水组合效果**：哪些药水可以叠加（虽然目前说不叠加，但可能有特殊情况）
4. **获取位置数据**：原料在哪里可以找到

---

### 4.2 添加元数据 - 🟢 低优先级

**建议添加：**
1. **数据版本号**：跟踪数据更新
2. **最后更新日期**：每个数据项的更新时间
3. **数据来源**：标记数据来源（官方/社区/测试）
4. **可信度等级**：标记数据的可信度

---

## 🎯 五、优先级总结

### 🔴 高优先级（立即改进）
1. ✅ 提取怪物数据到 `bestiary.js`
2. ✅ 提取药水数据到 `potions.js`
3. ✅ 添加法术的 `misheard` 和 `misheardTip` 字段
4. ✅ 创建 `misheard.js` 数据文件
5. ✅ 修复指南与怪物数据不一致问题

### 🟡 中优先级（近期改进）
1. ⚠️ 补充数值数据（HP、伤害、冷却时间等）
2. ⚠️ 验证并完善标记为 "needs verification" 的内容
3. ⚠️ 添加数据验证工具

### 🟢 低优先级（长期改进）
1. 💡 添加关联数据（法术组合、怪物弱点等）
2. 💡 添加元数据（版本号、更新日期等）
3. 💡 建立数据更新流程

---

## 📝 六、实施建议

### 步骤 1：数据提取（高优先级）
1. 创建 `src/data/bestiary.js`
2. 创建 `src/data/potions.js`
3. 创建 `src/data/misheard.js`
4. 更新组件以使用新数据文件

### 步骤 2：数据完善（中优先级）
1. 为所有法术添加 `misheard` 字段
2. 补充缺失的怪物数据
3. 添加数值数据字段

### 步骤 3：数据验证（中优先级）
1. 创建数据验证工具
2. 添加数据完整性检查
3. 建立数据更新流程

### 步骤 4：数据增强（低优先级）
1. 添加关联数据
2. 添加元数据
3. 优化数据结构

---

## 🔍 七、数据质量检查清单

在改进数据时，请确保：

- [ ] 所有必填字段都有值
- [ ] 所有音频/视频文件路径正确
- [ ] 所有图片路径正确
- [ ] 数据格式统一
- [ ] 没有硬编码在组件中的数据
- [ ] 指南与数据库数据一致
- [ ] 所有标记为 "needs verification" 的内容已验证
- [ ] 数据类型正确（字符串、数字、数组等）
- [ ] 没有重复数据
- [ ] 所有链接和引用有效
