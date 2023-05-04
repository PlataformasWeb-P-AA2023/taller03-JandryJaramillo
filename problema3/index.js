$(document).ready(() => {
  var url =
    "https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/616b1fb83cbfd4eb6d9e7d52924bb00a/country-codes_json.json";
  jQuery.ajax({
    url: url,
    dataType: "json",
    success: (data) => {
      $.each(data, (index, pais) => {
        CLDR = pais["CLDR display name"];

        if (!CLDR) {
          return
        }

        Capital = pais["Capital"];
        FIPS = pais["FIPS"];
        FIFA = pais["FIFA"];
        Continent = pais["Continent"];
        Languages = pais["Languages"];
        ID = pais["Geoname ID"];
        DS = pais["DS"];

        var html = `
          <div class="contenedor">
            <h3 id="CLDR">${CLDR}</h3>
            <label for="Capital City">Ciudad Capital</label>
            <p id="capital_city">${Capital ?? ''}</p>            
            <label for="FIPS">FIPS ID</label>
            <p id="FIPS">${FIPS ?? ''}</p>            
            <label for="FIFA">FIFA ID</label>
            <p id="FIFA">${FIFA ?? ''}</p>  
            <label for="Continent">Continente</label>
            <p id="Continent">${Continent ?? ''}</p> 
            <label for="Languages">Lenguajes</label>
            <p id="Languages">${Languages ?? ''}</p>
            <label for="Geoname ID">Geoname ID</label>
            <p id="ID">${ID ?? ''}</p>
            <label for="Distinguishing Signs">Distinguishing Signs</label>
            <p id="DS">${DS ?? ''}</p>
          </div>`;

        $("#datos").append(html);
      });
    },
    error: (xhr, err) => {
      console.log('', xhr, error);
    },
  });
});