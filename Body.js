import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
function Body(){
    return(
        <div>
            <Routes>
                <Route exact path="/Home" element={<Home />} />
            </Routes>
        </div>
    )
}

export default Body