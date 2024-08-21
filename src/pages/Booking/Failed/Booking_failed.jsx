import React, { useEffect } from 'react'
import { Link, useNavigation, useParams } from 'react-router-dom';
import Loading from '../../../components/Loader/V2/Loading';
import { cancelBooking } from '../../../apis/reservations';
import styles from './Booking_failed.module.scss';
import useDocumentTitle from '../../../components/UseDocumentTitle/UseDocumentTitle';

export default function Booking_failed() {
    const { state } = useNavigation();
    const { reservation } = useParams();
    useDocumentTitle("Annulation");

    useEffect(()=>{
        if(!reservation) return;
        const cancel = async () =>{
            console.log(await cancelBooking(reservation));
        }
        cancel();
    },[reservation])

    return state !== "idle" ? (
        <div className=" f-center mh-100">
          <Loading />
        </div>
      ) : (
        <section id="VerifyMail" className={`f-center h-100 ${styles.page}`}>
          <div className={`card f-center flex-column ${styles.container}`}>
            <h1>Une erreur est survenue.</h1>
            <p>Une erreur est survenue lors du paiement. Votre réservation a été annulée.</p>

            <Link to={"/"} className="btn-nav btn-primary mt-10">
              Accueil
            </Link>
          </div>
        </section>
      );
}
