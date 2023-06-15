import { Box } from "@mui/material";
import React from "react";
import { columns } from "../components/ui/table/columns";
import { Table } from "../components/ui/table/table";
const Samisams=()=>{
return( 
    <Box padding={6}>{ <Table data={columns} columns={columns} />}</Box>
)
}
export default Samisams;