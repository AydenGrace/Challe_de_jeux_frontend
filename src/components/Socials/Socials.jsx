/* eslint-disable no-unused-vars */
import styles from "./Socials.module.scss";

export default function Socials() {
  return (
    <div className={styles.container}>
      <a aria-labelledby="Facebook" href="https://www.facebook.com/?locale=fr_FR" target="_blank">
        <i title='Facebook' className="fa-brands fa-facebook-f fa-xl"></i>
      </a>
      <a aria-labelledby="Instagram" href="https://www.instagram.com/" target="_blank">
        <i title="Instagram" className="fa-brands fa-instagram fa-xl"></i>
      </a>
      <a aria-labelledby="Tiktok" href="https://www.tiktok.com/fr/" target="_blank">
        <i title="Tiktok" className="fa-brands fa-tiktok fa-xl"></i>
      </a>
    </div>
  );
}
