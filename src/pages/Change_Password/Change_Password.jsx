import React, { useEffect, useState } from "react";
import styles from "./Change_Password.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { url } from "./../../url";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons";
import { redirect, useParams } from "react-router-dom/dist";

export default function Change_Password() {
  const { token } = useParams();
  const [feedback, setFeedback] = useState(null);
  const [seePwd, setSeePwd] = useState(false);
  const [seeConfPwd, setSeeConfPwd] = useState(false);
  const [decodeToken, setDecodeToken] = useState();

  useEffect(() => {
    setDecodeToken(token.replaceAll(/\,/g, "."));
  }, []);

  const ChangeSchema = yup.object({
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
  });

  const ChangeValues = {
    confirm_password: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    ChangeValues,
    mode: "onChange",
    resolver: yupResolver(ChangeSchema),
  });

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

  async function Submit(values) {
    try {
      values = {
        ...values,
        token: decodeToken,
      };
      const response = await fetch(`${url}/api/users/change_password`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        const responseFeedback = await response.json();
        console.log(responseFeedback);
        setFeedback({
          status: responseFeedback.status,
          message: responseFeedback.message,
        });

        if (feedback.status === 200) {
          redirect("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section id="ChangePassword" className={`f-center h-100 ${styles.page}`}>
      <div className={`card f-center flex-column ${styles.container}`}>
        <h1>Modification de votre mot de passe</h1>
        <form className="d-flex" onSubmit={handleSubmit(Submit)}>
          <div className="d-flex flex-column mb-20">
            <label htmlFor="password">
              Nouveau mot de passe <span className="c-r">*</span>
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
            {errors.password && (
              <p className="c-r">{errors.password.message}</p>
            )}
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
          <Button message="Envoyer" />
        </form>
        {feedback && <p>{feedback.message}</p>}
      </div>
    </section>
  );
}
