import { Link } from "react-router-dom";
import { articles } from "../data/articles.js";

export default function Home() {
  const [머리기사] = articles;

  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="kicker">{머리기사.섹션} 인터뷰</span>
          <h2>
            <Link to={`/article/${머리기사.id}`}>{머리기사.제목.split(" — ")[0]}</Link>
          </h2>
          <p className="summary">{머리기사.요약}</p>
          <p className="byline">
            {머리기사.기자} · {머리기사.날짜}
          </p>
          <Link className="read-more" to={`/article/${머리기사.id}`}>
            인터뷰 읽기 →
          </Link>
        </div>
      </section>

      <section className="list-section">
        <div className="container">
          <p className="section-title">ALL INTERVIEWS</p>
          <div className="list">
            {articles.map((기사, i) => (
              <Link className="row" to={`/article/${기사.id}`} key={기사.id}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{기사.제목.split(" — ")[0]}</h3>
                  <p>{기사.요약}</p>
                </div>
                <span className="tag">
                  {기사.섹션}
                  {기사.샘플 ? " · 샘플" : ""}
                </span>
              </Link>
            ))}
          </div>

          <div className="recruit">
            <div>
              <strong>인터뷰이를 찾습니다</strong>
              <span>자기만의 방식으로 성장한 크리에이터라면, 팔로워 수와 상관없이 만나러 갑니다.</span>
            </div>
            <Link to="/about">인터뷰 신청하기</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
