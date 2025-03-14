import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./Pages/firstPage";
import NotFound from "./Pages/notFound";
import MainPage from "./Pages/mainPage";

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
