import { useState } from 'react';
import './Frigo.css';
import Card from '../Card.jsx';
import Input from '../Input.jsx';



function Frigo() {
  /*const [count, setCount] = useState(0);*/
  const [food, setFood] = useState([
    { id: 0, nomeUp: "Carote", qty: 0, },
    { id: 1, nomeUp: "Patate", qty: 3, },
    { id: 2, nomeUp: "Cipolle", qty: 5, },
  ]);

  /**funzione per aggiungere card */
  const addFood = (nome, qty) => {
    const nomeUp = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase(); /**charAt recupera in posizione 0, quindi prima lettera, e mette in maiuscolo con upper case, poi aggiunge il resto con slice */
    setFood([...food, {id: Date.now(), nomeUp, qty} /*...food serve per evitare che sostituisca i dati precedenti, così facendo li tiene e ne inserisce uno dopo */
    ]);
  };

  return (
    <>
    <Input aggiungi={addFood} />
    <hr className="linea" />
    <div className='listaCard'>
        {food.map((item) => (
          <Card
            key={item.id}
            nome={item.nomeUp}
            qtyStart={item.qty}
          />
        ))}
      </div>
    </>
)}

export default Frigo;


/*<Card
        nome={food[0].nome}
        logo={food[0].logo}
        qtyStart={food[0].qty}
      ></Card>
      <Card
        nome={food[1].nome}
        logo={food[1].logo}
        qtyStart={food[1].qty}
      ></Card>
      <Card
        nome={food[2].nome}
        logo={food[2].logo}
        qtyStart={food[2].qty}
      ></Card>
    </div>
*/