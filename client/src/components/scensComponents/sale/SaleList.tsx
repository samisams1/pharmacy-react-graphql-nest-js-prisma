import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Button from '../../Button';
import { Grid, Typography } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import Popup from '../../Popup';
import PatientEditForm from '../product/ProductEditForm';
import { SALE_QUERY } from '../../../graphql/Sale';
import { SaleInterface } from '../../../interface/interfaces';

export const SalesList = () => {
    const [openPopup,setOpenPopup] =useState(false);
    const  [openCofirmPopup,setOpenConfirimPopup]=useState(false);
    const [newData,setNewData]=useState("");
    const {loading,error,data} = useQuery(SALE_QUERY);
    if(loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>
    console.log(data)
    const patientVital = data.sales.map((row:SaleInterface)=>(
        [row.id]
    ))
    const columns = [
        {
          name: "#Id",
          options: {
            filter: true,
          }
        },
        {
          label: "temperature",
          name: "Title",
          options: {
            filter: true,
          }
        },
        {
          name: "bpDiastolic",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "bpSystolic",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "notes",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "patient",
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
      return (
        <Grid>
             <MUIDataTable
               title="Admin"
               data={patientVital}
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
    <Typography>Are you sure you want to delete this post?</Typography>
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
     <PatientEditForm id = {newData[0]}  />
         </Popup>
        </Grid>
      )
}
