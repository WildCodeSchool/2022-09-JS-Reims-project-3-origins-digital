import { useContext, useEffect, useRef, useState } from "react";
import "./RegisterAndProfile.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import NavBar from "./NavBar";
import { AuthContext } from "../contexts/ContextAuth";

export default function Profile() {
  const { auth } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState("password");
  const [update, setUpdate] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  useEffect(() => {
    fetch(`http://localhost:5000/users/${auth.id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${auth.token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        firstNameRef.current.value = data.firstname;
        lastNameRef.current.value = data.lastname;
        userNameRef.current.value = data.username;
        emailRef.current.value = data.email;
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  const handleSubmit = () => {
    const dataPost = {
      firstname: firstNameRef.current.value,
      lastname: lastNameRef.current.value,
      username: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    fetch(`http://localhost:5000/users/${auth.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(dataPost),
    })
      .then((res) => {
        setUpdate(true);
        console.warn(res);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <>
      <NavBar />
      <div className="register">
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
          <div className="password_box_register">
            {showConfirmPassword === "password" ? (
              <AiFillEye
                className="icon_register"
                onClick={() => {
                  setShowConfirmPassword("text");
                }}
              />
            ) : (
              <AiFillEyeInvisible
                className="icon_register"
                onClick={() => {
                  setShowConfirmPassword("password");
                }}
              />
            )}

            <input
              type={showConfirmPassword}
              name="password"
              minLength="8"
              required
              placeholder="confirmer le mot de passe"
              className="password_register"
            />
          </div>
          {update && <p className="modification_p">Modification effectuée</p>}
          <input type="submit" value="Modifier" className="register_btn" />
        </form>
      </div>
    </>
  );
}
