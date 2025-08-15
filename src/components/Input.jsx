import { useState } from "react";
import "./Input.css"





function Input({ aggiungi }){
    const [nomeP, setNomeP] = useState("");
    const [qtyP, setQtyP] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nomeP && qtyP){
            aggiungi(nomeP, qtyP);
            setNomeP("");
            setQtyP("");
        }
    };
    

    return (
        <form className="inputLabel" onSubmit={handleSubmit}>
            <h2>Aggiungi Prodotto</h2>
            <label>Nome prodotto</label>
            <input placeholder="Inserisci nome" type="text" value={nomeP} onChange={e => setNomeP(e.target.value)}/>
            
            <label>Quantità prodotto</label>
            <input placeholder="Inserisci quantità" type="number" value={qtyP} onChange={e => setQtyP(e.target.value)}/>
            <button type="submit" className="addBtn">Aggiungi</button>
        </form>
    )}

export default Input;