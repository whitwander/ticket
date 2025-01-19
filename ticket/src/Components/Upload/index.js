import './Upload.css'

export default function Upload() {
    return (
        <div className="container">
            <div class="upload-container">
                <h3>Upload Avatar</h3>
                <div id="dropZone" class="drop-zone">
                    <img src="images/icon-upload.svg" alt="Upload Icon" class="upload-icon" />
                    <p>Drag and drop or click to upload</p>
                    <input type="file" id="fileInput" accept="image/png, image/jpeg" />
                </div>
                <p class="note"><img className="info" src="images/icon-info.svg" alt="info" /> Upload your photo (JPG or PNG, max size: 500KB).</p>
            </div>
        </div>
    )
}