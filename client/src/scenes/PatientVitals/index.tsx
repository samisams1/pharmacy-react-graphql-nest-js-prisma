import React from 'react'
import { Box } from '@mui/material'
import { Toolbar } from '../../components/scensComponents/toolbar'
import PatientVitalsForm from '../../components/scensComponents/patientvitals/PatientVitalsForm'
import { PatientVitalsList } from '../../components/scensComponents/patientvitals'
import PageHeader from '../../components/PageHeader'
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone'
const PatientVitals = () => {
  return (
    <Box>
      <PageHeader
      title = {"Patient Vitals"}
      subTitle ={"Patient Vitals"}
      icon={<PeopleOutlineTwoTone fontSize='large'/>}
      />
    <Toolbar name = "Patient Vitals" addName ="Create Patient Vitals" formName = {<PatientVitalsForm/>}/> 
    <PatientVitalsList/>     
    </Box>
  )
}
export default PatientVitals
