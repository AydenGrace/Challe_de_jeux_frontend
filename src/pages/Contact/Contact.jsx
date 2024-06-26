/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ContactCard from "../../components/ContactCard";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section id="Contact" className={`f-center h-100 ${styles.Contact}`}>
      <ContactCard isTitle={true} />
    </section>
  );
}
