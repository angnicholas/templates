import React, { useState } from 'react';
import LoginForm from "../components/loginform";

const LoginPage = (props) => {

  const [requestFailed, setRequestFailed] = useState(false);

  const setRequestFailedTrue = () => {
    setRequestFailed(true);
  }

  const handle_login = (e, data) => {
    //do something
    e.preventDefault();
  }

  const handle_logout = () => {
    //do something
    console.log('hello');
  }

  if (requestFailed) {
    return (
      <div className="LoginForm">
        <LoginForm handle_login={23} errorMessage={true} />
      </div>
    );
  } else {
    return (
      <div className="LoginForm">
        <LoginForm handle_login={23} />
      </div>
    );
  }
}

export default LoginPage;