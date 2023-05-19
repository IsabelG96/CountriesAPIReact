import { useState, useEffect } from "react";
import AllCountriesComponent from "./AllCountriesComponent"
import VisitedCountriesComponent from "./VisitedCountriesComponent";

const CountriesContainer = () => {

    const [listOfCountries, setListOfCountries] = useState([]);
    const [listofVisitedCountries, setListOfVisitedCountries] = useState([]);

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();    
        setListOfCountries(jsonData);
    }

    console.log(listOfCountries);

    const allCountries = listOfCountries.map((country) => {
            return <AllCountriesComponent country={country}/>
        })    
    
        

    useEffect(() => {
        fetchCountries();
    }, [])

    
    const addNewCountry = (newCountry) => {
        setListOfVisitedCountries([...listOfVisitedCountries, newCountry])

    }

    // const visitedCountryComponents = listOfVisitedCountries.map((country) =>
    
    //     return <VisitedCountriesComponent country={country}/>
    // })


    return (
    <>
    <h3>Travel Bucket List</h3>
    <VisitedCountriesComponent/>
    {allCountries}
    </>
);
}

export default CountriesContainer;


