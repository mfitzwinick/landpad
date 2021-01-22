import React, { useState } from 'react'
import "../styling/Upload.css"

export default function Upload() {
    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState()
    const [selectedFile, setSelectedFile] = useState('')
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = newFileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }


    }
    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!previewSource) return;
        uploadImage(previewSource)

    }
    const uploadImage = (base64EncodedImage) => {
        console.log(base64EncodedImage);
        try {
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-type': 'application/json' }
            })


        } catch (error) {
            console.error(error);

        }
    }
    return (
        <div>
            <h1>UPLOAD</h1>
            <form onSubmit={handleSubmitFile} className="form">
                <input type="file" name="image"
                    onChange={handleFileInputChange} value={fileInputState} className="form-input" />
                <button className="btn" type="submit">Submit</button>

            </form>
            {previewSource && (
                <img src={previewSource} alt="chosen"
                    style={{ height: '300px' }} />
            )}



        </div>

    )
}
