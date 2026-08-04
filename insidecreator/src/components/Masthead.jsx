import { Link } from "react-router-dom";

const 오늘 = new Date().toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
});

export default function Masthead() {
  return (
    <header>
      <div className="masthead">
        <div className="dateline">
          <span>{오늘}</span>
          <span>창간 준비호</span>
        </div>
        <h1>
          <Link to="/">인사이드 크리에이터</Link>
        </h1>
        <p className="slogan">크리에이터의 속(인사이드) 이야기를 꺼내는 인터뷰 전문 매체</p>
      </div>
      <nav className="navbar">
        <Link to="/">홈</Link>
        <Link to="/article/threads-moneylog">스레드</Link>
        <Link to="/article/reels-editor-500">숏폼</Link>
        <Link to="/article/first-launch-100m">수익화</Link>
        <Link to="/about">소개</Link>
      </nav>
    </header>
  );
}
