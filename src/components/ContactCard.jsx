/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./ContactCard.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Buttons";

export default function ContactCard({ isTitle = false }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
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

  return (
    <div className={`card f-center flex-column ${styles.container}`}>
      {isTitle ? <h1>Contact</h1> : <h2>Contact</h2>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`f-center flex-column gap-10`}
      >
        <div className={`d-flex gap-10`}>
          <input
            className={`${styles.mw_300}`}
            type="text"
            placeholder="Votre nom..."
            {...register("name")}
            required={true}
          />
          <input
            className={`${styles.mw_300}`}
            type="email"
            placeholder="Votre Email..."
            {...register("email")}
            required={true}
          />
        </div>
        <input
          type="text"
          placeholder="Sujet de votre message..."
          className={`d-flex w-100 ${styles.mw_300}`}
          {...register}
          required={true}
        />

        <textarea
          {...register("Content", {})}
          placeholder="Votre message..."
          className={`d-flex w-100 ${styles.mw_300}`}
          required={true}
        />
        <div
          className={`d-flex w-100 gap-10 align-items-center ${styles.mw_600}`}
        >
          <input
            className={`d-flex ${styles.check}`}
            value="Test"
            type="checkbox"
            placeholder="RGPD"
            {...register("rgpd")}
            style={{ maxWidth: "50px" }}
            required={true}
          />
          <p>
            En cochant, vous acceptez que vos données soient collectées
            conformément aux <a href="#">Politiques de confidentialités</a>.
            <span style={{ color: "red" }}>*</span>
          </p>
        </div>

        <Button message="Envoyer" />
      </form>
    </div>
  );
}
