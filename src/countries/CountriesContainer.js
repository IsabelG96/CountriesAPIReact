import { useState, useEffect } from "react";
import AllCountriesComponent from "./AllCountriesComponent"
import VisitedCountriesComponent from "./VisitedCountriesComponent";

const CountriesContainer = () => {

    const [listOfCountries, setListOfCountries] = useState(null);

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json(); 
        
        setListOfCountries(jsonData);
    }

    console.log(listOfCountries);

    useEffect(() => {
        fetchCountries();
    }, [])

return (
    <>
    <p>hello world</p>
    <AllCountriesComponent/>
    <VisitedCountriesComponent/>
    </>
);
}

export default CountriesContainer;


