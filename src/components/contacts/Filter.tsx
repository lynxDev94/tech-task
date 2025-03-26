import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VisibilityIconWhite, Vector } from "@/assets";
import { RootState } from "@/state/store";
import { setFilters } from "@/state/contacts/contactsUiSlice";
import { FilterProps } from "./contacts.types";
import { getUniqueCities } from "./contacts.deps";
import Button from "../ui/Button";

const Filter = ({ allContacts }: FilterProps) => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.ui.filters);
  const [localFilters, setLocalFilters] = useState(filters);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    setCities(getUniqueCities(allContacts));
  }, [allContacts]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setLocalFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const applyFilters = () => {
    dispatch(setFilters(localFilters));
  };

  return (
    <div className="bg-[#1565C0]">
      <div className="w-[1440px] pt-[44px] pb-[69px] text-white text-left pl-[36px]">
        <div className="flex space-x-4 font-roboto items-center">
          <div className="relative w-[216px] h-[40px]">
            <label className="absolute -top-2 left-3 bg-[#1565C0] px-1 text-white text-sm text-[12px]">
              Name
            </label>
            <input
              type="text"
              value={localFilters.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full h-full border border-white hover:border-black bg-[#1565C0] text-white p-2 rounded outline-none"
            />
          </div>
          <div className="relative w-[216px] h-[40px]">
            <label className="absolute -top-2 left-2 bg-[#1565C0]  px-1 text-white text-sm text-[12px] z-10">
              City
            </label>
            <div className="relative h-full">
              <select
                value={localFilters.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="w-full h-full border border-white bg-[#1565C0] hover:border-black text-white px-3 pr-10 rounded outline-none appearance-none"
              >
                <option value="">All</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <img
                src={Vector}
                alt="Dropdown Arrow"
                className="absolute top-1/2 right-5 -translate-y-1/2 w-[10px] h-[5px] pointer-events-none"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2 ">
            <input
              type="checkbox"
              checked={localFilters.active}
              onChange={(e) => handleInputChange("active", e.target.checked)}
              className="peer relative appearance-none shrink-0 w-4 h-4 rounded-xs bg-[#1DE9B6] checked:bg-[#1DE9B6] cursor-pointer"
            />
            <span className="text-white">Show active</span>
            <svg
              className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-[#1565C0] outline-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <img src={VisibilityIconWhite} alt="visibility icon" />
          </div>
          <Button
            onClick={applyFilters}
            className="bg-[#1DE9B6] hover:bg-white text-black font-bold px-6 py-2 rounded-sm cursor-pointer"
          >
            FILTER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
