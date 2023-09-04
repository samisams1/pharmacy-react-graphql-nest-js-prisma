import React from 'react';
import { Box } from '@mui/material';
import { Toolbar } from '../../components/scensComponents/toolbar';
import { UserForm } from '../../components/scensComponents/user/userForm';
import { UserList } from '../../components/scensComponents/user/userTable';
import PageHeader from '../../components/PageHeader';
import { PeopleOutlineOutlined } from '@material-ui/icons';
export const Nurse = () => {
  return (
   <Box>
      <PageHeader
                title="New Nurse"
                subTitle="Nurse"
                icon={<PeopleOutlineOutlined fontSize="large" />}
            />
    <Toolbar name={"Nurse"} addName={"Create New  Nurse"} formName = {<UserForm roleId={3}/>} />
    <UserList title={"Nurse"} roleId = {3}/>
  </Box>
  )
}
