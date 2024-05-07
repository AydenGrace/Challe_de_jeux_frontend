/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Connect.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/Buttons";
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
  // const SignInSchema = yup.object({
  //   username: yup.string().required("Required"),
  //   email: yup
  //     .string()
  //     .email()
  //     .required("Required")
  //     .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Email invalide"),
  //   password: yup
  //     .string()
  //     .required("Champs requis")
  //     .matches(
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{12,}$/,
  //       "Votre mot de passe doit contenir au moins :\n1 lettre capitale\n1 lettre minuscule\n1 chiffre\n1 caractère spécial (&@$#!%*?&)"
  //     ),
  //   confirm_password: yup
  //     .string()
  //     .required("Champs requis")
  //     .oneOf([yup.ref("password"), ""], "Le mot de passe doit être identique"),
  //   rgpd: yup.boolean().oneOf([true], "Vous devez accepter les conditions"),
  // });

  // const signinValues = {
  // username: "",
  // email: "",
  // confirm_password: "",
  // password: "",
  // rgpd: false,

  // };

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
        {isLogin ? <Login /> : <Register />}
        <a onClick={handleRegisterOrLogin}>{aRegisterText}</a>
      </div>
    </div>
  );
}
