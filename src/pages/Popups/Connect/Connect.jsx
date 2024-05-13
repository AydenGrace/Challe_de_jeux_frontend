/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Connect.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/Buttons";
import Login from "./Login";
import Register from "./Register";

export default function Connect({ setDisplay, setUser }) {
  const [loginError, setLoginError] = useState("");
  const [aRegisterText, setARegisterText] = useState(
    "Je souhaite créer un compte"
  );
  const [isLogin, setIsLogin] = useState(true);

  function handleRegisterOrLogin() {
    setIsLogin(!isLogin);
    if (isLogin) setARegisterText("Je possède déjà un compte");
    else setARegisterText("Je souhaite créer un compte");
  }

  return (
    <div
      className={`f-center flex-column ${styles.container}`}
      onClick={() => setDisplay(false)}
    >
      <div
        className={`f-center card flex-column ${styles.card}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {isLogin ? (
          <Login setDisplay={setDisplay} setUser={setUser} />
        ) : (
          <Register setDisplay={setDisplay} />
        )}
        <a onClick={handleRegisterOrLogin}>{aRegisterText}</a>
      </div>
    </div>
  );
}
