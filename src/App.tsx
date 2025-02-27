import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FirstPage from "./Pages/IntroPage/FirstPage"
import MainPage from "./Pages/AppPage/MainPageList/MainPage";
import NotFound from "./Pages/NotFound";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}