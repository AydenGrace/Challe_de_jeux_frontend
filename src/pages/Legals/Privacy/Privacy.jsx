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

        <section className={`d-flex flex-column justify-content-start ${styles.section}`}>
            <h2>Le but de cette politique de confidentialité</h2>
            <p>Le but de cette politique de confidentialité est d’informer les utilisateurs de notre site des données personnelles que nous recueillerons ainsi que les informations suivantes, le cas échéant :</p>
            <ul>
                <li>Les données personnelles que nous recueillerons</li>
                <li>L’utilisation des données recueillies</li>
                <li>Qui a accès aux données recueillies</li>
                <li>Les droits des utilisateurs du site</li>
                <li>La politique de cookies du site</li>
            </ul>
            <p>Cette politique de confidentialité fonctionne parallèlement aux conditions générales d’utilisation de notre site.</p>
        </section>

    </div>
  )
}
