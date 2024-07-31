let list = (bySearch) => {
    let url = 'https://restcountries.com/v3.1/all';
    let searchValue = document.getElementById('search').value;
    
    if (bySearch && searchValue) {
        url = `https://restcountries.com/v3.1/name/${searchValue}`;
    }
    fetch(url)
        .then(json => json.json())
        .then(countries => {
            let row = document.querySelector('#row')
            let countriesHtml = "";
            for (let index = 0; index < countries.length; index++) {
                const country = countries[index];

                countriesHtml += `
                    <div class="col-4 mt-5">
                        <div class="card" style="width: 18rem;">
                            <img src="${country.flags.png}" class="card-img-top" alt="${country.flags.alt}">
                            <div class="card-body">
                            <h5 class="card-title">${country.translations.por.common}</h5>
                            <p class="card-text">Região: ${country.region}</p>
                            </div>
                        </div>
                    </div>`;
            }

            row.innerHTML = countriesHtml;
        });
}
list();