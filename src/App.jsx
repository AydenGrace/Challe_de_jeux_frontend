/* eslint-disable no-unused-vars */
import { Suspense, useState } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Socials from "./components/Socials/Socials";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import styles from "./App.module.scss";
import Connect from "./pages/Popups/Connect/Connect";
import { Outlet, ScrollRestoration } from "react-router-dom";
import UserProvider from "./Providers/UserProvider";
import CookieConsent from "react-cookie-consent";
import { Toaster } from "react-hot-toast";

function App() {
  const [connectDisplay, setConnectdisplay] = useState(false);
  return (
    <>
      <UserProvider>
        <Header connectPopupDisplay={setConnectdisplay} />

        <main className="d-flex w-100 flex-column mh-100">
          <Outlet />
          <Footer />
        </main>
        <Socials />
        {connectDisplay && <Connect setDisplay={setConnectdisplay} />}
        <ScrollToTop
          className={`${styles.up}`}
          smooth
          component={<i className={`fa-solid fa-angles-up fa-2xl`}></i>}
        />

        <ScrollRestoration />
        <CookieConsent
          enableDeclineButton
          location="bottom"
          buttonText="Accepter"
          declineButtonText="Refuser"
          cookieName="Challe_de_jeux_Cookie"
          style={{
            background: "#f3eee1",
            color: "#000",
            borderTop: "1px solid #312219",
          }}
          buttonClasses="btn-nav btn-primary"
          buttonStyle={{
            color: "#fff",
            backgroundColor: "#a97d4d",
            borderRadius: "10px",
            fontSize: "1rem",
          }}
          declineButtonClasses="btn-nav btn-primary"
          declineButtonStyle={{
            color: "#fff",
            backgroundColor: "#312219",
            borderRadius: "10px",
            fontSize: "1rem",
          }}
          expires={150}
        >
          Ce site internet utilise des cookies conformément à sa{" "}
          <a href="/privacy">Politique de confidentialité</a>.
        </CookieConsent>
      </UserProvider>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;
