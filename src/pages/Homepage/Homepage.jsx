import Contact from "./components/contact/Contact";
import Informations from "./components/informations/Informations";
import Landing from "./components/landing/Landing";
import Residents from "./components/residents/Residents";

export default function Homepage({ handlePage }) {
  return (
    <>
      <Landing />
      <Residents togglePage={handlePage} />
      <Informations />
      <Contact />
    </>
  );
}
