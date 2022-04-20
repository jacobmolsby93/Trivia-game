import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/Details";
import Game from "./pages/Game";
import HighScore from "./pages/HighScore";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<AddUser />} />
          <Route path="/play/:id" element={<Game />} />
          <Route path="/score/:id" element={<HighScore />} />
        </Routes>
    </Router>
  );
}
