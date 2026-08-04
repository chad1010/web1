import { Link } from "react-router-dom";

export default function Masthead() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link className="logo" to="/">
          <span className="mark">인사이드 크리에이터</span>
          <span className="en">INSIDE CREATOR</span>
        </Link>
        <nav className="gnb">
          <Link to="/">홈</Link>
          <Link to="/article/threads-moneylog">스레드</Link>
          <Link to="/article/reels-editor-500">숏폼</Link>
          <Link to="/article/first-launch-100m">수익화</Link>
          <Link to="/about">소개</Link>
        </nav>
      </div>
    </header>
  );
}
