(function () {
    var countries = [
        {
            name: "Latvia",
            cities: [
                {name: "Riga", population: 725000},
                {name: "Jurmala", population: 50428},
                {name: "Daugavpils", population: 80627},
                {name: "Ventspils", population: 34377}
            ]
        }, {
            name: "Kazakhstan",
            cities: [
                {name: "Nūr-Sūltan", population: 1002000},
                {name: "Almaty", population: 1777000},
                {name: "Semey", population: 320397},
                {name: "Oskemen", population: 346127},
                {name: "Ridder", population: 48008},
                {name: "Shymkent", population: 1074167}
            ]
        }, {
            name: "Russia",
            cities: [
                {name: "Moscow", population: 12506468},
                {name: "Kaluga", population: 328871},
                {name: "Omsk", population: 1139897},
                {name: "Saratov", population: 838321},
                {name: "Barnaul", population: 631124},
                {name: "Sochi", population: 364171},
                {name: "Tumen", population: 816800}
            ]
        }, {
            name: "Czech Republic",
            cities: [
                {name: "Prague", population: 1301132},
                {name: "Brno", population: 379526},
                {name: "Pilsen", population: 175219},
                {name: "Karlovy Vary", population: 48319}
            ]
        }, {
            name: "United States Of America",
            cities: [
                {name: "Washington", population: 5400000},
                {name: "New York City", population: 8253213},
                {name: "Chicago", population: 2710000},
                {name: "Denver", population: 2697476},
                {name: "Boston", population: 4628910},
                {name: "Seattle", population: 744955},
                {name: "Detroit", population: 681090}
            ]
        }
    ];

    console.log("Страны: \n");
    countries.forEach(function (country) {
        console.log(country.name + "\n");
    });

    function getMaxCitiesAmountCountriesList(countries) {
        var maxCitiesAmount = countries.reduce(function (res, country) {
            return Math.max(country.cities.length, res);
        }, 0);

        return countries.filter(function (country) {
            return country.cities.length === maxCitiesAmount;
        });
    }

    var maxCitiesAmountCountriesList = getMaxCitiesAmountCountriesList(countries);

    console.log("Страны с максимальным количеством городов: \n");

    maxCitiesAmountCountriesList.forEach(function (country) {
        console.log(country.name + "\n");
    });

    function getCountriesAndPopulationsAsObject(countries) {
        var countriesAndPopulationsObject = {};

        countries.forEach(function (country) {
            countriesAndPopulationsObject[country.name] = country.cities.reduce(function (res, city) {
                return res + city.population;
            }, 0);
        });

        return countriesAndPopulationsObject;
    }

    var countriesAndPopulationsObject = getCountriesAndPopulationsAsObject(countries);

    console.log("Страны и население (печать из объекта):");
    for (var propName in countriesAndPopulationsObject) {
        console.log(propName + ": " + countriesAndPopulationsObject[propName]);
    }
}());