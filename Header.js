import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function Header(){
    return(
        <div>
            <h1>Rotas</h1>
            
            <Router>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                </ul>
            </Router>

        </div>
    )
}

export default Header