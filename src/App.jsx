/* eslint-disable no-unused-vars */
import { Suspense, useState } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import { pageContext } from "./context/context";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import styles from "./App.module.scss";
import Connect from "./pages/Popups/Connect/Connect";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  const [connectDisplay, setConnectdisplay] = useState(false);
  return (
    <>
      <Header connectPopupDisplay={setConnectdisplay} />

      <div className="d-flex w-100 flex-column mh-100">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Socials />
      {connectDisplay && <Connect setDisplay={setConnectdisplay} />}
      <ScrollToTop
        className={`${styles.up}`}
        smooth
        component={<i className={`fa-solid fa-angles-up fa-2xl`}></i>}
      />
      <Footer handlePage={handlePage} />
      <ScrollRestoration />
    </>
  );
}

export default App;
