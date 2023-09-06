import React, { useState } from 'react'
import {  useQuery } from '@apollo/client';
import MUIDataTable from "mui-datatables";
import Button from '../../Button';
import Popup from '../../Popup';
import ProductEditForm from './ProductEditForm';
import { Grid, Typography } from '@mui/material';
import { productInterface } from '../../../interface/interfaces';
import { PRODUCT_QUERY } from '../../../graphql/Product';
const ProductList = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openCofirmPopup, setOpenConfirimPopup] = useState(false);
  const [newData,setNewData] =React.useState("")
  const { loading, error, data } = useQuery(PRODUCT_QUERY);
 /* const [deletePAtient] = useMutation(DELETE_PATIENT_MUTATION, {
    refetchQueries: [{ query: PATIENT_QUERY }],
  })*/
  if (loading) return <p>Loading...</p>
	if (error) return <p>{error.message}</p>
    const patient = data.products.map((row:productInterface) => (
        [row.id,row.name,row.barcode,row.description,row.price]          
    ));
    const columns = [
      
        {
          name: "#Id",
          options: {
            filter: true,
          }
        },
        {
          label: "First Name",
          name: "Title",
          options: {
            filter: true,
          }
        },
        {
          name: "Last Name",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Birth Date",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Martial Status",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Phone Number",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Email",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Address",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Country",
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
            customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
              return (
                <Button
                  text="Edit"
                  variant="outlined"
                  onClick={() => { setOpenPopup(true);setNewData(tableMeta.rowData);  }}
                />
              );
            }
          }
        },
        {
          name: "Delete",
          options: {
            filter: true,
            sort: false,
            empty: true,
            customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
              return (
                <Button
                  text="Delete"
                  variant="outlined"
                  onClick={() => { setOpenConfirimPopup(true);setNewData(tableMeta.rowData);  }}
                />
              );
            }
          }
        }
      ];
    /*  const handleDelete = (id:string) => {
        deletePAtient({
          variables: {id},
         })
      };*/
  return (
    <Grid>
         <MUIDataTable
           title="Patient"
           data={patient}
           columns={columns}
           options={{
             filterType: "checkbox",
           }}
         />
           <Popup
                title="Patient Edit Form"
                openPopup={openCofirmPopup}
                setOpenPopup={setOpenConfirimPopup}
            >
              <Grid>
<Typography>
Are you sure you want to delete this post?</Typography>
<Grid>
<Button
 //onClick={handleDelete(newData[0])}
        text="Yes" />
<Button
        type="submit"
        text="No" />
</Grid>



              </Grid>
   
     </Popup>
    <Popup
                title="Patient Edit Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
 <ProductEditForm id = {newData[0]} price={newData[1]} barcode={newData[2]}  description={newData[3]} />
     </Popup>
    </Grid>
  )
}

export default ProductList