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

        <section className={`d-flex flex-column justify-content-start ${styles.section}`}>
            <h2>Lois applicables</h2>
            <p>Conformément aux <i>Règlement Général sur la Protection des Données</i> (RGPD), cette politique de confidentialité est conforme aux règlements suivants.</p>
            <p>Les données à caractère personnel doivent être :</p>
            <ul>
                <li>Traités de manière licite, loyale et transparente au regard de la personne concernée (licéité, loyauté, transparence) ;</li>
                <li>Collectées pour finalités déterminées, explicites et légitimes, et ne pas être traitées ultérieurement d’une manière incompatible avec ces finalités ; le traitement ultérieur à des fins archivistiques dans l’intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques n’est pas considéré, conformément à l’article 89, paragraphe 1, comme incompatible avec les finalités initiales (limitation des finalités) ;</li>
                <li>Adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées (minimisation des données) ;</li>
                <li>Exactes et, si nécessaire, tenues à jour ; toutes les mesures raisonnables doivent être prises pour que les données à caractère personnel qui sont inexactes, eu égard aux finalités pour lesquelles elles sont traitées, soient effacées ou rectifiées sans tarder (exactitude) ;</li>
                <li>Conservées sous une forme permettant l’identification des personnes concernées pendant une durée n’excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées ; les données à caractère personnel peuvent être conservées pour des durées plus longues dans la mesure où elles seront traitées exclusivement à des fins archivistiques dans l’intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques conformément à l’article 89, paragraphe 1, pour autant que soient mises en œuvre les mesures techniques et organisationnelles appropriées requises par le règlement afin de garantir les droits et libertés de la personne concernée (limitation de la conservation) ;</li>
                <li>Traitées de façon à garantir une sécurité appropriée des données à caractère personnel, y compris la protection contre le traitement non autorisé ou illicite et contre la perte, la destruction ou les dégâts d’origine accidentelle, à l’aide de mesures techniques ou organisationnelles appropriées (intégrité et confidentialité).</li>
            </ul>
            <p>Le traitement n’est licite que si, et dans la mesure où, au moins une des conditions suivantes est remplie :</p>
            <ul>
                <li>La personne concernée à consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques ;</li>
                <li>Le traitement est nécessaire à l’exécution d’un contrat auquel la personne concernée est partie ou à l’exécution de mesures précontractuelles prises à la demande de celle-ci ;</li>
                <li>Le traitement est nécessaire au respect d’une obligation légale à laquelle le responsable du traitement est soumis ;</li>
                <li>Le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d’une autre personne physique ;</li>
                <li>Le traitement est nécessaire à l’exécution d’une mission d’intérêt public ou relevant de l’exercice de l’autorité publique dont est investi le responsable du traitement ;</li>
                <li>Le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable de traitement ou par un tiers, à moins que ne prévalent les intérêts ou les libertés et droits fondamentaux de la personne concernée qui exigent une protection des données à caractère personnel, notamment lorsque la personne concernée est un enfant.</li>
            </ul>
            <p>Pour les résidents de l’État de Californie, cette politique de confidentialité vise à se conformer à la <i>California Consumer Privacy Act</i> (CCPA). S’il y a des incohérences entre ce document et la CCPA, la législation de l’État s’appliquera. Si nous constatons des incohérences, nous modifierons notre politique pour nous conformer à la loi pertinente.</p>
        </section>

    </div>
  )
}
