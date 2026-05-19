export default function TokushoPage() {
  return (
    <main className="page">
      <section className="card">
        <p className="label">じろう塾</p>
        <h1>特定商取引法に基づく表記</h1>

        <table>
          <tbody>
            <tr>
              <th>事業者名</th>
              <td>じろう塾</td>
            </tr>
            <tr>
              <th>代表者名</th>
              <td>石神慈朗</td>
            </tr>
            <tr>
              <th>所在地</th>
                <td>
    〒150-0021<br />
    東京都渋谷区恵比寿西2丁目4番8号<br />
    ウィンド恵比寿ビル8F
  </td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>請求があった場合、遅滞なく開示いたします。</td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>jirojyuku@gmail.com</td>
            </tr>
            <tr>
              <th>お問い合わせ</th>
              <td>通常のご連絡は公式LINEよりお願いいたします。</td>
            </tr>
            <tr>
              <th>役務の対価</th>
              <td>各コースページに記載</td>
            </tr>
            <tr>
              <th>支払方法</th>
              <td>銀行振込</td>
            </tr>
            <tr>
              <th>支払時期</th>
              <td>お申込み確定後、個別にご案内いたします。</td>
            </tr>
            <tr>
              <th>役務提供時期</th>
              <td>お申込み確定後、個別にご案内する開始日から提供いたします。</td>
            </tr>
            <tr>
              <th>返品・キャンセル</th>
              <td>
                サービスの性質上、サービス提供開始後の返金は原則としてお受けしておりません。
                詳細はお申込み時にご案内いたします。
              </td>
            </tr>
            <tr>
              <th>試験結果について</th>
              <td>
                本サービスは合格を保証するものではありません。
                試験結果による返金には応じかねます。
              </td>
            </tr>
            <tr>
              <th>連絡受付時間</th>
              <td>平日 10:00〜18:00（公式LINEにて受付）</td>
            </tr>
          </tbody>
        </table>

        <a className="back" href="/">トップページに戻る</a>
      </section>

      <style>{`
        .page {
          min-height: 100vh;
          background: #f7f6f2;
          color: #111;
          padding: 48px 20px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .card {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          border-radius: 28px;
          padding: 36px;
          box-shadow: 0 10px 30px rgba(0,0,0,.06);
        }

        .label {
          display: inline-block;
          margin: 0 0 12px;
          padding: 6px 12px;
          border-radius: 999px;
          background: #dcecf0;
          color: #2c5a87;
          font-size: 13px;
          font-weight: 700;
        }

        h1 {
          margin: 0 0 28px;
          font-size: 30px;
          line-height: 1.4;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 15px;
          line-height: 1.8;
        }

        th, td {
          border-top: 1px solid rgba(0,0,0,.1);
          padding: 16px 12px;
          vertical-align: top;
          text-align: left;
        }

        th {
          width: 210px;
          color: rgba(0,0,0,.72);
          font-weight: 700;
          background: #f7f6f2;
        }

        td {
          color: rgba(0,0,0,.78);
        }

        .back {
          display: inline-block;
          margin-top: 28px;
          color: #2c5a87;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        @media (max-width: 640px) {
  .page {
    padding: 24px 14px;
  }

  .card {
    padding: 24px 18px;
    border-radius: 22px;
  }

  h1 {
    font-size: 26px;
    line-height: 1.45;
    margin-bottom: 24px;
  }

  table {
    font-size: 14px;
  }

  table, tbody, tr, th, td {
    display: block;
    width: 100%;
  }

  tr {
    border-top: 1px solid rgba(0,0,0,.1);
    padding: 14px 0;
  }

  th {
    border-top: none;
    background: transparent;
    padding: 0 0 6px;
    font-size: 14px;
    color: rgba(0,0,0,.6);
  }

  td {
    border-top: none;
    padding: 0;
    font-size: 15px;
    line-height: 1.8;
    color: rgba(0,0,0,.82);
  }
}
      `}</style>
    </main>
  );
}