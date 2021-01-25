import React, { useState } from 'react'
import "../styling/Upload.css"

class Upload2 extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    state = {
        imageUrl: undefined,
        imageAlt: undefined,
    }
    handleImageUpload = () => {
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', 'gnl4dy7z');
        const options = {
            method: 'POST',
            body: formData,
        };
        return fetch('https://api.cloudinary.com/v1_1/landpad/image/upload', options)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    imageUrl: res.secure_url,
                    imageAlt: `An image of ${res.original_filename}`
                })
            })
            .catch(err => console.log(err));
    }
    openWidget = () => {
        window.cloudinary.createUploadWidget(
            {
                cloudName: 'landpad',
                uploadPreset: 'gnl4dy7z',
            },
            (error, { event, info }) => {
                if (event === 'success') {
                    this.setState({
                        imageUrl: info.secure_url,
                        imageAlt: `An image of ${info.original_filename}`
                    }, () => {
                        // console.log(this.state.imageUrl)
                        this.props.handleImage(this.state.imageUrl)
                    })
                }
            },
        ).open();
    };
    render() {
        const { imageUrl, imageAlt } = this.state;
        return (
            // <main className="App">
            //     <section className="left-side">
            //         <form>
            //             <div className="form-group">
            //                 <input type="file" />
            //             </div>
            //             <button type="button" className="btn" onClick={this.handleImageUpload}>Submit</button>
            <button type="button" className="btn widget-btn" onClick={this.openWidget}>Upload Via Widget</button>
            //     </form>
            // </section>
            // <section className="right-side">
            //     <p>The resulting image will be displayed here</p>
            //     {imageUrl && (
            //         <img src={imageUrl} alt={imageAlt} className="displayed-image" />
            //     )}
            // </section>
            // </main>
        );
    }
}

export default Upload2;
