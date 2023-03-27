import { useState, useEffect } from 'react';
import './App.css';
import datamonth from "./meses.json"
import styled from 'styled-components';





function App() {

  //CONSTANTES
  const [mes, setmes] = useState("")
  const [año, setano] = useState(0)
  const [dia, setdia] = useState(0)
  const [edadFinal, setEdad] = useState(0)
  const [nextone, setNextOne] = useState(false)
  const [nexttho, setNexttho] = useState(false)
  const [showButton, setshowButton] = useState(false)
  const [finCiclo, setFinCiclo] = useState(false)
  const [showResult, setShowResult] = useState(true)
  const [faltaPorCumplis, setFaltaCumplir] = useState(0)
  const fechaActual = new Date()
  const currentYear = fechaActual.getFullYear();
  const years = Array.from({ length: currentYear - 1949 }, (_, index) => index + 1950);
  const arrayNumeros = Array.from({ length: 31 }, (_, index) => index + 1);


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

    <div className='App'>
      <div className={finCiclo ? "result" : "dont-show" }>



        <div className='grid'>
          <div className='circle'>
          <button id='reload' onClick={() => {
      setFinCiclo(false)
      window.location.reload(true)
            }} className={showButton ? "show button-clic" : "dont-show"}>Reset</button>
          </div>

          <div className='rectangle'>
          <h1>Tu edad es {edadFinal} ✴️  </h1>
          </div>
          <div className='rectangle-next'>
          <h1>  <span className='masGrande'>Faltan </span>  <span className='numero'> {faltaPorCumplis}</span> dias para tu proximo cumpleaños 🎉 </h1>
          </div>

        </div>
    

      </div>

    
     
    
    <div className={finCiclo ? "dont-show" : "" }>

      
      <header className='header'>
        <div className='tittle'>
          <h1 className='titulo'>Calculadora de Edad</h1>
        </div>
        </header>

        <div className='contenido'>
          <h2>Introduce tu fecha de nacimiento
          </h2>
        </div>

        <div className='formulario'>

          {/* Inicio de formulario */}
          <Divisor />
          <form className='form'>
            {/* Input para seleccionar el mes */}
            <div className='division-mes'>

              <div className='input-email'>
                <h4 className=''>Selecciona el Mes</h4>
                <select className='selected-mes' onChange={(e) => {
                  setmes(e.target.value)
                  next()

                }}>

                  {datamonth.map((i) => {
                    return <option className='option-name' key={i} value={i.nombre} >{i.nombre}</option>
                  })}
                </select>
              </div>
              {/* Contenido del mes */}
              <div className='contenido-mes'>
                <h4 className='mes-seleccionado '>{mes}</h4>

              </div>

            </div>
            {/* Fin division mes  */}
                  <Divisor />

            {/* Inicio division año */}
            <div className={nextone ? "show division-año" : "dont-show"} >
              <h4>Selecciona el Año</h4>
              <select className='selected-mes' onChange={(e) => {
                setano(e.target.value)
                nextNext()
              }}>

                {years.map((i) => {
                  return <option key={i} value={i} >{i}</option>
                })}
              </select>
            </div>
            {/* Fin division año */}
            <Divisor />
            <div className={nexttho ? "show division-dia" : "dont-show"} >
              <h4>Seleccion el día</h4>

              <select className='selected-mes' onChange={(e) => {
                showB()
                setdia(e.target.value)
              }}>
                {arrayNumeros.map((i) => {
                  return <option key={i} value={i} > {i} </option>
                })}
              </select>

            </div>


            <div className='botones'>
            <button onClick={(event) => {
              event.preventDefault()
              let edad = 0
              let diaEntero = parseInt(dia)
              let añoEntero = parseInt(año)
              let monthNumber;
              switch (mes) {
                case "Enero":
                  monthNumber = 1;
                  break;
                case "Febrero":
                  monthNumber = 2;
                  break;
                case "Marzo":
                  monthNumber = 3;
                  break;
                case "Abril":
                  monthNumber = 4;
                  break;
                case "Mayo":
                  monthNumber = 5;
                  break;
                case "Junio":
                  monthNumber = 6;
                  break;
                case "Julio":
                  monthNumber = 7;
                  break;
                case "Agosto":
                  monthNumber = 8;
                  break;
                case "Septiembre":
                  monthNumber = 9;
                  break;
                case "Octubre":
                  monthNumber = 10;
                  break;
                case "Noviembre":
                  monthNumber = 11;
                  break;
                case "Diciembre":
                  monthNumber = 12;
                  break;
                default:
                  monthNumber = "Mes no válido";
              }

              if( (fechaActual.getMonth() + 1) === monthNumber && diaEntero === fechaActual.getDate()) {
                console.log("Hoy es tu cumpleaños, Felicidades")
              }
                
              
                if(fechaActual.getMonth() < monthNumber) {
                  edad = (fechaActual.getFullYear() - añoEntero) - 1
                } else {
                    edad = fechaActual.getFullYear() - añoEntero
                }

                const fechaCumpleanos = new Date(fechaActual.getFullYear(), monthNumber - 1, diaEntero)
                
                if(fechaCumpleanos < fechaActual) {
                  fechaCumpleanos.setFullYear(fechaActual.getFullYear() + 1)
                }

                const diferenciaEnMilisegundos = fechaCumpleanos.getTime() - fechaActual.getTime();
                const diasFaltantes = Math.ceil(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
                
                
                setFaltaCumplir(diasFaltantes)
                setEdad(edad)
                setFinCiclo(true)
                
              

            }} className={showButton ? "show button-clic" : "dont-show"}>Calcular</button>
            
            </div>
           
          </form>
        </div>
        <div>
      <h1 className='fecha-actual'>
        fecha Actual: <br></br>
      {fechaActual.getDate()} / {fechaActual.getMonth() + 1} / {fechaActual.getFullYear()}
      </h1>
    </div>

    </div>
   
    </div>
    
    
  );
}

export default App;


const Divisor = styled.div`
  height: 1px;
  width:100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

`