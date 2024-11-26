import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadImage.css";

function UploadImage() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("");
  const navigate = useNavigate();

  const loadingMessages = [
    "Analyzing image...",
    "Extracting details...",
    "Enhancing resolution...",
    "Finalizing recognition...",
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setResults(null); // Reset results when a new image is uploaded
    }
  };

  const handleAnalyzeImage = () => {
    setIsLoading(true);
    setResults(null);
    let messageIndex = 0;

    // Change loading messages every 1 second
    const messageInterval = setInterval(() => {
      setLoadingMessage(loadingMessages[messageIndex]);
      messageIndex = (messageIndex + 1) % loadingMessages.length;
    }, 1000);

    // Simulate analysis process for 5 seconds
    setTimeout(() => {
      clearInterval(messageInterval);
      setIsLoading(false);
      setResults({ plate: "AB-123-CD", country: "France", type: "Standard Plate" }); // Simulated result
    }, 5000);
  };

  const handleShowResults = () => {
    navigate("/results", { state: results }); // Pass the results to the results page
  };

  return (
    <div className="upload-container">
      <h2>Upload and Recognize Image</h2>

      {!isLoading && !results && (
        <>
          <label htmlFor="file-upload" className="custom-file-label">
            Choose Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="file-upload"
            onChange={handleImageUpload}
            className="file-input-hidden"
          />
          {image && (
            <>
              <img src={image} alt="Uploaded Preview" className="uploaded-image" />
              <button onClick={handleAnalyzeImage} className="analyze-button">
                Analyze Image
              </button>
            </>
          )}
        </>
      )}

      {isLoading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p className="loading-message">{loadingMessage}</p>
        </div>
      )}

      {results && (
        <div className="results-ready-container">
          <button onClick={handleShowResults} className="results-button">
            Show Results
          </button>
        </div>
      )}
    </div>
  );
}

export default UploadImage;
