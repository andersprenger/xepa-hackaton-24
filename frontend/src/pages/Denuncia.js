import React, { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent } from '@mui/material';


const Denuncia = () => {
    const [group, setGroup] = React.useState('');
    const [subGroup, setSubGroup] = React.useState('');
    const [regiao, setRegiao] = React.useState('');
    const [isDisable, setDisable] = React.useState(true);
    const [dlog, setDlog] = React.useState(false);

    useEffect(() => {
        if(group != "" && subGroup != "" && regiao != "") {
            setDisable(false);
        }
    },[group, subGroup, regiao])

    const handleGroupChange = (event) => {
        setGroup(event.target.value);
        
    };

    const handleSubGroupChange = (event) => {
        setSubGroup(event.target.value);
        
    };

    const handleRegiaoChange = (event) => {
        setRegiao(event.target.value);
        
    };
    const submitForm  = () => {
        console.log("Values", subGroup, regiao);
        fetch("http://localhost:3001/denuncias", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                group: subGroup,
                zone: regiao,
            })
        })
        setDlog(true);
    } 
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

    const regioes = [
        'Zona Norte',
        'Zona Sul',
        'Zona Leste',
        'Centro',
        'Arquipélago',
    ];

    return (
        <div style={{ width: '90%', maxWidth: '500px', padding: '0px 0px' }}>
            <div style={{ textAlign: 'left', paddingLeft: '0px', paddingBottom: '0px', paddingTop: '16px' }}>
                <h2 style={{ color: '#1a7235', textAlign: 'left', margin: '0', padding: '0' }}>Notificar Emergência</h2>
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
                    onChange={ handleSubGroupChange }
                    disabled={!group}
                >
                    {subGroups[group]?.map((sub) => (
                        <MenuItem key={sub.value} value={sub.value}>
                            {sub.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <h3 style={{ color: '#1a7235', textAlign: 'left', marginTop: '16px' }}>Região</h3>
            <FormControl fullWidth>
                <InputLabel id="regiao-select-label">Região</InputLabel>
                <Select
                    labelId="regiao-select-label"
                    id="regiao-select"
                    value={regiao}
                    label="Região"
                    onChange={ handleRegiaoChange }
                >
                    {regioes.map((regiao, index) => (
                        <MenuItem key={index} value={regiao}>
                            {regiao}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '16px 0px' }}>

                    <Button 
                    variant="contained" 
                    disabled={isDisable}
                    onClick={submitForm}
                    sx={{ width: '120px', backgroundColor: '#1a7235' }}>
                        Enviar
                    </Button>
                <Dialog
                    open={dlog}>
                    <DialogTitle
                        
                    >
                        Agradecemos a sua informação
                    </DialogTitle>
                    <DialogContent>
                        Busque os recursos de ajuda mais proximos de você
                    </DialogContent>

                </Dialog>
            </div>
        </div>
    );
};

export default Denuncia;
