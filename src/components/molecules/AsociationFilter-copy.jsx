import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { usePlays } from "../../Providers/PlaysProvider";

//Cambiar por asociaciones en la api
const people = [
  {
    id: 1,
    name: "Wade Cooper",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Devon Webb",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Tom Cook",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Tanya Fox",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Hellen Schmidt",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "Caroline Schultz",
    avatar:
      "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    name: "Mason Heaney",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    name: "Claudie Smitham",
    avatar:
      "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    name: "Emil Schaefer",
    avatar:
      "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AsociationFilter() {
  const [selected, setSelected] = useState(people[3]);
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <div>
            {/* <Listbox.Label className=" mb-2 font-medium leading-6 text-slate-500 h-[rem] flex items-center justify-center">
              Asociación
            </Listbox.Label> */}
            <p className="font-medium leading-6 text-slate-500 h-[0rem] flex items-center justify-center">
              Asociación
            </p>

            <div className="relative my-3">
              <Listbox.Button className="relative border border-gray-300 rounded w-full h-[40px] p-0 cursor-default bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <img
                    src={selected.avatar}
                    alt=""
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <img
                              src={person.avatar}
                              alt=""
                              className="h-5 w-5 flex-shrink-0 rounded-full"
                            />
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {person.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        )}
      </Listbox>
    </div>
  );
}

//--------------------------------------------------------------------------


// import React, { useEffect } from "react";
// import { usePlays } from "../../Providers/PlaysProvider";

// const PlaysFilter = () => {
//   const [plays, getPlays, searchPlay, filteredPlays] = usePlays();

//   useEffect(() => {
//     // Al montar el componente, obtenemos las obras de teatro
//     getPlays();
//   }, []);

//   const handleSearch = (e) => {
//     const searchTerm = e.target.value.trim();
//     // Filtramos las obras de teatro por el nombre de la empresa
//     searchPlay({ searchTerm: "company_name", searchFor: searchTerm });
//   };

//   return (
//     <div>
//       <p>Buscar por nombre de empresa:</p>
//       <input type="text" onChange={handleSearch} />
//       <div className="plays-list">
//         {filteredPlays.map((item) => (
//           <div key={item._id} className="play-item">
//             <img src={item.cartel} alt={item.company_name} />
//             <p>{item.company_name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PlaysFilter;


//----------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { usePlays } from "../../Providers/PlaysProvider";

// const PlaysFilter = () => {
//   const [plays, getPlays, searchPlay, filteredPlays] = usePlays();
//   const [selectedPlay, setSelectedPlay] = useState("");

//   useEffect(() => {
//     // Al montar el componente, obtenemos las obras de teatro
//     getPlays();
//   }, []);

//   const handleSearch = (e) => {
//     const searchTerm = e.target.value.trim();
//     // Filtramos las obras de teatro por el nombre de la empresa
//     searchPlay({ searchTerm: "company_name", searchFor: searchTerm });
//   };

//   const handleSelectChange = (e) => {
//     setSelectedPlay(e.target.value);
//   };

//   return (
//     <div>
//       <p>Seleccionar obra de teatro:</p>
//       <select value={selectedPlay} onChange={handleSelectChange}>
//         <option value="">Seleccione una obra de teatro</option>
//         {filteredPlays.map((play) => (
//           <option key={play._id} value={play._id}>
//             {play.company_name}
//           </option>
//         ))}
//       </select>
//       <div className="plays-list">
//         {selectedPlay && (
//           <div className="play-item">
//             <img
//               src={filteredPlays.find((play) => play._id === selectedPlay).cartel}
//               alt={filteredPlays.find((play) => play._id === selectedPlay).company_name}
//             />
//             <p>
//               {filteredPlays.find((play) => play._id === selectedPlay).company_name}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PlaysFilter;
