import React,{useState} from "react";


function App() {
  const [data, setData] = useState ({})
  const [location, setLocation] = useState('')

  const apiKey = "e1b5f3b9d7f887668e19551d222dc013";
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

   const searchLocation = (event) => {
    if (event.key === 'Enter'){
      fetch(url)
      .then(response => response.json()) 
       .then(data => {
        setData(data)
       console.log(data)

      })
      .catch(error => console.log(error))
      setLocation('')
    }
  }
  
  
  return (
    <div className="app">
      <div className="search">
       <input 
       value={location}
       onChange={event => setLocation (event.target.value)}
       onKeyPress={searchLocation}
       placeholder="Enter Location"
       type="text"/>
      </div>
     <div className="Container">
     <div className="top">
      <div className="location">
        <p>{data.name}</p>
      </div>
      <div className="temp">
      <h1>{(data.main?.temp.toFixed() )}˚F</h1>
      </div>
      <div className="description">
      {data.weather ? <p>{data.weather[0].description}</p> :null}
      </div>
     </div>

     {data.name !== undefined &&<div className="bottom">
       <div className="feels">
       {data.main ?<p className="bold">{data.main.feels_like}˚F</p> : null}
            <p>feels</p>
       </div>
       <div className="humidity">
       {data.main ?<p className="bold">{data.main.humidity}%</p> : null}
        <p>humidity</p>
       </div>
       <div className="wind">
       {data.main ?<p className="bold">{data.wind.speed} MPH</p> : null}
            <p>Wind speed</p>
      
       </div>
     </div>}  
     </div>
    


    </div>
  );
}

export default App;
