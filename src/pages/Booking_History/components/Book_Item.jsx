import React from 'react';
import style from './Book_Item.module.scss';
import { Link } from 'react-router-dom';
import Dropdown from '../../../components/dropdown/Dropdown';

export default function Book_Item({book}) {
    const getHours = () =>{
        let stringToReturn = "";
        new Date(book.session.date).getHours() < 10
          ? stringToReturn=`0${new Date(book.session.date).getHours()}`
          : stringToReturn=`${new Date(book.session.date).getHours()}`;
          stringToReturn+='H';
        new Date(book.session.date).getMinutes() < 10
          ? stringToReturn+=`0${new Date(book.session.date).getMinutes()}`
          : stringToReturn+=`${new Date(book.session.date).getMinutes()}`;

        return stringToReturn;
    }

    const getCompressedDate = () =>{
        let stringToReturn = "";
        new Date(book.session.date).getDate() < 10
          ? stringToReturn=`0${new Date(book.session.date).getDate()}`
          : stringToReturn=`${new Date(book.session.date).getDate()}`;
          stringToReturn+='/';
        new Date(book.session.date).getMonth()+1 < 10
          ? stringToReturn+=`0${new Date(book.session.date).getMonth()+1}`
          : stringToReturn+=`${new Date(book.session.date).getMonth()+1}`;
          stringToReturn+='/';
          stringToReturn+=new Date(book.session.date).getFullYear();
        return stringToReturn;
    }

    const getDay = () => {
        switch (new Date(book.session.date).getDay()) {
            case 0:
              return "Dim.";
            case 1:
                return "Lun.";
            case 2:
                return "Mar.";
            case 3:
                return "Mer.";
            case 4:
                return "Jeu.";
            case 5:
                return "Ven.";
            case 6:
                return "Sam.";
            default:
              break;
          }
    }

    const getMonth = () => {
        switch (new Date(book.session.date).getMonth()) {
            case 0:
              return "Janvier";
            case 1:
                return "Février";
            case 2:
                return "Mars";
            case 3:
                return "Avril";
            case 4:
                return "Mai";
            case 5:
                return "Juin";
            case 6:
                return "Juillet";
            case 7:
                return "Août";
            case 8:
                return "Septembre";
            case 9:
                return "Octobre";
            case 10:
                return "Novembre";
            case 11:
                return "Décembre";
            default:
              break;
          }
    }

    const getDateString = () => {
        return `${getDay()} ${new Date(book.session.date).getDate()} ${getMonth()} ${new Date(book.session.date).getFullYear()}`;
    };

    const getHourString = () => {
        return `${getHours()}`;
    };


  return (
    <Dropdown text={book.session.room.name} date={`${getCompressedDate()} à ${getHourString()}`}>
        <div className='w-100 d-flex p-10'>
            <div className='d-flex flex-fill flex-column text-left'>
                <p><strong>Date : </strong>{getDateString()}</p>
                <p><strong>Heure : </strong>{getHourString()}</p>
                <p><strong>Nombre de joueurs : </strong>{book.nbPlayers}</p>
                <p><strong>Total : </strong>{book.price}€</p>
                <p><strong>Status : </strong>{book.isPayed ? "Réglé" : "Paiement en attente"}</p>
            </div>
            <div className='d-flex flex-fill flex-column'>
            </div>
            
        </div>
    </Dropdown>
    // <article className={`d-flex w-100 card ${style.item}`}>
       
    //    <div className='d-flex align-items-center flex-fill '> à ${getHourString()}`}</div>
    //    <div className='f-center flex-fill'>{book.session.room.name}</div>
    //    <div className='d-flex justify-content-end flex-fill'><Link to={`/room/${book.session.room._id}`} className='btn-nav btn-primary'>Voir la salle</Link></div>
    // </article>
  )
}
