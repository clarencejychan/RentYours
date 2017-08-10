import React, { Component } from 'react';
import './style.scss';

class Login extends Component {

  constructor(props) {
    var GoogleAuth;
    var GoogleUser;
    var UserProfile;
    super(props);

    this.render = this.render.bind(this);
    this.isSignedIn = this.isSignedIn.bind(this);
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
      this.GoogleAuth = gapi.auth2.getAuthInstance();

      if(this.GoogleAuth.isSignedIn){
        this.isSignedIn();
      }

      //else

    }.bind(this);
  }

  isSignedIn() {
    console.log("User is already signed in. Redirect to home page.");
    this.GoogleUser = this.GoogleAuth.currentUser.get();
    this.UserProfile = gapi.auth2.BasicProfile;
    console.log(this.UserProfile);
    console.log(this.UserProfile.getGivenName());
    //trying to store the profile of the current GoogleUser into UserProfile
    //attempting to retrieve the name from the UserProfile
  }

  render(event) {
    return (
      <div className="login-container">
        Hehe
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
        Hehe
      </div>
    );
  }
};

export default Login;
