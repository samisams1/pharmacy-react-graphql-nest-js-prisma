import React, { useState } from "react"
import MUIDataTable from "mui-datatables";
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Button, Container, Stack, SvgIcon, Typography, useScrollTrigger } from "@mui/material";
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import Popup from "../../components/ui/Popup";
//import CategoryList from "../../components/component/category/order";
import ProductForm from "../../components/component/product/productForm";
const Category =()=>{
  //const {categories} = ProductL();
  //console.log(categories)
  const [openPopup,setOpenPopup]=useState(false);
const columns = [
  {
    name: "Num",
    label: "#",
    options: {
     filter: true,
     sort: true,
    }
   },
   {
    name: "Id",
    label: "Id",
    options: {
     filter: true,
     sort: true,
    }
   },
 {
  name: "UserId",
  label: "User Id",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "ProductId",
  label: "Product Quantity",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "Orderdate",
  label: "Order date",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "orderstatus",
  label: "Order Status",
  options: {
   filter: true,
   sort: false,
  }
 },
];

const data = [
 { Num:1,Id:1,UserId: "15", ProductId: "1", Orderdate: "2023-02-05", orderstatus: "Ative" },
 { Num:2,Id:1,UserId: "15", ProductId: "1", Orderdate: "2023-02-05", orderstatus: "Ative"  },
 { NNum:3,Id:1,UserId: "15", ProductId: "1", Orderdate: "2023-02-05", orderstatus: "Ative"  },
 { Num:4,Id:1,UserId: "15", ProductId: "1", Orderdate: "2023-02-05", orderstatus: "Ative"  },
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
                  Orders
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
title="Orders"
openPopup={openPopup}
setOpenPopup={setOpenPopup}
>
  <ProductForm/>
</Popup>
</Container>
</>
)
}
export default Category;