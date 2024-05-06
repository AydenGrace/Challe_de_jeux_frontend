/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./ContactCard.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Buttons";
import { url } from "./../url";
import { Link } from "react-router-dom";

export default function ContactCard({ isTitle = false }) {
  const [feedback, setFeedback] = useState();
  const schema = yup.object({
    name: yup.string().required("Champs requis"),
    email: yup
      .string()
      .email()
      .required("Champs requis")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Email invalide"),
    subject: yup.string().required("Champs requis"),
    content: yup.string().required("Champs requis"),
    rgpd: yup.boolean().required("Champs requis"),
  });
  const defaultValues = {
    name: "",
    email: "",
    subject: "",
    content: "",
    rgpd: false,
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

  async function submit(values) {
    console.log(values);
    try {
      const response = await fetch(`${url}/api/contact/send`, {
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

  function handleResetFeedback() {
    setFeedback(null);
  }

  return (
    <div className={`card f-center flex-column ${styles.container}`}>
      {isTitle ? <h1>Contact</h1> : <h2>Contact</h2>}
      <form
        onSubmit={handleSubmit(submit)}
        className={`f-center flex-column gap-10`}
      >
        <div className={`d-flex gap-10`}>
          <input
            className={`${styles.mw_300}`}
            type="text"
            placeholder="Votre nom..."
            {...register("name")}
            required={true}
            onChange={handleResetFeedback}
          />
          <input
            className={`${styles.mw_300}`}
            type="email"
            placeholder="Votre Email..."
            {...register("email")}
            required={true}
            onChange={handleResetFeedback}
          />
        </div>
        {errors.name && <p className="c-r">{errors.name.message}</p>}
        {errors.email && <p className="c-r">{errors.email.message}</p>}
        <input
          type="text"
          placeholder="Sujet de votre message..."
          className={`d-flex w-100 ${styles.mw_300}`}
          {...register("subject")}
          required={true}
          onChange={handleResetFeedback}
        />
        {errors.subject && <p className="c-r">{errors.subject.message}</p>}
        <textarea
          {...register("content")}
          placeholder="Votre message..."
          className={`d-flex w-100 ${styles.mw_300}`}
          required={true}
          onChange={handleResetFeedback}
        />
        {errors.content && <p className="c-r">{errors.content.message}</p>}
        <div className={`d-flex w-100 ${styles.mw_600}`}>
          <label htmlFor="RGPD">
            <input
              className={`${styles.check}`}
              type="checkbox"
              id="RGPD"
              {...register("rgpd")}
              style={{ maxWidth: "50px" }}
              required={true}
            />
            En cochant, vous acceptez que vos données soient collectées
            conformément aux <span> </span>
            <Link className="c-p" to={"rgpd"}>
              Politiques de confidentialités
            </Link>
            .<span style={{ color: "red" }}>*</span>
          </label>
        </div>
        {errors.rgpd && <p className="c-r">{errors.rgpd.message}</p>}
        <Button message="Envoyer" />
        {feedback ? (
          feedback === 200 ? (
            <p className={`c-g ${styles.feedback}`}>
              Votre message a bien été envoyé
            </p>
          ) : (
            <p className={`c-r ${styles.feedback}`}>Une erreur est survenue.</p>
          )
        ) : null}
      </form>
    </div>
  );
}
