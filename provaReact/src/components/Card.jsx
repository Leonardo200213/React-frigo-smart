import { useState } from 'react';
import './Card.css'

function Card({nome, logo, qtyStart}){
    const [qty, setQty] = useState(Number(qtyStart)); /* trasforma qtyStart già dichiarata in un numero e non in una stringa*/
    const cardClass = qty == 0 ? 'card cardVuota' : 'card'

    const handleAdd = () => setQty(qty + 1); /* se non fosse numero qui aggiungerebbe uno senza sommarlo */
    const handleRemove = () => {
        if (qty > 0) setQty(qty - 1);
    }

    
    return (
        <div className={cardClass}>
            <h2>{nome}</h2>
            <img src={logo} className='cardImg' alt=''/>
            <div className='qtyctrl'>
                <button className='remove' onClick={handleRemove}></button>
                <h3>{qty}</h3>
                <button className='add' onClick={handleAdd}></button>
            </div>
        </div>

    );
}

export default Card;