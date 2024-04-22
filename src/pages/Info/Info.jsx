import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import GlobeIcon from "../../components/atoms/Icon/globe.svg";
import MailIcon from "../../components/atoms/Icon/mail.svg";
import SmartphoneIcon from "../../components/atoms/Icon/smartphone.svg";
import MapIcon from "../../components/atoms/Icon/map.svg";
import CalendarDateIcon from "../../components/atoms/Icon/calendar-date.svg";
import ClockIcon from "../../components/atoms/Icon/clock.svg";
import "./styles.css";

const Info = () => {
  const play = useLoaderData();
  const company = play.company[0];

  const h2 = "text-1 mb-px ml-1";

  return (
    <div className="parent flex row mx-auto mt-10 border-sm border border-black rounded-2xl max-w-max inline-block mb-0 relative w-96">
      <div className="left pt-4 pl-4 mx-2 w-72 h-96 flex-col overflow-y-scroll overflow-y-hidden break-words">
        <h2>
          <b>{play.title}</b>
        </h2>
        <h3 className="text-[10px] leading-4 mb-1">{play.synopsis}</h3>

        <h3 className="text-xs leading-3 mb-1">
          <b>Intérpretes:</b>
        </h3>
        <h4 className="mb-1 text-[9px] mb-1">{play.actors}</h4>

        <h3 className="text-xs leading-3 mb-1">
          <b>Dirección de escena avión:</b>
        </h3>
        <h4 className="mb-1 text-[9px] mb-1">{play.director}</h4>

        <h3 className="text-xs leading-3 mb-1">
          <b>Escenografía y vestuario:</b>
        </h3>
        <h4 className="mb-1 text-[9px] mb-1">{play.company_name}</h4>

        <h3 className="text-xs leading-3 mb-1">
          <b>Cartel:</b>
        </h3>
        <h4 className="mb-1 text-[9px] mb-1">{play.cartel}</h4>

        <div className="box border-sm border border-black rounded-lg w-52 h-auto mx-auto mb-2 text-[9px] p-1">
          <p className="font-bold inline ml-1">Acerca de {play.company_name}</p>
          <h2 className={h2}>
            <img
              src={GlobeIcon}
              alt="Globe icon"
              className="inline-block h-3 w-3 mr-2"
            />
            {company.web}
          </h2>
          <h2 className={h2}>
            <img
              src={MailIcon}
              alt="Mail icon"
              className="inline-block h-3 w-3 mr-2"
            />
            {company.email}
          </h2>
          <h2 className={h2}>
            <img
              src={SmartphoneIcon}
              alt="Smartphone icon"
              className="inline-block h-3 w-3 mr-2"
            />
            {company.phone}
          </h2>
        </div>
      </div>

      <div className="right pt-4 pl-4 mx-2 w-72 h-96 flex-col flex items-center overflow-y-scroll overflow-y-hidden break-words flex-col">
        <img src={play.cartel} className="rounded-2xl mx-auto w-52 mt-2"></img>
        <div className="box2 absolute flex flex-row bottom-0 w-52 h-auto mx-auto mb-2 border-sm border border-black rounded-lg text-[9px] p-1">
          <div>
            <p className="font-bold inline ml-1">Title:</p>
            <h2 className={h2}>
              <img
                src={MapIcon}
                alt="Map icon"
                className="inline-block h-3 w-3 mr-2"
              />
              {play.place}
            </h2>
            <h2 className={h2}>
              <img
                src={CalendarDateIcon}
                alt="Calendar icon"
                className="inline-block h-3 w-3 mr-2"
              />
              {play.date.substring(0, 10)}
            </h2>

            <h2 className={h2}>
              <img
                src={ClockIcon}
                alt="Clock icon"
                className="inline-block h-3 w-3 mr-2"
              />
              {play.time}
            </h2>
          </div>
          <div>
            <div className="flex">
              <Link to={`/booking/${play._id}`}>Reservar</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Info;
