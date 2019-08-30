import React, {useState, useEffect, useRef} from "react";
import {auth} from "firebase";
import './Login.css';

const Login = props => {
  const recaptcha = useRef(null);
  const [phone, setPhone] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [code, setCode] = useState("");

  useEffect(() => {
    auth().useDeviceLanguage();
    window.recaptchaVerifier = new auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal"
      }
    );
    window.recaptchaVerifier
      .render()
      .then(widgetId => (window.recaptchaWidgetId = widgetId));
  }, []);

  const signIn = e => {
    e.preventDefault();
    const appVerifier = window.recaptchaVerifier;
    auth()
      .signInWithPhoneNumber(phone, appVerifier)
      .then(confirmResult => {
        window.confirmationResult = confirmResult;
        setShowCodeInput(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const submitCode = e => {
    e.preventDefault();
    window.confirmationResult
      .confirm(code)
      .then(result => {
        const user = result.user;
        console.log(user);
        props.setUser(user);
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  };

  return !showCodeInput ? (
    <form onSubmit={signIn} className="login">
      <label className="label">Enter Phone number</label>
      <input
        type="text"
        className="input"
        pattern="\+[0-9\s\-\(\)]+"
        onChange={e => setPhone(e.target.value)}
        value={phone}
      />
      <div ref={recaptcha} id="recaptcha-container"></div>
      <button id="sign-in" className="submit">Sign in</button>
    </form>
  ) : (
    <form onSubmit={submitCode}>
      <input
        type="text"
        placeholder="Enter code sent to your phone number"
        onChange={e => setCode(e.target.value)}
        value={code}
      />
      <button className="submit">Submit</button>
    </form>
  );
};

export default Login;
