import { useMemo, useState } from "react";
import { Ticket } from "@/types/Ticket";
import { ColumnDef, SortingState } from "@tanstack/react-table";
import { format } from "date-fns";
import defaultData from "./data.json";
import { TableByStatus } from "./TableByStatus";

export function TicketsTable() {
  const data: Ticket[] = defaultData;
  const [sorting, setSorting] = useState<SortingState>([]);
  const columns = useMemo<ColumnDef<Ticket>[]>(
    () => [
      {
        accessorKey: "status",
        header: () => "Status",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "attendant.name",
        header: () => "Responsável do atendimento",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "description",
        header: () => "Descrição",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "sector.acronym",
        header: () => "Unidade abate",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "supplier.type",
        header: () => "Tipo fornecedor",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "created_at",
        header: () => "Data",
        cell: (info) => format(info.getValue(), "dd/MM/yyyy"),
      },
    ],
    [],
  );

  return (
    <div>
      <TableByStatus
        status="Aberto"
        columns={columns}
        sorting={sorting}
        setSorting={setSorting}
      />
      <TableByStatus
        status="Em andamento"
        columns={columns}
        sorting={sorting}
        setSorting={setSorting}
      />
    </div>
  );
}
