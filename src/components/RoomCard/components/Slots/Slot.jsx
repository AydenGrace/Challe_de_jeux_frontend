import React, { useEffect, useState } from "react";
import styles from "./Slot.module.scss";
import { Link, useSearchParams } from "react-router-dom";

export default function Slot({ value }) {
  const [hourString, setHourString] = useState("");

  useEffect(() => {
    const thisDate = new Date(value.date);
    setHourString(
      ("0" + thisDate.getHours()).slice(-2) +
        ":" +
        ("0" + thisDate.getMinutes()).slice(-2)
    );
  }, []);

  return value.isAvalaible ? (
    <Link className={`${styles.Slot}`} to={`/booking/${value._id}`}>
      <p>
        <strong>{hourString}</strong>
      </p>
    </Link>
  ) : (
    <div className={`${styles.DisabledSlot}`}>
      <strong>{hourString}</strong>
    </div>
  );
}
