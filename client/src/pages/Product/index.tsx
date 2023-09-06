import React from 'react';
import { Box } from "@mui/material";
import ProductList from '../../components/scensComponents/product/ProductList';
import { Toolbar } from '../../components/scensComponents/toolbar';
import ProductForm from '../../components/scensComponents/product/ProductForm';
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
export default function Product(){
  const classes = useStyles();
        return (
            <Box>
               <PageHeader
                title="New Patient"
                subTitle="Patient"
                icon={<PeopleOutlineTwoTone fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
            <Toolbar name="Product" addName ="Create New Product" formName={<ProductForm/>}/>
            <ProductList/>
            </Paper>
            </Box>
              );
    }
      