import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <ul className='lista'>
                <li className='lista'><Link className='lista' to="/Home">Home</Link></li>
                <li className='lista'><Link className='lista' to="/Informações">Informações</Link></li>
                <li className='lista'><Link className='lista' to="/Horario">Horario</Link></li>
                <li className='lista'><Link className='lista' to="/Historico">Historico</Link></li>
                <li className='lista'><Link className='lista' to="/Trabalhe">Trabalhe conosco</Link></li>
            </ul>
        </div>
    )
}

export default Nav