import "./App.css";
import ResultsDisplay from "./components/ResultsDisplay";
import UploadImage from "./components/UploadImage";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Car Matricule Recognition</h1>
        <p>Upload an image to recognize car license plates.</p>
      </header>
      <main className="app-main">
        <UploadImage />
        <ResultsDisplay />
      </main>
    </div>
  );
}

export default App;
