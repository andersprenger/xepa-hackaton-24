import React, { useState, useEffect } from 'react';
import { Alert, AlertTitle } from '@mui/material';

const Alerts = () => {
    const [alert, setAlert] = useState({
        id: 0,
        titulo: '',
        mensagem: '',
        zona: '',
        data_hora: '',
        rota: '',
    });

    useEffect(() => {
        // Simulating a fetch request to get the list of error messages
        const fetchAlerts = async () => {
            try {
                const response = await fetch('http://localhost:3001/alerts/');
                const data = await response.json();
                setAlert(data);

            } catch (error) {
                console.error('Error fetching error list:', error);
                setAlert({
                    id: 0,
                    titulo: 'TITLE NOT FOUND',
                    mensagem: 'MESSAGE NOT FOUND',
                    zona: '',
                    data_hora: 'oito e sete',
                    rota: 'https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJHctqVtKcGZURH-mHn6gRMWA&destination=place_id:ChIJcVUeAqh6GZURhvUYdQ9G3tA&key=AIzaSyCVCn-6ZTRqbwJgb7lBNsAMVBhjOdKyyYQ',
                });
            }
        };

        fetchAlerts();
    }, []);

    return (
        alert.mensagem !== '' ? (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                width: '100%'
            }}>
                <Alert severity="error" sx={{width: '92%', textAlign: 'start'}}>
                    <AlertTitle>{`${alert.titulo} - ${alert.data_hora}`}</AlertTitle>
                    {alert.mensagem}
                </Alert>
                <iframe width="100%" style={{ border: 0, aspectRatio: '4/3' }} loading="lazy" allowfullscreen src={alert.rota}></iframe>
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