import "@/styles/global.css";
import { TicketsTable } from "@/components/TicketsTable";

export function App() {
  return (
    <div className="h-screen bg-zinc-100">
      <div className="container mx-auto px-5 pt-10">
        <h1 className="mb-5 text-2xl">React Table</h1>
        <TicketsTable />
      </div>
    </div>
  );
}
