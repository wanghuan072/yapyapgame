export const guides = [
    {
        id: 5,
        title: "Yapyap 设置指南：修复语音聊天、晕眩感与按键操作",
        description: "通过我们的终极设置指南优化您的 Yapyap 游戏体验。学习如何修复语音识别问题、通过调节摄像机灵敏度减轻晕眩感，并掌握‘点击施法’和库存切换等核心按键操作。",
        tags: ["终极", "指南", "yapyap", "游戏", "设置"],
        publishDate: "2026-02-05",
        imageUrl: "/images/blog/blog05.webp",
        imageAlt: "专业版现代 Yapyap 设置指南：修复语音聊天、晕眩感与控制",
        seo: {
            title: "Yapyap 设置指南：修复语音聊天、晕眩感与控制",
            description: "通过我们的终极设置指南优化您的 Yapyap 游戏体验。学习如何修复语音识别问题、通过调节摄像机灵敏度减轻晕眩感，并掌握‘点击施法’和库存切换等核心按键操作。",
            keywords: "Yapyap 设置指南, Yapyap 语音聊天修复, Yapyap 控制, Yapyap 晕眩感, Yapyap 施法, Yapyap 按键绑定",
        },
        isHighlight: true,
        addressBar: "yapyap-settings-guide",
        detailsHtml: `<div class="container">
      <p>Yapyap 不仅仅是一款关于技巧的游戏；合理的设置可以提升您的游戏体验。无论您是想解决语音识别问题还是优化操作，本指南都能为您提供帮助。</p>
  <div style="position: relative; padding-bottom: 56.25%; height: 0px; overflow: hidden; max-width: 100%;">
    <iframe src="https://www.youtube.com/embed/DSDeSxn4ieA" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
    </iframe>
  </div>
  
      <h2>1. 基础设置（常规与显示）</h2>
      <p>这些设置主要影响您的操作手感和视觉体验。</p>
  
      <h3>视角灵敏度 (View Sensitivity)：</h3>
      <ul>
          <li><strong>功能：</strong> 决定您的转身速度。如果您觉得转向太慢，请调高此数值。</li>
          <li><strong>建议：</strong> 根据您的鼠标 DPI 和习惯进行调整。作者建议设置在 <strong>15 以下</strong>；不要设置得太高，以免产生晕眩感。</li>
      </ul>
  
      <h3>摄像机平滑度 (Camera Smoothness)：</h3>
      <ul>
          <li><strong>功能：</strong> 当您转动视角时，会产生一定的延迟感和惯性（拖慢感）。数值越高，画面越“粘”；数值越低，响应越即时。</li>
          <li><strong>建议：</strong> 如果您追求精准控制，建议<strong>调低此数值</strong>（甚至调至 0）以获得更顺滑的移动。上传者也建议将其设置在 15 以下。</li>
      </ul>
  
      <h3>视野范围 (FOV)：</h3>
      <ul>
          <li><strong>功能：</strong> 决定您屏幕可见画面的宽度。</li>
          <li><strong>建议：</strong> 上传者通常将其设置为 <strong>100</strong> 左右。特别是在第三人称视角下，较高的 FOV 能让您看清背后更多的怪物。</li>
      </ul>
  
      <h3>角色颜色 (Character Color)：</h3>
      <ul>
          <li><strong>功能：</strong> 纯粹的个性化设置，更改斗篷的颜色。选一个你喜欢的就行！</li>
      </ul>
  
      <h2>2. 音频设置</h2>
      <ul>
          <li><strong>音乐 (Music)：</strong> 控制背景音乐音量。如果你觉得背景音乐太吵，干扰听脚步声，可以适当调低。</li>
          <li><strong>音效 (Sound Effects)：</strong> 包括施法声、脚步声、界面点击声等。<strong>非常重要</strong>；建议保持较高音量以便通过声音辨别位置。</li>
          <li><strong>环境音 (Ambient Sound)：</strong> 环境中的声音，如风声和怪物的吼叫。如果你觉得游戏环境太杂乱，可以适当调低此项（虽然会牺牲一些沉浸感）。</li>
      </ul>
  
      <h2>3. 语音与麦克风设置（至关重要！）</h2>
      <p>许多玩家反映说话没声音或法术无法识别，这通常是因为此处的设置有误。</p>
      <ul>
          <li><strong>麦克风选择：</strong> 在音频设置中，务必检查<strong>输入设备 (Input Device/Microphone)</strong> 是否正确选择了您当前正在使用的麦克风。</li>
      </ul>
  
      <h2>4. 按键绑定</h2>
      <p>除了常规的 WASD 移动外，还有几个特殊按键需要注意：</p>
  
      <h3>V 键 (布娃娃模式)：</h3>
      <ul>
          <li><strong>功能：</strong> 让你瞬间瘫痪变成一个无生命的布娃娃。</li>
          <li><strong>注意：</strong> 必须在被怪物盯上<strong>之前</strong>使用！如果怪物已经在追你了，装死是没有用的，它依然会攻击你。</li>
      </ul>
  
      <h3>数字键 1, 2, 3：</h3>
      <p>对应您物品栏中的三个槽位（实际上是右手握持的物品）。</p>
  
      <h3>G 键 (任务列表)：</h3>
      <ul>
          <li><strong>功能：</strong> 举起手中的契约进行查看。</li>
          <li><strong>小常识：</strong> 这份契约对应出生点旁木牌上的三个任务。完成任务将获得额外奖励。</li>
      </ul>
  
      <h3>T 键 (动作轮盘)：</h3>
      <ul>
          <li><strong>操作：</strong> 长按 T 键呼出轮盘，然后点击执行动作（如跳舞、指点）。</li>
          <li><strong>彩蛋：</strong> 在执行动作时，你可以 360 度旋转镜头，更好地观察自己或进行录屏。</li>
      </ul>
  
      <h3>鼠标左键 (抓取)：</h3>
      <ul>
          <li><strong>操作：</strong> 对着物品长按鼠标左键可以将其抓起并悬浮在空中。</li>
          <li><strong>功能：</strong> 可用于移动轻型物品（如木桶、箱子），或者将物品扔进火堆焚烧（如果你不想浪费火把）。</li>
      </ul>
  
      <h3>F 键 (换手)：</h3>
      <ul>
          <li><strong>功能：</strong> 交换左右手握持的物品。</li>
          <li><strong>高级用法：</strong> 如果你想整理库存或在左手拿法杖（因为只能用右手施法），你需要按 F 键切换手持。</li>
      </ul>
  
      <h2>5. 辅助功能设置（施法优化）</h2>
      <div class="highlight-box">
          <p><strong>这是本指南最重要的部分！</strong> 如果你觉得咏唱咒语很尴尬，或者发音导致施法失败，请务必开启此功能。</p>
      </div>
  
      <h3>语音法术选择 (Voice Spell Selection)：</h3>
      <ul>
          <li><strong>默认：</strong> 按住鼠标右键，上下移动鼠标选择法术，然后必须对着麦克风念出咒语才能施法。</li>
          <li><strong>开启后：</strong>
              <ol>
                  <li>按住鼠标右键呼出法术菜单。</li>
                  <li>只需<strong>鼠标左键点击</strong>你想使用的法术图标。</li>
                  <li><strong>效果：</strong> 你的角色会自动吟唱咒语并施法，无需你亲自开口！</li>
              </ol>
          </li>
      </ul>
      <p><strong>强烈推荐：</strong> 对于不想说话、深夜玩游戏或发音不准的玩家，这简直是必备的“物理外挂”。</p>
  
      <h2>总结：</h2>
      <ul>
          <li><strong>视角：</strong> 调低灵敏度和平滑度 (<15)，调高 FOV (~100)。</li>
          <li><strong>环境音：</strong> 觉得嘈杂就调低。</li>
          <li><strong>辅助功能：</strong> 开启 <strong>“语音法术选择” (Voice Spell Selection)</strong>，实现鼠标点击施法，告别社恐和识别失败！</li>
      </ul>
  
      <p>祝你在 Yapyap 的世界里施法顺畅，生存愉快！</p>
  </div>`,
    },

    {
        id: 4,
        title: "Yapyap 正式版新手指南：无限飞行、刷钱与战斗技巧",
        description: "通过这份新手指南掌握 Yapyap 正式版。学习用于无限飞行的‘三杖系统’、大厅金币刷钱位置、无伤落地技巧以及战斗策略。",
        tags: ["yapyap"],
        publishDate: "2026-02-06",
        imageUrl: "/images/blog/blog04.webp",
        imageAlt: "Yapyap 正式版新手指南",
        seo: {
            title: "Yapyap 正式版新手指南：无限飞行、刷钱与战斗技巧",
            description: "通过这份新手指南掌握 Yapyap 正式版。学习用于无限飞行的‘三杖系统’、大厅金币刷钱位置、无伤落地技巧以及战斗策略。",
            keywords: "Yapyap 指南, Yapyap 新手指南, Yapyap 无限飞行, Yapyap 刷钱, Yapyap 技巧, Yapyap 战斗, Yapyap 法杖, Yapyap 秘密",
        },
        isHome: true,
        addressBar: "yapyap-full-version-starter-guide",
        detailsHtml: `<div class="container">
      <p>欢迎来到 Yapyap！在这个充满魔法与混乱的世界里，你的初始准备直接决定了你能活多久。以下是基于实战经验的“公式化”新手指南。</p>
  <div style="position: relative; padding-bottom: 56.25%; height: 0px; overflow: hidden; max-width: 100%;">
    <iframe src="https://www.youtube.com/embed/AMYhCUAGTXs" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
    </iframe>
  </div>
  
  
      <h2>1. 基础设置与视角</h2>
      <p><strong>视角切换：</strong> 进入地图后，如果你更习惯动作游戏的视角，点击鼠标中键切换到第三人称视角。这能提供更广阔的视野，方便观察四周。</p>
  
      <h2>2. 核心机制：为什么需要“三杖系统”？</h2>
      <p>这是游戏最重要的机制之一。许多萌新只带一把法杖，但资深玩家总是会让物品栏塞满同样的法杖。</p>
      
      <ul>
          <li><strong>获取法杖：</strong> 出生点右侧有一棵挂着牌子 (Free Wands) 的树。</li>
          <li><strong>操作：</strong> 按 E 键折断树枝，扔在地上，再次按 E 捡起即可放入物品栏。</li>
          <li><strong>多法杖的秘密：</strong> 游戏中的法杖冷却时间 (CD) 是不共享的。</li>
          <li><strong>实战技巧：</strong> 如果你有三把风之法杖，你可以按 1 施法，按 F（或武器切换键）切到第二把，再切到第三把连续施法。这可以实现无缝“机枪式”施法或持续龙卷风。</li>
      </ul>
  
      <h2>3. 进阶移动技巧：飞向太空与无伤落地</h2>
      <p>掌握了多持法杖后，你可以利用游戏物理引擎的特性（BUG）完成惊人的操作。</p>
  
      <h3>无限飞行 (空中跳跃)：</h3>
      <p>利用风之法杖的“风暴龙卷 (Storm Tornado)”或“向上狗 (Up-Dog)”。</p>
      <ul>
          <li>施放一次起飞 -> 切换到第二把法杖 -> 再次起飞。</li>
          <li>如果你切换得足够快，你可以直接飞入大气层或任何你想去的地图外区域（本质上是地图 Bug）。</li>
      </ul>
  
      <h3>无伤落地技巧 (必备)：</h3>
      <p>从高处坠落通常会导致受伤或长时间的僵直。</p>
      <ul>
          <li><strong>操作：</strong> 在落地的瞬间，反复狂点跳跃键（空格）。角色会执行一个微小的跳跃动作，从而抵消所有掉落伤害。</li>
      </ul>
  
      <h2>4. 大厅“搜刮”：开局的第一桶金</h2>
      <p>不要急着进传送门！你可以在初始大厅赚够买第一瓶药水的钱。</p>
  
      <h3>变废为宝：</h3>
      <ul>
          <li><strong>植物：</strong> 出生点后方的树林里有发光的植物，按 E 拾取。</li>
          <li><strong>青蛙：</strong> 树林里有发光的小点，靠近后可能会发现青蛙，它们会吐出金币。</li>
          <li><strong>售卖换钱：</strong> 将收集到的植物和多余的树枝带到“大姐商人”那里。手里拿着物品按 E 售卖（通常每个 2 币）。</li>
      </ul>
  
      <h3>隐藏金币：</h3>
      <ul>
          <li><strong>小屋：</strong> 出生点后方有一个小木屋。</li>
          <li><strong>位置：</strong> 进入木屋后左侧的楼梯上。通常那里藏着 11 枚金币。开局立刻去捡！</li>
      </ul>
  
      <h2>5. 任务与契约系统</h2>
      <ul>
          <li><strong>查看契约：</strong> 出生点旁的告示板就是你的任务板。</li>
          <li>看不清？（小贴士：尝试按 G 键在第一人称下查看）。</li>
      </ul>
  
      <h2>6. 战斗与生存技巧 (针对守卫和 Boss)</h2>
      <p><strong>拉扯 (Kiting)：</strong> 利用地形（如栏杆或柱子）挡住怪物的视线。</p>
  
      <h3>利用移动技巧：</h3>
      <ul>
          <li><strong>绕路：</strong> 在户外，使用“向上狗”咒语贴着墙飞，沿着极窄的边缘穿梭，躲避像哈利奎因女孩 (Harlequin Girl) 这种一击必杀的怪物。</li>
          <li><strong>打击术：</strong> 当守卫举起剑时，不要惊慌。使用“向上狗”原地起跳，躲避攻击的同时落在它头上羞辱它。</li>
          <li><strong>吹飞头盔：</strong> 使用风之法杖吹掉守卫的头盔可以获得奖励。</li>
      </ul>
  
      <h2>7. 大厅彩蛋与功能</h2>
      <ul>
          <li><strong>邀请好友：</strong> 木屋中间的魔法球可以邀请 Steam 好友一起玩。坐在上面（按 E）。</li>
          <li><strong>法术书：</strong> 木屋二楼有一本法术书。打开它可以查看当前法杖的技能描述。</li>
          <li><strong>乐器：</strong> 二楼阳台外有三件乐器。</li>
          <li><strong>如何演奏：</strong> 拿起乐器，右键举起，左键单音，按住鼠标并滚动滚轮可以连奏。</li>
          <li><strong>彩蛋：</strong> 如果你玩过《星际拓荒 (Outer Wilds)》，你会发现这些乐器的声音非常熟悉且温馨。</li>
      </ul>
  
      <h2>8. 开始游戏</h2>
      <p>在大厅搜刮完毕并买好你的第一瓶 <strong>飞行药水</strong> 后，前往大厅中心的石头传送阵。按 E 激活，所有人必须站在圈内才能进入主关卡。</p>
  
      <p><strong>总结：</strong> <em>Yapyap</em> 不仅仅是一款恐怖游戏，它也是一款身法游戏。记住核心：多带法杖，落地按空格，犹豫就起飞！在城堡里玩得开心！</p>
  </div>`,
    },

    {
        id: 1,
        title: "Yapyap 入门：必备操作与设置指南",
        iframeUrl: "1",
        description: "初次接触 Yapyap？本指南将帮助新手巫师掌握核心操作与设置！学习如何施法（即使麦克风有故障！）、与环境互动、管理库存等内容。助你快速成为 Yapyap 高手！",
        tags: ["yapyap", "入门指南", "操作说明", "施法", "巫师游戏"],
        publishDate: "2026-01-22",
        imageUrl: "/images/blog/blog01.webp",
        imageAlt: "一名巫师在 Yapyap 中施法，展示游戏的魔法系统。",
        seo: {
            title: "Yapyap：入门指南 - 掌握操作与施法",
            description: "Yapyap 新手必看！在这篇新手指南中学习核心操作、设置（包括麦克风修复！）、库存管理及元素互动。",
            keywords: "yapyap, 入门指南, yapyap 操作, 施法, 语音施法, 库存, 元素互动, 巫师游戏, 魔法",
        },
        isHome: false,
        addressBar: "getting-started-yapyap-essential-controls-settings-guide",
        detailsHtml: `
        <div class="yapyap-guide-container">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/AwtB8ZWk264" title="Yapyap Beginner's Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            </div>
        
            <p>欢迎来到 <strong>Yapyap</strong>！这个世界充满魔法，但对于新晋巫师来说，操作可能有点棘手。在冲出去对抗哥布林之前，你需要正确配置你的设置。本指南涵盖了移动、库存以及最重要的设置：<strong>施法</strong>。</p>
        
            <h2>1. 必备设置：修复麦克风与施法</h2>
            <p>默认情况下，Yapyap 需要你对着麦克风喊出咒语。但如果你的麦克风无法工作，或者你喜欢安静的游戏风格，必须立即更改此设置。</p>
            <ul>
                <li>进入 <strong>Settings (设置)</strong> &gt; <strong>Accessibility (辅助功能)</strong>。</li>
                <li>找到 <strong>"Voice Spell Select" (语音法术选择)</strong>。</li>
                <li><strong>推荐操作：</strong> 启用第二个选项 – <strong>"Hold Right Mouse Button for Spell" (按住鼠标右键施法)</strong>。</li>
            </ul>
            <p>这让你通过按住 <kbd>右键</kbd> 而非说话来施放魔法，对初学者来说这要可靠得多。</p>
        
            <h2>2. 基础操作与移动</h2>
            <p>掌握移动是生存的关键。请注意，Yapyap 的物理效果可能会感觉有点“飘”，所以耐心至关重要。</p>
            <ul>
                <li><strong>移动：</strong> <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd></li>
                <li><strong>抓取 / 互动：</strong> 长按 <kbd>鼠标左键</kbd>。（拖动前请等待零点几秒，直到物品被成功判定）。</li>
                <li><strong>拾取物品：</strong> 按 <kbd>E</kbd>。（再次按下可轻轻放下）。</li>
            </ul>
        
            <div class="pro-tip-box">
                <span class="pro-tip-title">🔥 高级机制：蓄力投掷</span>
                要投掷物品，请按 <kbd>Q</kbd>。但是，如果你 <strong>长按 <kbd>Q</kbd></strong>，你可以进行蓄力投掷！这会增加投掷的距离和威力，对于解谜或将物品扔给队友至关重要。
            </div>
        
            <h2>3. 元素互动（火属性法杖）</h2>
            <p>游戏中包含一些教程中未说明的环境互动。如果你发现一根 <strong>火之法杖 (Fire Staff)</strong> 或木棍没有被点燃：</p>
            <ol>
                <li>找到篝火或墙上的火炬。</li>
                <li>将法杖通过火焰 <strong>投掷 (<kbd>Q</kbd>)</strong> 出去。</li>
                <li>物品会接触到火焰并重新燃起！</li>
            </ol>
            <p><em>警告：千万不要把易爆物品扔进火里！</em></p>
        
            <h2>4. 库存与双手管理</h2>
            <p>你的库存分为 <strong>背包 (Backpack)</strong> 和 <strong>双手 (Hands)</strong>。理解这一点对战斗至关重要。</p>
            <ul>
                <li><strong>背包槽位：</strong> 按键 <kbd>1</kbd>, <kbd>2</kbd>, 和 <kbd>3</kbd>。</li>
                <li><strong>主手（右手）：</strong> 这是使用法杖的活跃手。</li>
                <li><strong>副手（左手）：</strong> 用于携带额外物品。</li>
                <li><strong>交换双手：</strong> 按 <kbd>F</kbd>。</li>
            </ul>
            <p><strong>为什么 <kbd>F</kbd> 很重要？</strong> 你只能用 <em>主手</em> 里的法杖施法。如果法杖在左手里，按 F 键切换！</p>
        
            <h2>5. 镜头、表情与布娃娃</h2>
            <h3>镜头控制</h3>
            <ul>
                <li><strong>切换视角：</strong> 按 <kbd>鼠标中键</kbd> 在第一人称和第三人称之间切换。</li>
                <li><strong>自拍模式：</strong> 按住 <kbd>鼠标中键</kbd> 回头看你的角色（在检查背后是否有怪物时非常有用）。</li>
            </ul>
        
            <h3>社交与娱乐</h3>
            <ul>
                <li><strong>表情：</strong> 长按 <kbd>T</kbd> 打开表情轮盘（跳舞、指点等）。</li>
                <li><strong>装死（布娃娃）：</strong> 按 <kbd>V</kbd>。</li>
            </ul>
            <p>按下 <kbd>V</kbd> 会让你瞬间瘫痪倒地。虽然这很有趣，但请注意：<strong>如果怪物已经看到了你，装死是骗不了它的！</strong></p>
        
            <hr>
            <p><em>准备好进行下一步了吗？查看我们的 <a href="/guides/scales-ball-puzzle-solution/">终极解谜指南</a> 来通过第一关！</em></p>
        
        </div>`,
    },

    {
        id: 2,
        title: "Yapyap 秘密指南：如何在进入城堡前刷 30+ 金币并实现无限飞行",
        iframeUrl: "1",
        description: "不要急着进城堡！这篇 Yapyap 秘密指南揭示了初始大厅中的隐藏宝藏：20-30 枚金币、免费法杖，甚至是价值 50 金币的宝石。掌握双法杖飞行技巧，实现无限翱翔！在游戏开始前就建立领先优势。",
        tags: ["yapyap 秘密", "yapyap 指南", "金币刷取", "无限飞行", "双法杖技巧"],
        publishDate: "2026-01-22",
        imageUrl: "/images/blog/blog02.webp",
        imageAlt: "Yapyap 游戏截图，显示角色在初始森林区域，展示了刷金币的潜力。",
        seo: {
            title: "Yapyap 秘密指南：进入城堡前刷金币与无限飞行！",
            description: "解锁 Yapyap 的隐藏潜力！本指南揭示了在进入城堡前如何刷取 30+ 金币、获取免费法杖并实现无限飞行的方法。",
            keywords: "yapyap, 秘密, 指南, 刷金币, 无限飞行, 双法杖技巧, 隐藏金币, 商人, 宝石",
        },
        isHome: true,
        addressBar: "yapyap-secrets-guide-how-to-farm-coins-fly-infinitely",
        detailsHtml: `
        <div class="yapyap-guide-container">
        
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/MYaHSR8pQUY" title="Yapyap Secrets Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            </div>
        
            <h1 style="font-size: 2em; font-weight: bold;">Yapyap 秘密：如何在进入城堡前刷金币与飞行</h1>
            
            <p>大多数玩家会立即冲进城堡，那是新手才犯的错！<strong>Yapyap</strong> 的初始大厅区域实际上隐藏了 <strong>20 到 30 枚金币</strong>、免费法杖，甚至是价值 50 金币的稀有 <strong>宝石 (Gems)</strong>。只需花 2 分钟在这里搜刮，你就能在游戏正式开始前买到强力装备。</p>
        
            <h2>1. 大厅中的隐藏金币位置</h2>
            <p>不要忽视起始森林。以下是快速获取现金的地方：</p>
            <ul>
                <li><strong>免费法杖树：</strong> 检查标有 "Free Wands" 的树。你可以从上面折断树枝，免费获得基础法杖。即使你不用，也可以卖掉它们！</li>
                <li><strong>告示牌后面：</strong> 走到 "Respawn Point" (重生点) 告示牌后面。草丛里通常藏着 <strong>10 枚金币</strong>。</li>
                <li><strong>篝火旁的箱子：</strong> 寻找篝火旁的商人。在木箱顶部，你会发现一堆共 <strong>11 枚金币</strong>。</li>
            </ul>
        
            <div class="secret-box">
                <span class="secret-title">💰 50 金币宝石的秘密</span>
                <p>这是演示版中最大的秘密。不要只是搜刮箱子——<strong>摧毁它！</strong></p>
                <p>拿起木箱或木桶，把它们扔进火里或撞在石头上击碎。里面有几率掉落一颗 <strong>红宝石 (Red Gem)</strong>。投掷这颗宝石会让你瞬间获得 <strong>50 金币</strong>！</p>
            </div>
        
            <h2>2. 赚钱：卖给商人</h2>
            <p>神秘商人几乎收购任何东西。这是清理库存的好方法：</p>
            <ul>
                <li><strong>蘑菇 (Mushrooms)：</strong> 售价 1 金币。</li>
                <li><strong>多余的木制法杖：</strong> 售价 2 金币。</li>
            </ul>
            <p>要售卖，只需手里拿着物品，看着商人，你就会看到 <strong>"Sell" (售卖)</strong> 提示。</p>
        
            <h2>3. “双法杖”无限飞行技巧</h2>
            <p>想去到高处或跳过困难的跑酷段落？如果你拥有 <strong>两把法杖</strong>，你可以循环施放飞行法术，因为它们的冷却时间是独立的。</p>
            
            <div class="flight-box">
                <h3>🚀 如何飞得更高（连招指南）</h3>
                <p><strong>要求：</strong> 两把基础法杖（主手一把，副手一把）。</p>
                <ol>
                    <li>施放 <strong>Tornado (龙卷风)</strong> (左下角法术) 将自己送入空中。</li>
                    <li>施放 <strong>Up-Dog (向上狗)</strong> (右下角法术) 让自己升得更高。</li>
                    <li>在半空中，按 <kbd>F</kbd> 交换双手。</li>
                    <li>立即用第二把法杖再次施放 <strong>Up-Dog</strong>！</li>
                </ol>
                <p>这个连招允许你进行三段式跳跃飞行，让你轻松到达城堡屋顶或秘密区域。</p>
            </div>
        
            <h2>总结</h2>
            <p>通过使用这些策略，你可以在进入第一晚时就拥有满载的库存和足够的金币购买专业法杖。别忘了每次重生都去检查一下 <strong>Free Wands</strong> 树！</p></div>`,
    },

    {
        id: 3,
        title: 'Yapyap 第一晚生存指南：“无限飞行”策略与最佳搜刮路线',
        iframeUrl: "1",
        description: "Yapyap 的第一晚决定了你整个航程的节奏。许多新巫师死于找不到出口或被小丑女孩困在角落。本指南详细介绍了专业玩家使用的“标准化开局”策略，助你在 5 分钟内获得 800+ 积分并安全撤离。",
        tags: ["第一晚", "yapyap", "生存指南", "攻略"],
        publishDate: "2026-01-22",
        imageUrl: "/images/blog/blog03.webp",
        imageAlt: "Yapyap 第一天生存指南",
        isHome: true,
        seo: {
            title: "Yapyap 第一晚指南：无限飞行、搜刮点与逃生策略",
            description: "通过专业指南在 Yapyap 的第一天生存下来。学习双法杖飞行技巧、盥洗室隐藏资源位置，以及如何识别蓝色逃生塔。",
            keywords: "yapyap 第一晚, 无限飞行, 飞行药水, yapyap 逃生塔, 洗手池搜刮",
        },
        addressBar: "yapyap-Night-1-Survival-Guide",
        detailsHtml: `
      <p>
        <strong>Yapyap</strong> 的第一晚为你整个流程定下了基调。许多玩家在城堡迷宫中迷路，或被敌人困住。本指南揭示了专业人士使用的“标准化开局”，可在 5 分钟内确保获得 800+ 积分并安全撤离。
      </p>
      
      <h2>
        <strong>1. “标准化”准备工作</strong>
      </h2>
      
      <p>
        成功始于你传送进城堡之前。在大厅中遵循此清单：
      </p>
      
      <ol>
        <li data-list="bullet">
          <strong>拿两把法杖：</strong> 不要只拿一把。从 "Free Wands" 树上折下 <strong>两根完全相同的树枝</strong>。这是实现飞行技巧的必备条件。
        </li>
        <li data-list="bullet">
          <strong>搜刮大厅：</strong> 收集藏在告示牌后面和篝火箱子上的 21 枚金币。
        </li>
        <li data-list="bullet">
          <strong>购买飞行药水：</strong> 用你的金币从商人那里购买 <strong>大瓶蓝色药水 (Large Blue Potion)</strong>。这是你寻找出口的保命符。
        </li>
      </ol>
      
      <p>
        🚀 双法杖无限飞行技巧
        标准的 "Up-Dog" 法术有冷却时间，但通过交换法杖可以绕过它。以下是到达城堡顶部的连招：
      </p>
      
      <ol>
        <li data-list="ordered">
          <strong>施放 Tornado (龙卷风)</strong> (左下角法术) 将自己弹射到空中。
        </li>
        <li data-list="ordered">
          <strong>施放 Up-Dog (向上狗)</strong> (右下角法术) 继续升高。
        </li>
        <li data-list="ordered">
          在半空中按 F 键切换到第二把法杖。
        </li>
        <li data-list="ordered">
          立即 <strong>再次施放 Up-Dog</strong>！
        </li>
      </ol>
      
      <p>
        这允许你飞到三层楼的高度，让你跳过楼梯并躲避地面上的敌人。
      </p>
      
      <h2>
        <strong>2. 最佳搜刮路线与刷分</strong>
      </h2>
      
      <p>
        不要浪费时间打破每一个木箱。专注于这些高效的积分来源：
      </p>
      
      <h3>
        <strong>盥洗室 (Washbasin Room)</strong>
      </h3>
      
      <p>
        这个房间是个宝库。寻找那一排洗手池。使用 <strong>Tornado (龙卷风)</strong> 法术跳到中央柱子或洗手池顶端——那里经常会刷新 <strong>11 枚额外金币</strong>。
      </p>
      
      <h3>
        <strong>免费烧毁画作</strong>
      </h3>
      
      <p>
        节省你的火把！如果你看到画作或挂毯：
      </p>
      
      <ol>
        <li data-list="ordered">
          将其从墙上抓取下来 (鼠标左键)。
        </li>
        <li data-list="ordered">
          将其接触附近的 <strong>墙灯</strong> 或蜡烛。
        </li>
        <li data-list="ordered">
          它会立即燃烧并为你提供积分，而不会消耗你的资源。
        </li>
      </ol>
      
      <h2>
        <strong>3. 生存与“小丑女孩”</strong>
      </h2>
      
      <p>
        <strong>⚠️ 危险：小丑女孩 (Clown Girl)</strong>
      </p>
      
      <p>
        如果你听到沉重的踏步声，立即飞起来。小丑女孩是一个移动速度极快、力量巨大的敌人，可以 <strong>秒杀</strong> 你。不要试图用木制法杖和她战斗。
      </p>
      
      <p>
        始终关注屏幕左上角。如果状态从 <em>"Chilling" (冷静)</em> 变为 <strong>"Suspicious" (疑虑)</strong>，这意味着附近有敌人生成。
      </p>
      
      <h2>
        <strong>4. 如何逃生（撤离）</strong>
      </h2>
      
      <p>
        一旦你达到了积分限额（通常通过烧书或完成右侧显示的支线任务），你就需要离开。
      </p>
      
      <ol>
        <li data-list="bullet">
          <strong>抬头看：</strong> 当你在户外或大厅时，寻找一座带有 <strong>蓝色闪烁屋顶 (Blue Sparkling Roof)</strong> 的塔。
        </li>
        <li data-list="bullet">
          <strong>使用药水：</strong> 如果你迷路了，喝下 <strong>飞行药水</strong> 直冲云霄，寻找那些蓝色的闪光点。
        </li>
        <li data-list="bullet">
          <strong>传送：</strong> 站在塔底部的紫色圆圈内即可结束当晚的探险。
        </li>
      </ol>
      
      <p>
        <em>
          精通了第一晚？查看我们的 
          <a href="/wiki/monsters/" rel="noopener noreferrer" target="_blank">怪物指南</a> 
          为第二晚的恐怖做好准备！
        </em>
      </p>
          `,
    },

]