import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 폰트를 빌드에 내장한다(셀프호스팅) — CDN이 막힌 환경에서도 항상 같은 서체가 나온다.
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css'
import '@fontsource/noto-serif-kr/600.css'
import '@fontsource/noto-serif-kr/900.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
