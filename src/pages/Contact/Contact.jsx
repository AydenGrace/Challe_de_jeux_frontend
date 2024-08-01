/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ContactCard from "../../components/ContactCard/ContactCard";
import styles from "./Contact.module.scss";
import useDocumentTitle from "../../components/UseDocumentTitle/UseDocumentTitle";

export default function Contact() {
  useDocumentTitle("Contact");
  return (
    <section id="Contact" className={`f-center h-100 ${styles.Contact}`}>
      <ContactCard isTitle={true} />
    </section>
  );
}
