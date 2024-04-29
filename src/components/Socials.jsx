/* eslint-disable no-unused-vars */
import styles from "./Socials.module.scss";

export default function Socials() {
  return (
    <div className={styles.container}>
      <a href="#">
        <i className="fa-brands fa-facebook-f fa-xl"></i>
      </a>
      <a href="#">
        <i className="fa-brands fa-instagram fa-xl"></i>
      </a>
      <a href="#">
        <i className="fa-brands fa-tiktok fa-xl"></i>
      </a>
    </div>
  );
}
