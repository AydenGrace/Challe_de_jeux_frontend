import React, { useEffect, useState } from "react";
import styles from "./Tag.module.scss";

export default function Tag({ value = "test", isInversed = false }) {
  return isInversed ? (
    <div className={`d-flex ${styles.InversedShadow}`}>
      <div className={`d-flex ${styles.InversedTag}`}>
        <p>
          <strong>{value}</strong>
        </p>
      </div>
    </div>
  ) : (
    <div className={`d-flex ${styles.Shadow}`}>
      <div className={`d-flex ${styles.Tag}`}>
        <p>
          <strong>{value}</strong>
        </p>
      </div>
    </div>
  );
}
