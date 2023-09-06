import React from 'react'
import { Box } from '@mui/material'
import { CategoryList, CheckupForm } from '../../components/scensComponents/category'
import { Toolbar } from '../../components/scensComponents/toolbar'
import PageHeader from '../../components/PageHeader'
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone'
const Checkup = () => {
  return (
   <Box>
    <PageHeader 
   title={"Check up"}
   subTitle={"check up"}
   icon={<PeopleOutlineTwoTone fontSize='large'/>}
    />
    <Toolbar name = "Check up"addName="Create  New Checkup" formName ={<CheckupForm/>} />
    <CategoryList/>
   </Box>
  )
}

export default Checkup
