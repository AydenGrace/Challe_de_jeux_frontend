import React, { useEffect, useState } from "react";
import styles from "./Roomcard.module.scss";
import { Link } from "react-router-dom";
import Loading from "../Loader/V2/Loading";
import Tag from "./components/Tags/Tag";
import Slot from "./components/Slots/Slot";
import { getDaySessions } from "../../apis/sessions";

export default function Roomcard({ room = null }) {
  const [thisRoom, setThisRoom] = useState(room);
  const [date, setDate] = useState(new Date());
  const [sessions, setSessions] = useState();
  const [isToday, setIsToday] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [dateString, setDateString] = useState("");

  // useEffect(() => {
  //   if (room) return;
  //   setIsLoading(true);
  //   let date = new Date();
  //   date.setHours(10);
  //   date.setMinutes(30);
  //   setSessions([
  //     {
  //       _id: 1234,
  //       date: new Date().setHours(9, 0),
  //       IsAvalaible: false,
  //     },
  //     {
  //       _id: 1234,
  //       date: new Date().setHours(10, 30),
  //       IsAvalaible: false,
  //     },
  //     {
  //       _id: 1234,
  //       date: new Date().setHours(11, 0),
  //       IsAvalaible: true,
  //     },
  //     {
  //       _id: 1234,
  //       date: new Date().setHours(12, 30),
  //       IsAvalaible: true,
  //     },
  //     {
  //       _id: 1234,
  //       date: new Date().setHours(15, 0),
  //       IsAvalaible: true,
  //     },
  //     {
  //       _id: 1234,
  //       date: new Date().setHours(16, 30),
  //       IsAvalaible: true,
  //     },
  //     {
  //       _id: 1234,
  //       date: new Date().setHours(18, 0),
  //       IsAvalaible: true,
  //     },
  //     {
  //       _id: 1234,
  //       date: new Date().setHours(19, 30),
  //       IsAvalaible: true,
  //     },
  //     {
  //       _id: 1234,
  //       date: new Date().setHours(21, 0),
  //       IsAvalaible: false,
  //     },
  //   ]);
  //   setThisRoom({
  //     _id: 123456,
  //     name: "Cat'Apocalypse",
  //     overview: "Salle de test",
  //     duration: 60,
  //     difficulty: 1,
  //     base_price: 24,
  //     tags: [
  //       { _id: 1234, content: "Fouille" },
  //       { _id: 1234, content: "Manipulation" },
  //       { _id: 1234, content: "Réflexion" },
  //     ],
  //     imgs: [
  //       "https://firebasestorage.googleapis.com/v0/b/challe-de-jeux.appspot.com/o/backgrounds%2Fvecteezy_nuclear-war-explosion-mushroom-rising-up-in-city_12747011-min.webp?alt=media&token=c5b46144-2ba2-4a73-bd51-399791ab2845",
  //       "https://firebasestorage.googleapis.com/v0/b/challe-de-jeux.appspot.com/o/backgrounds%2Fvecteezy_living-room-with-cute-cat-lying-on-pillow-on-sofa_13280601.webp?alt=media&token=7bb75174-6337-4127-87a5-022f79113085",
  //     ],
  //   });
  //   setIsLoading(false);
  // }, []);

  useEffect(() => {
    if (!date || !thisRoom) return;
    switch (date.getDay()) {
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

    const getSessions = async () => {
      setIsLoading(true);
      console.log(date);
      console.log(thisRoom);
      const sessionsFind = await getDaySessions(thisRoom._id, date);
      console.log(sessionsFind);
      setSessions(sessionsFind);
      setIsLoading(false);
    };
    getSessions();
  }, [date]);

  const changeDate = (isAdd) => {
    if (isAdd) {
      date.setDate(date.getDate() + 1);
      setIsToday(false);
    } else {
      date.setDate(date.getDate() - 1);
      if (date <= new Date()) setIsToday(true);
    }
    setDate(new Date(date));
  };

  return (
    thisRoom && (
      //   <Link
      //     to={`/room/${thisRoom._id}`}
      //     className={`d-flex card flex-column align-items-center m-20 ${styles.roomcard}`}
      //   >
      <div
        className={`d-flex card flex-column align-items-center m-20 ${styles.roomcard}`}
      >
        <div className={`${styles.tagsArea} d-flex flex-column gap-10`}>
          {thisRoom.tags.map((tag, idx) => (
            <Tag
              key={`${thisRoom.name}_Tag_${idx}`}
              value={tag.content}
              // isInversed={true}
            />
          ))}
        </div>

        <div className={`d-flex w-100 h-100p flex-fill ${styles.imgArea}`}>
          <img src={`${thisRoom.imgs[0]}`} alt={thisRoom.name} className={``} />
        </div>

        <div
          className={`d-flex h-100p flex-fill flex-column w-100 ${styles.RoomHeight}`}
        >
          <div className={`w-100 f-center ${styles.dateArea}`}>
            <p>
              <strong>{thisRoom.name}</strong>
            </p>
          </div>
          <div className={`w-100 f-center ${styles.dateArea}`}>
            <div
              className={`d-flex align-items-center justify-content-start flex-fill`}
            >
              {!isToday ? (
                <i
                  className={`fa-solid fa-angles-left ${styles.arrow}`}
                  onClick={() => changeDate(false)}
                ></i>
              ) : (
                <i
                  className={`fa-solid fa-angles-left ${styles.arrow_disabled}`}
                ></i>
              )}
            </div>
            <div className={`f-center flex-fill `}>
              {`${dateString} ${date.toLocaleDateString()}`}
            </div>
            <div
              className={`d-flex flex-fill align-items-center justify-content-end`}
            >
              <i
                className={`fa-solid fa-angles-right ${styles.arrow}`}
                onClick={() => changeDate(true)}
              ></i>
            </div>
          </div>
          <div
            className={`w-100 d-flex flex-wrap justify-content-center flex-fill ${styles.sessions}`}
          >
            {isLoading ? (
              <Loading />
            ) : sessions && sessions.length ? (
              sessions.map((ses, idx) => (
                <Slot key={`${thisRoom.name}_Slot_${idx}`} value={ses} />
              ))
            ) : (
              <p>Aucune session trouvée.</p>
            )}
          </div>
        </div>
      </div>
      //   </Link>
    )
  );
}
