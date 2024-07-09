/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/Buttons";
import styles from "./Register.module.scss";
import { url } from "../../../url";
import { Link } from "react-router-dom";

export default function Register() {
  const [feedback, setFeedback] = useState(null);
  const [seePwd, setSeePwd] = useState(false);
  const [seeConfPwd, setSeeConfPwd] = useState(false);

  const SignInSchema = yup.object({
    username: yup.string().required("Required"),
    email: yup
      .string()
      .email()
      .required("Required")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Email invalide"),
    password: yup
      .string()
      .required("Champs requis")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{12,}$/,
        "Votre mot de passe doit contenir au moins :\n1 lettre capitale\n1 lettre minuscule\n1 chiffre\n1 caractère spécial (&@$#!%*?&)"
      ),
    confirm_password: yup
      .string()
      .required("Champs requis")
      .oneOf([yup.ref("password"), ""], "Le mot de passe doit être identique"),
    rgpd: yup.boolean().oneOf([true], "Vous devez accepter les conditions"),
  });

  const signinValues = {
    username: "",
    email: "",
    confirm_password: "",
    password: "",
    rgpd: false,
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    signinValues,
    mode: "onSubmit",
    resolver: yupResolver(SignInSchema),
  });

  async function submit(values) {
    try {
      const response = await fetch(`${url}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        const responseFeedback = await response.json();
        // console.log(responseFeedback);
        // responseFeedback.status === 200
        //   ? setFeedback({
        //       status: responseFeedback.status,
        //       message: "Nouveau compté créé",
        //     })
        //   : responseFeedback.status === 300
        //   ? setFeedback({
        //       status: responseFeedback.status,
        //       message: "Email déjà utilisé",
        //     })
        //   : setFeedback({
        //       status: response.status,
        //       message: "Une erreur est survenue",
        //     });
        setFeedback({
          status: responseFeedback.status,
          message: responseFeedback.message,
        });

        if (feedback.status === 200) {
          setDisplay(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleSeePassword() {
    setSeePwd(!seePwd);
    if (seePwd) {
      document.getElementById("password").type = "password";
    } else {
      document.getElementById("password").type = "text";
    }
  }

  function handleSeeConfPassword() {
    setSeeConfPwd(!seeConfPwd);
    if (seeConfPwd) {
      document.getElementById("confirm_password").type = "password";
    } else {
      document.getElementById("confirm_password").type = "text";
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      onClick={(e) => e.stopPropagation()}
      className={`d-flex flex-column ${styles.form} mb-10`}
    >
      <div className="d-flex justify-content-center ta-center w-100 mb-20">
        <h2>Inscription</h2>
      </div>
      <div className="d-flex flex-column mb-20">
        <label htmlFor="username">
          Nom d'utilisateur <span className="c-r">*</span>
        </label>
        <input
          {...register("username")}
          type="text"
          id="username"
          placeholder="Votre nom d'utilisateur"
          className={`d-flex w-100 mw-300`}
          required
        />
        {errors.username && <p className="c-r">{errors.username.message}</p>}
      </div>
      <div className="d-flex flex-column mb-20">
        <label htmlFor="email">
          E-mail <span className="c-r">*</span>
        </label>
        <input
          {...register("email")}
          type="email"
          id="login_email"
          placeholder="Votre mail"
          className={`d-flex w-100 mw-300`}
          required
        />
        {errors.email && <p className="c-r">{errors.email.message}</p>}
      </div>

      <div className="d-flex flex-column mb-20">
        <label htmlFor="password">
          Mot de passe <span className="c-r">*</span>
        </label>
        <div className={`f-center mw-300 ${styles.relative}`}>
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Mot de passe"
            className={`d-flex w-100`}
            required
          />
          {seePwd ? (
            <i
              className={`fa-solid fa-eye-slash c-p ${styles.pointer} p-5`}
              id="mdp_not_toggle"
              onClick={handleSeePassword}
            ></i>
          ) : (
            <i
              className={`fa-solid fa-eye c-p ${styles.pointer} p-5`}
              id="mdp_toggle"
              onClick={handleSeePassword}
            ></i>
          )}
        </div>
        {errors.password && <p className="c-r">{errors.password.message}</p>}
      </div>

      <div className="d-flex flex-column mb-20">
        <label htmlFor="confirm_password">
          Confirmez votre mot de passe <span className="c-r">*</span>
        </label>
        <div className={`f-center mw-300 ${styles.relative}`}>
          <input
            {...register("confirm_password")}
            type="password"
            id="confirm_password"
            placeholder="Mot de passe"
            className={`d-flex w-100 `}
            required
          />
          {seeConfPwd ? (
            <i
              className={`fa-solid fa-eye-slash c-p ${styles.pointer} p-5`}
              id="mdp_not_toggle"
              onClick={handleSeeConfPassword}
            ></i>
          ) : (
            <i
              className={`fa-solid fa-eye c-p ${styles.pointer} p-5`}
              id="mdp_toggle"
              onClick={handleSeeConfPassword}
            ></i>
          )}
        </div>
        {errors.confirm_password && (
          <p className="c-r">{errors.confirm_password.message}</p>
        )}
      </div>
      <div className={`d-flex w-100 mb-10`}>
        <label htmlFor="RegisterRGPD">
          <input
            className={`${styles.check}`}
            type="checkbox"
            id="RegisterRGPD"
            {...register("rgpd")}
            style={{ maxWidth: "50px" }}
            required={true}
          />
          En cochant, vous acceptez que vos données soient collectées
          conformément aux <span> </span>{" "}
          <Link to={"/rgpd"} target={"_blank"}>
            Politiques de confidentialités
          </Link>
          .<span className="c-r">*</span>
        </label>
        {errors.rgpd && <p className="c-r">{errors.rgpd.message}</p>}
      </div>
      <div className="f-center flex-column">
        <Button message="Inscription" />
        {feedback ? (
          feedback.status === 200 ? (
            <p className={`c-g`}>{feedback.message}</p>
          ) : (
            <p className={`c-r`}>{feedback.message}</p>
          )
        ) : null}
      </div>
    </form>
  );
}
