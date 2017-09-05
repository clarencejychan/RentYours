import React, { Component } from 'react';
import './style.scss';

class Login extends Component {

  initAuth2() {
  }

  onSignIn(googleUser) {
    console.log(googleUser);
  }

  constructor(props) {
    var auth2;
    var GoogleUser;
    var client;
    super(props);

    this.initAuth2 = this.initAuth2.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  componentWillMount() {
    //creates and loads the google api scripts
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js?onload=onLoadCallback";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    //appends a callback onto the script
    //the callback will run when the scripts finish loading
    window.onLoadCallback = function() {
      gapi.load("auth2", () => {
        gapi.auth2.init({
          client_id:"873348700485-rgtdhg8jo9d35fbhkk3a16q85tk943q4.apps.googleusercontent.com",
          scope: "profile"
        });
      });
    }.bind(this);
  }

  render() {
    return (
      <div className="login-container">
        Hehe
        <div className="g-signin2" data-onsuccess={() => this.onSignIn}></div>
        Hehe
      </div>
    );
  }
};

export default Login;
