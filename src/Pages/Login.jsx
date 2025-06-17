// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; 
// import axios from "axios";
// import "./login.css";
// import GoogleButton from "react-google-button";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../Firbaseauth/firebase";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [users, setUsers] = useState([]);

//   const navigate = useNavigate(); 

//   useEffect(() => {
//     axios
//       .get("https://portfolio-react-backend-ica2.onrender.com/users")
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const user = users.find((u) => u.email === email);

//     if (user) {
//       if (user.password === password) {
//         alert("Login Successful! ✅");
//         localStorage.setItem("user", JSON.stringify(user));
//         setError("");
//         setEmail("");
//         setPassword("");
//         navigate("/Projects");
//       } else {
//         setError("Incorrect password ❌");
//       }
//     } else {
//       const newUser = { email, password };

//       axios
//         .post("https://portfolio-react-backend-ica2.onrender.com/users", newUser)
//         .then((response) => {
//           localStorage.setItem("user", JSON.stringify(response.data));
//           alert("User Registered & Logged in ✅");
//           setUsers([...users, response.data]);
//           setError("");
//           setEmail("");
//           setPassword("");
//           navigate("/Projects");
//         })
//         .catch((error) => console.error("Error adding user:", error));
//     }
//   };

//   const handleGoogleSignIn = () => {
//     signInWithPopup(auth, provider)
//       .then((res) => {
//         console.log(res);
//         navigate("/Projects");
//       })
//       .catch((err) => {
//         console.error("Google Sign-in Error:", err);
//       });
//   };

//   return (
//     <div className="login-container">
//       {/* Waves and Fish */}
//       <div className="waves"></div>
//       <img src="/fish1-removebg-preview.png" className="fish fish-1" alt="Fish" />
//       <img src="/fish2.png" className="fish fish-2" alt="Fish" />
//       <img src="/fish3.png" className="fish fish-3" alt="Fish" />

//       {/* Login Form */}
//       <div className="login-form">
//         <h2>Login</h2>
//         {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="input-field"
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="input-field"
//               required
//             />
//           </div>
//           <button type="submit" className="submit-btn">
//             Login / Register
//           </button>
//           <h4>or</h4>
//           <GoogleButton onClick={handleGoogleSignIn} />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

