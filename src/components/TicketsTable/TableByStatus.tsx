import { Dispatch, useState } from "react";
import { Ticket } from "@/types/Ticket";
import { CaretRight, FunnelSimple } from "@phosphor-icons/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import defaultData from "./data.json";

type Props = {
  status: string;
  columns: ColumnDef<Ticket>[];
  sorting: SortingState;
  setSorting: Dispatch<React.SetStateAction<SortingState>>;
};

export function TableByStatus({ status, columns, sorting, setSorting }: Props) {
  const data: Ticket[] = defaultData;
  const [showBody, toggleBody] = useState(false);

  const table = useReactTable({
    data,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  function handleToggleBody() {
    toggleBody((currentState) => !currentState);
  }

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                <div className="flex items-center">
                  <button className="cursor-pointer" onClick={handleToggleBody}>
                    <CaretRight />
                  </button>

                  {header.column.id === "status" ? (
                    <p>
                      {status}({data.length})
                    </p>
                  ) : (
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )
                  )}
                  <button
                    onClick={header.column.getToggleSortingHandler()}
                    className="cursor-pointer"
                  >
                    <FunnelSimple />
                  </button>
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={showBody ? "table-row-group" : "hidden"}>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
