import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone'
import { Box } from '@mui/material'
import React from 'react'
import PageHeader from '../../components/PageHeader'
import { SaleForm, SalesList } from '../../components/scensComponents/sale'
import { Toolbar } from '../../components/scensComponents/toolbar'

const PatientAppointments = () => {
  return (
   <Box>
    <PageHeader
    title = "New Patient Appointments"
    subTitle = "patient appointments"
    icon={<PeopleOutlineTwoTone fontSize='large'/>}

    />
    <Toolbar name = "Sale" addName="Create New Sale" formName ={<SaleForm/>}/>
    <SalesList/>
   </Box>
  )
}

export default PatientAppointments


    