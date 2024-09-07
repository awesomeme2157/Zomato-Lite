import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import RestoDetail from "./pages/RestoDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/api/:Id" element={<RestoDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
