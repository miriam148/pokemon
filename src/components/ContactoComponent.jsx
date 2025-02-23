import React, {useState}from 'react'

const ContactoComponent = (props) => {
  const { setMenuOption } = props

  const [nota, setNota] = useState('')

  const handleNotaChange = (e) => {
    const value = e.target.value
    if (value === '' || (parseFloat(value) <= 10 && parseFloat(value) >= 0)) {
      setNota(value);
    }
  }

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>MIRIAM IBÁÑEZ MUÑOZ</h1>
      <h2>MÁLAGA</h2>
      <div>
        <div>
          <h3> <span>Nota</span></h3>
         
        </div>
        <div>
          <input type="number" name='' value={nota} onChange={handleNotaChange} placeholder="0.00" max="10"/>
        </div>
      </div>

      <div style={{ margin: '20px 0' }}>
        <button onClick={() => setMenuOption("LISTADO")}>Volver</button>
      </div>
    </div>
  );
};

export default ContactoComponent
