import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Historico from './pages/Historico';
import Trabalhe from './pages/Trabalhe';
import Horario from './pages/Horario';
import Informacoes from './pages/Informações';
import Nav from './pages/Nav';

import './App.css';


function App() {
  return (
    <div className="App">



      <Router>

        <header className='App-header'>
          <Nav/>
        </header>






        <body>
          <Routes>
            <Route exatic path="/Home" element={<Home />} />
            <Route path="/Historico" element={<Historico />} />
            <Route path="/Trabalhe" element={<Trabalhe />} />
            <Route path="/Horario" element={<Horario />} />
            <Route path="/Informações" element={<Informacoes />} />
          </Routes>
        </body>

        <footer className='App-footer'>
        <p>Porto de Galinhas, Ipojuca - PE</p>
        <p>CEP: 55590-000</p>
        <p>Contato: (81) 98690-0555</p>
        </footer>


      </Router>
    </div>
  );
}

export default App;
