import React from "react";
import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className="mh-100 f-center">
      <div className={`${styles.spinner_container}`}>
        <div className={`${styles.spinner}`}>
          <div className={`${styles.spinner}`}>
            <div className={`${styles.spinner}`}>
              <div className={`${styles.spinner}`}>
                <div className={`${styles.spinner}`}>
                  <div className={`${styles.spinner}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
