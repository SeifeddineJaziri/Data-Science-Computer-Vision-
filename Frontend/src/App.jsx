import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadImage from "./components/UploadImage";
import ResultsPage from "./components/ResultsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadImage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
