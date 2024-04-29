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
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className={`card f-center flex-column ${styles.container}`}>
      {isTitle ? <h1>Contact</h1> : <h2>Contact</h2>}
      {/* <form action="" className={`f-center flex-column gap-10`}>
        <div className={`d-flex gap-10`}>
          <input
            type="text"
            name="Name"
            placeholder="Votre nom..."
            className={`d-flex w-100`}
          />
          <input
            type="text"
            name="Email"
            placeholder="Votre Email..."
            className={`d-flex w-100`}
          />
        </div>
        <input
          type="text"
          name="Subject"
          placeholder="Le sujet de votre message..."
          className={`d-flex w-100`}
        />
        <textarea
          name="Content"
          className={`d-flex w-100`}
          placeholder="Votre message..."
        ></textarea>
        <div className={`d-flex w-100`}>
          <input type="checkbox" name="RGPD" id="rgpd" required />
          <label htmlFor="#rgpd">
            En cochant cette case vous acceptez que vos données soient
            collectées conformément à notre{" "}
            <a href="#">Politique de confidentialité</a>
          </label>
        </div>
      </form> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`f-center flex-column gap-10`}
      >
        <div className={`d-flex gap-10`}>
          <input type="text" placeholder="Votre nom..." {...register} />
          <input
            type="text"
            placeholder="Votre Email..."
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>
        <input
          type="text"
          placeholder="Sujet de votre message..."
          className={`d-flex w-100`}
          {...register}
        />

        <textarea
          {...register("Content", {})}
          placeholder="Votre message..."
          className={`d-flex w-100`}
        />
        <input
          type="checkbox"
          placeholder="RGPD"
          {...register("RGPD", { required: true })}
        />

        <input type="submit" className={`btn btn-primary`} />
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
