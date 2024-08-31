import React from 'react';
import Alerts from '../components/Alerts';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
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





const Main = ({currentRegion, setIsMain}) => {
  const Main = ({currentRegion}) => {
    const [isDisabled, setDisabled] = React.useState(false);
    const checkinHandle = () => {
     setDisabled(true);
     fetch(`http://localhost:3001/checkin/${currentRegion}`, {
        method: "POST"
     })

    }
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
                <Typography fontSize={24} color='#1a7235' sx={{ fontWeight: 700, textAlign: 'start' }}>Últimos alertas da sua região</Typography>
                <Alerts currentRegion={currentRegion}/>
            </div>
            <div style={{ width: '100%', height: '5px', backgroundColor: '#1a7235' }} />
            <div style={{ width: '90%' }}>
                <Typography fontSize={24} color='#1a7235' sx={{ fontWeight: 700, textAlign: 'start' }}>Chegou no ponto de encontro?</Typography>
               
                <CheckinButton 
                disabled={ isDisabled }
                onClick={checkinHandle}>
                    "Faça aqui o Check-in!"
                </CheckinButton>
            </div>
        </div>
    );
};

export default Main;