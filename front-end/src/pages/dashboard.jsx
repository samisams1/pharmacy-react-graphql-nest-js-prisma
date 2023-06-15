import { Box, Container, Grid } from "@mui/material";
import React from "react";
const Dashboard=()=>{
return(
    <>
   <Box>
    <Container maxWidth={false}>
        <Grid
        container
        spacing={3}
        >
    <Grid 
    item
    xl={3}
    lg={4}
    sm={9}
    xs={12}
    >
        samisams
    </Grid>    
    <Grid
        item
        xl={3}
        lg={4}
        sm={9}
        xs={12}
        >
            kebad
    </Grid>
    <Grid
    item
    xl={3}
    lg={4}
    sm={9}
    xs={12}
    >
        column 3
    </Grid>
    <Grid
    item
    xl={3}
    lg={4}
    sm={9}
    xs={12}
    
    >
        column 4
    </Grid>
    </Grid>
    </Container>
   </Box>
    </>
)
}
export default Dashboard;