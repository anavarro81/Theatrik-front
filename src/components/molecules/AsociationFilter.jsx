import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { usePlays } from "../../Providers/PlaysProvider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AsociationFilter({ children }) {
  const [selected, setSelected] = useState(null);
  const { plays, getPlays, searchPlayAsociation } = usePlays();
  const searchParams = { searchTerm: "", searchFor: "" };
  const [selectedCompany, setSelectedCompany] = useState("");

  const handleCompany = (busqueda) => {
    // console.log(" busqueda > ", busqueda);
    // console.log("He cambiado de opción");

    searchParams.searchTerm = "company_name";
    searchParams.searchFor = busqueda
    // searchParams.searchFor = "cualquiera";
    // console.log("searchParams >> ", searchParams);
    searchPlayAsociation(searchParams);
  };
  // console.log("selectedCompany >> ", selectedCompany);

  //  llamar a la función getPlays cuando el componente se monta por primera vez
  useEffect(() => {
    getPlays();
  }, []);

  // console.log("plays en asociacion: ", plays);

  // Mapear los datos fuera del componente
  const playsList = plays.map((play) => (
    <>
      <Listbox.Option
        key={play._id}
        className={({ active }) =>
          classNames(
            active ? "bg-indigo-600 text-white" : "text-gray-900",
            "relative cursor-default select-none py-2 pl-3 pr-9"
          )
        }
        // esto hace que se compruebe que asociacion esta seleccionada para poner el tick y el estilo apropiado
        value={play.company_name}
      >
        {({ selected, active }) => (
          <>
            <div className="flex items-center">
              {/*muesta la img dentro del selector */}
              <img
                src={play.cartel}
                alt=""
                className="h-5 w-5 flex-shrink-0 rounded-full"
              />
              <span
                className={classNames(
                  selected ? "font-semibold" : "font-normal",
                  "ml-3 block truncate"
                )}
              >
                {/*muesta el nombre dentro del selector */}
                {setSelected(play.company_name[0])}
                {play.company_name}
              </span>
            </div>
            {selected ? (
              <span
                className={classNames(
                  active ? "text-white" : "text-indigo-600",
                  "absolute inset-y-0 right-0 flex items-center pr-4"
                )}
              >
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            ) : null}
          </>
        )}
      </Listbox.Option>
    </>
  ));

  return (
    <div>
      <Listbox value={selectedCompany} onChange={handleCompany}>
        {({ open }) => (
          <div>
            <p className="font-medium leading-6 text-slate-500 h-[0rem] flex items-center justify-center">
              Asociación
            </p>
            <div className="relative my-3">
              <Listbox.Button className="relative border border-gray-300 rounded w-full h-[40px] p-0 cursor-default bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
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
                  {playsList}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        )}
      </Listbox>
    </div>
  );
}