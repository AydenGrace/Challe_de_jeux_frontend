import styles from "./Landing.module.scss";

export default function Landing() {
  return (
    <section
      id="Landing"
      className={`d-flex flex-column h-100 ${styles.Landing} p-20`}
    >
      <div
        className={`d-flex flex-all-cont align-items-end justify-content-center ${styles.upDiv}`}
      >
        <p>Bienvenue à</p>
      </div>
      <div className={`d-flex justify-content-center align-items-center p-20`}>
        <h1>La Challe de Jeux</h1>
      </div>
      <div
        className={`d-flex flex-column flex-all-cont justify-content-sb align-items-center`}
      >
        <div>
          <p>Salon de thé · Bar à chats · Escape Game</p>
          <p> Votre rendez-vous Lillois</p>
        </div>
        <a aria-label='Voir les Résidents' className={`${styles.downIcon}`} href="#Residents">
          <i title="Voir les résidents" className="fa-solid fa-arrow-down fa-2xl"></i>
        </a>
      </div>
    </section>
  );
}
