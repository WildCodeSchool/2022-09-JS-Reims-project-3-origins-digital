import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState("password");
  return (
    <div className="wrapper">
      <Link to="/" className="Logo_content">
        <img
          src="./src/assets/OriginsLogo.png"
          alt="OriginsLogo"
          className="logo_origins"
        />
      </Link>
      <img
        src="./src/assets/login_image.png"
        alt="user"
        className="logo_connect"
      />
      <div>
        <input
          type="text"
          className="username"
          name="username"
          placeholder="Pseudo"
        />
      </div>
      <div className="password_box">
        {showPassword === "password" ? (
          <AiFillEye
            className="icon"
            onClick={() => {
              setShowPassword("text");
            }}
          />
        ) : (
          <AiFillEyeInvisible
            className="icon"
            onClick={() => {
              setShowPassword("password");
            }}
          />
        )}
        <input
          type={showPassword}
          className="password"
          name="password"
          minLength="8"
          required
          placeholder="Mot de passe"
        />
      </div>

      <input type="submit" value="Connexion" className="sign_in" />
      <Link to="/register">
        <p>Créer un compte</p>
      </Link>
    </div>
  );
}
