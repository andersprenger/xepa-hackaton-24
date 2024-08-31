// // import React from 'react';
// // import Alerts from '../components/Alerts';
// // import CustomButton from '../components/CustomButton';

// // const Main = () => {
// //     return (
// //         <>

// //             <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        
// //             <TextField id="outlined-basic" label="Outlined" variant="outlined" />

// //         </>
// //     );
// // };

// // export default Main;

// import React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import MenuItem from '@mui/material/MenuItem';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Button from '@mui/material/Button';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// const Denuncia = () => {
//     const [group, setGroup] = React.useState('');
//     const [type, setType] = React.useState('naturais');
//     const [subGroup, setSubGroup] = React.useState('');
//     const [bairro, setBairro] = React.useState('');

//     const handleChange = (event) => {
//         setGroup(event.target.value);
//         setSubGroup(event.target.value);
//         setBairro(event.target.value);
//     };
//     const handleType = ({ target }) => {
//         console.log(target.value);

//         setType(target.value);
//     };

//     return (
//         <div style={{ width: '90%', maxWidth: '500px', padding: '0px 0px' }}>

//             <div style={{ textAlign: 'left', paddingLeft:'0px', paddingBottom:'0px', paddingTop:'16px'}}>
//                 <h2 style={{ color: '#1a7235', textAlign: 'left', margin: '0', padding: '0' }}>Fazer Denúncia</h2>
//                 <Button sx={{color:'#1a7235', textAlign: 'left', padding: '0px', margin: '0', padding: '0'}} startIcon={<ArrowBackIcon />}>Voltar</Button>
//             </div>

//             <h3 style={{ color: '#1a7235', textAlign: 'left' }}>Grupo de desastre</h3>

//             <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">Grupo</InputLabel>
//             <Select labelId="demo-simple-select-label" id="demo-simple-select" value={group} label="Grupo"  onChange={(e) => handleType(e)}>
//                 <MenuItem value={"naturais"}>Desastres Naturais</MenuItem>
//                 <MenuItem value={"humanos"}>Desastres Humanos</MenuItem>
//             </Select>
//             </FormControl>

            
//             {
//                 type == 'naturais' ? (
//                     <FormControl fullWidth>
                        
                    
//                     <Select labelId="demo-simple-select-label" id="demo-simple-select" value={group} label="Grupo" onChange={handleType}>
//                         <MenuItem value={10}>Terremoto</MenuItem>
//                         <MenuItem value={20}>Maremoto</MenuItem>
//                         <MenuItem value={20}>Erupção Vulcânica</MenuItem>
//                         <MenuItem value={20}>Deslizamento</MenuItem>
//                         <MenuItem value={20}>Inundação </MenuItem>
//                         <MenuItem value={20}>Ciclone </MenuItem>
//                         <MenuItem value={20}>Tornado </MenuItem>
//                         <MenuItem value={20}>Furacão </MenuItem>
//                         <MenuItem value={20}>Granizo </MenuItem>
//                         <MenuItem value={20}>Tempestade de Raios </MenuItem>
//                         <MenuItem value={20}>Chuva Intensa </MenuItem>
//                         <MenuItem value={20}>Vendaval</MenuItem>
//                     </Select>
//                     </FormControl>
//                 ) : (
                    

//                     <FormControl fullWidth>
//                     <h3 style={{ color: '#1a7235', textAlign: 'left' }}>Bairro</h3>
//                     <InputLabel id="demo-simple-select-label">Grupo</InputLabel>
//                     <Select labelId="demo-simple-select-label" id="demo-simple-select" value={group} label="Grupo" onChange={handleChange}>
//                         <MenuItem value={10}>Arquipelago</MenuItem>
//                         <MenuItem value={20}>Partenom</MenuItem>
//                     </Select>
//                     </FormControl>

//                 )
//             }
//             <FormControl fullWidth>
//                     <h3 style={{ color: '#1a7235', textAlign: 'left' }}>Bairro</h3>
//                     <InputLabel id="demo-simple-select-label">Grupo</InputLabel>
//                     <Select labelId="demo-simple-select-label" id="demo-simple-select" value={group} label="Grupo" onChange={handleChange}>
//                         <MenuItem value={10}>Arquipelago</MenuItem>
//                         <MenuItem value={20}>Partenom</MenuItem>
//                     </Select>
//                     </FormControl>
            

            
//             <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '16px 0px' }}>
//                 <Button variant="contained" sx={{width: '120px', backgroundColor: '#1a7235'}}>Enviar</Button>
//             </div>
//         </div>
//     );
// };

// export default Denuncia;

import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Denuncia = () => {
    const [group, setGroup] = React.useState('');
    const [subGroup, setSubGroup] = React.useState('');
    const [bairro, setBairro] = React.useState('');

    const handleGroupChange = (event) => {
        setGroup(event.target.value);
        setSubGroup('');
    };

    const handleSubGroupChange = (event) => {
        setSubGroup(event.target.value);
    };

    const handleBairroChange = (event) => {
        setBairro(event.target.value);
    };

    const subGroups = {
        naturais: [
            { value: 'terremoto', label: 'Terremoto' },
            { value: 'maremoto', label: 'Maremoto' },
            { value: 'erupcao', label: 'Erupção Vulcânica' },
            { value: 'deslizamento', label: 'Deslizamento' },
            { value: 'inundacao', label: 'Inundação' },
            { value: 'ciclone', label: 'Ciclone' },
            { value: 'tornado', label: 'Tornado' },
            { value: 'furacao', label: 'Furacão' },
            { value: 'granizo', label: 'Granizo' },
            { value: 'tempestade_raios', label: 'Tempestade de Raios' },
            { value: 'chuva_intensa', label: 'Chuva Intensa' },
            { value: 'vendaval', label: 'Vendaval' },
        ],
        humanos: [
            { value: 'incendio', label: 'Incêndio' },
            { value: 'explosao', label: 'Explosão' },
            { value: 'colapso_estrutura', label: 'Colapso de Estrutura' },
            { value: 'acidente_transito', label: 'Acidente de Trânsito' },
            { value: 'vazamento_gas', label: 'Vazamento de Gás' },
        ],
    };

    const bairros = [
        'Arquipélago',
        'Partenon',
        'Moinhos de Vento',
        'Cidade Baixa',
        'Boa Vista',
        // adicione mais bairros conforme necessário
    ];

    return (
        <div style={{ width: '90%', maxWidth: '500px', padding: '0px 0px' }}>
            <div style={{ textAlign: 'left', paddingLeft: '0px', paddingBottom: '0px', paddingTop: '16px' }}>
                <h2 style={{ color: '#1a7235', textAlign: 'left', margin: '0', padding: '0' }}>Fazer Denúncia</h2>
                <Button sx={{ color: '#1a7235', textAlign: 'left', padding: '0px', margin: '0', padding: '0' }} startIcon={<ArrowBackIcon />}>Voltar</Button>
            </div>

            <h3 style={{ color: '#1a7235', textAlign: 'left' }}>Grupo de desastre</h3>
            <FormControl fullWidth>
                <InputLabel id="group-select-label">Grupo</InputLabel>
                <Select
                    labelId="group-select-label"
                    id="group-select"
                    value={group}
                    label="Grupo"
                    onChange={handleGroupChange}
                >
                    <MenuItem value="naturais">Desastres Naturais</MenuItem>
                    <MenuItem value="humanos">Desastres Humanos</MenuItem>
                </Select>
            </FormControl>

            <h3 style={{ color: '#1a7235', textAlign: 'left', marginTop: '16px' }}>Tipo de desastre</h3>
            <FormControl fullWidth>
                <InputLabel id="subgroup-select-label">Tipo</InputLabel>
                <Select
                    labelId="subgroup-select-label"
                    id="subgroup-select"
                    value={subGroup}
                    label="Tipo"
                    onChange={handleSubGroupChange}
                    disabled={!group}
                >
                    {subGroups[group]?.map((sub) => (
                        <MenuItem key={sub.value} value={sub.value}>
                            {sub.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <h3 style={{ color: '#1a7235', textAlign: 'left', marginTop: '16px' }}>Bairro</h3>
            <FormControl fullWidth>
                <InputLabel id="bairro-select-label">Bairro</InputLabel>
                <Select
                    labelId="bairro-select-label"
                    id="bairro-select"
                    value={bairro}
                    label="Bairro"
                    onChange={handleBairroChange}
                >
                    {bairros.map((bairro, index) => (
                        <MenuItem key={index} value={bairro}>
                            {bairro}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '16px 0px' }}>
                <Button variant="contained" sx={{ width: '120px', backgroundColor: '#1a7235' }}>Enviar</Button>
            </div>
        </div>
    );
};

export default Denuncia;
