import React, { useState, useEffect } from 'react';
import { Alert, Stack, AlertTitle } from '@mui/material';

const Alerts = () => {
    const [errorList, setErrorList] = useState([]);

    useEffect(() => {
        // Simulating a fetch request to get the list of error messages
        const fetchErrorList = async () => {
            try {
                // const response = await fetch('your-api-endpoint');
                //mock response
                const response = {
                    json: async () => {
                        return {
                            alerts: [
                                { title: 'ATENÇÃO', message: 'Possivel perigo perto da região da Restinga. Retirem-se do local imediatamente!' },
                                { title: 'CUIDADO', message: 'PROBLEMA 2' },
                                { title: 'PROBLEMA', message: 'PROBLEMÃO' },
                            ],
                        };
                    },
                };
                const data = await response.json();
                setErrorList(data.alerts);
            } catch (error) {
                console.error('Error fetching error list:', error);
            }
        };

        fetchErrorList();
    }, []);

    return (
        errorList.length > 0 && (
            <Stack spacing={1} sx={{ width: '80%', marginTop: '10px' }}>
                {errorList.map((error, index) => (
                    <Alert key={index} severity="error">
                        <AlertTitle>{error.title}</AlertTitle>
                        {error.message}
                    </Alert>
                ))}
            </Stack>
        )
    );
};

export default Alerts;