import React, { useState } from "react";
import Modal from "./Modal";
import Landing from '../components/Landing';
import Logo from "../components/Logo";


function UserLogin() {
  return (
      <div className="Login">
        {}
        <Logo />
        <Landing />
          <Modal />
      </div>
    );
  };

  export default UserLogin;


