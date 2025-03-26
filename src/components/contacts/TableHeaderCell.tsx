import { Separator, ArrowUpward } from "@/assets";
import { TableHeaderCellProps } from "./contacts.types";

const SortIcon = ({ isDescending }: { isDescending: boolean }) => (
  <img
    src={ArrowUpward}
    alt="Sort icon"
    className={`w-[20px] h-[20px] transition-transform duration-200 ${
      isDescending ? "rotate-180" : ""
    }`}
  />
);

const TableHeaderCell = ({
  label,
  sortable = false,
  isSorted = false,
  direction = "asc",
  onClick,
  className = "",
  labelStyle = "",
  showSeparator = true,
}: TableHeaderCellProps) => {
  const isDescending = isSorted && direction === "desc";

  return (
    <th className={`py-4 pl-4 w-[175px] ${className}`}>
      <div className="flex items-center justify-between whitespace-nowrap">
        <div className={`flex items-center space-x-2 ${labelStyle}`}>
          <span>{label}</span>

          {sortable && (
            <button
              type="button"
              onClick={onClick}
              aria-label={`Sort by ${label}`}
              className="p-0 w-5 h-5 flex items-center justify-center focus:outline-none"
            >
              <SortIcon isDescending={isDescending} />
            </button>
          )}
        </div>

        {showSeparator && <img src={Separator} alt="separator image" className="ml-2" />}
      </div>
    </th>
  );
};

export default TableHeaderCell;
