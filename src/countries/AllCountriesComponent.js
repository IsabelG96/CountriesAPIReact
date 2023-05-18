
const AllCountriesComponent = ({country}) => {


return (

    // <h3>{country.name.common}</h3>
    // <p>{country.capital[0]}</p>
    <>
    {/* <p>This is where I could go!</p> */}
    <li>{country.name.common} {country.flag}</li>
    <button>Add to list</button>
    </>

);
}


// add a button which adds the country to a new blank array
// create a function that adds the country to the array
// map the array into visitedcountries 
export default AllCountriesComponent;
