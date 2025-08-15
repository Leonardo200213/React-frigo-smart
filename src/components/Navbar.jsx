import './Navbar.css'


function Navbar(){
    return(
        <div className='nav'>   
            <ul>
                <li><a>Il tuo frigo</a></li>
                <li><a>Ricette</a></li>
                <li><a>Lista della spesa</a></li>
            </ul>
        </div>
    );
}

export default Navbar;