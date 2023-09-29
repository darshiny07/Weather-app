import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const key = "67f4cf3521a6af485075be873dd0b5e6"




const App = () => {
  const [city , setCity] = useState("")
  const [data , setData] = useState()
    const fetchData = async () =>{
        try{
        
         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
         setData(response.data);
         console.log(response.data);
        }
        catch(error){
          alert(`Please enter the city name`)
        }
    }

  return (
    <div>
      <h1>Check Weather</h1>
      <input 
      type='tex' 
      placeholder='enter city name' 
      value={city}
      onChange={(e) => setCity(e.target.value)} ></input>
      <button onClick={fetchData}> search</button>
      {data && (
        <div>
         
         <h1> {data.name} , {data.sys.country}</h1>

        <div><h2>{Math.round(data.main.temp)}°C</h2></div>

        <div>
          <h3>
    
          </h3>
        </div>
        </div>
        
      )}
        
    </div>
  )
}

export default App