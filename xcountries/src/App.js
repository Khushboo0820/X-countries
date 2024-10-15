import {useEffect,useState} from "react";
import './App.css';
import Countries from "./components/Countries";
import axios from "axios";


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // For handling errors

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get("https://xcountries-backend.azurewebsites.net/all");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data: ",error);
        setError("Failed to fetch countries data.");
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Display loading text
      ) : (
        <div className="wrapper">
          {data.map((country) => (
            <div key={`${country.name}-${country.abbr}`}>
              <Countries name={country.name} flag={country.flag} abbr={country.abbr} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
