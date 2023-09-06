import React from 'react';
import { Box } from '@mui/system';
import { Toolbar } from '../../components/scensComponents/toolbar';
import { UserForm } from '../../components/scensComponents/user/userForm';
import { UserList } from '../../components/scensComponents/user/userTable';
import PageHeader from '../../components/PageHeader';
import { PeopleAltOutlined } from '@material-ui/icons';

export const Doctor = () => {
  return (
   <Box>
    <PageHeader
     title={"Doctor"}
     subTitle={"doctor"}
     icon={<PeopleAltOutlined fontSize='large'/>}
    />
    <Toolbar name ="Doctor" addName = "Create New Doctor" formName={<UserForm roleId={2} />}/>
    <UserList title={"Doctor"} roleId = {2}/>
    
   </Box>
  )
}


