import React, { useState } from "react";
import Modal from "./Modal";
import Landing from '../components/Landing';
import LogoIcon from "../components/LogoC2v2B";


function UserLogin() {
  return (
      <div className="Login">
        {}
        <LogoIcon />
        <Landing />
          <Modal />
      </div>
    );
  };

  export default UserLogin;


