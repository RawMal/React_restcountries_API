import { useState, useEffect } from "react";

import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();
        const countryNames= jsonData.map((country)=>country.name.common)
        setCountries(countryNames)
        // fetch data from the RESTCountries API
        // set the countries state to the result of the API call
        // pass it down to relevant components
    }

    const addVisited = (countryName) => {
        const updatedVisitedCountries = [...visitedCountries,countryName]
        setVisitedCountries(updatedVisitedCountries)
        console.log(updatedVisitedCountries);
    }

    useEffect(() => {
        fetchCountries();
    }, [])


    return(
        <div className="countries_container">
            <CountriesList countryNames={countries} onClick={addVisited}/>
            <VisitedCountriesList visitedCountries={visitedCountries}/>
        </div>
    );
}

export default CountriesContainer;