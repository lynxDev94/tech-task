import { ColumnDropdownProps } from "../contacts.types";

export const ColumnDropdown = ({
  visibleColumns,
  setVisibleColumns,
}: ColumnDropdownProps) => {
  return (
    <div className="overflow-hidden absolute top-[60px] right-0 bg-white shadow-md w-[150px] z-10 text-sm">
      {Object.entries(visibleColumns).map(([key, value]) => (
        <label
          key={key}
          className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer relative border border-b-black/10 border-b-2 h-[46px] "
        >
          <input
            type="checkbox"
            className="peer appearance-none w-4 h-4 rounded-xs bg-[#1DE9B6] checked:bg-[#1DE9B6] cursor-pointer"
            checked={value}
            onChange={() =>
              setVisibleColumns((prev) => ({
                ...prev,
                [key as keyof typeof prev]: !prev[key as keyof typeof prev],
              }))
            }
          />
          <svg
            className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-[white] outline-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>

          <span className="ml-6 capitalize text-black">{key}</span>
        </label>
      ))}
    </div>
  );
};
