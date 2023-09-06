import React from 'react'
import { Box } from '@mui/material'
import { Toolbar } from '../../components/scensComponents/toolbar'
import SupplierForm from '../../components/scensComponents/supplier/SupplierForm'
import { SupplierList } from '../../components/scensComponents/supplier'
import PageHeader from '../../components/PageHeader'
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone'
const Supplier = () => {
  return (
    <Box>
      <PageHeader
      title = {"Patient Vitals"}
      subTitle ={"Patient Vitals"}
      icon={<PeopleOutlineTwoTone fontSize='large'/>}
      />
    <Toolbar name = "Patient Vitals" addName ="Create Patient Vitals" formName = {<SupplierForm/>}/> 
    <SupplierList/>     
    </Box>
  )
}
export default Supplier
