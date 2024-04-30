/* eslint-disable no-unused-vars */
import { useState } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import { pageContext } from "./context/context";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import styles from "./App.module.scss";

function App() {
  const [page, setPage] = useState(0);

  function SwitchPage(Page) {
    switch (Page) {
      case 5: //Connect
        break;
      case 4: //Contact
        return <Contact />;
      case 3: //Nos Résidents
        break;
      case 2: //Nos Salles
        break;
      case 1: //Concept
        break;
      case 0: //Accueil
      default:
        return <Homepage handlePage={handlePage} />;
    }
  }

  function handlePage(x) {
    setPage(x);
  }
  return (
    <>
      <Header handlePage={handlePage} />
      <div className="d-flex w-100 flex-column mh-100">{SwitchPage(page)}</div>
      <Socials />
      <ScrollToTop
        className={`${styles.up}`}
        smooth
        component={<i className={`fa-solid fa-angles-up fa-2xl`}></i>}
      />
      <Footer handlePage={handlePage} />
    </>
  );
}

export default App;
