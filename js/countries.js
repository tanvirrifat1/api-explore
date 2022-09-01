const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCountries (data))
}

const displayCountries = countries =>{
    // for(const country of countries){
    //     console.log(country)
    // }
    const contriesContainer = document.getElementById('countries-container')
    countries.forEach(country =>{
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        // console.log(country)
        countryDiv.innerHTML = `
        <h3> Name: ${country.name.common}</h3>
        <p> capital: ${country.capital ? country.capital[0] : 'no capital'} </p>
        <button onclick ="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        contriesContainer.appendChild(countryDiv)
    })
}

const loadCountryDetails = (code) =>{
    // https://restcountries.com/v3.1/alpha/{code}
    const url = (`https://restcountries.com/v3.1/alpha/${code}`)
    // console.log('country details', code)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))

}

const displayCountryDetails = country =>{
    console.log(country)
   const countryDetail = document.getElementById('country-details')
   countryDetail.innerHTML = `
   <h2>Details: ${country.name.common}</h2>
   <img src="${country.flags.png}" >
   `
}

loadCountries();    