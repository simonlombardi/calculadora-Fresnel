import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import imgEcuacion from '../public/ecuacion.png'
import imgZonaFresnel from '../public/imagen-zona-fresnel.png'

function App() {
  const [distance, setDistance] = useState('')
  const [frequency, setFrequency] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setError(true)
    if (distance && frequency){
      setError(false)
    }
  },[distance, frequency])


  const handleCalculation = () => {
    setResult('')
    const CONSTANT = 8.656
    if (distance && frequency){
      setResult(parseFloat(CONSTANT * Math.sqrt(distance / frequency)).toFixed(2))
      setError(false)
    }
    else{
      setError(true)
    }
  }
  const handleDistance = (distance) => {
    if (/^\d*$/.test(distance)) {
      setDistance(distance);
    }
  }
  const handleFrequency = (frequency) => {
    if (/^\d*$/.test(frequency)) {
      setFrequency(frequency);
    }
  }
  const handleClean = () => {
    setResult(undefined)
    setDistance('')
    setFrequency('')
    setError(false)
  }

  return (
    <>
    <NavBar />
    <div className='principal-container'>
        <h1>Calculadora de la zona de Fresnel</h1>
      <div className='introduction'>
        <p>La zona de Fresnel es un concepto fundamental en el análisis de la propagación de ondas electromagnéticas, especialmente en aplicaciones relacionadas con la transmisión y recepción de señales de radio, microondas y luz. Este concepto ayuda a entender cómo las ondas se comportan en el espacio libre y en presencia de obstáculos, lo que es crucial para el diseño y optimización de sistemas de comunicación inalámbrica, enlaces de microondas, y redes ópticas.</p>
        <div className='mt-4 definition' >
          <h4>Definicion</h4>
          <p>La zona de Fresnel se refiere a una serie de elipsoides concéntricos que se forman entre un transmisor y un receptor en el camino de propagación de una onda electromagnética. Estas zonas están determinadas por las diferencias en las distancias recorridas por las ondas desde el transmisor al receptor. Las zonas de Fresnel describen cómo las ondas interferirán entre sí, dependiendo de si los obstáculos se encuentran dentro o fuera de estas zonas.</p>
          <div className='image-container'>
            <img src={imgZonaFresnel} alt="imagen zona Fresnel" height='70%' width='70%' />
            <ul>
              <li>La zona 1 es la que mas afecta a la intensidad de la señal</li>
              <li>La zona 2 afecta menos que la 1</li>
              <li>La zona 3 afecta menos que la 2</li>
              <li>Y asi sucesivamente...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className='calculator-container'>
      <div className="mt-5 calculator" id='calculator'>
        <h4 className='mb-5'>Calculadora</h4>
          <div width='100%' height='100%' className='d-flex justify-content-center'>
            <img src={imgEcuacion} alt="ecuacion zona Fresnel"  width='60%'/>
          </div>
        <div className='mt-5 form'>
          <label htmlFor="exampleFormControlInput1" className="form-label">Distancia emisor/receptor [km]</label>
          <input onChange={(e) => handleDistance(e.target.value)} value={distance} className="form-control" id="exampleFormControlInput1" placeholder="Distancia emisor/receptor [km]" />
          <label htmlFor="exampleFormControlInput2" className="form-label">Frecuencia [Ghz]</label>
          <input className="form-control" onChange={(e) => handleFrequency(e.target.value)} value={frequency} id="exampleFormControlInput2" placeholder="Frecuencia [Ghz]" />
          {error && (<p style={{fontWeight:'bold'}}>{distance ? 'Ingrese el valor de la frecuencia' : 'Ingrese el valor de la distancia'}</p>)}
          {result && (<p style={{fontWeight:'bold'}}>El máximo radio de la primer zona de Fresnel es de: {result} metros</p>)}
          <button type="button" className="btn btn-primary" onClick={handleCalculation}>Calcular</button>
          <button type="button" className="btn btn-secondary" onClick={handleClean}>Limpiar</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
