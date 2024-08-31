import React from 'react';
import Alerts from '../components/Alerts';
import CustomButton from '../components/CustomButton';
import { Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RouteList = () => {
    return (
        <div style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            maxWidth: '500px',
            marginTop: '20px',
        }}>
            <Typography variant='h3' color='#1a7235' sx={{ fontWeight: 700 }}>Rotas de Fuga</Typography>
            <Button sx={{color:'#1a7235'}} startIcon={<ArrowBackIcon />}>
                Voltar
            </Button>
        </div>
    );
};

export default RouteList;