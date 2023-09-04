import React from 'react';
import { Box } from "@mui/material";
import PatientList from '../../components/scensComponents/patient/PatientList';
import { Toolbar } from '../../components/scensComponents/toolbar';
import PatientForm from '../../components/scensComponents/patient/PatientForm';
import PageHeader from '../../components/PageHeader';
import { PeopleOutlineTwoTone } from '@material-ui/icons';
import { Paper } from '@material-ui/core';
import Controls from '../../components/Controls';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: 5,
      padding: 5
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))
export default function Patient(){
  const classes = useStyles();
        return (
            <Box>
               <PageHeader
                title="New Patient"
                subTitle="Patient"
                icon={<PeopleOutlineTwoTone fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
            <Toolbar name="Patient" addName ="Create New Patient" formName={<PatientForm/>}/>
            <PatientList/>
            </Paper>
            </Box>
              );
    }
      