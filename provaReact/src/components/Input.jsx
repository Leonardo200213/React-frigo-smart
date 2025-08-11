import "./Input.css"


function Input(){
    return (
        <div className="inputLabel">
            <h2>Aggiungi Prodotto</h2>
            <label>Nome prodotto</label>
            <input placeholder="Inserisci nome" type="text"></input>
            <label>Quantità prodotto</label>
            <input placeholder="Inserisci quantità" type="number"></input>
            <button type="submit" className="addBtn">Aggiungi</button>
        </div>
    )}

export default Input;