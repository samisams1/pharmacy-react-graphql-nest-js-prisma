import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone'
import { Box } from '@mui/material'
import React from 'react'
import PageHeader from '../../components/PageHeader'
import { PatientAppointmentForm, PatientAppointmentsList } from '../../components/scensComponents/Patientappointments'
import { Toolbar } from '../../components/scensComponents/toolbar'

const PatientAppointments = () => {
  return (
   <Box>
    <PageHeader
    title = "New Patient Appointments"
    subTitle = "patient appointments"
    icon={<PeopleOutlineTwoTone fontSize='large'/>}

    />
    <Toolbar name = "Patient Appointment" addName="Create New Patient Appointment" formName ={<PatientAppointmentForm/>}/>
    <PatientAppointmentsList/>
   </Box>
  )
}

export default PatientAppointments


    