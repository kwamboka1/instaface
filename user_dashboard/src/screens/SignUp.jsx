import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

// https://developers.google.com/identity/gsi/web/reference/js-reference

const SignUp = () => {
  const { handleGoogle, loading, error } = useFetch(
    "http://localhost:5152/signup"
  );

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        // eslint-disable-next-line no-undef
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
        // type: "standard",
        theme: "filled_blue",
        // size: "small",
        text: "signup_with",
        shape: "rectangular",
      });

      google.accounts.id.prompt()
    }
  }, [handleGoogle]);

  return (
    <>
      {/* <nav className="p-4">
        <Link to="/">Go Back</Link>
      </nav>
      <header className="text-center">
        <h1>Register to proceed to dashboard</h1><br></br>
      </header> */}
      <main className="flex justify-center flex-col items-center"
      >
        {error && <p className="text-red">{error}</p>}
        {loading ? (
          <div>Loading....</div>
        ) : (
          <div id="signUpDiv" data-text="signup_with"></div>
        )}
      </main>
      <footer></footer>
    </>
  );
};

export default SignUp;
