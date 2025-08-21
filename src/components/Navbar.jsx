import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar(){
    return(
        <div className='nav'>   
            <ul>
                <li>
                    <Link to="/">Il tuo frigo</Link>
                </li>
                <li>
                    <Link to="/ricette">Ricette</Link>
                </li>
                <li>
                    <Link>Lista della spesa</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;