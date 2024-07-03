import React from 'react'
import styles from './Privacy.module.scss'

export default function Privacy() {
  return (
    <div className={`d-flex flex-column ${styles.page}`}>
        <div className={`${styles.headerSeparator}`}></div>
        <h1>Politique de confidentialité</h1>
        <section className={`d-flex flex-column justify-content-start ${styles.section}`}>
            <h2>Identité du site Web</h2>
            <p><strong>Nom :</strong> La Challe de Jeux</p>
            <p><strong>Adresse :</strong> 19 rue des Arts, 59000 Lille, France</p>
            <p><strong>Adresse en ligne :</strong> <a>www.challedejeux.fr</a></p>
            <p><strong>Catégorie de site web :</strong> E-Commerce</p>
        </section>

    </div>
  )
}
