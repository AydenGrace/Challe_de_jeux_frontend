import React, { useEffect, useState } from "react";
import style from "./Manage_Sessions.module.scss";
import Sessions_Calendar from "./components/Sessions_Calendar/Sessions_Calendar";
import { getAllDaySession } from "../../../../apis/sessions";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Manage_Sessions() {
  const [datas, setDatas] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const getDatas = async () => {
      const response = await getAllDaySession(date);
      console.log(response);
      setDatas(response);
    };
    getDatas();
  }, [date]);

  return (
    <section className={`d-flex flex-column align-items-center mh-100 w-100`}>
      <div className="headersep"></div>
      <h1>Gestion des Sessions</h1>
      <div className="w-100 p-10 d-flex justify-content-center align-items-center flex-column">
        <div className="w-100 d-flex mb-10">
          <h2>Visualisation des sessions</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-10 flex-wrap w-100 ">
          <Calendar value={date} onChange={(e) => setDate(e)} />
          <Sessions_Calendar
            Columns={datas.length + 1}
            Rows={17}
            Datas={datas}
            isToday={
              date.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)
                ? true
                : false
            }
          />
        </div>
      </div>
    </section>
  );
}
