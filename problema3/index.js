var CLDR, capital_city, FIPS, FIFA, continent, languages, geoname_id, DS;

$(document).ready(() => {
  var url =
    "https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/616b1fb83cbfd4eb6d9e7d52924bb00a/country-codes_json.json";
  jQuery.ajax({
    url: url,
    dataType: "json",
    success: (data) => {
      $.each(data, (index, country) => {
        CLDR = country["CLDR display name"];

        if (!CLDR) {
          return
        }

        capitalCity = country["Capital"];
        FIPS = country["FIPS"];
        FIFA = country["FIFA"];
        continent = country["Continent"];
        languages = country["Languages"];
        geonameId = country["Geoname ID"];
        distinguishingSign = country["DS"];

        var countryHtml = `
          <div class="country">
            <h3 id="CLDR">${CLDR}</h3>
            <label for="Capital City">Capital City</label>
            <input type="text" name="Capital City" id="capital_city" value="${capitalCity ?? ''}" readonly>
            <label for="FIPS">FIPS code</label>
            <input type="text" name="FIPS" id="FIPS" value="${FIPS ?? ''}" readonly>
            <label for="FIFA">FIFA code</label>
            <input type="text" name="FIFA" id="FIFA" value="${FIFA ?? ''}" readonly>
            <label for="Continent">Continent</label>
            <input type="text" name="Continent" id="continent" value="${continent ?? ''}" readonly>
            <label for="Languages">Languages</label>
            <input type="text" name="Languages" id="languages" value="${languages ?? ''}" readonly>
            <label for="Geoname ID">Geoname ID</label>
            <input type="text" name="Geoname ID" id="geoname_id" value="${geonameId ?? ''}" readonly>
            <label for="Distinguishing Signs">Distinguishing Signs</label>
            <input type="text" name="Distinguishing Signs" id="DS" value="${distinguishingSign ?? ''}" readonly>
          </div>`;

        $("#datos").append(countryHtml);
      });
    },
    error: (xhr, err) => {
      console.log('', xhr, error);
    },
  });
});