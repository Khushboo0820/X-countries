import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import axios from 'axios';

function App() {
  const [data,setData] = useState([]);
  
  useEffect(()=>{
    const getCountries = async()=>{
      try{
        const resp = await axios.get("https://xcountries-backend.azurewebsites.net/all");
        setData(resp.data);
      }catch(err){
        console.error("Error fetching data: ",err);
      }
    }
    getCountries();
  },[]);
  return (
    <div className='wrapper'>
      {data.map((country)=>{
        return(
          <div key={`${country.name}-${country.abbr}`}>
            <Countries name={country.name} flag={country.flag} abbr={country.abbr}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;