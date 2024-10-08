import React, { useEffect } from 'react';
import { Alert, AlertTitle, Typography } from '@mui/material';

const Alerts = ({ currentRegion, alert, setAlert }) => {

    useEffect(() => {
        // Simulating a fetch request to get the list of error messages
        const fetchAlerts = async () => {
            try {
                const response = await fetch(`http://localhost:3001/alerts/${currentRegion}`);
                const dataAux = await response.json();
                const data = dataAux[0];
                setAlert({
                    id: data.id,
                    titulo: data.titulo,
                    mensagem: data.mensagem,
                    zona: data.zona,
                    data_hora: data.data_hora,
                    rota: data.rota,
                });
            } catch (error) {
                console.error('Error fetching error list:', error);
                setAlert({
                    id: '',
                    titulo: '',
                    mensagem: '',
                    zona: '',
                    data_hora: '',
                    rota: '',
                });
            }
        };

        fetchAlerts();
    }, [currentRegion]);

    return (
        alert.mensagem !== '' ? (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                width: '100%'
            }}>
                <Alert severity="error" sx={{ width: '92%', textAlign: 'start' }}>
                    <AlertTitle>{`${alert.titulo} - ${alert.data_hora}`}</AlertTitle>
                    {alert.mensagem}
                </Alert>
                <Typography fontSize={24} color='#c90000' sx={{ fontWeight: 700, textAlign: 'start', width: '100%' }}>Atenção à sua rota de fuga!</Typography>
                <iframe title='rota' width="100%" style={{ border: 0, aspectRatio: '4/3' }} loading="lazy" allowfullscreen src={alert.rota}></iframe>
            </div>
        ) : (
            <Alert severity='success'>
                <AlertTitle>Nenhum alerta encontrado!</AlertTitle>
                Sua região não corre perigo.
            </Alert>
        )
    );
};

export default Alerts;