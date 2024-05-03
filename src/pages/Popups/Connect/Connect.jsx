/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Connect.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/Buttons";

export default function Connect({ setDisplay }) {
  const [loginError, setLoginError] = useState("");
  const [aRegisterText, setARegisterText] = useState(
    "Je souhaite créer un compte"
  );

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

  const LoginSchema = yup.object({
    email: yup.string().email().required("Champs requis"),
    password: yup.string().required("Champs requis"),
  });

  const loginValues = {
    email: "",
    password: "",
  };

  // const signinValues = {
  // username: "",
  // email: "",
  // confirm_password: "",
  // password: "",
  // rgpd: false,

  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    loginValues,
    mode: "onSubmit",
    resolver: yupResolver(LoginSchema),
  });

  function submit(values) {}

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
        <form
          onSubmit={handleSubmit(submit)}
          className={`d-flex flex-column ${styles.form} mb-10`}
        >
          <div className="d-flex justify-content-center ta-center w-100 mb-20">
            <h2>Connexion</h2>
          </div>
          <div className="d-flex flex-column mb-20">
            <label htmlFor="email">E-mail</label>
            <input
              {...register("email")}
              type="email"
              id="login_email"
              placeholder="Votre mail"
              className={`d-flex w-100 mw-300`}
              required
            />
          </div>

          <div className="d-flex flex-column mb-20">
            <label htmlFor="password">Mot de passe</label>
            <input
              {...register("password")}
              type="password"
              id="login_password"
              placeholder="Mot de passe"
              className={`d-flex w-100 mw-300`}
              required
            />
            <div className={`${styles.forgot}`}>
              <a href="#">Mot de passe oublié</a>
            </div>
          </div>

          <div className="f-center flex-column">
            <Button message="Connexion" />
            {loginError && <p className="text-error">{loginError}</p>}
          </div>
        </form>
        <a href="#">{aRegisterText}</a>
      </div>
    </div>
  );
}
