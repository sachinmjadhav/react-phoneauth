import React from "react";
import {auth} from "firebase";

const Home = props => {
  const signOut = () => {
    auth()
      .signOut()
      .then(success => {
        console.log("You have successfully logged out!");
        props.setUser(null);
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <h2>You are Logged in</h2>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Home;
