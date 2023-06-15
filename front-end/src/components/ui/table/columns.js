//pages/columns.ts
import { Chip } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";

export const columns= [
  
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      return (
        <Chip
          label={row.getValue()}
          size="large"
          color={row.getValue() === "active" ? "primary" : "default"}
        />
      );
    },
  },
];