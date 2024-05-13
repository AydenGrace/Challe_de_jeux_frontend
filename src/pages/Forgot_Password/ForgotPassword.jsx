import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";
import Button from "../../components/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { url } from "./../../url";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [feedback, setFeedback] = useState();

  const schema = yup.object({
    email: yup
      .string()
      .email()
      .required("Champs requis")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Email invalide"),
  });
  const defaultValues = {
    email: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function Submit(values) {
    try {
      const response = await fetch(`${url}/api/users/forgot_password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setFeedback(response.status);
        if (response.status === 200) reset(defaultValues);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section id="Contact" className={`f-center h-100 ${styles.page}`}>
      <div className={`card f-center flex-column ${styles.container}`}>
        <h1>Mot de passe oublié ?</h1>
        <p>
          Veuillez entrer l'adresse e-mail de votre compte afin de recevoir un
          lien de réinitialisation de mot de passe.
        </p>
        <form className="d-flex" onSubmit={handleSubmit(Submit)}>
          <input
            type="email"
            placeholder="Votre Email..."
            style={{ minWidth: "300px" }}
            {...register("email")}
            name="email"
            id="fp_email"
          />
          <Button message="Envoyer" />
        </form>
        {feedback && <p>{feedback}</p>}
      </div>
    </section>
  );
}
