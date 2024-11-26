import { useLocation } from "react-router-dom";
import { FaCar, FaFlag, FaTag } from "react-icons/fa"; // Icons for plate, country, and type
import "./ResultsPage.css";

function ResultsPage() {
  const location = useLocation();
  const { plate, country, type } = location.state || {}; // Get the passed state

  return (
    <div className="results-page">
      <h2>License Plate Details</h2>
      <div className="details-box">
        <p>
          <FaCar className="icon" />
          <strong>Plate:</strong> {plate || "N/A"}
        </p>
        <p>
          <FaFlag className="icon" />
          <strong>Country:</strong> {country || "N/A"}
        </p>
        <p>
          <FaTag className="icon" />
          <strong>Type:</strong> {type || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default ResultsPage;
