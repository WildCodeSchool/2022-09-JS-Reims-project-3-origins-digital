import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterAndProfile.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState("password");
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {
    const dataPost = {
      firstname: firstNameRef.current.value,
      lastname: lastNameRef.current.value,
      username: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPost),
    }).then((res) => {
      console.warn(res);
      navigate("/login");
    });
  };

  return (
    <div className="register">
      <img
        src="./src/assets/OriginsLogo.png"
        alt="OriginsLogo"
        className="logo_origins"
      />
      <form
        className="form_register"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Prénom"
          className="firstname"
          ref={firstNameRef}
        />
        <input
          type="text"
          placeholder="Nom"
          className="lastname"
          ref={lastNameRef}
        />
        <input
          type="text"
          placeholder="Pseudo"
          className="username_register"
          ref={userNameRef}
        />
        <input
          type="email"
          placeholder="Email"
          className="email"
          ref={emailRef}
        />
        <div className="password_box_register">
          {showPassword === "password" ? (
            <AiFillEye
              className="icon_register"
              onClick={() => {
                setShowPassword("text");
              }}
            />
          ) : (
            <AiFillEyeInvisible
              className="icon_register"
              onClick={() => {
                setShowPassword("password");
              }}
            />
          )}

          <input
            type={showPassword}
            name="password"
            minLength="8"
            required
            placeholder="Mot de passe"
            className="password_register"
            ref={passwordRef}
          />
        </div>
        <input type="submit" value="S'enregistrer" className="register_btn" />
      </form>
    </div>
  );
}
