import React, { useState } from 'react';
import Alerts from '../components/Alerts';
import Button from '@mui/material/Button';
import { Typography, DialogContent, Dialog, DialogTitle } from '@mui/material';
import { styled } from '@mui/material/styles';

const NotificationButton = styled(Button)({
    backgroundColor: '#C90000',
    border: '2px solid',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '90%',
    height: '80px',
    marginTop: '10px',
    color: '#fff',
});

const CheckinButton = styled(Button)({
    border: '2px solid',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '100%',
    height: '80px',
    color: '#1a7235',
});

const Main = ({ currentRegion, setIsMain }) => {
    const [isDisabled, setDisabled] = React.useState(false);
    const [dlog, setDlog] = React.useState(false);
    const checkinHandle = () => {
        setDlog(true);
        setDisabled(true);
        fetch(`http://localhost:3001/checkin/${currentRegion}`, {
            method: "POST"
        })
        setTimeout(() => {
            setDlog(false);
        }, 5000);
    }
    const [alert, setAlert] = useState({
        id: '',
        titulo: '',
        mensagem: '',
        zona: '',
        data_hora: '',
        rota: '',
    });
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '500px',
            marginTop: '20px',
            gap: '20px',
            width: '100%',
        }}>
            <NotificationButton onClick={() => setIsMain(false)}>
                Notificar Emergência
            </NotificationButton>
            <div style={{ width: '100%', height: '5px', backgroundColor: '#1a7235' }} />
            <div style={{ width: '90%' }} >
                <Typography fontSize={24} color='#1a7235' sx={{ fontWeight: 700, textAlign: 'start' }}>Acontecendo agora!</Typography>
                <Alerts currentRegion={currentRegion} alert={alert} setAlert={setAlert} />
            </div>
            <div style={{ width: '100%', height: '5px', backgroundColor: '#1a7235' }} />
            {alert.mensagem !== '' && <div style={{ width: '90%' }}>
                <Typography fontSize={24} color='#1a7235' sx={{ fontWeight: 700, textAlign: 'start' }}>Chegou no ponto de encontro?</Typography>
                <CheckinButton disabled={isDisabled} onClick={checkinHandle}>
                    Faça aqui o Check-in!
                </CheckinButton>
            </div>}
            <Dialog
                open={dlog}>
                <DialogTitle>
                    Obrigado por executar o check-in!
                </DialogTitle>
                <DialogContent>
                    Busque os recursos necessário e ajude também caso for possível!
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Main;