/* eslint-disable no-unused-vars */
import styles from "./Socials.module.scss";

export default function Socials() {
  return (
    <div className={styles.container}>
      <a href="https://www.facebook.com/?locale=fr_FR" target="_blank">
        <i className="fa-brands fa-facebook-f fa-xl"></i>
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <i className="fa-brands fa-instagram fa-xl"></i>
      </a>
      <a href="https://www.tiktok.com/fr/" target="_blank">
        <i className="fa-brands fa-tiktok fa-xl"></i>
      </a>
    </div>
  );
}
