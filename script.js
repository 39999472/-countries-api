document.addEventListener('DOMContentLoaded', () => {
  fetchCountryData();
});

function fetchCountryData() {
  fetch('data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => displayCountryList(data))
    .catch(error => console.error('Error fetching data:', error));
}

function displayCountryList(countries) {
  const countryList = document.getElementById('countryList');
  countryList.innerHTML = '';
  countries.forEach(country => {
    const countryItem = document.createElement('div');
    countryItem.className = 'countryItem';
    countryItem.innerText = country.name;
    countryItem.onclick = () => showCountryDetails(country);
    countryList.appendChild(countryItem);
  });
}

function showCountryDetails(country) {
  document.getElementById('backButton').style.display = 'block';
  document.getElementById('countryList').classList.add('hidden');
  document.getElementById('countryDetails').classList.remove('hidden');
  
  document.getElementById('flag').src = country.flags.png;
  document.getElementById('countryName').innerText = country.name;
  document.getElementById('nativeName').innerText = country.nativeName || 'N/A';
  document.getElementById('population').innerText = country.population.toLocaleString();
  document.getElementById('region').innerText = country.region;
  document.getElementById('subRegion').innerText = country.subregion;
  document.getElementById('capital').innerText = country.capital;
  document.getElementById('topLevelDomain').innerText = country.topLevelDomain ? country.topLevelDomain.join(', ') : 'N/A';
  document.getElementById('currencies').innerText = country.currencies ? country.currencies.map(currency => currency.name).join(', ') : 'N/A';
  document.getElementById('languages').innerText = country.languages ? country.languages.map(lang => lang.name).join(', ') : 'N/A';
  document.getElementById('borderCountries').innerText = country.borders ? country.borders.join(', ') : 'N/A';
}

function showCountryList() {
  document.getElementById('backButton').style.display = 'none';
  document.getElementById('countryList').classList.remove('hidden');
  document.getElementById('countryDetails').classList.add('hidden');
}

  

  
  