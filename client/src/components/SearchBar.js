import React from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import "../styling/SearchBar.css";

function SearchBar(){
    return (
        <div>
            <Form inline className="search-form">
                <FormControl type="text" placeholder="Search" className="search mr-sm-2" />
                <Button className="search-btn" type="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default SearchBar;