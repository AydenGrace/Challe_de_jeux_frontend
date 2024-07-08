import React, { useEffect, useState } from "react";
import Button from "../../components/Buttons";
import styles from "./Cat.module.scss";
import { Link, useParams } from "react-router-dom";
import { getCatById } from "../../apis/cats";

export default function Cat() {
  const { id } = useParams();
  const [cat, setCat] = useState(null);

  useEffect(() => {
    const getCatInformations = async () => {
      const temp = await getCatById(id);
      console.log(temp);
      setCat(temp);
    };
    getCatInformations();
  }, []);

  const handleback = () => {
    history.back();
  };
  return (
    <>
      <div className="headersep"></div>
      {cat ? (
        <div className={`${styles.page}`}>
          <a className={`d-flex ${styles.backArea}`} onClick={handleback}>
            <i className={`fa-solid fa-circle-arrow-left fa-2xl c-p`}></i>
            <p>Retour</p>
          </a>
          <h1 className={`d-flex justify-content-start ${styles.catName}`}>
            {cat.name}
          </h1>
          <section className={`d-flex w-100 ${styles.infos}`}>
            <div className={`f-center flex-column ${styles.LeftCol}`}>
              <div
                className={`f-center w-100 flex-wrap ${styles.LeftColumnArea}`}
              >
                {cat.coat ? (
                  <div
                    className={`d-flex flex-column f-center ${styles.infoColumn}`}
                  >
                    <h2>Race</h2>
                    <div className={`${styles.InfoBtn}`}>
                      <p>{cat.pedigree.content}</p>
                    </div>
                    <h2>Robe</h2>
                    {cat.coat.map((item, idx) => (
                      <div key={`Coat_${idx}`} className={`${styles.InfoBtn}`}>
                        <p>{item.content}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {cat.personalities ? (
                  <div
                    className={`d-flex flex-column f-center ${styles.infoColumn}`}
                  >
                    <h2>Personnalité</h2>
                    {cat.personalities.map((item, idx) => (
                      <div
                        key={`personality_${idx}`}
                        className={`${styles.InfoBtn}`}
                      >
                        <p>{item.content}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {cat.compatibilities.length ? (
                  <div
                    className={`d-flex flex-column f-center ${styles.infoColumn}`}
                  >
                    <h2>Compatibilités</h2>
                    {cat.compatibilities.map((item, idx) => (
                      <div
                        key={`Compatibility_${idx}`}
                        className={`${styles.InfoBtn}`}
                      >
                        <p>{item.content}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {cat.diseases.length ? (
                  <div
                    className={`d-flex flex-column f-center ${styles.infoColumn}`}
                  >
                    <h2>Maladies</h2>
                    {cat.diseases.map((item, idx) => (
                      <div
                        key={`Disease_${idx}`}
                        className={`${styles.InfoBtn}`}
                      >
                        <p>{item.content}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className={`d-flex w-100`}>
                <div
                  className={`d-flex w-100 justify-content-start align-items-center ${styles.pad} c-p900`}
                >
                  <i className="fa-solid fa-calendar"></i>
                  <p>{new Date(cat.born_date).toLocaleDateString()}</p>
                </div>

                {cat.arrival_date && (
                  <div
                    className={`d-flex w-100 justify-content-start align-items-center ${styles.pad} c-p900`}
                  >
                    <i className="fa-solid fa-home"></i>
                    <p>{new Date(cat.arrival_date).toLocaleDateString()}</p>
                  </div>
                )}

                {cat.adopted_date && (
                  <div
                    className={`d-flex w-100 justify-content-start align-items-center ${styles.pad} c-p900`}
                  >
                    <i className="fa-solid fa-people-roof"></i>
                    <p>{new Date(cat.adopted_date).toLocaleDateString()}</p>
                  </div>
                )}

                {cat.death_date && (
                  <div
                    className={`d-flex w-100 justify-content-start align-items-center ${styles.pad} c-p900`}
                  >
                    <i className="fa-solid fa-skull"></i>
                    <p>{new Date(cat.death_date).toLocaleDateString()}</p>
                  </div>
                )}
              </div>
            </div>
            <div className={`f-center p-10 ${styles.RightColumn}`}>
              <img src={cat.img} alt={`${cat.name} image`} />
            </div>
          </section>
          <section className={`d-flex flex-column ${styles.adopt}`}>
            <h2>Modalités d'adoption</h2>
            <p>
              Tous nos résidents sont disponibles à l'adoption, sous certaines
              conditions :
            </p>
            <ul>
              <li>
                <p>
                  Toute personne qui souhaite adopter un animal doit être
                  majeure.
                </p>
              </li>
              <li>
                <p>Une décision d'adoption doit être mûrement réfléchie.</p>
              </li>
              <li>
                <p>Une participation financière vous sera demandée.</p>
              </li>
              <li>
                <p>
                  Toute adoption se déroule dans un premier temps en tant que
                  famille d'accueil.
                </p>
              </li>
              <li>
                <p>Un contrat entre les partis sera établi.</p>
              </li>
              <li>
                <p>
                  Nos animaux ont un passé, il est à prendre en compte lors de
                  leur adoption.
                </p>
              </li>
            </ul>
            <div className="w-100 p-10">
              <Link to={"/contact"}>
                <Button message="Nous contacter" />
              </Link>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
