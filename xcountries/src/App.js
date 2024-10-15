import {useEffect,useState} from "react";
import './App.css';
import Countries from "./components/Countries";
import axios from "axios";


function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // For handling errors

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get("https://xcountries-backend.azurewebsites.net/all");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch countries data.");
      }
    };

    getCountries();
  }, []);

  return (
    <div className="wrapper">
      {error && <p>{error}</p>} {/* Display error message if any */}
      {data.map((country) => (
        <div key={`${country.name}-${country.abbr}`}>
          <Countries name={country.name} flag={country.flag} abbr={country.abbr} />
        </div>
      ))}
    </div>
  );
}

export default App;
