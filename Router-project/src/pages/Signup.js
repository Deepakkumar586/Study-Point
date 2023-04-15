import React from "react";
import Template from "../Component/Template";
import signupImg from "../assets/signup.png"

function Signup({ setIsLoggedIn }) {
  return (
    <Template
      title="join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today,tomorrow,and beyond"
      desc2="Education to future-proof your carrer"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}

    />
  );
}

export default Signup;
