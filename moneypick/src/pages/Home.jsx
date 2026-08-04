import { Link } from "react-router-dom";
import { picks } from "../data/picks.js";

export default function Home() {
  const [대표기사, ...나머지] = picks;

  return (
    <main>
      <section className="hero">
        <span className="badge">오늘의 픽</span>
        <h2>
          <Link to={`/pick/${대표기사.id}`}>{대표기사.제목}</Link>
        </h2>
        <p>{대표기사.요약}</p>
      </section>

      <div className="grid">
        {나머지.map((기사) => (
          <article className="pick-card" key={기사.id}>
            <span className="category">{기사.카테고리}</span>
            <h3>
              <Link to={`/pick/${기사.id}`}>{기사.제목}</Link>
            </h3>
            <p>{기사.요약}</p>
            <p className="date">{기사.날짜}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
