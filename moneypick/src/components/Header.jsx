import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link className="logo" to="/">
          머니<span className="pick">픽</span> 뉴스
        </Link>
        <nav>
          <Link to="/">홈</Link>
          <Link to="/pick/budget-apps-2026">앱·서비스</Link>
          <Link to="/pick/first-etf-guide">투자 입문</Link>
          <Link to="/pick/side-hustle-gear">장비·환경</Link>
          <Link to="/about">소개·수익구조</Link>
        </nav>
      </div>
    </header>
  );
}
