/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/Buttons";
import styles from "./Login.module.scss";

export default function Login() {
  const [loginError, setLoginError] = useState("");

  const LoginSchema = yup.object({
    email: yup.string().email().required("Champs requis"),
    password: yup.string().required("Champs requis"),
  });

  const loginValues = {
    email: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    loginValues,
    mode: "onSubmit",
    resolver: yupResolver(LoginSchema),
  });

  function submit(values) {
    reset(loginValues);
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      onClick={(e) => e.stopPropagation()}
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
  );
}
