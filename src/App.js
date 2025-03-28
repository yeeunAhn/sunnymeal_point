import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { PointsPage } from "./PointsPage";
import { AdminPage } from "./AdminPage"; // 추가된 관리자 페이지

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/points/:phone" element={<PointsPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
