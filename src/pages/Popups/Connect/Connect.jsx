/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Connect.module.scss";
import Login from "./Login";
import Register from "./Register";

export default function Connect({ setDisplay }) {
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
      onMouseDown={() => setDisplay(false)}
    >
      <div
        className={`f-center card flex-column ${styles.card}`}
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {isLogin ? (
          <Login setDisplay={setDisplay} />
        ) : (
          <Register setDisplay={setDisplay} />
        )}
        <a onClick={handleRegisterOrLogin}>{aRegisterText}</a>
      </div>
    </div>
  );
}
