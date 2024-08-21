import React, { useEffect } from 'react'
import useDocumentTitle from '../../../components/UseDocumentTitle/UseDocumentTitle';
import { Link, useNavigation, useParams } from 'react-router-dom';
import Loading from '../../../components/Loader/V2/Loading';
import styles from './Booking_success.module.scss'
import { validateBooking } from '../../../apis/reservations';

export default function Booking_success() {
    const { state } = useNavigation();
    const { reservation } = useParams();
    useDocumentTitle("Validation");

    useEffect(()=>{
        if(!reservation) return;
        const validate = async () =>{
            console.log(await validateBooking(reservation));
        }
        validate();
    },[reservation])

    return state !== "idle" ? (
        <div className=" f-center mh-100">
          <Loading />
        </div>
      ) : (
        <section id="VerifyMail" className={`f-center h-100 ${styles.page}`}>
          <div className={`card f-center flex-column ${styles.container}`}>
            <h1>Votre paiement a bien été prit en compte.</h1>
            <p>Nous vous remercions pour votre confiance. Vous receverez dans quelques instants un mail de confirmation de votre session.</p>

            <Link to={"/"} className="btn-nav btn-primary mt-10">
              Accueil
            </Link>
          </div>
        </section>
      );
}
