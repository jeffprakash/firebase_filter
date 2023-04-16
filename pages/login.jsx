/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Loader from "../components/loader/Loader";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const Login = dynamic(() => import("../components/auth/Login"), {
  ssr: false,
});


const login = () => {

    return <Login />;
  
}
export default login;
