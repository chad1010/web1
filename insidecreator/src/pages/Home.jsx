import { Link } from "react-router-dom";
import { articles } from "../data/articles.js";

export default function Home() {
  const [머리기사, ...나머지] = articles;

  return (
    <main className="front">
      <section>
        <div className="lead">
          <span className="kicker">{머리기사.섹션} · 단독 인터뷰</span>
          <h2>
            <Link to={`/article/${머리기사.id}`}>{머리기사.제목}</Link>
          </h2>
          <p className="summary">{머리기사.요약}</p>
          <p className="byline">
            {머리기사.기자} · {머리기사.날짜}
          </p>
        </div>

        <div className="card-list">
          {나머지.map((기사) => (
            <article className="card" key={기사.id}>
              <span className="kicker">{기사.섹션}</span>
              <h3>
                <Link to={`/article/${기사.id}`}>{기사.제목}</Link>
              </h3>
              <p>{기사.요약}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="sidebar">
        <h4>많이 본 인터뷰</h4>
        <ol>
          {articles.map((기사) => (
            <li key={기사.id}>
              <Link to={`/article/${기사.id}`}>{기사.제목.split(" — ")[0]}</Link>
            </li>
          ))}
        </ol>
        <div className="house-ad">
          <strong>인터뷰이를 찾습니다</strong>
          자기만의 방식으로 성장한 크리에이터라면
          <br />
          팔로워 수와 상관없이 만나러 갑니다.
          <br />
          <Link to="/about">인터뷰 신청하기 →</Link>
        </div>
      </aside>
    </main>
  );
}
