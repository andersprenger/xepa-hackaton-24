// import React from 'react';
// import Alerts from '../components/Alerts';
// import CustomButton from '../components/CustomButton';

// const Main = () => {
//     return (
//         <>

//             <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        
//             <TextField id="outlined-basic" label="Outlined" variant="outlined" />

//         </>
//     );
// };

// export default Main;

import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Denuncia = () => {
    return (
        <div style={{ width: '90%', maxWidth: '500px', padding: '0px 0px' }}>

            <div style={{ textAlign: 'left', paddingLeft:'0px', paddingBottom:'0px', paddingTop:'16px'}}>
                <h2 style={{ color: '#1a7235', textAlign: 'left', margin: '0', padding: '0' }}>Fazer Denúncia</h2>
                <Button sx={{color:'#1a7235', textAlign: 'left', padding: '0px', margin: '0', padding: '0'}} startIcon={<ArrowBackIcon />}>Voltar</Button>
            </div>

            <h3 style={{ color: '#1a7235', textAlign: 'left' }}>Título</h3>

            <TextField id="field-denuncia" label="Título da denuncia" variant="outlined" multiline rows={1} fullWidth/>

            <h3 style={{ color: '#1a7235', textAlign: 'left' }}>Descrição</h3>

            <TextField id="field-denuncia" label="Descrição da denuncia" variant="outlined" multiline rows={4} fullWidth/>

            <h3 style={{ color: '#1a7235', textAlign: 'left' }}>Endereço</h3>

            <TextField id="field-endereco" label="Onde ocorreu a denúncia" variant="outlined" multiline rows={4} fullWidth/>

            <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '16px 0px' }}>
                <Button variant="contained" sx={{width: '120px', backgroundColor: '#1a7235'}}>Enviar</Button>
                <Button variant="contained" sx={{width: '120px', backgroundColor: '#1a7235'}}>Cancelar</Button>
            </div>
        </div>
    );
};

export default Denuncia;
