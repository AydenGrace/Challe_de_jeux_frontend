/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./ContactCard.module.scss";
import { useForm } from "react-hook-form";

export default function ContactCard({ isTitle = false }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

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
            {...register}
            required={true}
          />
          <input
            className={`${styles.mw_300}`}
            type="email"
            placeholder="Votre Email..."
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
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
            {...register("RGPD", { required: true })}
            style={{ maxWidth: "50px" }}
            required={true}
          />
          <p>
            En cochant, vous acceptez que vos données soient collectées
            conformément aux <a href="#">Politiques de confidentialités</a>.
            <span style={{ color: "red" }}>*</span>
          </p>
        </div>

        <input type="submit" className={`btn btn-primary btn-nav`} />
      </form>
    </div>
  );
}

//  Code généré par React-Hook-Form
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="Name" {...register} />
//       <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="text" placeholder="Subject" {...register} />
//       <textarea {...register("Content", {})} />
//       <input type="checkbox" placeholder="Validation" {...register("Validation", {required: true})} />
//       <input type="submit" />
//     </form>
//   );
