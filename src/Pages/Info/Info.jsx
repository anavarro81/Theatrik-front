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
    <div className="parent p-2 border border-black border-solid rounded-lg mt-10 flex items-center justify-center inline-block max-w-2xl m-auto flex-col md:flex-row">
      <div className="left mb-10 m-auto pl-4 pr-4 flex-col w-72 sm:w-112 break-all">
        <h2>
          <b>{play.title}</b>
        </h2>
        <h3 className="text-[12px] leading-4 mb-1">{play.synopsis}</h3>

        <h3 className="text-xs leading-3 mb-1">
          <b>Intérpretes:</b>
        </h3>
        <h4 className="mb-1 text-[10px] mb-1">{play.actors}</h4>

        <h3 className="text-xs leading-3 mb-1">
          <b>Dirección de escena avión:</b>
        </h3>
        <h4 className="mb-1 text-[10px] mb-1">{play.director}</h4>

        <h3 className="text-xs leading-3 mb-1">
          <b>Escenografía y vestuario:</b>
        </h3>
        <h4 className="mb-1 text-[10px] mb-1">{play.company_name}</h4>

        <h3 className="text-xs leading-3 mb-1">
          <b>Cartel:</b>
        </h3>
        <h4 className="mb-1 text-[10px] mb-1 whitespace-break-spaces">
          {play.cartel}
        </h4>

        <div className="box border-sm border border-black rounded-lg w-52 h-auto mx-auto text-[9px] p-1 mt-4">
          <p className="font-bold inline ml-1 text-xs">
            Acerca de {play.company_name}
          </p>
          <h2 className={h2}>
            <img
              src={GlobeIcon}
              alt="Globe icon"
              className="inline-block h-4 w-3 mr-2"
            />
            {company.web}
          </h2>
          <h2 className={h2}>
            <img
              src={MailIcon}
              alt="Mail icon"
              className="inline-block h-4 w-3 mr-2"
            />
            {company.email}
          </h2>
          <h2 className={h2}>
            <img
              src={SmartphoneIcon}
              alt="Smartphone icon"
              className="inline-block h-4 w-3 mr-2"
            />
            {company.phone}
          </h2>
        </div>
      </div>

      <div className="right m-auto pr-2 pl-4 flex-col w-72 sm:w-112">
        <img
          src={play.cartel}
          className="rounded-2xl h-full mt-2 min-w-52"
        ></img>
        <div className="box2 border-sm border border-black rounded-lg w-52 h-auto mx-auto mb-8 text-[9px] p-1 mt-10 ">
          <div>
            <p className="font-bold inline text-xs ml-1">Title:</p>
            <h2 className={h2}>
              <img
                src={MapIcon}
                alt="Map icon"
                className="inline-block h-4 w-3 mr-2"
              />
              {play.place}
            </h2>
            <h2 className={h2}>
              <img
                src={CalendarDateIcon}
                alt="Calendar icon"
                className="inline-block h-4 w-3 mr-2"
              />
              {play.date.substring(0, 10)}
            </h2>

            <div className="flex items-center">
              <h2 className={h2}>
                <img
                  src={ClockIcon}
                  alt="Clock icon"
                  className="inline-block h-4 w-3 mr-2"
                />
                <span>{play.time}</span>
              </h2>
              <Link
                to={`/booking/${play._id}`}
                className="bg-orange-500 w-14 h-5 hover:bg-blue-700 text-white font-bold flex items-center justify-center py-2 px-2 rounded ml-20"
              >
                Reservar
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};


export default Info;
