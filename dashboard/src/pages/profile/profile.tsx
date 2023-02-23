import { Button, Container } from '@mui/material';
import React from 'react';

export const ProfilePage: React.FC<{}> = () => {
    return (
        <Container sx={{ mt: 9 }} maxWidth='xl'>
            <Button variant='contained'>Profile Page </Button>
        </Container>
    )
}