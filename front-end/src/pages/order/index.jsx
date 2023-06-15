import React, { useState } from "react"
import MUIDataTable from "mui-datatables";
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Button, Container, Stack, SvgIcon, Typography } from "@mui/material";
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import Popup from "../../components/ui/Popup";
import ProductForm from "../../components/component/product/productForm";
import OrderList from "../../components/component/order/order";
import ProductEditForm from "../../components/component/product/productEditForm";
const Order =()=>{
  const {orders} = OrderList.OrderList();
  const [openPopup,setOpenPopup]=useState(false);
  const [openPopupCheakList,setOpenPopupCheackList] = useState(false);
  const [newData,setNewData] =useState("")
  const productsList = orders.map((row) => (
    [row.id,row.name, row.brand, row.category, row.tag,row.image, row.quantity, row.price,row.details] 
));
const columns = [
  {
    label: "id",
    name: "id",
    options: {
      filter: true,
    }
  }, 
  {
    label: "name",
    name: "name",
    options: {
      filter: true,
    }
  },
  {
    label: "brand",
    name: "brand",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "category",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "tags",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "image",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "quantity",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "price",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "details",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "Edit",
    options: {
      filter: true,
      sort: false,
      empty: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
        
             <Button
             text="Edit"
             variant="outlined"
             onClick={() => { setOpenPopupCheackList(true);setNewData(tableMeta.rowData);}}
         />

        );
      }
    }
  },
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
                  Products
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
                    size="784"
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
  data={productsList}
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
<Popup 
     title="Edit Product"
     openPopup={openPopupCheakList}
     setOpenPopup={setOpenPopupCheackList}>
  <ProductEditForm  id = {newData[0]} name ={newData[1]} brand={newData[2]} category={newData[3]} tag={newData[4]} image={newData[5]} quantity={newData[6]} price={newData[7]}  details={newData[8]}/>
 </Popup>
</Container>
</>
)
}
export default Order;