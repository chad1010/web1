import { Link, useParams } from "react-router-dom";
import { findArticle } from "../data/articles.js";

export default function ArticlePage() {
  const { id } = useParams();
  const 기사 = findArticle(id);

  if (!기사) {
    return (
      <main className="article">
        <h2>기사를 찾을 수 없습니다</h2>
        <Link className="back-link" to="/">
          ← 1면으로 돌아가기
        </Link>
      </main>
    );
  }

  // 절반 지점에 인용구를 끼워 넣어 신문 본문처럼 보이게 한다.
  const 절반 = Math.ceil(기사.본문.length / 2);

  return (
    <main className="article">
      <span className="kicker">{기사.섹션} · 인터뷰</span>
      <h2>{기사.제목}</h2>
      <p className="subtitle">{기사.부제}</p>
      <p className="byline">
        {기사.기자} · {기사.날짜}
      </p>

      {기사.본문.slice(0, 절반).map((문단, i) => (
        <p key={i} className={문단.startsWith("Q.") ? "question" : ""}>
          {문단.replace(/^Q\.\s*/, "")}
        </p>
      ))}

      {기사.인용 && <blockquote>“{기사.인용}”</blockquote>}

      {기사.본문.slice(절반).map((문단, i) => (
        <p key={i} className={문단.startsWith("Q.") ? "question" : ""}>
          {문단.replace(/^Q\.\s*/, "")}
        </p>
      ))}

      <Link className="back-link" to="/">
        ← 1면으로 돌아가기
      </Link>
    </main>
  );
}
