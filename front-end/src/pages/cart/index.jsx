import React, { useState } from "react"
import MUIDataTable from "mui-datatables";
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Button, Container, Grid, Stack, SvgIcon, Typography } from "@mui/material";
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import Popup from "../../components/ui/Popup";
import ProductForm from "../../components/component/product/productForm";
const Cart =()=>{
  const [openPopup,setOpenPopup]=useState()
const columns = [
 {
  name: "name",
  label: "Name",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "company",
  label: "Company",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "city",
  label: "City",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "state",
  label: "State",
  options: {
   filter: true,
   sort: false,
  }
 },
];

const data = [
 { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
 { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
 { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
 { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

const options = {
  filterType: 'checkbox',
};
return(
<>
<Container maxWidth="xl">
<Stack spacing={3}>
   <Stack 
      direction="row"
      justifyContent="space-between"
      spacing={4}
      >
        <Stack spacing={1}>
        <Typography variant="h4">
                  Cart
        </Typography>
         <Stack 
           alignItems="center"
           direction="row"
           spacing={1}
          >
          <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
           </Button>
           <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
         </Stack>
        </Stack>
        <div>
        <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  onClick={()=>setOpenPopup(true)}
                >
                  Add
                </Button>
        </div>
      </Stack>
{
  <MUIDataTable
  title={"Employee List"}
  data={data}
  columns={columns}
  options={options}
/>
}
</Stack>
<Popup
title="Cart"
openPopup={openPopup}
setOpenPopup={setOpenPopup}
>
  <ProductForm/>
</Popup>
</Container>
</>
)
}
export default Cart;