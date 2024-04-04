import AsociationFilter from "../molecules/AsociationFilter";
import Links from "../molecules/Links";
import CalendarFilter from "../molecules/CalendarFilter";
import GenderFilter from "../molecules/GenderFilter";



const StyledFiltersContainer = ({ children }) => {
  return <div className="bg-gray-300 p-4 rounded-md shadow-md">{children}</div>;
};



export default function FilterBar() {
  return (
    <div className="grid grid-rows-2">
      <div className="bg-gray-200">
        <Links />
      </div>
      <div className="bg-gray-300 flex justify-around ">
        <AsociationFilter />
        <CalendarFilter />
        <GenderFilter />
      </div>
    </div>
  );
}
