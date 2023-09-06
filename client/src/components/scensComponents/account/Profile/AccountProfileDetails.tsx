import {  useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { useQuery } from '@apollo/client';
import { ME_QUERY } from '../../../../graphql/Profile';
import { userInterface } from '../../../../interface/interfaces';

export const AccountProfileDetails = () => {
  const { loading, error, data } = useQuery(ME_QUERY);
  if (loading) return <p>Loading...</p>
	if (error) return <p>{error.message}</p>


  return (
    <form
      autoComplete="off"
      noValidate
      //onSubmit={handleSubmit}
    >
      {
    
    data.me.map((row:userInterface)=>( 
      <Card>
        <CardHeader
          title="Profile"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                 
                  name="firstName"
                 // onChange={handleChange}
                  required
                  value={row.firstName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
               //   onChange={handleChange}
                  required
                  value={row.lastName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                //  onChange={handleChange}
                  required
                  value={row.email}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                //  onChange={handleChange}
                //  type="number"
                  value={row.lastName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Role"
                  name="country"
                //  onChange={handleChange}
                  required
                  value={row.id}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    ))}
    </form>
  );
};