import React, { useState } from "react";

function App() {

    const [personas, setPersonas] = useState([
      {
      nombre: 'JSON',
      apellido: 'Dev' 
      },
      {
      nombre: 'Daniel',
      apellido: 'Gomez' 
      }
    ])

    const [persona, setPersona] = useState({nombre:'',apellido:''})

    const onSubmit = e => {

      e.preventDefault()
      if (persona.nombre.trim() === '' || persona.apellido.trim() === '') return;
      
      const newPersona = {
        nombre: persona.nombre.trim(),
        apellido: persona.apellido.trim()
      }

      setPersonas([...personas, newPersona ])
      setPersona({nombre:'', apellido:''})

    }

    const onChange = e => {
      setPersona({...persona, [e.target.name]: e.target.value})
      //console.log(persona)
    }


  return (
    <div className="Container">
      <div className="row">
        <div className="col">
          <h1>Hola Mundo</h1>
          <form onSubmit={onSubmit}>

            <input  
            type = "text"
            name = "nombre"
            className = "form-control"
            placeholder = "nombre"
            onChange = {onChange}
            />
            <br/>      
            <input  
            type = "text"
            name = "apellido"
            className = "form-control"
            placeholder = "apellido"
            onChange = {onChange}
            />

          <button className="btn btn-primary">Add personas</button>

          </form>


        </div>
        <div className="col">
          <h2>Personas</h2>
          <hr/>
          {
            personas.map((p,index) => (
              <div key={index}>
                {console.log(index)}
                <p>{p.nombre} {p.apellido}</p>
              </div>
            ))
          }
        </div>

      </div>
    </div>
   
  );
}

export default App;
