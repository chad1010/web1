import { Link, useParams } from "react-router-dom";
import { findPick } from "../data/picks.js";

export default function PickPage() {
  const { id } = useParams();
  const 기사 = findPick(id);

  if (!기사) {
    return (
      <main className="post">
        <h2>기사를 찾을 수 없습니다</h2>
        <Link className="back-link" to="/">
          ← 홈으로 돌아가기
        </Link>
      </main>
    );
  }

  return (
    <main className="post">
      <span className="badge">{기사.카테고리}</span>
      <h2>{기사.제목}</h2>
      <p className="meta">머니픽 뉴스 · {기사.날짜}</p>

      {기사.본문.map((문단, i) => (
        <p key={i}>{문단}</p>
      ))}

      <div className="pick-box">
        <h4>🛒 이 기사의 픽</h4>
        <ul>
          {기사.픽.map((항목) => (
            <li key={항목.이름}>
              <span>{항목.이름}</span>
              {항목.링크 === "#" ? (
                <span className="buy-btn pending">링크 준비 중</span>
              ) : (
                <a
                  className="buy-btn"
                  href={항목.링크}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                >
                  최저가 보기
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <p className="pick-note">
        위 링크는 제휴링크이며, 구매 시 머니픽 뉴스에 일정 수수료가 지급될 수 있습니다.
      </p>

      <Link className="back-link" to="/">
        ← 홈으로 돌아가기
      </Link>
    </main>
  );
}
