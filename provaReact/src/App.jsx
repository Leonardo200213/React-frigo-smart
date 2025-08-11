import { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Input from './components/Input.jsx';



function App() {
  /*const [count, setCount] = useState(0);*/

  
  
  const [food, setFood] = useState([
    {
      id: 0,
      nome: "Carote",
      qty: 0,
    },
    {
      id: 2,
      nome: "Patate",
      qty: 3,
    },
    {
      id: 2,
      nome: "Cipolle",
      qty: 5,
    },
  ]);


  return (
  <>
  
    <Input></Input>

    <hr className="linea" class="hr" />

  <div className='listaCard'>
      {food.map((item) => (
        <Card
          key={item.id}
          nome={item.nome}
          qtyStart={item.qty}
        />
      ))}
    </div>
  </>
)}

export default App;



{/*<Card
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
    </div>*/}