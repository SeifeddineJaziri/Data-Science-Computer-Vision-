import { useState } from "react";
import "./UploadImage.css";

function UploadImage() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Image</h2>
      <input
        type="file"
        accept="image/*"
        id="file-upload"
        onChange={handleImageUpload}
        className="file-input"
      />
      {image && <img src={image} alt="Uploaded Preview" className="uploaded-image" />}
    </div>
  );
}

export default UploadImage;
