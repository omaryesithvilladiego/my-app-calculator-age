import { useState, useEffect } from 'react';
import './App.css';
import datamonth from "./meses.json"





function App() {

  //CONSTANTES
  const [mes, setmes] = useState("")
  const [año, setano] = useState(0)
  const [dia, setdia] = useState(0)
  const [resultdoPrueba, setResutado] = useState(0)
  const [nextone, setNextOne] = useState(false)
  const [nexttho, setNexttho] = useState(false)
  const [showButton, setshowButton] = useState(false)
  const fechaActual = new Date()
  const currentYear = fechaActual.getFullYear();
  const years = Array.from({length: currentYear - 999}, (_, index) => index + 1000);
  const arrayNumeros = Array.from({length: 31}, (_, index) => index + 1);


  //METODOS
  //Se monta la aplicación
  useEffect(() => {
     arrayNumeros.map(option => (
      <option key={option} value={option}>
       {option}
     </option>
   ));
  });


  //Muestra la ventana siguiente 
  function next() {
    setNextOne(true)
    years.forEach((year) => {
      console.log(year)
    })
   
  }

  //Muestra la ultima ventana
  function nextNext() {
    setNexttho(true)
    arrayNumeros.forEach((element) => {
      console.log(element)
     })
  }

  function showB() {
    setshowButton(true)
  }

  

  


  return (
    <div className="App">
      <header className='header'>
        <div className='tittle'>
          <h1 className='titulo'>Calculadora de Edad</h1>
        </div>

        <div className='contenido'>
          <h2>Introduce tu fecha de nacimiento
          </h2>
        </div>

        <div className='formulario'>

          {/* Inicio de formulario */}
          <form className='form'>
            {/* Input para seleccionar el mes */}
            <div className='division-mes'>

              <div className='input-email'>
              <h4 className='mes-seleccionado '>Selecciona el Mes</h4>
              <select onChange={ (e) => {
                setmes(e.target.value)
                next()
                
              }}>
                
                {datamonth.map((i) => {
                  return <option key={i} value={i.nombre} >{i.nombre}</option>
                })}
              </select>
              </div>
                {/* Contenido del mes */}
              <div className='contenido-mes'>
              <h4 className='mes-seleccionado '>{mes}</h4>

              </div>
              
            </div>
            {/* Fin division mes  */}


                {/* Inicio division año */}
            <div className={nextone ? "show division-año" : "dont-show"} >
              <h4>Introduce Año</h4>
              <select onChange={(e) => {
                setano(e.target.value)
                nextNext()
              }}>
                
                {years.map((i) => {
                  return <option key={i} value={i} >{i}</option>
                })}
              </select>
            </div>
             {/* Fin division año */}
            <div className={nexttho ? "show division-dia" : "dont-show"} >
              <h4>Seleccion el día</h4>
             
              <select onChange={(e) => {
                showB()
                setdia(e.target.value)
              }}>
                {arrayNumeros.map((i) => {
                  return <option key={i} value={i} > {i} </option>
                } )}
              </select>
              
            </div>


            <button onClick= {(event) => {
              event.preventDefault()
              console.log("Calculando")
              let diaEntero = parseInt(dia)
              let añoEntero = parseInt(año)
              let nuevoResultado = diaEntero + añoEntero
              setResutado(nuevoResultado)
              console.log(resultdoPrueba)

            }}  className={showButton ? "show" : "dont-show"}>Calcular</button>
          </form>
        </div>


      </header>

    </div>
  );
}

export default App;
