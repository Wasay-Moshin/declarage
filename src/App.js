import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import Home from "./Pages/Home";
import Signupform from "./Components/Elements/Signupform";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import db from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 1) {
      createUserWithEmailAndPassword(authentication, email, password).then(
        (res) => {
          navigate("/home");
          toast.info("Sign Up successfully");
          sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
          setDoc(doc(db, "users", res.user.uid), {
            name: name,
            address: address,
            contact: contact,
            email: email,
            password: password,
          });
        }
      );
    }
  };
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <Signupform
              setName={setName}
              setAddress={setAddress}
              setContact={setContact}
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />
          }
        />
        <Route path="/home" element={<Home name={name} />} />
      </Routes>
    </>
  );
}

export default App;
