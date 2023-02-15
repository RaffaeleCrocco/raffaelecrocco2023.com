import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import University from "./pages/University";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universita" element={<University />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
