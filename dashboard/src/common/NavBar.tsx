import { AppBar, Box, Toolbar, Grid, Container, Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
export const NavBar: React.FC<{}> = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Container maxWidth='xl'>
                        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                            <Grid item><Typography>Home</Typography></Grid>
                            <Grid item>
                                <Stack direction='row' spacing={2}>
                                    <Button variant='contained'>Profile</Button>
                                    <Button variant='outlined'>Settings</Button>

                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}