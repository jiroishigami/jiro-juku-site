export default function KeioEnglishPage() {
  const lineUrl = "https://lin.ee/YX9dAhd";
  const homeUrl = "/";

  const features = [
    "慶應4学部合格・英検1級講師による直接指導",
    "好奇心を刺激するカリキュラム",
    "マンツーマン指導",
    "専用学習ページで進捗管理",
  ];

  const worries = [
    "慶應を目指しているが、英語長文の点数が安定しない",
    "単語や文法は勉強しているのに、過去問になると得点につながらない",
　　"勉強が楽しくない、頑張れない",
    "何をいつまでにやればいいか分からず、学習計画が曖昧になっている",
    "大手予備校では質問しづらく、自分専用の対策がほしい",
  ];

  const pillars = [
  {
    icon: "📚",
    title: "興味ドリブン多読・多聴",
    body: "生徒一人ひとりの好きな分野に合わせて、英語の記事・動画・本を厳選。楽しみながら読む・聞く量を増やし、慶應英語に必要な英語力の土台を育てます。",
  },
  {
    icon: "📝",
    title: "徹底的な過去問演習",
    body: "ただ解くだけではなく、間違えたポイントを一緒に分析。慶應英語に必要な得点力を着実に身につけます。",
  },
  {
    icon: "💬",
    title: "LINE質問＆学習進捗サポート",
    body: "授業外でも気軽に質問OK。さらに専用学習ページで、今日の宿題、Weekly確認テスト、先生からのアドバイスを確認できるようにし、授業外の学習まで伴走します。",
  },
];

  const lessonFlow = [
    "宿題の確認テストで定着度をチェック",
    "学習の進捗・感想・つまずきを確認",
    "弱点に合わせて次週の課題を設定",
    "興味に合わせた英語コンテンツを紹介",
    "次回までの宿題プランを作成",
  ];

const appFeatures = [
  "今日やるべき宿題がひと目でわかる",
  "Weekly確認テストで「わかったつもり」を防ぐ",
  "先生からのアドバイスをいつでも見返せる",
  "学習の進捗が見えるから、継続しやすい",
];

  const faqs = [
    {
      q: "慶應のどの学部に対応していますか？",
      a: "すべての学部に対応しております。志望学部や現在の状況に合わせて、無料相談で学習方針を整理します。",
    },
    {
      q: "世界史も見てもらえますか？",
      a: "希望があれば対応可能です。共通テスト世界史満点の講師が、時代の流れ・地域ごとの整理・頻出テーマの確認をサポートします。",
    },
    {
      q: "英検対策もできますか？",
      a: "可能です。英検を中心に対策したい方は、通常のじろう塾ページもご覧ください。",
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
        .brand { font-size: 14px; font-weight: 900; letter-spacing: .04em; color: #001E62; }
        .nav-links { display: flex; align-items: center; justify-content: flex-end; gap: 10px; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; font-weight: 850; transition: opacity .2s ease, transform .2s ease; white-space: nowrap; }
        .btn:hover { opacity: .9; transform: translateY(-1px); }
        .btn-line { background: #C63527; color: #fff; box-shadow: 0 2px 8px rgba(0,0,0,.08); }
        .btn-small { padding: 9px 16px; font-size: 14px; }
        .btn-main { padding: 13px 24px; font-size: 15px; }
        .btn-outline { border: 1px solid #001E62; color: #001E62; padding: 12px 22px; font-size: 15px; }
        .container { max-width: 1120px; margin: 0 auto; padding-left: 24px; padding-right: 24px; }
        .hero { display: grid; grid-template-columns: 1.05fr 1fr; gap: 32px; padding-top: 48px; padding-bottom: 56px; align-items: stretch; }
       .photo-card {
  background: #001E62;
  border-radius: 28px;
  padding: 18px;
  box-shadow: 0 2px 10px rgba(0,0,0,.08);
}
  .learning-image-card {
  background: #001E62;
  border-radius: 28px;
  padding: 14px;
  max-width: 360px;
  margin: 0 auto;
  box-shadow: 0 2px 12px rgba(0,0,0,.08);
}

.learning-image-card img {
  width: 100%;
  display: block;
  border-radius: 18px;
}

.photo-frame {
  height: 100%;
  min-height: 430px;
  border-radius: 20px;
  padding: 0;
  display: flex;
  overflow: hidden;
}
        .photo-frame img { width: 100%; height: 100%; object-fit: cover; object-position: 35% center; border-radius: 18px; display: block; }
        .hero-copy { background: #fff; border-radius: 28px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,.05); border-top: 10px solid #001E62; }
        .pill { display: inline-block; background: #f4e2df; color: #C63527; border-radius: 999px; padding: 6px 12px; font-size: 12px; font-weight: 900; letter-spacing: .03em; margin-bottom: 18px; }
        h1 { margin: 0; font-size: clamp(36px, 5vw, 64px); line-height: 1.12; font-weight: 950; letter-spacing: -.03em; color: #001E62; }
        .subtitle { margin-top: 22px; font-size: 24px; font-weight: 900; color: #C63527; }
        .lead { margin-top: 24px; max-width: 580px; font-size: 18px; line-height: 1.9; color: rgba(0,0,0,.72); }
        .actions { margin-top: 32px; display: flex; flex-wrap: wrap; gap: 12px; }
        .features { margin-top: 32px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
        .feature { background: #f7f6f2; border-radius: 16px; padding: 14px 16px; font-size: 14px; font-weight: 850; box-shadow: 0 1px 6px rgba(0,0,0,.04); color: #001E62; }
        .section { padding-top: 40px; padding-bottom: 40px; }
        .blue-box { background: #001E62; color: #fff; border-radius: 28px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,.08); }
        .section-title { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .bar { width: 8px; height: 32px; background: #C63527; border-radius: 999px; flex: 0 0 auto; }
        h2 { margin: 0; font-size: 30px; line-height: 1.35; font-weight: 950; color: #001E62; }
        .blue-box h2, .blue-box .formula-title { color: #fff; }
        h3 { margin: 0; font-size: 20px; font-weight: 950; }
        .formula-title { text-align: center; color: #001E62; font-size: 24px; font-weight: 950; margin: 0 0 32px; }
        .formula { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 16px; align-items: center; }
        .step-card { background: #fff; border-radius: 24px; padding: 30px 20px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,.04); color: #111; }
        .step-card .small { font-size: 14px; font-weight: 850; color: rgba(0,0,0,.55); }
        .step-card .strong { margin-top: 8px; font-size: 26px; line-height: 1.15; font-weight: 950; color: #001E62; }
        .plus { font-size: 46px; font-weight: 950; text-align: center; color: #F1C400; }
        .goal { background: #f6e8dc; border: 2px solid rgba(198,53,39,.18); }
        .white-box { background: #fff; border-radius: 28px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
        .worry-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
        .worry { background: #f7f6f2; border-radius: 20px; padding: 16px 18px; font-weight: 850; line-height: 1.75; box-shadow: 0 1px 6px rgba(0,0,0,.04); }
        .note { margin-top: 22px; color: #001E62; font-weight: 900; }
        .pillar-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 24px; }
        .pillar-card { background: #fff; border-radius: 28px; padding: 28px; box-shadow: 0 2px 10px rgba(0,0,0,.05); border-top: 8px solid #001E62; }
        .pillar-card:nth-child(2) { border-top-color: #C63527; }
        .pillar-card:nth-child(3) { border-top-color: #F1C400; }
        .icon { font-size: 32px; }
        .card-body { margin-top: 14px; font-size: 15px; line-height: 1.85; color: rgba(0,0,0,.72); }
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .beige-box { background: #f6e8dc; border-radius: 28px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
        .profile-text { margin-top: 18px; display: grid; gap: 18px; font-size: 16px; line-height: 2; color: rgba(0,0,0,.76); }
        .profile-text p { margin: 0; }
        .flow-block + .flow-block { margin-top: 34px; }
        .flow-title { color: #001E62; margin-bottom: 16px; }
        .flow-lead { margin: 0 0 24px; color: rgba(0,0,0,.68); line-height: 1.9; font-size: 15px; }
        .mini-lead { margin: 12px 0 0; color: rgba(0,0,0,.68); line-height: 1.8; font-size: 15px; }
        .flow-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 16px; }
        .flow-item { display: flex; gap: 14px; align-items: flex-start; }
        .num { width: 32px; height: 32px; flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: #C63527; color: #fff; font-size: 14px; font-weight: 900; }
        .flow-item p { margin: 3px 0 0; line-height: 1.75; color: rgba(0,0,0,.72); }
        .learning-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: center; }
        .learning-list li {
  background: #f7f6f2;
  border-left: 6px solid #C63527;
  border-radius: 16px;
  padding: 15px 18px;
  font-weight: 950;
  color: #001E62;
  box-shadow: 0 1px 6px rgba(0,0,0,.04);
}
        
        .sample-screen { background: #fff; border-radius: 24px; padding: 22px; display: grid; gap: 14px; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
        .sample-badge { display: inline-block; width: fit-content; background: #f6e8dc; color: #001E62; border-radius: 999px; padding: 7px 12px; font-size: 12px; font-weight: 950; }
        .sample-task { background: #e9f0f7; border-radius: 18px; padding: 14px 16px; font-weight: 850; }
        .sample-test { background: #fff0f3; border-radius: 18px; padding: 14px 16px; font-weight: 850; }
        .sample-advice { background: #f7f6f2; border-radius: 18px; padding: 14px 16px; font-weight: 850; line-height: 1.7; }
        .plan-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .mini-card { border-radius: 24px; padding: 28px; }
        .price { margin: 16px 0 0; font-size: 32px; font-weight: 950; color: #001E62; }
        .price span { font-size: 16px; }
        .price-options { display: grid; gap: 16px; margin-top: 18px; }
        .price-option { background: rgba(255,255,255,.65); border-radius: 18px; padding: 16px 18px; }
        .plan-name { margin: 0; font-weight: 950; color: #C63527; }
        .plan-desc { margin: 8px 0 0; font-size: 14px; line-height: 1.7; color: rgba(0,0,0,.68); }
        .plan-label { margin: 20px 0 0; font-weight: 950; color: #001E62; }
        .plan-subtitle { margin: 8px 0 0; font-size: 14px; font-weight: 800; color: rgba(0,0,0,.62); }
        ul { margin: 18px 0 0; padding-left: 0; list-style: none; display: grid; gap: 12px; line-height: 1.75; }
        .faq-list { display: grid; gap: 16px; }
        .faq { background: #fff; border-radius: 22px; padding: 26px; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
        .faq q { display: block; font-size: 18px; font-weight: 950; color: #001E62; }
        .faq p { margin: 14px 0 0; line-height: 1.8; color: rgba(0,0,0,.72); }
        .cta {
  background: #001E62;
  color: #fff;
  border-radius: 32px;
  padding: 56px 36px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  border-top: 10px solid #C63527;
}
        .cta .eyebrow { margin: 0; color: rgba(255,255,255,.82); font-size: 14px; font-weight: 850; }
        .cta h2 { margin-top: 14px; font-size: clamp(30px, 5vw, 54px); color: #fff; }
        .cta p { max-width: 680px; margin: 22px auto 0; line-height: 1.9; color: rgba(255,255,255,.88); }
        .btn-white { margin-top: 32px; background: #fff; color: #001E62;; padding: 16px 28px; font-size: 16px; }
        .footer { padding: 32px 20px; text-align: center; font-size: 13px; color: rgba(0,0,0,.55); }
        .footer a { color: rgba(0,0,0,.55); text-decoration: underline; text-underline-offset: 3px; }
        .footer a:hover { color: rgba(0,0,0,.8); }
        @media (max-width: 820px) {
          .nav { padding: 14px 16px; }
          .nav-links { gap: 8px; }
          .hero { grid-template-columns: 1fr; padding: 22px 16px 34px; gap: 18px; }
          .container { padding-left: 16px; padding-right: 16px; }
          .photo-card, .hero-copy, .blue-box, .white-box, .beige-box { border-radius: 24px; padding: 20px; }
          .photo-frame { min-height: 360px; padding: 14px; }
          h1 { font-size: 38px; }
          .photo-frame img { object-position: left center; }
          .subtitle { font-size: 20px; }
          .lead { font-size: 16px; }
          .features, .worry-grid, .pillar-grid, .two-col, .plan-grid, .learning-grid { grid-template-columns: 1fr; }
          .formula { grid-template-columns: 1fr; }
          .plus { display: none; }
          h2 { font-size: 26px; }
          .cta { padding: 42px 22px; }
          .btn-small { font-size: 13px; padding: 8px 12px; }
        }
      `}</style>

      <div className="page">
        <header className="header">
          <div className="nav">
            <a href={homeUrl} className="brand">じろう塾 慶應英語コース</a>
            <div className="nav-links">
              <a href={homeUrl} className="btn btn-outline btn-small">通常ページへ</a>
              <a href={lineUrl} className="btn btn-line btn-small">LINEで無料相談</a>
            </div>
          </div>
        </header>

        <main>
          <section className="container hero">
            <div className="photo-card">
              <div className="photo-frame">
                <img src="/jiro-ai-salon.jpg" alt="慶應法学部卒・英検1級講師 じろう" />
              </div>
            </div>

            <div className="hero-copy">
              <div className="pill">慶應志望者向けオンライン個別指導</div>
              <h1>慶應志望者のための<br />英語マンツーマン対策</h1>
              <p className="subtitle">慶應英語コース</p>
              <p className="lead">
                慶應法学部卒（4学部合格）・英検1級講師が、慶應大学受験においてもっとも大切な英語学習をマンツーマンでサポートします。また、希望があれば世界史の対策も可能です。
              </p>

              <div className="actions">
                <a href={lineUrl} className="btn btn-line btn-main">LINEで無料相談する</a>
                <a href="#plans" className="btn btn-outline">料金を見る</a>
              </div>

              <div className="features">
                {features.map((item) => <div key={item} className="feature">{item}</div>)}
              </div>
            </div>
          </section>

          <section id="details" className="container section">
            <div className="blue-box">
              <p className="formula-title">慶應英語の得点力を伸ばす方程式</p>
              <div className="formula">
<StepCard title="好奇心に基づく" strong="多読・多聴" />
<div className="plus">+</div>
<StepCard title="徹底的な" strong="過去問演習" />
<div className="plus">+</div>
<StepCard title="授業外でも" strong="質問・進捗管理" />
                <div className="plus">=</div>
                <div className="step-card goal"><div className="strong">慶應英語の得点力</div></div>
              </div>
            </div>
          </section>

          <section className="container section">
            <div className="white-box">
              <div className="section-title"><div className="bar" /><h2>こんな悩みはありませんか？</h2></div>
              <div className="worry-grid">
                {worries.map((item) => <div key={item} className="worry">✔ {item}</div>)}
              </div>
              <p className="note">1つでも当てはまる方は、じろう塾の慶應英語コースでサポートできます。</p>
            </div>
          </section>

          <section className="container section">
            <div className="section-title"><div className="bar" /><h2>慶應英語コースの3本柱</h2></div>
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
              <h3>慶應法学部卒・英検1級講師 じろう</h3>
              <div className="profile-text">
                
  <p>
    大学受験では慶應義塾大学4学部に合格。
    現在は、英語を使った仕事をしながら、オンライン英語塾「じろう塾」を運営しています。
  </p>

  <p>
    慶應合格を目指すうえで、英語はとても重要です。
    多くの学部で英語の配点が高く、英語を得点源にできるかどうかが合否に大きく関わります。
  </p>

  <p>
    英語を得意にするために大切なのは、まず英語を少しでも好きになることです。
    私自身、もともとは英語が嫌いでした。だからこそ、英語が苦手な人に寄り添いながら、前に進む方法を一緒に考えることができます。
  </p>

  <p>
    慶應英語の過去問演習、興味に合わせた多読・多聴、毎週の宿題設計、専用学習ページでの進捗管理を通して、慶應合格レベルまで伴走します。
  </p>
              </div>
            </div>
            

            <div className="beige-box">
              <div className="section-title"><div className="bar" /><h2>毎週のレッスンの進め方</h2></div>
              <p className="flow-lead">
                慶應合格に向けた戦略と、英語を楽しむための好奇心ベースの学習を組み合わせて進めます。
              </p>
              <FlowBlock title="通常レッスンでやること" items={lessonFlow} />
            </div>
          </section>

          <section className="container section">
            <div className="white-box">
              <div className="section-title"><div className="bar" /><h2>専用学習ページで、毎日の学習を見える化</h2></div>
              <div className="learning-grid">
                <div>
                  <p className="flow-lead">
                    じろう塾では、生徒一人ひとりに専用の学習ページを用意しています。
                    ページ上では、「今日やる宿題」「Weekly確認テスト」「先生からのアドバイス」を確認できます。
                  </p>
                  <p className="flow-lead">
                    慶應対策では、授業時間だけでなく、授業と授業の間にどれだけ学習を積み重ねられるかが重要です。
                    専用ページで学習内容を見える化し、毎週の学習を継続しやすくします。
                  </p>
                  <ul className="learning-list">
                    {appFeatures.map((item) => <li key={item}>✅ {item}</li>)}
                  </ul>
                </div>

<div className="learning-image-card">
  <img
    src="/sample_homework.png"
    alt="じろう塾 専用学習ページのサンプル画面"
  />
</div>
              </div>
            </div>
          </section>

          <section id="plans" className="container section">
            <div className="white-box">
              <div className="section-title"><div className="bar" /><h2>コース・料金</h2></div>
              <div className="plan-grid">
                <div className="mini-card blue-box">
                  <h3>慶應英語コース</h3>
                  <p className="plan-subtitle" style={{ color: "rgba(255,255,255,.75)" }}>英語を中心に慶應対策を進めたい方向け</p>
                  <p className="price" style={{ color: "#fff" }}>33,000円<span> / 月（税込）</span></p>
                  <p className="plan-label" style={{ color: "#F1C400" }}>サポート内容</p>
                  <ul>
                    <li>✅ 月4回オンラインマンツーマンレッスン</li>
                    <li>✅ 一人ひとりに合わせた毎日の宿題を作成</li>
                    <li>✅ 専用学習ページで進捗管理</li>
                    <li>✅ 慶應合格のための学習戦略を設計</li>
                    <li>✅ 英作文添削・英語学習の質問し放題</li>
                    <li>✅ Weekly確認テスト</li>
                  </ul>
                </div>

                <div className="mini-card beige-box">
                  <h3>世界史サポートも対応可能</h3>
                  <p className="plan-subtitle">英語に加えて世界史もまとめて見てほしい方向け</p>
                  <p className="price">49,500円<span> / 月（税込）</span></p>
                  <p className="plan-label">サポート内容</p>
                  <ul>
                    <li>✅ 慶應英語コースの内容すべて</li>
                    <li>✅ 世界史の流れ・テーマ整理</li>
                    <li>✅ 英語と世界史を合わせた週間学習計画</li>
                    <li>✅ 共通テスト世界史満点の講師がサポート</li>
                    <li>✅ 世界史学習の質問し放題</li>
                  </ul>
                </div>
              </div>

              <p className="note">
                英検対策も対応可能です。英検を中心に相談したい方は、<a href={homeUrl} style={{ color: "#001E62", textDecoration: "underline", textUnderlineOffset: 4 }}>通常のじろう塾ページ</a>もご覧ください。
              </p>
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
             
<h2>慶應英語を、<br />得点源にする準備を始めましょう。</h2>
<p>
  志望学部、現在の英語力、生徒の興味があることをもとに、
  今やるべき学習を一緒に整理します。
  英語が苦手な方も、まずはLINEから気軽にご相談ください。
</p>
<a href={lineUrl} className="btn btn-white">LINEで無料相談する</a>
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
