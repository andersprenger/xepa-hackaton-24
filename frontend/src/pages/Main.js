import React from 'react';
import Alerts from '../components/Alerts';
import CustomButton from '../components/CustomButton';

const Main = () => {
    return (
        <>
            <Alerts />
            <div style={{ marginTop: '10px' }}></div>
            <CustomButton onClick={() => console.log('Acesse Rotas de Fuga')}>
                Acesse Rotas de Fuga
            </CustomButton>
            <CustomButton onClick={() => console.log('Fazer Denuncia')}>
                Fazer Denuncia
            </CustomButton>
        </>
    );
};

export default Main;