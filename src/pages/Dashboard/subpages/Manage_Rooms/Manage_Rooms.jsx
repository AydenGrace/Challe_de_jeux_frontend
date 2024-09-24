import React, { useEffect, useState } from "react";
import style from "./Manage_Rooms.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../../components/Buttons";
import toast from "react-hot-toast";
import { getRoomTags } from "../../../../apis/rooms";
import Uploader from "../../../../components/Uploader/Uploader";

export default function Manage_Rooms() {
  const [name, setName] = useState("");
  const [overview, setOverview] = useState("");
  const [duration, setDuration] = useState(60);
  const [difficulty, setDifficulty] = useState(1);
  const [basePrice, setBasePrice] = useState(24);
  const [tags, setTags] = useState([]);
  const [img, setImg] = useState("");
  const [dataBaseTags, setDataBaseTags] = useState([]);

  useEffect(() => {
    const getAllTags = async () => {
      const response = await getRoomTags();
      setDataBaseTags(response);
    };
    getAllTags();
  }, []);

  useEffect(() => {
    console.log(img);
  }, [img]);

  async function submit(e) {
    e.preventDefault();
    const objectToSend = {
      name,
      overview,
      duration,
      difficulty,
      basePrice,
      tags,
      img,
    };
    console.log(objectToSend);
  }

  const tagCheck = (e) => {
    console.log(e);
    if (e.target.checked) {
      setTags([...tags, e.target.value]);
    } else {
      let tmp = [...tags];
      tmp = tmp.filter((item) => item !== e.target.value);
      setTags([...tmp]);
    }
  };

  return (
    <section className={`d-flex flex-column align-items-center h-100 w-100`}>
      <div className="headersep"></div>
      <h1>Gestion des Salles</h1>
      <div className="d-flex w-100 flex-column p-10">
        <div className="d-flex w-100 flex-column p-10 card">
          <h2 className="text-align-left mb-10">Ajouter une salle</h2>
          <form onSubmit={(e) => submit(e)}>
            <div className="w-100 d-flex gap-10 flex-wrap justify-content-sb">
              <div className="w-100 d-flex flex-column w-100 maxw-400 gap-10">
                <div className="d-flex align-items-center gap-10 ">
                  <label htmlFor="NewRoom_Name">Nom</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="NewRoom_Name"
                    placeholder="Nom de la salle"
                    className={`d-flex w-100 mw-300 maxw-400`}
                    required
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="NewRoom_Overview">Description</label>
                  <textarea
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                    type="text"
                    id="NewRoom_Overview"
                    placeholder="Description"
                    className={`d-flex w-100 mw-300 maxw-400 input`}
                    required
                  />
                </div>
                <div className="d-flex flex-column">
                  <p className="no-margin">Image de la salle</p>
                  <Uploader type="image" visualization={(url) => setImg(url)} />
                </div>
              </div>

              <div className="w-100 d-flex flex-column w-100 maxw-400">
                <div className="d-flex align-items-center gap-10 ">
                  <label htmlFor="NewRoom_Difficulty">Difficulté</label>
                  <input
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    type="number"
                    id="NewRoom_Difficulty"
                    min={1}
                    max={5}
                    placeholder="1"
                    className={`d-flex maxw-400`}
                    style={{ maxWidth: "50px" }}
                    required
                  />
                  <span>/5</span>
                </div>
                <div className="d-flex align-items-center gap-10 ">
                  <label htmlFor="NewRoom_Price">
                    Prix de base par personne
                  </label>
                  <input
                    value={basePrice}
                    onChange={(e) => setBasePrice(e.target.value)}
                    type="number"
                    id="NewRoom_Price"
                    min={1}
                    placeholder="1"
                    className={`d-flex maxw-400`}
                    style={{ maxWidth: "50px" }}
                    required
                  />
                  <span>€</span>
                </div>
                <div className="d-flex align-items-center gap-10 ">
                  <label htmlFor="NewRoom_Duration">Durée</label>
                  <input
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    type="number"
                    id="NewRoom_Duration"
                    min={1}
                    placeholder="1"
                    className={`d-flex maxw-400`}
                    style={{ maxWidth: "60px" }}
                    required
                  />
                  <span>minutes</span>
                </div>
                <div className="d-flex flex-column mt-10">
                  <p className="no-margin">Catégories de jeu</p>
                  <div className="d-flex w-100 flex-column p-10">
                    {dataBaseTags.map((tag, idx) => (
                      <div className="d-flex gap-10 pointer">
                        <input
                          type="checkbox"
                          id={`Tag_${idx}`}
                          value={tag._id}
                          className="pointer"
                          onChange={(e) => tagCheck(e)}
                        />
                        <label htmlFor={`Tag_${idx}`} className="pointer">
                          {tag.content}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="f-center p-10">
              <Button message="Valider" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
