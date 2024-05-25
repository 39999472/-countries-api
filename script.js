document.addEventListener("DOMContentLoaded", () => {
  const countriesContainer = document.getElementById("countries-container");
  const searchInput = document.getElementById("search");
  const regionFilter = document.getElementById("region-filter");

  fetch('data.json')
      .then(response => response.json())
      .then(data => {
          displayCountries(data);

          searchInput.addEventListener('input', () => {
              const searchQuery = searchInput.value.toLowerCase();
              const filteredCountries = data.filter(country =>
                  country.name.toLowerCase().includes(searchQuery)
              );
              displayCountries(filteredCountries);
          });

          regionFilter.addEventListener('change', () => {
              const selectedRegion = regionFilter.value;
              const filteredCountries = selectedRegion
                  ? data.filter(country => country.region === selectedRegion)
                  : data;
              displayCountries(filteredCountries);
          });
      });

  function displayCountries(countries) {
      countriesContainer.innerHTML = '';
      countries.forEach(country => {
          const countryCard = document.createElement('div');
          countryCard.className = 'country-card';
          countryCard.innerHTML = `
              <img src="${country.flag}" alt="${country.name} Flag">
              <h2>${country.name}</h2>
              <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> ${country.region}</p>
              <p><strong>Capital:</strong> ${country.capital}</p>
          `;
          countriesContainer.appendChild(countryCard);
      });
  }
});


