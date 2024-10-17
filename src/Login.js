import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase"; // Import the initialized auth instance
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,} from "firebase/auth"; // Firebase functions
import './Login.css';

function Login() {
  // Define state for email and password
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission for sign-in
  const signIn = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    signInWithEmailAndPassword(auth, email, password) // Pass email and password separately
      .then((auth) => {
        // Redirect to homepage after successful sign-in
        navigate("/");
      })
      .catch((error) => alert(error.message)); // Handle errors
  };

  // Function to handle registration
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registration successful
        navigate("/"); // Redirect to homepage after successful registration
      })
      .catch((error) => {
        alert(error.message); // Handle errors
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

// import { Link, useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import "./Login.css";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import {signInWithEmailAndPassword} from "firebase/auth";

// function Login() {
//   // Define state for email and password
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Function to handle form submission for sign-in
//   const signIn = (e) => {
//     e.preventDefault(); // Prevent page reload on form submit
//     const auth = getAuth(); // Get Firebase auth instance
//     signInWithEmailAndPassword(auth, email, password) // Pass email and password separately
//       .then((auth) => {
//         // Redirect to homepage after successful sign-in
//         navigate("/");
//       })
//       .catch((error) => alert(error.message)); // Handle errors
//   };

//   // Function to handle registration
//   const register = () => {
//     const auth = getAuth(); // Get Firebase auth instance
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Registration successful
//         navigate("/"); // Redirect to homepage after successful registration
//       })
//       .catch((error) => {
//         alert(error.message); // Handle errors
//       });
//   };

//   return (
//     <div className="login">
//       <Link to="/">
//         <img
//           className="login_logo"
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//           alt="Amazon Logo"
//         />
//       </Link>
//       <div className="login_container">
//         <h1>Sign-in</h1>

//         <form>
//           <h5>E-mail</h5>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <h5>Password</h5>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             type="submit"
//             onClick={signIn}
//             className="login__signInButton"
//           >
//             Sign In
//           </button>
//         </form>

//         <p>
//           By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
//           Sale. Please see our Privacy Notice, our Cookies Notice and our
//           Interest-Based Ads Notice.
//         </p>

//         {/* Fix: Pass register function correctly */}
//         <button onClick={register} className="login__registerButton">
//           Create your Amazon Account
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;

// function Login() {
//   // Define state for email and password
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Function to handle form submission
//   const signIn = (e) => {
//     e.preventDefault();
//     auth
//       .signInWithEmailAndPassword(email.password)
//       .then((auth) => {
//         navigate.push("/");
//       })
//       .catch((error) => alert(error.message));
//   };

//   const register = (email, password) => {
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Handle successful registration
//       })
//       .catch((error) => {
//         // Handle errors
//       });
//   };

//   return (
//     <div className="login">
//       <Link to="/">
//         <img
//           className="login_logo"
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//         />
//       </Link>
//       <div className="login_container">
//         <h1>Sign-in</h1>

//         <form>
//           <h5>E-mail</h5>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <h5>Password</h5>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             type="submit"
//             onClick={signIn}
//             className="login__signInButton"
//           >
//             Sign In
//           </button>
//         </form>

//         <p>
//           By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
//           Sale. Please see our Privacy Notice, our Cookies Notice and our
//           Interest-Based Ads Notice.
//         </p>

//         <button onClick={register} className="login__registerButton">
//           {" "}
//           Create your Amazon Account
//         </button>
//       </div>
//     </div>
//   );
// }
