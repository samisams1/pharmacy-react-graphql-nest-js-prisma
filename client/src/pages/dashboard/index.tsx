import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { Eaple } from '../../components/scensComponents/dashboard/Eaple'
import { OverviewBudget } from '../../components/scensComponents/dashboard/OverviewBudget'

export function Dashboard() {
  return (
    <Box
     
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
            <OverviewBudget
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
            <OverviewBudget
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.6k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              sx={{ height: '100%' }}
              value={75.5}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              sx={{ height: '100%' }}
              value="$15k"
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <Eaple
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
              <Eaple
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <Eaple
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
             <Eaple
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}


