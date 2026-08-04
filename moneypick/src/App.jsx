import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Disclosure from "./components/Disclosure.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import PickPage from "./pages/PickPage.jsx";
import About from "./pages/About.jsx";

// GitHub Pages 같은 정적 호스팅에서도 새로고침이 깨지지 않도록 HashRouter를 쓴다.
export default function App() {
  return (
    <HashRouter>
      <Header />
      <div className="wrap">
        <Disclosure />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pick/:id" element={<PickPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
