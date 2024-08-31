import logorsgov from './resources/logorsgov.svg';
import './App.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Main from './pages/Main';
import Denuncia from './pages/Denuncia';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logorsgov} className="App-logo" alt="logo" height='30' style={{ marginLeft: '10px' }} />
        <AccountCircleIcon sx={{ color: '#1a7235', marginRight: '10px' }} fontSize='large' />
      </header>
      <div className="App-content">
        <Denuncia />
      </div>
    </div>
  );
}

export default App;
