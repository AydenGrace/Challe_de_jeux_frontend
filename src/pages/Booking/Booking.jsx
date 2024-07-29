import React, { useContext, useEffect, useState } from "react";
import style from "./Booking.module.scss";
import { Link, useParams } from "react-router-dom";
import { getSessions } from "../../apis/sessions";
import { UserContext } from "../../context/UserContext";

export default function Booking() {
  const { session } = useParams();
  const [thisSession, setThisSession] = useState(null);
  const { user } = useContext(UserContext);
  const [NbJoueurs, setNbJoueurs] = useState(4);
  const [total, setTotal] = useState(1);
  const [dateString, setDateString] = useState();

  useEffect(() => {
    if (!session) return;
    const getInfos = async () => {
      const sessionFind = await getSessions(session);
      console.log(sessionFind);
      setThisSession(sessionFind);
      switch (new Date(sessionFind.date).getDay()) {
        case 0:
          setDateString("Dim.");
          break;
        case 1:
          setDateString("Lun.");
          break;
        case 2:
          setDateString("Mar.");
          break;
        case 3:
          setDateString("Mer.");
          break;
        case 4:
          setDateString("Jeu.");
          break;
        case 5:
          setDateString("Ven.");
          break;
        case 6:
          setDateString("Sam.");
          break;
        default:
          break;
      }
    };
    getInfos();
  }, [session]);

  useEffect(() => {
    if (!thisSession) return;
    setTotal(thisSession.room.base_price * NbJoueurs);
  }, [NbJoueurs, thisSession]);
  return thisSession ? (
    <div className="mh-100 d-flex flex-column">
      <div className="headersep"></div>
      <section className={`f-center flex-fill ${style.page}`}>
        <article className={`card g-10 ${style.container}`}>
          <h1>Réservation de session</h1>
          <div className="d-flex w-100 mb-10">
            <div className="d-flex w-100 flex-column p-10">
              <h2 className="mb-10">{thisSession.room.name}</h2>
              <p>Difficulté : {thisSession.room.difficulty} / 5</p>
              <p>Durée : {thisSession.room.duration} minutes</p>
              <Link
                className="btn-nav btn-primary text-center"
                target="_blank"
                to={`/room/${thisSession.room._id}`}
              >
                Plus d'infos
              </Link>
            </div>
            <div
              className={`d-flex w-100 ${style.RoomImg}`}
              style={{ backgroundImage: `url("${thisSession.room.imgs[0]}")` }}
            ></div>
          </div>
          <div className="f-center flex-column w-100 p-10">
            {/* <input type="text" className="w-100" placeholder="Test"></input> */}
          </div>
        </article>

        <article
          className={`card d-flex flex-column ${style.container} ${style.Resume}`}
        >
          <h2>Résumé de votre commande</h2>
          <div className="d-flex flex-column w-100 g-10 mb-40">
            <h3>{thisSession.room.name}</h3>
            <p>{`${dateString} ${new Date(
              thisSession.date
            ).toLocaleDateString()}`}</p>

            <div className="d-flex w-100 mb-10">
              <p>{`${thisSession.room.base_price}€ par joueur`}</p>
              <hr className={`d-flex flex-fill ${style.hr}`} />
              <p>{`${NbJoueurs} joueur(s)`}</p>
            </div>
          </div>
          <div className="d-flex w-100 mb-10">
            <p>{`Total H.T.`}</p>
            <hr className={`d-flex flex-fill ${style.hr}`} />
            <p>{`${(total * 0.9).toFixed(2)}€`}</p>
          </div>
          <div className="d-flex w-100 mb-10">
            <p>{`Taxes (TVA 10%)`}</p>
            <hr className={`d-flex flex-fill ${style.hr}`} />
            <p>{`${(total * 0.1).toFixed(2)}€`}</p>
          </div>
          <hr className={`d-flex flex-fill ${style.hr_total}`} />
          <div className="d-flex w-100 mb-10">
            <p>
              <strong>{`Total T.T.C`}</strong>
            </p>
            <hr className={`d-flex flex-fill ${style.hr}`} />
            <p>
              <strong>{`${total.toFixed(2)}€`}</strong>
            </p>
          </div>
          <div className={`f-center`}>
            <Link
              to={"/purchase"}
              className={`btn-nav btn-primary text-center`}
            >
              Valider ma commande
            </Link>
          </div>
        </article>
      </section>
    </div>
  ) : (
    <></>
  );
}
