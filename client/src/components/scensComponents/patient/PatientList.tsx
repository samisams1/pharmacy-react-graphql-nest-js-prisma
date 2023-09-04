import React, { useState } from 'react'
import {  useQuery } from '@apollo/client';
import { PATIENT_QUERY } from '../../../graphql/Patient';
import MUIDataTable from "mui-datatables";
import { patientInterface } from '../../../interface/interfaces';
import Button from '../../Button';
import Popup from '../../Popup';
import PatientEditForm from './PatientEditForm';
import { Grid, Typography } from '@mui/material';
const PatientList = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openCofirmPopup, setOpenConfirimPopup] = useState(false);
  const [newData,setNewData] =React.useState("")
  const { loading, error, data } = useQuery(PATIENT_QUERY);
 /* const [deletePAtient] = useMutation(DELETE_PATIENT_MUTATION, {
    refetchQueries: [{ query: PATIENT_QUERY }],
  })*/
  if (loading) return <p>Loading...</p>
	if (error) return <p>{error.message}</p>
    const patient = data.patients.map((row:patientInterface) => (
        [row.id,row.firstName,row.lastName,row.dateOfBirth,row.martialStatus,row.phoneNumber,row.email,row.address,row.country]          
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
 <PatientEditForm id = {newData[0]} firstName={newData[1]} lastName={newData[2]}  dateOfBirth={newData[3]}   phoneNumber={newData[4]} martialStatus={newData[5]}  email={newData[6]}  address={newData[7]}  country={newData[8]} />
     </Popup>
    </Grid>
  )
}

export default PatientList