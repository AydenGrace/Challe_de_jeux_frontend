import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";
import Button from "../../components/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigation } from "react-router-dom";
import Loading from "../../components/Loader/V2/Loading";
import toast from "react-hot-toast";
import useDocumentTitle from "../../components/UseDocumentTitle/UseDocumentTitle";

export default function ForgotPassword() {
  const { state } = useNavigation();
  const [feedback, setFeedback] = useState();
  useDocumentTitle("Mot de passe oublié");

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
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL}/api/users/forgot_password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      setFeedback(await response.json());
    } catch (error) {
      console.error(error);
    }
  }

  return state !== "idle" ? (
    <div className=" f-center mh-100">
      <Loading />
    </div>
  ) : (
    <section id="ForgotPassword" className={`f-center h-100 ${styles.page}`}>
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
        {feedback && <p>{feedback.message}</p>}
      </div>
    </section>
  );
}
