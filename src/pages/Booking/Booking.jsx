import React, { useContext, useEffect, useState } from "react";
import style from "./Booking.module.scss";
import * as yup from "yup";
import { Link, useParams } from "react-router-dom";
import { getSessions } from "../../apis/sessions";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Buttons";
import { loadStripe } from "@stripe/stripe-js";
import { makeBooking } from "../../apis/reservations";

export default function Booking() {
  const { session } = useParams();
  const [thisSession, setThisSession] = useState(null);
  const { user } = useContext(UserContext);
  const [NbJoueurs, setNbJoueurs] = useState(1);
  const [total, setTotal] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [reduction, setReduction] = useState(0);
  const [taxes, setTaxes] = useState(10);
  const [TVA, setTVA] = useState(0);
  const [totalTaxes, setTotalTaxes] = useState(0);

  const [dateString, setDateString] = useState();
  const [hourString, setHourString] = useState();
  const [minString, setMinString] = useState();
  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  const BookingSchema = yup.object({
    email: yup.string().email().required("Champs requis"),
    name: yup.string().required("Champs requis"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Numéro non valide")
      .min(10, "Numéro trop court")
      .max(13, "Numéro trop long")
      .required("Champs requis"),
    Nbplayers: yup.number().max(6).min(1).required("Champs requis"),
  });

  const BookingValues = {
    email: user ? user.email : "",
    phone: "",
    name: user ? user.username : "",
    Nbplayers: 1,
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    BookingValues,
    mode: "onSubmit",
    resolver: yupResolver(BookingSchema),
  });

  useEffect(() => {
    if (!session) return;
    const getInfos = async () => {
      const sessionFind = await getSessions(session);
      console.log(sessionFind);
      setThisSession(sessionFind);

      new Date(sessionFind.date).getHours() < 10
        ? setHourString(`0${new Date(sessionFind.date).getHours()}`)
        : setHourString(`${new Date(sessionFind.date).getHours()}`);

      new Date(sessionFind.date).getMinutes() < 10
        ? setMinString(`0${new Date(sessionFind.date).getMinutes()}`)
        : setMinString(`${new Date(sessionFind.date).getMinutes()}`);

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
    setBasePrice(thisSession.room.base_price * (1 - taxes / 100) * NbJoueurs);
    setTVA(thisSession.room.base_price * (0 + taxes / 100) * NbJoueurs);
    setTotalTaxes(thisSession.room.base_price * (0 + taxes / 100) * NbJoueurs);
    setTotal(
      (thisSession.room.base_price * (1 - taxes / 100) +
        thisSession.room.base_price * (0 + taxes / 100) -
        reduction) *
        NbJoueurs
    );
  }, [NbJoueurs, thisSession, taxes, reduction]);

  const handleChangeNbPlayer = (e) => {
    setNbJoueurs(e.target.value);
  };
  async function submit(values) {
    const { Nbplayers, email, name, phone } = values;
    // console.log("Nbplayers", Nbplayers);
    // console.log("email", email);
    // console.log("name", name);
    // console.log("phone", phone);
    // console.log("userId", user ? user._id : undefined);
    // console.log("sessionId", session);
    // console.log("Total", total);
    // console.log("ProductId", thisSession.room._id);
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE);
    const StripeSessionId = await makeBooking(
      Nbplayers,
      email,
      name,
      phone,
      user ? user._id : undefined,
      session,
      total,
      thisSession.room._id,
      []
    );
    console.log(StripeSessionId);
    await stripe.redirectToCheckout({
      sessionId: StripeSessionId.CartSessionId,
    });
  }

  return thisSession ? (
    <div className="mh-100 d-flex flex-column">
      <div className="headersep"></div>

      <form
        onSubmit={handleSubmit(submit)}
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
        className={`f-center flex-fill flex-wrap ${style.page}`}
      >
        <article className={`card g-10 ${style.container}`}>
          <h1>Réservation de session</h1>
          <div className={`d-flex w-100 mb-10 ${style.roomInfos}`}>
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
              style={{
                backgroundImage: `url("${thisSession.room.imgs[0]}")`,
              }}
            ></div>
          </div>
          <div className="f-center flex-column w-100 p-10">
            <div className="d-flex align-items-center gap-10 mb-10 w-100">
              <label htmlFor="booking_NbPlayer">
                Nombre de participants<span className="c-r">{" *"}</span>
              </label>
              <input
                {...register("Nbplayers")}
                type="number"
                id="booking_NbPlayer"
                placeholder="1"
                autoComplete="number"
                defaultValue={1}
                className={`d-flex `}
                min={1}
                max={6}
                required
                onChange={(e) => handleChangeNbPlayer(e)}
              />
            </div>
            <div className="d-flex flex-column mb-10  w-100">
              <label htmlFor="booking_email">
                Nom pour la réservation<span className="c-r">{" *"}</span>
              </label>
              <input
                {...register("name")}
                type="text"
                id="booking_name"
                placeholder="Votre nom"
                autoComplete="name"
                className={`d-flex w-100 mw-300`}
                required
              />
            </div>
            <div className="d-flex flex-column mb-10  w-100">
              <label htmlFor="booking_email">
                E-mail de réservation<span className="c-r">{" *"}</span>
              </label>
              <input
                {...register("email")}
                type="email"
                id="booking_email"
                placeholder="Votre adresse e-mail"
                className={`d-flex w-100 mw-300`}
                autoComplete="email"
                required
              />
            </div>

            <div className="d-flex flex-column mb-10  w-100">
              <label htmlFor="booking_email">
                Numéro de téléphone<span className="c-r">{" *"}</span>
              </label>
              <input
                {...register("phone")}
                type="tel"
                id="booking_phone"
                placeholder="Votre numéro de téléphone"
                className={`d-flex w-100 mw-300`}
                autoComplete="tel"
                required
              />
            </div>
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
            <p>{`À ${hourString}:${minString}`}</p>

            <div className="d-flex w-100 mb-10">
              <p>{`${thisSession.room.base_price}€ par joueur`}</p>
              <hr className={`d-flex flex-fill ${style.hr}`} />
              <p>{`${NbJoueurs} joueur(s)`}</p>
            </div>
          </div>
          <div className="d-flex w-100 mb-10">
            <p>{`Total H.T.`}</p>
            <hr className={`d-flex flex-fill ${style.hr}`} />
            <p>{`${basePrice.toFixed(2)}€`}</p>
          </div>

          <div className="d-flex w-100">
            <p className="d-flex flex-fill">{`Taxes`}</p>
            {/* <hr className={`d-flex flex-fill ${style.hr}`} /> */}
            <p>{`${totalTaxes.toFixed(2)}€`}</p>
          </div>
          <div className={`d-flex w-100 mb-10 ${style.taxes}`}>
            <p>{`TVA (10%)`}</p>
            <hr className={`d-flex flex-fill ${style.hr}`} />
            <p>{`${TVA.toFixed(2)}€`}</p>
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
            <Button message="Valider ma commande"></Button>
          </div>
        </article>
      </form>
    </div>
  ) : (
    <></>
  );
}
