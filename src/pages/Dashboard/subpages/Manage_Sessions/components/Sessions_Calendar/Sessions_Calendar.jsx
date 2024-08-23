import React, { useEffect, useState } from "react";
import style from "./Sessions_Calendar.module.scss";
import Loading from "../../../../../../components/Loader/V2/Loading";

export default function Sessions_Calendar({
  Rows,
  Columns,
  Datas = [],
  isToday = true,
}) {
  const [nbRow, setNbRow] = useState(Rows);
  const [nbColumn, setNbColumn] = useState(Datas.length + 1);
  const [Calendar_datas, setCalendar] = useState([]);
  const [datas, setDatas] = useState(Datas);
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setIsLoading(true);
    setNbColumn(Datas.length + 1);
    setNbRow(Rows);
    initialiseArray();
  }, [Rows, Columns, Datas]);

  useEffect(() => {
    if (Calendar_datas.length > 20) setIsLoading(false);
  }, [Calendar_datas]);

  const setText = (i, j) => {
    switch (j) {
      case 0:
        if (i === 0) return "";
        return `${7 + i}H00`;
        break;
      default:
        switch (i) {
          case 0:
            return Datas[j - 1].roomName;
            break;
          default:
            return "";
            break;
        }
    }
  };

  const initialiseArray = () => {
    let tempArray = [];
    for (let i = 0; i < nbRow; i++) {
      for (let j = 0; j < nbColumn; j++) {
        tempArray.push({
          i,
          j,
          type: j === 0 || i === 0 ? "border" : "cellule",
          text: setText(i, j),
        });
      }
    }
    setCalendar(tempArray);
  };

  const getRowSession = (date) => {
    const dateCast = new Date(date);
    switch (dateCast.getHours()) {
      case 8:
        return 2;
      case 9:
        return 3;
      case 10:
        return 4;
      case 11:
        return 5;
      case 12:
        return 6;
      case 13:
        return 7;
      case 14:
        return 8;
      case 15:
        return 9;
      case 16:
        return 10;
      case 17:
        return 11;
      case 18:
        return 12;
      case 19:
        return 13;
      case 20:
        return 14;
      case 21:
        return 15;
      case 22:
        return 16;
      default:
        return 2;
    }
  };

  return isLoading || !Datas ? (
    <section className="w-100 f-center">
      <Loading />
    </section>
  ) : (
    <>
      <section
        className={`${style.calendar} relative`}
        style={{
          gridTemplateColumns: `repeat(${nbColumn})`,
          gridTemplateRows: `repeat(${nbRow})`,
          maxWidth: ` ${nbColumn * 100.5}px`,
        }}
        id="Sessions_Calendar_Area"
      >
        {isToday ? (
          <div
            className={`absolute w-100 ${style.line}`}
            style={{
              top: `${
                date.getHours() >= 8
                  ? (((date.getHours() - 8) * 60 + date.getMinutes()) / 960) *
                      100 +
                    4
                  : "0"
              }%`,
            }}
          ></div>
        ) : (
          <></>
        )}
        {Calendar_datas.map((cellule, idx) => (
          <div
            className={`${style.cellule} ${
              cellule.type === "border" ? "bg-light-gray" : "bg-white"
            } f-center`}
            style={{
              gridColumn: cellule.j + 1,
              gridRow: cellule.i + 1,
              borderBottom:
                cellule.i === 0
                  ? "2px solid var(--primary)"
                  : "2px solid var(--primary300)",
              borderRight:
                cellule.j != Columns - 1 ? "2px solid var(--primary)" : "",
            }}
            key={`calendar_area_${idx}`}
          >
            {cellule.text}
          </div>
        ))}
        {Datas.map((room, idx) =>
          room.sessions.map((session, jdx) => (
            <div
              className={`pointer calendar-session ${
                session.isAvalaible
                  ? "calendar-session-green"
                  : "calendar-session-lock"
              }`}
              style={{
                gridColumn: idx + 2,
                gridRowStart: getRowSession(session.date),
                gridRowEnd: getRowSession(session.date) + 1,
                transform: new Date(session.date).getMinutes()
                  ? "translateY(12.5px)"
                  : "",
              }}
              key={`${room.roomId}_${session._id}`}
            >
              {session.isAvalaible ? "En attente" : "Verrouillé"}
            </div>
          ))
        )}
      </section>
    </>
  );
}
