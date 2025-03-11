import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./Pages/IntroPage/FirstPage";
import NotFound from "./Pages/NotFound";
import MainPage from "./Pages/AppPage/MainPageList/MainPage";

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
