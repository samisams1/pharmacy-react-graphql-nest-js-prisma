import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { Order } from "./order";

const AdminDashboard =()=>{
 return(
 <>
   <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
        <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <Order
             difference={12}
             positive
             sx={{ height: '100%' }}
             value="$24k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
               <Order
             difference={12}
             positive
             sx={{ height: '100%' }}
             value="$24k"
            />
          </Grid>
          <Grid
          xs={12}
          sm={6}
          lg={3}
          >
               <Order
             difference={12}
             positive
             sx={{ height: '100%' }}
             value="$24k"
            />
          </Grid>
          <Grid
                xs={12}
                sm={6}
                lg={3}
          >
               <Order
             difference={12}
             positive
             sx={{ height: '100%' }}
             value="$24k"
            />
          </Grid>
        </Grid>
    </Container>
   </Box>
 </>   
 );
}
export default AdminDashboard;