import { DataTable } from "@/components/datatable";
import { columns, type Payment } from "@/components/datatable/columns";

function getData(): Payment[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      name: "pending",
      value: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      name: "pending",
      value: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 200,
      name: "pending",
      value: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      name: "pending",
      value: "m@example.com",
    },
  ];
}

export function CurrencyPage() {
  const data = getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
