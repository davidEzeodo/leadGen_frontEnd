import { useState } from "react";
import "./NavSearchStyles.css";

const NavSearch = ({ onFetchLeads }) => {
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSearch = async () => {

    if (!occupation && !city && !country && !keyword) {
      console.error("Please provide at least one search parameter.");
      return;
    }  

    const queryParams = {
      occupation,
      city,
      country,
      keyword
    };
    console.log(queryParams);
    

    // const queryParamsToString = JSON.stringify(queryParams)
    const queryParamsToString = JSON.stringify(queryParams)
    console.log(queryParamsToString);

    try {
      const response = await fetch(
        "http://localhost:8080/search",
        {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: queryParamsToString
        }
      );

      const data = await response.json();
      console.log(data)

      onFetchLeads(data); // Pass the fetched data to the parent
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  return (
    <div className="navContainer">
      <div className="navArea">
        <div className="input-section">
          <div className="input-header">
            <h5>OCCUPATION</h5>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
        </div>
        <div className="input-section">
          <div className="input-header">
            <h5>CITY</h5>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="input-section">
          <div className="input-header">
            <h5>COUNTRY</h5>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
        <div className="input-section">
          <div className="input-header">
            <h5>KEYWORD</h5>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleSearch}>Find my leads</button>
      </div>
    </div>
  );
};

export default NavSearch;
