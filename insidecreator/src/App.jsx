import { HashRouter, Routes, Route } from "react-router-dom";
import Masthead from "./components/Masthead.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import About from "./pages/About.jsx";

// GitHub Pages 같은 정적 호스팅에서도 새로고침이 깨지지 않도록 HashRouter를 쓴다.
export default function App() {
  return (
    <HashRouter>
      <Masthead />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
