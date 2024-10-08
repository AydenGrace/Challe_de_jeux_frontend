/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/Buttons";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import toast from "react-hot-toast";

export default function Login({ setDisplay }) {
  const { setConnectedUser } = useContext(UserContext);
  const [feedback, setFeedback] = useState(null);
  const [seePwd, setSeePwd] = useState(false);

  // useDocumentTitle("Connexion");

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

  async function submit(values) {
    // console.log(values);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      // if (response.ok) {

      const responseFeedback = await response.json();
      // console.log("Response from Login");
      // console.log(responseFeedback);

      switch (responseFeedback.status) {
        case 200:
          setFeedback({
            status: responseFeedback.status,
            message: `Bienvenue ${responseFeedback.user.username}`,
          });
          localStorage.setItem("user", JSON.stringify(responseFeedback));
          setConnectedUser(responseFeedback.user);
          setDisplay(false);
          toast.success(`Bienvenue ${responseFeedback.user.username}!`);
          break;
        default:
          setFeedback({
            status: responseFeedback.status,
            message: responseFeedback.message,
          });
          toast.error(`${responseFeedback.message} !`);
          break;
      }
      //   }
    } catch (error) {
      console.error(error);
    }
  }

  function handleSeePassword() {
    setSeePwd(!seePwd);
    if (seePwd) {
      document.getElementById("login_password").type = "password";
    } else {
      document.getElementById("login_password").type = "text";
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      className={`d-flex flex-column ${styles.form} mb-10`}
    >
      <div className="d-flex justify-content-center ta-center w-100 mb-20">
        <h2>Connexion</h2>
      </div>
      <div className="d-flex flex-column mb-20">
        <label htmlFor="login_email">E-mail</label>
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
        <label htmlFor="login_password">Mot de passe</label>
        <div className={`f-center ${styles.relative}`}>
          <input
            {...register("password")}
            type="password"
            id="login_password"
            placeholder="Mot de passe"
            className={`d-flex w-100 mw-300`}
            required
          ></input>
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

        <div className={`${styles.forgot}`}>
          <Link
            to={"/forgot_Password"}
            target={"_blank"}
            onClick={() => setDisplay(false)}
          >
            Mot de passe oublié
          </Link>
        </div>
      </div>

      <div className="f-center flex-column">
        <Button message="Connexion" />
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
