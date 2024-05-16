import React, { useEffect, useState } from "react";
import styles from "./VerifyMail.module.scss";
import Button from "../../components/Buttons";
import { Link, useParams } from "react-router-dom/dist";
import { url } from "../../url";

export default function VerifyMail() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [timer, setTimer] = useState(0);
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
      console.log("Token = " + decodedPayload);
      const response = await fetch(
        `${url}/api/users/verifyMail/${decodedPayload}`
      );
      const responseFeedback = await response.json();
      setFeedback({
        status: responseFeedback.status,
        message: responseFeedback.message,
      });
      setTimer(10);
      if (responseFeedback.status === 200) {
        Interval = setInterval(() => {
          setTimer(timer--);
          if (timer <= 0) {
            clearInterval(Interval);
            this.props.history.push("/");
          }
        }, 1000);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
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
        <Link to={"/"} className="btn-nav btn-nav-primary">
          Accueil
        </Link>
      </div>
    </section>
  );
}
