
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import UserProfile from "./UserProfile";
import React, { useState } from "react"


function ProfileModal() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button style={{ backgroundColor: "black" }} variant="primary" onClick={() => setShow(true)}>
                Create User Profile
                </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        WELCOME TO LAND PAD!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserProfile />
                </Modal.Body>
            </Modal>
        </>
    );
}


export default ProfileModal;
