import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
export const LoginPage: React.FC<{}> = () => {
    const credentials = {
        username: 'laureano',
        password: '123456'
    }

    type LoginType = {
        username: string,
        password: string
    }

    const [loginData, setLoginData] = React.useState<LoginType>({
        username: '',
        password: ''
    })

    const navigate = useNavigate();



    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log(loginData);
        if (loginData.username === credentials.username && loginData.password === credentials.password) {
            navigate('/home')
        } else {
            console.log('Wrong credentials');

        }
    }

    return (
        <Container maxWidth='sm'>
            <Grid container direction="column" alignItems='center' justifyContent='center' sx={{ minHeight: '100vh' }}>
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Typography variant='h4'>Welcome to the project</Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField name='username' fullWidth type='text' label="Email" sx={{ mt: 2, mb: 1.5 }} required onChange={dataLogin} />
                            <TextField name='password' fullWidth type="password" label="Password" sx={{ mt: 1.5, mb: 1.5 }} required onChange={dataLogin} />
                            <Button fullWidth type='submit' variant='contained' sx={{ mt: 1.5, mb: 3 }}>Sign in</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}