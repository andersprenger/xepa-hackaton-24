import React, { useState } from 'react';
import logorsgov from './resources/logorsgov.svg';
import './App.css';
import Main from './pages/Main';

import Denuncia from './pages/Denuncia';

import { MenuItem, Select } from '@mui/material';


function App() {
  const regions = [
    {
      id: 'centro',
      nome: 'Centro',
    },
    {
      id: 'zona-sul',
      nome: 'Zona Sul',
    },

    {
      id: 'zona-norte',
      nome: 'Zona Norte',
    },
    {
      id: 'zona-leste',
      nome: 'Zona Leste',
    },
    {
      id: 'zona-ilhas',
      nome: 'Zona Ilhas',
    },
  ];
  const [currentRegion, setCurrentRegion] = useState('centro');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logorsgov} className="App-logo" alt="logo" height='30' style={{ marginLeft: '10px' }} />
        <div>
          <Select value={currentRegion}
            MenuProps={
              {
                sx: {
                  "&& .MuiMenuItem-root": {
                    color: "#1a7235"
                  }
                }

              }}
            onChange={(event) => setCurrentRegion(event.target.value)} sx={{ color: '#1a7235', fontSize: '20px', fontWeight: 700, display: 'flex', alignItems: 'center', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}>
            {regions.map((region) => (
              <MenuItem key={region.id} value={region.id}>{region.nome}</MenuItem>
            ))}
          </Select>
        </div>
      </header>
      <div className="App-content">
        <Main currentRegion={ currentRegion }/>
      </div>
    </div>
  );
}

export default App;
