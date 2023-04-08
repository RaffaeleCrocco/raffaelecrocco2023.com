import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import University from "./pages/University";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universita" element={<University />} />
          <Route path="/thanks" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
