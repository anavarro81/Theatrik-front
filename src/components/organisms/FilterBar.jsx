import AsociationFilter from "../molecules/AsociationFilter";
import Links from "../molecules/Links";
import CalendarFilter from "../molecules/CalendarFilter";
import GenderFilter from "../molecules/GenderFilter";

export default function FilterBar() {
  
  return (
    <div className="grid grid-rows-1">
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
