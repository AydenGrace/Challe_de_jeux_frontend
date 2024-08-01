import React, { useEffect, useState } from "react";
import styles from "./VerifyMail.module.scss";
import Button from "../../components/Buttons";
import {
  Link,
  redirect,
  useNavigation,
  useParams,
} from "react-router-dom/dist";
import Loading from "../../components/Loader/V2/Loading";
import useDocumentTitle from "../../components/UseDocumentTitle/UseDocumentTitle";

export default function VerifyMail() {
  const { state } = useNavigation();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [timer, setTimer] = useState(10);
  useDocumentTitle("Vérification de l'Email");
  let Interval;

  const { token } = useParams();

  useEffect(() => {
    setLoading(true);
    Verify();
    setLoading(false);
  }, []);

  async function Verify() {
    try {
      const decodedPayload = token.replaceAll(/\,/g, ".");
      // console.log("Token = " + decodedPayload);
      const response = await fetch(
        `${
          import.meta.env.VITE_BACK_URL
        }/api/users/verifyMail/${decodedPayload}`
      );
      const responseFeedback = await response.json();
      setFeedback({
        status: responseFeedback.status,
        message: responseFeedback.message,
      });
      let time = 9;
      if (responseFeedback.status === 200) {
        Interval = setInterval(() => {
          setTimer(time);
          time--;
          if (time <= 0) {
            clearInterval(Interval);
            redirect("/");
          }
        }, 1000);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return state !== "idle" ? (
    <div className=" f-center mh-100">
      <Loading />
    </div>
  ) : (
    <section id="VerifyMail" className={`f-center h-100 ${styles.page}`}>
      <div className={`card f-center flex-column ${styles.container}`}>
        <h1>Vérification de votre inscription.</h1>
        {feedback ? (
          feedback.status === 200 ? (
            <>
              <p>{feedback.message}</p>
              <p>Vous allez être redirigé dans... {timer} secondes.</p>
            </>
          ) : (
            <p className={`c-r`}>
              Une erreur est survenue : {feedback.message}
            </p>
          )
        ) : null}
        <Link to={"/"} className="btn-nav btn-nav-primary mt-10">
          Accueil
        </Link>
      </div>
    </section>
  );
}
