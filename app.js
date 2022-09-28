document.addEventListener("DOMContentLoaded", () => {

    // use the DOM to access HTML element
    const listButton = document.getElementById("countries-list-button");
    const countriesList = document.getElementById("countries-list");

    // async function
    const getAllCountries = async () => {

        // will wait for fetch to be completed and promises that something will be returned 
        const response = await fetch("https://restcountries.com/v3.1/all")
        
        // returns the reponse in JSON format so we can access it
        const jsonData = await response.json()
        
        // jsonData returns an array of countries - each with an array of info
        // jsonData is mapped so that for each country the country's name's common value is mapped to countriesNames as just one array of country names
        const countriesNames = jsonData.map((country) => country.name.common);
        const countriesFlags = jsonData.map((country) => country.flags.png );
        

        

        // Alphabetises list A-Z
        //countriesNames.sort();

        // for each country in my countriesNames list -> create new list element -> set text to countryName -> append to created list from countries.HTML

        // countriesNames.forEach((countryName) => {
        //     const newCountry = document.createElement("li");
        //     newCountry.textContent = countryName;
        //     countriesList.appendChild(newCountry);
        // })

        for (let i = 0; i < countriesNames.length; i++) {
            const newCountry = document.createElement("li");
            newCountry.textContent = countriesNames[i];
            const newFlag = document.createElement("img");
            newFlag.src = countriesFlags[i];
            newFlag.height = 15;
            newFlag.width = 15;
            newCountry.appendChild(newFlag);
            countriesList.appendChild(newCountry);
        }

    }

    listButton.addEventListener("click", () => {
        getAllCountries()
    });

    const getPopulation = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();

        const countriesPopulation = jsonData.map((country) => country.population);

        const populationTotal = countriesPopulation.reduce((reducer,population) => reducer + population );

        const header = document.getElementById("population-heading");

        header.innerHTML = "The population of the world is: " + populationTotal;
    };

    getPopulation()


    






    






})