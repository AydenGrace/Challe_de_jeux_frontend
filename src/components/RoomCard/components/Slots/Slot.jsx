import React, { useEffect, useState } from "react";
import styles from "./Slot.module.scss";
import { useSearchParams } from "react-router-dom";

export default function Slot({
  value = { _id: 1234, date: new Date(), IsAvalaible: true },
}) {
  const [hourString, setHourString] = useState("");

  useEffect(() => {
    const thisDate = new Date(value.date);
    setHourString(
      ("0" + thisDate.getHours()).slice(-2) +
        ":" +
        ("0" + thisDate.getMinutes()).slice(-2)
    );
  }, []);

  return value.IsAvalaible ? (
    <div className={`${styles.Slot}`}>
      <p>
        <strong>{hourString}</strong>
      </p>
    </div>
  ) : (
    <div className={`${styles.DisabledSlot}`}>
      <strong>{hourString}</strong>
    </div>
  );
}
