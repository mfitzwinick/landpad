import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import SavingsProfile from "./SavingsProfile"
import React, { useState } from "react"


function SavingsModal() {
    const [show, setShow] = useState(false);
    return (
        
        <div>
            <Button variant="primary" onClick={() => setShow(true)}>
                Update your Savings Plan
                </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        You're on the path to your dream pad!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SavingsProfile />
                </Modal.Body>
            </Modal>
        </div>
    );
}



export default SavingsModal;
