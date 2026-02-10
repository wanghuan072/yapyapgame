export const guides = [
    {
        id: 5,
        title: "Yapyap 設定ガイド：ボイスチャット、酔い対策、操作設定の修正",
        description: "究極の設定ガイドで Yapyap の体験を最適化しましょう。音声認識の修正方法、カメラ感度調整による画面酔いの軽減、そして「クリックで詠唱」やインベントリの入れ替えなどの必須キーバインドの習得方法を解説します。",
        tags: ["究极", "ガイド", "yapyap", "ゲーム", "設定"],
        publishDate: "2026-02-05",
        imageUrl: "/images/blog/blog05.webp",
        imageAlt: "最新 Yapyap 設定ガイド：ボイスチャット、酔い対策、操作設定の修正",
        seo: {
            title: "Yapyap 設定ガイド：ボイスチャット、酔い対策、操作設定の修正",
            description: "究極の設定ガイドで Yapyap の体験を最適化しましょう。音声認識の修正方法、カメラ感度調整による画面酔いの軽減、そして「クリックで詠唱」やインベントリの入れ替えなどの必須キーバインドの習得方法を解説します。",
            keywords: "Yapyap 設定ガイド, Yapyap ボイスチャット 修正, Yapyap 操作, Yapyap 画面酔い, Yapyap 魔法詠唱, Yapyap キーバインド",
        },
        isHighlight: true,
        addressBar: "yapyap-settings-guide",
        detailsHtml: `<div class="container">
          <p>Yapyap は単なるスキルのゲームではありません。適切な設定を行うことで、ゲーム体験をより向上させることができます。音声認識の問題を解決したい場合でも、操作を最適化したい場合でも、このガイドが役に立ちます。</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0px; overflow: hidden; max-width: 100%;">
        <iframe src="https://www.youtube.com/embed/DSDeSxn4ieA" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
        </iframe>
      </div>
      
          <h2>1. 基本設定（全般 & 表示）</h2>
          <p>これらの設定は、主に操作性と視覚体験に影響を与えます。</p>
      
          <h3>視点感度 (View Sensitivity):</h3>
          <ul>
              <li><strong>機能:</strong> 振り向き速度を決定します。回転が遅すぎると感じる場合は、この値を上げてください。</li>
              <li><strong>推奨:</strong> マウスの DPI や習慣に合わせて調整してください。筆者の推奨は <strong>15以下</strong> です。酔いを防ぐため、高く設定しすぎないようにしましょう。</li>
          </ul>
      
          <h3>カメラの滑らかさ (Camera Smoothness):</h3>
          <ul>
              <li><strong>機能:</strong> カメラを回した際、一定の遅延と慣性（ラグ）が発生します。値が高いほど画面が「粘る」感じになり、低いほどレスポンスが直感的になります。</li>
              <li><strong>推奨:</strong> 正確なコントロールを求める場合は、この値を <strong>下げる（0でも可）</strong> ことで、よりスムーズなカメラの動きが得られます。アップローダーも 15以下 に設定することを勧めています。</li>
          </ul>
      
          <h3>視野角 (FOV):</h3>
          <ul>
              <li><strong>機能:</strong> 画面で見える範囲の広さを決定します。</li>
              <li><strong>推奨:</strong> アップローダーは通常 <strong>100</strong> 前後に設定しています。特に三人称視点では、視野角を高くすることで背後のモンスターを確認しやすくなります。</li>
          </ul>
      
          <h3>キャラクターの色:</h3>
          <ul>
              <li><strong>機能:</strong> 純粋なパーソナライズ設定で、クロークの色を変更します。お好みの色を選んでください！</li>
          </ul>
      
          <h2>2. オーディオ設定</h2>
          <ul>
              <li><strong>BGM:</strong> 背景音楽の音量を調節します。BGM が大きすぎて足音が聞こえにくい場合は、適宜下げてください。</li>
              <li><strong>効果音 (Sound Effects):</strong> 魔法の詠唱音、足音、UI のクリック音などが含まれます。<strong>非常に重要</strong> です。音の方向を察知するために、音量は高めに保つことをお勧めします。</li>
              <li><strong>環境音 (Ambient Sound):</strong> 風の音やモンスターの鳴き声などの環境音です。環境が騒がしすぎると感じる場合は、適宜下げて静かな体験にできます（没入感は多少損なわれます）。</li>
          </ul>
      
          <h2>3. 音声とマイクの設定（重要！）</h2>
          <p>多くのプレイヤーが「話しても音が出ない」「呪文が認識されない」と報告していますが、そのほとんどはこの設定が原因です。</p>
          <ul>
              <li><strong>マイクの選択:</strong> オーディオ設定で、<strong>入力デバイス（Microphone）</strong> が現在使用しているマイクに正しく設定されているか確認してください。</li>
          </ul>
      
          <h2>4. キーバインド</h2>
          <p>通常の WASD 移動以外に、注意すべき特殊なキーがいくつかあります：</p>
      
          <h3>V キー（ラグドール）:</h3>
          <ul>
              <li><strong>機能:</strong> 生命力のない人形（ラグドール）のように崩れ落ちます。</li>
              <li><strong>注意:</strong> モンスターにターゲットされる <strong>前</strong> に使用する必要があります！すでに追いかけられている場合、死んだふりをしても効果はなく、そのまま攻撃されます。</li>
          </ul>
      
          <h3>数字キー 1, 2, 3:</h3>
          <p>インベントリの 3 つのスロット（実際に右手に持っているアイテム）に対応しています。</p>
      
          <h3>G キー（タスクリスト）:</h3>
          <ul>
              <li><strong>機能:</strong> 手に持っている契約書を掲げて確認します。</li>
              <li><strong>豆知識:</strong> この契約書は、リスポーン地点横の木の看板にある 3 つのタスクに対応しています。これらをクリアすると追加の報酬が得られます。</li>
          </ul>
      
          <h3>T キー（アクションホイール）:</h3>
          <ul>
              <li><strong>操作:</strong> T を長押ししてホイールを出し、クリックでアクション（ダンス、指差しなど）を実行します。</li>
              <li><strong>イースターエッグ:</strong> アクション実行中にカメラを 360 度回転させることができ、自撮りや動画撮影に最適です。</li>
          </ul>
      
          <h3>マウス左ボタン（掴む）:</h3>
          <ul>
              <li><strong>操作:</strong> アイテムの上で左ボタンを長押しすると、それを掴んで空中に浮かかせることができます。</li>
              <li><strong>機能:</strong> 軽いアイテム（樽や箱など）を動かしたり、火の中にアイテムを投げ込んで燃やしたりするのに使えます（松明を節約したい場合）。</li>
          </ul>
      
          <h3>F キー（手の入れ替え）:</h3>
          <ul>
              <li><strong>機能:</strong> 左手と右手に持っているアイテムを入れ替えます。</li>
              <li><strong>高度な使い方:</strong> インベントリを整理したり、左手にある杖を使いたい場合（右手でしか魔法を使えないため）、F を押して持ち替える必要があります。</li>
          </ul>
      
          <h2>5. アクセシビリティ設定（詠唱の最適化）</h2>
          <div class="highlight-box">
              <p><strong>このガイドで最も重要な部分です！</strong> 呪文の詠唱が不自然に感じたり、発音のせいで魔法が失敗したりする場合は、必ずこの機能を有効にしてください。</p>
          </div>
      
          <h3>音声呪文選択 (Voice Spell Selection):</h3>
          <ul>
              <li><strong>デフォルト:</strong> マウス右ボタンを長押しし、マウスを上下に動かして呪文を選択した後、マイクに向かって呪文を唱える必要があります。</li>
              <li><strong>有効化時:</strong>
                  <ol>
                      <li>右ボタンを長押しして呪文メニューを表示します。</li>
                      <li>使いたい呪文のアイコンを <strong>左クリック</strong> するだけです。</li>
                      <li><strong>効果:</strong> キャラクターが自動的に呪文を唱えて魔法を発動します。あなたがしゃべる必要はありません！</li>
                  </ol>
              </li>
          </ul>
          <p><strong>強く推奨:</strong> しゃべりたくないプレイヤー、深夜にプレイする方、あるいは発音認識がうまくいかない方にとって、これは必須の「物理チート」レベルの機能です。</p>
      
          <h2>まとめ:</h2>
          <ul>
              <li><strong>視点:</strong> 感度と滑らかさを下げ（15未満）、視野角（FOV）を上げます（約100）。</li>
              <li><strong>環境音:</strong> うるさければ下げます。</li>
              <li><strong>アクセシビリティ:</strong> <strong>「Voice Spell Selection」</strong> を有効にして、マイクなしのクリック詠唱に切り替えましょう。これで認識失敗のストレスともおさらばです！</li>
          </ul>
      
          <p>Yapyap の世界で、スムーズな詠唱と楽しいサバイバルができることを祈っています！</p>
      </div>`,
    },

    {
        id: 4,
        title: "Yapyap 製品版スターターガイド：無限飛行、稼ぎ、戦闘のコツ",
        description: "製品版 Yapyap をマスターするためのスターターガイド。無限飛行を可能にする「3本杖システム」、ロビーでのゴールド稼ぎ場所、ノーダメージ着地術、そして戦闘戦略を学びましょう。",
        tags: ["yapyap"],
        publishDate: "2026-02-06",
        imageUrl: "/images/blog/blog04.webp",
        imageAlt: "Yapyap 製品版スターターガイド",
        seo: {
            title: "Yapyap 製品版スターターガイド：無限飛行、稼ぎ、戦闘のコツ",
            description: "製品版 Yapyap をマスターするためのスターターガイド。無限飛行を可能にする「3本杖システム」、ロビーでのゴールド稼ぎ場所、ノーダメージ着地術、そして戦闘戦略を学びましょう。",
            keywords: "Yapyap ガイド, Yapyap 初心者ガイド, Yapyap 無限飛行, Yapyap 稼ぎ, Yapyap コツ, Yapyap 戦闘, Yapyap 杖, Yapyap 秘密",
        },
        isHome: true,
        addressBar: "yapyap-full-version-starter-guide",
        detailsHtml: `<div class="container">
          <p>Yapyap へようこそ！魔法と混沌が支配するこの世界では、最初の準備が生存時間を左右します。以下に、実践経験に基づいた「勝利の方程式」的な初心者ガイドをまとめました。</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0px; overflow: hidden; max-width: 100%;">
        <iframe src="https://www.youtube.com/embed/AMYhCUAGTXs" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
        </iframe>
      </div>
      
      
          <h2>1. 基本設定と視点</h2>
          <p><strong>視点の切り替え:</strong> マップに入った後、アクションゲームのような視点が好みなら、マウス中ボタンをクリックして三人称視点に切り替えましょう。視野が広がり、周囲の観察が容易になります。</p>
      
          <h2>2. コアメカニクス：なぜ「3本杖システム」が必要なのか？</h2>
          <p>これはゲーム内で最も重要な仕組みの一つです。初心者の多くは杖を 1 本しか持ちませんが、熟練プレイヤーは常に同じ杖でインベントリを満たしています。</p>
          
          <ul>
              <li><strong>杖の入手:</strong> リスポーン地点の右側に「Free Wands」と書かれた看板のある木があります。</li>
              <li><strong>操作:</strong> E を押して枝を折り、地面に落としてから、もう一度 E を押して拾い、インベントリに入れます。</li>
              <li><strong>複数持ちの秘密:</strong> このゲームでは杖のクールダウン（CD）が共有されません。</li>
              <li><strong>実践テクニック:</strong> 風の杖を 3 本持っていれば、1 を押して詠唱 → F（または武器切り替え）で 2 本目に切り替え → 3 本目に切り替えて再び詠唱、という流れで「マシンガン」のような連続詠唱や、絶え間ない竜巻の発生が可能になります。</li>
          </ul>
      
          <h2>3. 高度な移動技術：宇宙への飛行とノーダメージ着地</h2>
          <p>複数の杖を使いこなせれば、ゲームの物理エンジンの特性（バグ）を利用して、驚異的な動きができます。</p>
      
          <h3>無限飛行（スカイリープ）:</h3>
          <p>風の杖の「Storm Tornado」または「Up-Dog」を利用します。</p>
          <ul>
              <li>1回離陸詠唱 → 2本目の杖に切り替え → 再び離陸詠唱。</li>
              <li>切り替えが十分に速ければ、大気圏まで飛んだり、マップ外の好きな場所へ移動したりできます（実質的なマップバグです）。</li>
          </ul>
      
          <h3>ノーダメージ着地術（必須）:</h3>
          <p>高所から落下すると通常はダメージを受けるか、長い硬直が発生します。</p>
          <ul>
              <li><strong>操作:</strong> 着地する瞬間に、ジャンプキー（スペースキー）を連打してください。キャラクターがわずかにジャンプ動作を行い、すべての落下ダメージを無効化します。</li>
          </ul>
      
          <h2>4. ロビー「稼ぎ」：開始時の最初の軍資金</h2>
          <p>すぐにポータルに入ってはいけません！最初のロビーで、最初の薬を買うのに十分な額を稼ぐことができます。</p>
      
          <h3>スカベンジングで金持ちに:</h3>
          <ul>
              <li><strong>植物:</strong> リスポーン地点裏の茂みに光る植物があります。E で拾いましょう。</li>
              <li><strong>カエル:</strong> 茂みに光る点があります。近づくとカエルが現れ、コインを吐き出すことがあります。</li>
              <li><strong>売却:</strong> 集めた植物や余分な枝を「お姉さん商人」のところへ持っていきます。アイテムを手に持って E を押すと売却できます（通常 1 つ 2 コイン）。</li>
          </ul>
      
          <h3>隠しコイン:</h3>
          <ul>
              <li><strong>小屋:</strong> リスポーン地点の後ろに小さな小屋があります。</li>
              <li><strong>場所:</strong> 小屋に入って左側の階段の上です。通常、11 枚のコインが隠されています。開始直後に拾っておきましょう！</li>
          </ul>
      
          <h2>5. クエストと契約システム</h2>
          <ul>
              <li><strong>契約の確認:</strong> リスポーン地点横の掲示板がクエストボードです。</li>
              <li>見えにくいですか？（ヒント：G キーを押して一人称視点で確認してみてください）。</li>
          </ul>
      
          <h2>6. 戦闘と生存のヒント（衛兵とボス対策）</h2>
          <p><strong>カイト（引き撃ち）:</strong> 地形（手すりや柱など）を利用して、モンスターの視線を遮りましょう。</p>
      
          <h3>移動スキルの活用:</h3>
          <ul>
              <li><strong>角での立ち回り:</strong> 屋外では「Up-Dog」を使って壁際を飛び、非常に狭いエッジを渡ることで、ハリケーン・ガールの即死攻撃などを回避できます。</li>
              <li><strong>回避術:</strong> 衛兵が剣を振り上げてもパニックにならないでください。その場で「Up-Dog」を使ってジャンプし、攻撃をかわしながら頭の上に着地して挑発しましょう。</li>
              <li><strong>ヘルメット飛ばし:</strong> 風の杖を使って衛兵のヘルメットを吹き飛ばすとボーナスが得られます。</li>
          </ul>
      
          <h2>7. ロビーのイースターエッグと機能</h2>
          <ul>
              <li><strong>フレンドを招待:</strong> 小屋の中央にある魔法のオーブで、Steam のフレンドを招待して一緒に遊べます。その上に座ってください（E キー）。</li>
              <li><strong>魔導書:</strong> 小屋の 2 階に魔導書があります。開くと、現在持っている杖のスキル説明が表示されます。</li>
              <li><strong>楽器:</strong> 2 階のバルコニーの外に 3 つの楽器があります。</li>
              <li><strong>演奏方法:</strong> 楽器を拾い、右クリックで構え、左クリックで単音、ボタンを押しながらスクロールで連音を奏でます。</li>
              <li><strong>イースターエッグ:</strong> もし <em>Outer Wilds</em> をプレイしたことがあれば、これらの楽器の音色に懐かしさと安らぎを感じるはずです。</li>
          </ul>
      
          <h2>8. ゲームの開始</h2>
          <p>ロビーで稼ぎを終え、最初の <strong>Flight Potion (飛行薬)</strong> を購入したら、ロビー中央の石の転送陣へ向かいましょう。E キーで起動し、全員が円の中に立つとメインステージに突入します。</p>
      
          <p><strong>まとめ:</strong> <em>Yapyap</em> は単なるホラーゲームではなく、移動を楽しむゲームでもあります。ポイントを忘れないでください：杖を複数持つこと、着地時にスペースキーを押すこと、迷ったら飛び上がること！城での冒険を楽しんでください！</p>
      </div>`,
    },

    {
        id: 1,
        title: "Yapyap 入門ガイド：必須操作と設定の解説",
        iframeUrl: "1",
        description: "Yapyap を始めたばかりですか？このガイドでは、駆け出しの魔法使いがマスターすべき必須操作と設定を解説します！マイクの調子が悪い時の魔法詠唱法、環境とのインタラクション、インベントリ管理などを学び、すぐにプロの魔法使いになりましょう！",
        tags: ["yapyap", "入門", "操作設定", "魔法詠唱", "魔法使いゲーム"],
        publishDate: "2026-01-22",
        imageUrl: "/images/blog/blog01.webp",
        imageAlt: "Yapyap で魔法を唱える魔法使い。ゲームの魔法システムを紹介しています。",
        seo: {
            title: "Yapyap：入門ガイド - 操作と魔法詠唱をマスターする",
            description: "Yapyap 初心者向けに、必須操作や設定（マイクの修正を含む！）、インベントリ管理、属性の相互作用を解説するビギナーズガイドです。",
            keywords: "yapyap, 入門, yapyap 操作, 魔法詠唱, 音声詠唱, インベントリ, 属性相互作用, 魔法使いゲーム, 魔法",
        },
        isHome: false,
        addressBar: "getting-started-yapyap-essential-controls-settings-guide",
        detailsHtml: `
        <div class="yapyap-guide-container">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/AwtB8ZWk264" title="Yapyap Beginner's Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            </div>
        
            <p><strong>Yapyap</strong> へようこそ！魔法に満ちた世界ですが、新人魔法使いにとっては操作が少しトリッキーかもしれません。ゴブリンとの戦いに飛び出す前に、まずは設定を正しく構成しましょう。このガイドでは、移動、インベントリ、そして最も重要な設定である<strong>魔法詠唱</strong>について説明します。</p>
        
            <h2>1. 必須設定：マイクと魔法の修正</h2>
            <p>デフォルトでは、Yapyap はマイクに向かって呪文を叫ぶことを想定しています。しかし、マイクが動作しない場合や、静かにプレイしたい場合は、すぐにこの設定を変更する必要があります。</p>
            <ul>
                <li><strong>Settings（設定）</strong> &gt; <strong>Accessibility（アクセシビリティ）</strong> に移動します。</li>
                <li><strong>"Voice Spell Select"</strong> を探します。</li>
                <li><strong>推奨アクション：</strong> 2番目のオプションである <strong>"Hold Right Mouse Button for Spell"（右クリック長押しで魔法を選択）</strong> を有効にします。</li>
            </ul>
            <p>これにより、話す代わりに <kbd>右クリック</kbd> を長押しすることで魔法を唱えられるようになります。これは初心者にとって非常に安定した方法です。</p>
        
            <h2>2. 基本操作と移動</h2>
            <p>夜を生き抜くためには、移動をマスターすることが鍵となります。Yapyap の物理演算は少し「ふわふわ」した感じがするので、慣れが必要です。</p>
            <ul>
                <li><strong>移動：</strong> <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd></li>
                <li><strong>掴む / 調べる：</strong> <kbd>左クリック</kbd> を長押し。（アイテムが認識されるまで一瞬待ってからドラッグしてください）。</li>
                <li><strong>アイテムを拾う：</strong> <kbd>E</kbd> キー。（もう一度押すとそっと置きます）。</li>
            </ul>
        
            <div class="pro-tip-box">
                <span class="pro-tip-title">🔥 高度なテクニック：チャージ投げ</span>
                アイテムを投げるには <kbd>Q</kbd> を押します。しかし、<strong><kbd>Q</kbd> を長押し</strong> すると、投げをチャージできます！これにより飛距離と威力が増し、パズルを解いたりチームメイトにアイテムを投げ渡したりする際に非常に重要になります。
            </div>
        
            <h2>3. 属性の相互作用（火の杖）</h2>
            <p>このゲームには、チュートリアルでは説明されない環境との相互作用があります。もし<strong>火の杖</strong>や、火のついていない木の棒を見つけたら：</p>
            <ol>
                <li>キャンプファイヤーや壁の松明を探します。</li>
                <li>杖を炎に向かって <strong>投げる（<kbd>Q</kbd>）</strong>。</li>
                <li>アイテムに火がつき、再点火されます！</li>
            </ol>
            <p><em>警告：爆発物を火の中に投げ込まないよう注意してください！</em></p>
        
            <h2>4. インベントリと手の管理</h2>
            <p>インベントリは <strong>バックパック</strong> と <strong>手</strong> に分かれています。これを理解することは戦闘において極めて重要です。</p>
            <ul>
                <li><strong>バックパックスロット：</strong> 数字の <kbd>1</kbd>、<kbd>2</kbd>、<kbd>3</kbd>。</li>
                <li><strong>メインハンド（右手）：</strong> 杖を使用するためのアクティブな手。</li>
                <li><strong>オフハンド（左手）：</strong> 予備のアイテムを持つために使用。</li>
                <li><strong>手の入れ替え：</strong> <kbd>F</kbd> キー。</li>
            </ul>
            <p><strong>なぜ <kbd>F</kbd> が重要なのか？</strong> 魔法を唱えられるのは <em>メインハンド</em> に持っている杖だけです。杖が左手にある場合は、F を押して入れ替えましょう！</p>
        
            <h2>5. カメラ、エモート、ラグドール</h2>
            <h3>カメラ操作</h3>
            <ul>
                <li><strong>視点切り替え：</strong> <kbd>マウス中ボタン</kbd> を押して、一人称視点と三人称視点を切り替えます。</li>
                <li><strong>自撮りモード：</strong> <kbd>マウス中ボタン</kbd> を長押ししてキャラクターを振り返ります（背後にモンスターがいないか確認するのに便利です）。</li>
            </ul>
        
            <h3>ソーシャル & お楽しみ</h3>
            <ul>
                <li><strong>エモート：</strong> <kbd>T</kbd> を長押ししてエモートホイール（ダンス、指差しなど）を開きます。</li>
                <li><strong>死んだふり（ラグドール）：</strong> <kbd>V</kbd> キー。</li>
            </ul>
            <p><kbd>V</kbd> を押すと瞬時に崩れ落ちます。楽しい機能ですが、注意してください：<strong>すでにモンスターに見つかっている場合、死んだふりをしても騙すことはできません！</strong></p>
        
            <hr>
            <p><em>次のステップへ進む準備はいいですか？ <a href="/guides/scales-ball-puzzle-solution/">究極のパズルガイド</a> をチェックして、最初のレベルを攻略しましょう！</em></p>
        
        </div>`,
    },

    {
        id: 2,
        title: "Yapyap 秘密のガイド：城に入る前に30枚以上のコインを稼ぎ、無限に飛ぶ方法",
        iframeUrl: "1",
        description: "すぐに城へ急いではいけません！この秘密ガイドでは、開始ロビーに隠されたお宝（20〜30枚のコイン、無料の杖、さらには50ゴールドの宝石）を公開します。ダブル杖飛行トリックをマスターして、無限に滑空しましょう！開始前から Yapyap を支配しましょう。",
        tags: ["yapyapの秘密", "yapyapガイド", "コイン稼ぎ", "無限飛行", "ダブル杖トリック"],
        publishDate: "2026-01-22",
        imageUrl: "/images/blog/blog02.webp",
        imageAlt: "開始地点の森エリアにいるキャラクター。コイン稼ぎのポテンシャルを示しています。",
        seo: {
            title: "Yapyap 秘密ガイド：城に入る前にコイン稼ぎ & 無限飛行！",
            description: "Yapyap の隠されたポテンシャルを解き放て！城に入る前に 30 枚以上のコインを稼ぎ、無料の杖を手に入れ、無限飛行を実現する方法を紹介します。",
            keywords: "yapyap, 秘密, ガイド, コイン稼ぎ, 無限飛行, ダブル杖トリック, 隠しコイン, 商人, 宝石",
        },
        isHome: true,
        addressBar: "yapyap-secrets-guide-how-to-farm-coins-fly-infinitely",
        detailsHtml: `
        <div class="yapyap-guide-container">
        
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/MYaHSR8pQUY" title="Yapyap Secrets Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            </div>
        
            <h1 style="font-size: 2em; font-weight: bold;">Yapyap の秘密：城に入る前にコインを稼ぎ、飛行する方法</h1>
            
            <p>ほとんどのプレイヤーはすぐに城へと向かいますが、それは初心者のミスです！ <strong>Yapyap</strong> の開始ロビーエリアには、実は <strong>20〜30 枚のコイン</strong>、無料の杖、そして 50 ゴールドの価値があるレアな <strong>宝石</strong> が隠されています。ここで 2 分間だけ稼ぐことで、ゲーム開始前に強力な装備を整えることができます。</p>
        
            <h2>1. ロビーの隠しコインの場所</h2>
            <p>始まりの森を無視してはいけません。手早く現金を稼げる場所はこちらです：</p>
            <ul>
                <li><strong>無料の杖の木：</strong> "Free Wands" と書かれた木をチェックしましょう。枝を折ることで基本的な杖を無料で入手できます。使わなくても売ることができます！</li>
                <li><strong>看板の裏：</strong> 「Respawn Point」の看板の裏を確認してください。通常、草の中に <strong>10 枚のコイン</strong> が隠されています。</li>
                <li><strong>焚き火のチェスト：</strong> 焚き火の近くにいる商人の後ろを見てください。木箱の上に <strong>11 枚のコイン</strong> が積まれています。</li>
            </ul>
        
            <div class="secret-box">
                <span class="secret-title">💰 50ゴールドの宝石の秘密</span>
                <p>これはデモ版における最大の秘密です。チェストから中身を取るだけでなく、<strong>チェスト自体を破壊してください！</strong></p>
                <p>木箱やバケツを拾って火の中に投げ込むか、岩に叩きつけて壊しましょう。中から <strong>赤い宝石</strong> が見つかることがあります。この宝石を投げると、即座に <strong>50 コイン</strong> 獲得できます！</p>
            </div>
        
            <h2>2. お金を作る：商人に売却する</h2>
            <p>謎の商人はほとんど何でも買い取ってくれます。インベントリを整理するのにも最適です：</p>
            <ul>
                <li><strong>キノコ：</strong> 1 コインで売却。</li>
                <li><strong>予備の木の杖：</strong> 2 コインで売却。</li>
            </ul>
            <p>売るには、アイテムを手に持った状態で商人の方を見ると、<strong>"Sell"（売却）</strong> というプロンプトが表示されます。</p>
        
            <h2>3. 「ダブル杖」無限飛行トリック</h2>
            <p>高い場所に登りたい、あるいは難しいアスレチックセクションをスキップしたいですか？ <strong>2本の杖</strong> を持っていれば、クールダウンが別々に計算されるため、飛行魔法を連鎖させることができます。</p>
            
            <div class="flight-box">
                <h3>🚀 より高く飛ぶ方法（コンボガイド）</h3>
                <p><strong>必要条件：</strong> 基本の杖 2 本（メインハンドに 1 本、オフハンドに 1 本）。</p>
                <ol>
                    <li><strong>Tornado</strong>（左下の魔法）を唱えて自分を空中に打ち上げます。</li>
                    <li><strong>Up-Dog</strong>（右下の魔法）を唱えてさらに浮き上がります。</li>
                    <li>空中で <kbd>F</kbd> キーを押して手を入れ替えます。</li>
                    <li>即座に 2 本目の杖で再び <strong>Up-Dog</strong> を唱えます！</li>
                </ol>
                <p>このコンボにより 3 段階の高さまで飛ぶことができ、城の屋根や秘密のエリアに簡単に到達できます。</p>
            </div>
        
            <h2>まとめ</h2>
            <p>これらの戦略を使えば、インベントリを満載にし、専門の杖を買うのに十分なゴールドを持って最初の夜に挑むことができます。リスポーンするたびに <strong>Free Wands</strong> の木をチェックするのを忘れないでください！</p></div>`,
    },

    {
        id: 3,
        title: 'Yapyap 第1夜生存ガイド：「無限飛行」戦略と最適なルート',
        iframeUrl: "1",
        description: "Yapyap の最初の夜は、その後のラン全体のペースを決定します。多くの魔法使いが、出口が見つからなかったり、ピエロの少女（Clown Girl）に追い詰められたりして命を落とします。このガイドでは、プロが 800 ポイント以上を獲得し、5分以内に安全に脱出するために使用する「標準的な開幕」戦略を詳しく解説します。",
        tags: ["第1夜", "生存ガイド", "yapyap", "戦略", "初心者向け"],
        publishDate: "2026-01-22",
        imageUrl: "/images/blog/blog03.webp",
        imageAlt: "Yapyap 第1夜生存ガイド",
        isHome: true,
        seo: {
            title: "Yapyap 第1夜ガイド：無限飛行、お宝スポット、脱出戦略",
            description: "プロのガイドで Yapyap の第1夜を生き残りましょう。ダブル杖飛行トリック、隠された洗面所の戦利品の場所、青い脱出塔の見分け方を学びます。",
            keywords: "yapyap 第1夜, 無限飛行, 飛行薬, yapyap 脱出塔, 洗面台の宝",
        },
        addressBar: "yapyap-Night-1-Survival-Guide",
        detailsHtml: `
      <p>
        <strong>Yapyap</strong> の最初の夜は、その後のラン全体のペースを決定します。多くのプレイヤーが城の迷路で迷ったり、敵に追い詰められたりします。このガイドでは、プロが 5 分以内に 800 ポイント以上を確保し、安全に脱出するために使用する「標準的な開幕」を公開します。
      </p>
      
      <h2>
        <strong>1. 「標準的」な準備</strong>
      </h2>
      
      <p>
        成功は城にテレポートする前から始まっています。ロビーで以下のチェックリストに従ってください：
      </p>
      
      <ol>
        <li data-list="bullet">
          <strong>杖を2本持つ：</strong> 1本だけで済ませないでください。"Free Wands" の木から <strong>同じ枝を2本</strong> 折ってください。これは飛行トリックに不可欠です。
        </li>
        <li data-list="bullet">
          <strong>ロビーで稼ぐ：</strong> 看板の裏と焚き火のチェストに隠された 21 枚のコインを回収します。
        </li>
        <li data-list="bullet">
          <strong>飛行薬を買う：</strong> 集めたコインで商人から <strong>Large Blue Potion（大きな青い薬）</strong> を買います。これは出口を見つけるための命綱になります。
        </li>
      </ol>
      
      <p>
        🚀 ダブル杖・無限飛行トリック
        通常の "Up-Dog" 魔法にはクールダウンがありますが、杖を持ち替えることでそれをバイパスできます。城の天井まで届くコンボはこちら：
      </p>
      
      <ol>
        <li data-list="ordered">
          <strong>Tornado</strong>（左下の魔法）を唱えて自分を空中に打ち上げます。
        </li>
        <li data-list="ordered">
          <strong>Up-Dog</strong>（右下の魔法）を唱えてさらに高く浮きます。
        </li>
        <li data-list="ordered">
          空中で F を押して 2 本目の杖に切り替えます。
        </li>
        <li data-list="ordered">
          即座に <strong>もう一度 Up-Dog</strong> を唱えます！
        </li>
      </ol>
      
      <p>
        これにより 3 段階の高さまで飛ぶことができ、階段をスキップして地上の敵から安全に逃れることができます。
      </p>
      
      <h2>
        <strong>2. 最適なルートとポイント稼ぎ</strong>
      </h2>
      
      <p>
        すべての木箱を壊して時間を無駄にしないでください。以下の効率的なポイント源に集中しましょう：
      </p>
      
      <h3>
        <strong>洗面所（Washbasin Room）</strong>
      </h3>
      
      <p>
        この部屋は宝の山です。並んでいる洗面台を探してください。 <strong>Tornado</strong> 魔法を使って中央の柱や洗面台の上に飛び乗ると、 <strong>11 枚のボーナスコイン</strong> が出現していることがよくあります。
      </p>
      
      <h3>
        <strong>無料で絵画を燃やす</strong>
      </h3>
      
      <p>
        松明を節約しましょう！絵画やタペストリーを見つけたら：
      </p>
      
      <ol>
        <li data-list="ordered">
          壁から剥ぎ取ります（左クリック）。
        </li>
        <li data-list="ordered">
          それを近くの <strong>壁ランプ</strong> やキャンドルに触れさせます。
        </li>
        <li data-list="ordered">
          瞬時に燃え上がり、リソースを消費せずにポイントを獲得できます。
        </li>
      </ol>
      
      <h2>
        <strong>3. 生存戦略と「ピエロの少女（Clown Girl）」</strong>
      </h2>
      
      <p>
        <strong>⚠️ 危険：ピエロの少女</strong>
      </p>
      
      <p>
        重い足音が聞こえたら、すぐに上に飛んでください。ピエロの少女は足が速く、攻撃力が非常に高いため <strong>即死</strong> させられる可能性があります。木の杖で彼女に立ち向かおうとしないでください。
      </p>
      
      <p>
        常に画面左上のステータスに注意してください。 <em>"Chilling"（リラックス）</em> から <strong>"Suspicious"（不審）</strong> に変わったら、近くに敵がスポーンした合図です。
      </p>
      
      <h2>
        <strong>4. 脱出方法（エキストラクション）</strong>
      </h2>
      
      <p>
        ポイントノルマを達成したら（本を燃やすか、右側に表示されるサイドクエストを完了させることで達成）、脱出する必要があります。
      </p>
      
      <ol>
        <li data-list="bullet">
          <strong>上を見る：</strong> 屋外またはメインホールに出たら、 <strong>青く光る屋根</strong> の塔を探してください。
        </li>
        <li data-list="bullet">
          <strong>薬を使う：</strong> 迷ったら <strong>飛行薬（Flight Potion）</strong> を飲み、真上に飛んで青い光を探しましょう。
        </li>
        <li data-list="bullet">
          <strong>テレポート：</strong> 塔のふもとにある紫色の円の中に立つと、その夜が終了します。
        </li>
      </ol>
      
      <p>
        <em>
          第1夜をマスターしましたか？ 
          <a href="/wiki/monsters/" rel="noopener noreferrer" target="_blank">モンスターガイド</a> 
          をチェックして、第2夜の恐怖に備えましょう！
        </em>
      </p>
      `,
    },
]