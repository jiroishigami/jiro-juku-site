export default function JiroJukuLP() {
  const lineUrl = "https://lin.ee/YX9dAhd";

  const features = [
    "マンツーマン指導",
    "英検対策 / 大学受験対応",
    "元英語嫌いの講師だから寄り添える",
    "英検1級講師が直接サポート",
  ];

  const worries = [
    "英語が苦手で勉強が続かない",
    "英検に挑戦したいが何から始めればいいかわからない",
    "英作文やスピーキングの練習方法がわからない",
    "集団塾では質問しづらい",
    "自分に合った勉強方法を知りたい",
    "オンラインで効率よく英語を伸ばしたい",
  ];

  const pillars = [
    {
      icon: "📚",
      title: "興味ドリブン多読・多聴",
      body: "生徒一人ひとりの好きな分野に合わせて、英語の記事・動画・本を厳選。楽しみながら読む・聞く量を増やし、英語力の土台を育てます。",
    },
    {
      icon: "📝",
      title: "徹底的な過去問演習",
      body: "ただ解くだけではなく、間違えたポイントを一緒に分析。合格に必要な得点力を着実に身につけます。",
    },
    {
      icon: "💬",
      title: "LINE質問＆英作添削",
      body: "授業外でも気軽に質問OK。つまずきをそのままにせず、学習を前に進めます。英作文の添削にも対応します。",
    },
  ];

  const trialFlow = [
    "現状・目標・悩みをヒアリング",
    "英検に向けた学習スケジュールと受験戦略を設計",
    "興味のあるテーマを確認し、おすすめの動画や書籍を紹介",
    "毎日の宿題を作成",
  ];

  const lessonFlow = [
    "宿題の確認テストで定着度をチェック",
  "学習の進捗・感想・つまずきを確認",
  "弱点に合わせて次週の課題を設定",
  "興味に合わせた英語コンテンツを紹介",
  "次回までの宿題プランを作成",
  ];

  const faqs = [
    {
      q: "どのレベルの生徒が対象ですか？",
      a: "英検対策や大学受験英語に取り組みたい方、そして英語を通して自分の世界を広げたい方を対象としています。詳しくは無料体験でご相談ください。",
    },
    {
      q: "英語が苦手でも大丈夫ですか？",
      a: "大丈夫です。元英語嫌いの講師だからこそ、苦手な人のつまずき方を前提にサポートします。",
    },
    {
      q: "体験前に質問だけしてもいいですか？",
      a: "もちろん大丈夫です。LINEから気軽にお問い合わせください。",
    },
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #f7f6f2; color: #111; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", "Hiragino Sans", "Yu Gothic", sans-serif; }
        a { text-decoration: none; }
        .header { position: sticky; top: 0; z-index: 20; background: rgba(247,246,242,.92); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(0,0,0,.06); }
        .nav { max-width: 1120px; margin: 0 auto; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .brand { font-size: 14px; font-weight: 800; letter-spacing: .04em; }
        .btn { display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; font-weight: 800; transition: opacity .2s ease; white-space: nowrap; }
        .btn:hover { opacity: .88; }
        .btn-line { background: #06C755; color: #fff; box-shadow: 0 2px 8px rgba(0,0,0,.08); }
        .btn-small { padding: 9px 16px; font-size: 14px; }
        .btn-main { padding: 13px 24px; font-size: 15px; }
        .btn-outline { border: 1px solid #2c5a87; color: #2c5a87; padding: 12px 22px; font-size: 15px; }
        .container { max-width: 1120px; margin: 0 auto; padding-left: 24px; padding-right: 24px; }
        .hero { display: grid; grid-template-columns: 1.05fr 1fr; gap: 32px; padding-top: 48px; padding-bottom: 56px; align-items: stretch; }
        .photo-card { background: #dcecf0; border-radius: 28px; padding: 24px; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
        .photo-frame { height: 100%; min-height: 430px; border-radius: 22px; border: 1px solid rgba(0,0,0,.06); background: rgba(255,255,255,.45); padding: 24px; display: flex; }
        .photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 35% center;
  border-radius: 18px;
  display: block;
}
        .hero-copy { background: #efe8d4; border-radius: 28px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
        .pill { display: inline-block; background: rgba(255,255,255,.7); border-radius: 999px; padding: 6px 12px; font-size: 12px; font-weight: 800; letter-spacing: .03em; margin-bottom: 18px; }
        h1 { margin: 0; font-size: clamp(36px, 5vw, 64px); line-height: 1.12; font-weight: 950; letter-spacing: -.03em; }
        .subtitle { margin-top: 22px; font-size: 24px; font-weight: 900; }
        .lead { margin-top: 24px; max-width: 580px; font-size: 18px; line-height: 1.9; color: rgba(0,0,0,.72); }
        .actions { margin-top: 32px; display: flex; flex-wrap: wrap; gap: 12px; }
        .features { margin-top: 32px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
        .feature { background: rgba(255,255,255,.65); border-radius: 16px; padding: 14px 16px; font-size: 14px; font-weight: 800; box-shadow: 0 1px 6px rgba(0,0,0,.04); }
        .section { padding-top: 40px; padding-bottom: 40px; }
        .blue-box { background: #dcecf0; border-radius: 28px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
        .section-title { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .bar { width: 8px; height: 32px; background: #06C755; border-radius: 999px; flex: 0 0 auto; }
        h2 { margin: 0; font-size: 30px; line-height: 1.35; font-weight: 950; }
        h3 { margin: 0; font-size: 20px; font-weight: 950; }
        .formula-title { text-align: center; color: #2c5a87; font-size: 24px; font-weight: 950; margin: 0 0 32px; }
        .formula { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 16px; align-items: center; }
        .step-card { background: #fff; border-radius: 24px; padding: 30px 20px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,.04); }
        .step-card .small { font-size: 14px; font-weight: 800; color: rgba(0,0,0,.55); }
        .step-card .strong { margin-top: 8px; font-size: 26px; line-height: 1.15; font-weight: 950; }
        .plus { font-size: 46px; font-weight: 950; text-align: center; }
        .goal { background: #efe8d4; }
        .white-box { background: #fff; border-radius: 28px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
        .worry-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
        .worry { background: #f7f6f2; border-radius: 20px; padding: 16px 18px; font-weight: 800; box-shadow: 0 1px 6px rgba(0,0,0,.04); }
        .note { margin-top: 22px; color: #2c5a87; font-weight: 900; }
        .pillar-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 24px; }
        .pillar-card { background: #dcecf0; border-radius: 28px; padding: 28px; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
        .icon { font-size: 32px; }
        .card-body { margin-top: 14px; font-size: 15px; line-height: 1.85; color: rgba(0,0,0,.72); }
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .beige-box { background: #efe8d4; border-radius: 28px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
        .profile-text { margin-top: 18px; display: grid; gap: 18px; font-size: 16px; line-height: 2; color: rgba(0,0,0,.76); }
        .profile-text p { margin: 0; }
        .flow-block + .flow-block { margin-top: 34px; }
        .flow-title { color: #2c5a87; margin-bottom: 16px; }
        .flow-lead {
  margin: 0 0 24px;
  color: rgba(0,0,0,.68);
  line-height: 1.9;
  font-size: 15px;
}

.mini-lead {
  margin: 12px 0 0;
  color: rgba(0,0,0,.68);
  line-height: 1.8;
  font-size: 15px;
}
        .flow-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 16px; }
        .flow-item { display: flex; gap: 14px; align-items: flex-start; }
        .num { width: 32px; height: 32px; flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: #06C755; color: #fff; font-size: 14px; font-weight: 900; }
        .flow-item p { margin: 3px 0 0; line-height: 1.75; color: rgba(0,0,0,.72); }
        .plan-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .mini-card { border-radius: 24px; padding: 28px; }
        .price { margin: 16px 0 0; font-size: 32px; font-weight: 950; }
        .price span { font-size: 16px; }
        .price-options {
  display: grid;
  gap: 16px;
  margin-top: 18px;
}

.price-option {
  background: rgba(255,255,255,.55);
  border-radius: 18px;
  padding: 16px 18px;
}

.plan-name {
  margin: 0;
  font-weight: 950;
  color: #2c5a87;
}

.plan-desc {
  margin: 8px 0 0;
  font-size: 14px;
  line-height: 1.7;
  color: rgba(0,0,0,.68);
}

.plan-label {
  margin: 20px 0 0;
  font-weight: 950;
  color: #2c5a87;
}

.plan-subtitle {
  margin: 8px 0 0;
  font-size: 14px;
  font-weight: 800;
  color: rgba(0,0,0,.62);
}
        ul { margin: 18px 0 0; padding-left: 0; list-style: none; display: grid; gap: 12px; line-height: 1.75; }
        .faq-list { display: grid; gap: 16px; }
        .faq { background: #fff; border-radius: 22px; padding: 26px; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
        .faq q { display: block; font-size: 18px; font-weight: 950; }
        .faq p { margin: 14px 0 0; line-height: 1.8; color: rgba(0,0,0,.72); }
        .cta { background: #06C755; color: #fff; border-radius: 32px; padding: 56px 36px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
        .cta .eyebrow { margin: 0; color: rgba(255,255,255,.82); font-size: 14px; font-weight: 800; }
        .cta h2 { margin-top: 14px; font-size: clamp(30px, 5vw, 54px); color: #fff; }
        .cta p { max-width: 680px; margin: 22px auto 0; line-height: 1.9; color: rgba(255,255,255,.88); }
        .btn-white { margin-top: 32px; background: #fff; color: #2c5a87; padding: 16px 28px; font-size: 16px; }
        .footer {
  padding: 32px 20px;
  text-align: center;
  font-size: 13px;
  color: rgba(0,0,0,.55);
}

.footer a {
  color: rgba(0,0,0,.55);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.footer a:hover {
  color: rgba(0,0,0,.8);
}
        
        @media (max-width: 820px) {
          .nav { padding: 14px 16px; }
          .hero { grid-template-columns: 1fr; padding: 22px 16px 34px; gap: 18px; }
          .container { padding-left: 16px; padding-right: 16px; }
          .photo-card, .hero-copy, .blue-box, .white-box, .beige-box { border-radius: 24px; padding: 20px; }
          .photo-frame { min-height: 360px; padding: 14px; }
          h1 { font-size: 38px; }
          .photo-frame img {
  object-position: left center;
}
          .subtitle { font-size: 20px; }
          .lead { font-size: 16px; }
          .features, .worry-grid, .pillar-grid, .two-col, .plan-grid { grid-template-columns: 1fr; }
          .formula { grid-template-columns: 1fr; }
          .plus { display: none; }
          h2 { font-size: 26px; }
          .cta { padding: 42px 22px; }
        }
      `}</style>

      <div className="page">
        <header className="header">
          <div className="nav">
            <div className="brand">じろう塾</div>
            <a href={lineUrl} className="btn btn-line btn-small">LINEで無料体験を申し込む</a>
          </div>
        </header>

        <main>
          <section className="container hero">
            <div className="photo-card">
              <div className="photo-frame">
                <img src="/jiro-ai-salon.jpg" alt="英検1級講師 じろう" />
              </div>
            </div>

            <div className="hero-copy">
              <div className="pill">英語嫌い向けの英検・大学受験対策のオンライン英語塾</div>
              <h1>元英語嫌いの<br />英検1級講師による<br />マンツーマン英語塾</h1>
              <p className="subtitle">英検対策 / 大学受験</p>
              <p className="lead">英語が苦手でも大丈夫。<br />元英語嫌いの講師が合格まで伴走します。</p>

              <div className="actions">
                <a href={lineUrl} className="btn btn-line btn-main">LINEで無料体験を申し込む</a>
                <a href="#details" className="btn btn-outline">詳細を見る</a>
              </div>

              <div className="features">
                {features.map((item) => <div key={item} className="feature">{item}</div>)}
              </div>
            </div>
          </section>

          <section id="details" className="container section">
            <div className="blue-box">
              <p className="formula-title">じろう塾の合格への方程式</p>
              <div className="formula">
                <StepCard title="好奇心に基づく" strong="多読・多聴" />
                <div className="plus">+</div>
                <StepCard title="徹底的な" strong="過去問演習" />
                <div className="plus">+</div>
                <StepCard title="授業外でも" strong="質問し放題" />
                <div className="plus">=</div>
                <div className="step-card goal"><div className="strong">英検合格 / 学力向上</div></div>
              </div>
            </div>
          </section>

          <section className="container section">
            <div className="white-box">
              <div className="section-title"><div className="bar" /><h2>こんな悩みはありませんか？</h2></div>
              <div className="worry-grid">
                {worries.map((item) => <div key={item} className="worry">✔ {item}</div>)}
              </div>
              <p className="note">1つでも当てはまる方は、じろう塾が力になれます。</p>
            </div>
          </section>

          <section className="container section">
            <div className="section-title"><div className="bar" /><h2>じろう塾の3本柱</h2></div>
            <div className="pillar-grid">
              {pillars.map((item) => (
                <div key={item.title} className="pillar-card">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p className="card-body">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="container section two-col">
            <div className="white-box">
              <div className="section-title"><div className="bar" /><h2>プロフィール</h2></div>
              <h3>英検1級講師 じろう</h3>
              <div className="profile-text">
                <p>
    慶應義塾大学法学部政治学科卒。大学受験では慶應義塾大学4学部に合格。
    現在は、英語を使った仕事をしながら、じろう塾を運営しています。
               </p>
                <p>私は中学三年生まで、英語の勉強が大嫌いでした。英語はただの「つまらない教科」だと思っていたのです。</p>
                <p>しかし高校一年生のとき、ある英語の先生が授業で <strong>Steve Jobsの伝説的なスピーチ</strong> を紹介してくれました。</p>
                <p>最初に見たとき、私はその内容をほとんど理解できませんでした。周りの生徒が笑っているときも、何が面白いのかわからず、なんとなく一緒に笑っているだけでした。</p>
                <p><strong>「英語がわかったら、こういうすごい人の話が理解できるんだ」</strong> と感じたことが、最初のきっかけでした。</p>
                <p>その先生は次に <strong>TED</strong> をすすめてくれました。私はスクリプトと辞書を使いながら、自分の好奇心のおもむくままに動画を見続けました。</p>
                <p>すると気が付いたら、英語が好きになっていたのです。英語ができるということは、<strong>世界の最先端の知識やアイデアに直接触れられる</strong> ということです。</p>
                <p>今ではこの塾の運営だけでなく、AIに関するコミュニティの運営、 ハーバード大学発のスタートアップの日本進出支援など、英語を使った仕事もしています。</p>
                <p>じろう塾では、英語が苦手な人でも前に進めるように、マンツーマンで合格まで伴走します。そして、英検学習を通して、生徒一人ひとりの可能性を広げるお手伝いをしていきます。</p>
              </div>
            </div>

            <div className="beige-box">
  <div className="section-title"><div className="bar" /><h2>毎週のレッスンの進め方</h2></div>
  <p className="flow-lead">
    英検合格に向けた戦略と、英語を楽しむための好奇心ベースの学習を組み合わせて進めます。
  </p>
  <FlowBlock title="通常レッスンでやること" items={lessonFlow} />
</div>
          </section>

          <section className="container section">
            <div className="white-box">
              <div className="section-title"><div className="bar" /><h2>プラン</h2></div>
              <div className="plan-grid">
                <div className="mini-card blue-box">
  <h3>英語学習マンツーマンサポート</h3>
  <p className="plan-subtitle">英検対策・大学受験英語対応</p>

  <div className="price-options">
    <div className="price-option">
      <p className="plan-name">月2回プラン</p>
      <p className="price">22,000円<span> / 月（税込）</span></p>
      <p className="plan-desc">
        月2回のレッスンで、他塾や学校の学習と併用しながら進めたい方向け
      </p>
    </div>

    <div className="price-option">
      <p className="plan-name">月4回プラン</p>
      <p className="price">33,000円<span> / 月（税込）</span></p>
      <p className="plan-desc">
        月4回のレッスンで、英検対策や大学受験英語をしっかり進めたい方向け
      </p>
    </div>
  </div>

  <p className="plan-label">共通サポート内容</p>
  <ul>
    <li>✅ 完全オンラインマンツーマンレッスン</li>
    <li>✅ 英作文添削・英語学習の質問し放題</li>
    <li>✅ 一人ひとりに合わせた毎日の宿題を作成</li>
  </ul>
</div>
                <div className="mini-card beige-box">
                  <h3>無料体験でできること</h3>
                  <p className="mini-lead">
  英検対策と、英語を楽しむための好奇心ベースの学習を組み合わせて提案します。
</p>
                  <ul>
                    <li>✅ 現在の英語力・目標・悩みを整理</li>
                    <li>✅ 英検合格までの学習スケジュールを作成</li>
                    <li>✅ 好きなテーマに合わせて動画・洋書・記事を紹介</li>
                    <li>✅ 毎日取り組める宿題プランを設計</li>
                  </ul>
                  <div className="actions"><a href={lineUrl} className="btn btn-line btn-main">LINEで問い合わせる</a></div>
                </div>
              </div>
            </div>
          </section>

          <section className="container section">
            <div className="section-title"><div className="bar" /><h2>よくある質問</h2></div>
            <div className="faq-list">
              {faqs.map((item) => (
                <div key={item.q} className="faq">
                  <q>Q. {item.q}</q>
                  <p>A. {item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="container section">
            <div className="cta">
              <p className="eyebrow">まずは無料相談から</p>
              <h2>元英語嫌いから英検1級へ。<br />同じ悩みを持つ人の力になります。</h2>
              <p>英語が苦手でも、正しいやり方と伴走者がいれば前に進めます。無料体験や質問だけでも、気軽にLINEからご連絡ください。</p>
              <a href={lineUrl} className="btn btn-white">LINEで無料体験を申し込む</a>
            </div>
          </section>
        </main>
        <footer className="footer">
  <a href="/tokusho">特定商取引法に基づく表記</a>
</footer>
      </div>
    </>
  );
}

function StepCard({ title, strong }: { title: string; strong: string }) {
  return (
    <div className="step-card">
      <div className="small">{title}</div>
      <div className="strong">{strong}</div>
    </div>
  );
}

function FlowBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flow-block">
      <h3 className="flow-title">{title}</h3>
      <ol className="flow-list">
        {items.map((item, index) => (
          <li key={item} className="flow-item">
            <span className="num">{index + 1}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
