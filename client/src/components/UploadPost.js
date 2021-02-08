import React from 'react'
import "../styling/Upload.css"

class UploadPost extends React.Component {
    constructor(props) {
        super(props)
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
                        this.props.handleImage(this.state.imageUrl)
                    })
                }
            },
        ).open();
    };
    render() {
        const { imageUrl, imageAlt } = this.state;
        return (
            <>
            <button type="button" className="btn widget-btn" onClick={this.openWidget}>Upload Via Widget</button>

            {/* <form {...this.props.onSubmit} className="form">
                <input onChange={this.handleInputChange} value={this.state.image} type="file" name="image"
                {...this.props.onChange} {...this.props.value} id="post-image-upload" className="form-input" /> */}
                    {/* {{...this.props.src} && (
                    <img {...this.props.src} alt="chosen"></img>
                         )} 
            </form> */}
            </>
        );
    }
}

export default UploadPost;
