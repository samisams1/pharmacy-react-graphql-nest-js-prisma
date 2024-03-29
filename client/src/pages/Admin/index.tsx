import React, { useState } from 'react';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../components/Popup";
import { InputAdornment, Paper,Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PageHeader from '../../components/PageHeader';
import Controls from '../../components/Controls';
import { UserList } from '../../components/scensComponents/user/userTable';
import { UserForm } from '../../components/scensComponents/user/userForm';
import Header from '../../Header';
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
export const Admin = () => {
    const [openPopup, setOpenPopup] = useState(false)
    const classes = useStyles();
    return (
        <>
            <PageHeader
                title="New Admin"
                subTitle="Admin"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
               <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                      //  onChange={handleSearch}
                    />
                    <div  className={classes.newButton}>
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={() => { setOpenPopup(true)}}
                    />
                    </div>
                </Toolbar> 
                <UserList title={"Admin"} roleId = {1}/>
            </Paper>
            <Popup
                title="Admin Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
               <UserForm  roleId={1}/>
            </Popup>
        </>
    )
}
