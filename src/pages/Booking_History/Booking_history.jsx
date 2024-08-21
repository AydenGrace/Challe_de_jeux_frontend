import React, { useContext, useEffect, useState } from 'react'
import useDocumentTitle from '../../components/UseDocumentTitle/UseDocumentTitle';
import { useNavigation } from 'react-router-dom';
import Loading from '../../components/Loader/V2/Loading';
import style from './Booking_history.module.scss';
import { UserContext } from '../../context/UserContext';
import { getAllUserBooking } from '../../apis/reservations';
import Book_Item from './components/Book_Item';

export default function Booking_history() {
  const { state } = useNavigation();
  const { user } = useContext(UserContext);
  const [allReservations, setAllReservations] = useState([]);

  useDocumentTitle("Mes réservations");

  useEffect(()=>{
    if(!user) return;

    const getAll = async () => {
      setAllReservations(await getAllUserBooking(user._id));
    }
    getAll();
  },[user]);

  useEffect(()=>{
    console.log(allReservations);
  },[allReservations])

  return state !== "idle" ? (
    <div className=" f-center mh-100">
      <Loading />
    </div>
  ) : (
    <section id="History" className={`d-flex flex-column align-items-center mh-100 ${style.page}`}>
      <div className="headersep"></div>
      <h1 className="mb-20">Mes réservations</h1>
      <div className={`w-100 d-flex flex-column gap-20 p-10 align-items-center`}>
        { allReservations ? allReservations.length ?
          allReservations.map((reserv,index)=>(<Book_Item book={reserv} key={index}/>) ): <p>Aucune réservation trouvée</p>: <p>Aucune réservation trouvée</p>
        }
      </div>
    </section>
  );
}
