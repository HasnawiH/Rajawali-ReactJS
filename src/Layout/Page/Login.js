import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";

const Login = () => {
  const responseGoogle = response => {
    console.log(response);
  };
  return (
    <div style={{ width: "100%"}}>
      <span style={{ fontSize: 20, fontWeight: 500, display:"block", margin:"20px auto auto 40%" }}>Login with Google</span>
      <div style={{display:"block", margin:"20px auto auto 42%" }}>
      <GoogleLogin
        clientId="275008365899-8kpm2av8k3r2l6m30796t6bdabs5k1l4.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      </div>
    </div>
  );
};

export default Login;
