(function () {
    var countries = [];

    countries.push({
        name: "Russia",
        cities: [{cityName: "Moscow", population: "12506468"},
            {cityName: "Kaluga", population: "328871"},
            {cityName: "Omsk", population: "1139897"},
            {cityName: "Saratov", population: "838321"},
            {cityName: "Barnaul", population: "631124"},
            {cityName: "Sochi", population: "364171"},
            {cityName: "Tumen", population: "816800"}
        ]
    });

    countries.push({
        name: "Kazakhstan",
        cities: [{cityName: "Nūr-Sūltan", population: "1002000"},
            {cityName: "Almaty", population: "1777000"},
            {cityName: "Semey", population: "320397"},
            {cityName: "Oskemen", population: "346127"},
            {cityName: "Ridder", population: "48008"},
            {cityName: "Shymkent", population: "1074167"}
        ]
    });

    countries.push({
        name: "Latvia",
        cities: [{cityName: "Riga", population: "725000"},
            {cityName: "Jurmala", population: "50428"},
            {cityName: "Daugavpils", population: "80627"},
            {cityName: "Ventspils", population: "34377"},
        ]
    });

    countries.push({
        name: "Czech Republic",
        cities: [{cityName: "Prague", population: "1301132"},
            {cityName: "Brno", population: "379526"},
            {cityName: "Pilsen", population: "175219"},
            {cityName: "Karlovy Vary", population: "48319"},
        ]
    });

    countries.push({
        name: "United States Of America",
        cities: [{cityName: "Washington", population: "5400000"},
            {cityName: "New York City", population: "8253213"},
            {cityName: "Chicago", population: "2710000"},
            {cityName: "Denver", population: "2697476"},
            {cityName: "Boston", population: "4628910"},
            {cityName: "Seattle", population: "744955"},
            {cityName: "Detroit", population: "681090"}
        ]
    });

    console.log("Страны: \n");
    countries.forEach(function (item) {
        console.log(item.name + "\n");
    });

    function getMaxCitiesNumberCountriesList(countries) {
        return countries.sort(function (a, b) {
            return b.cities.length - a.cities.length;
        }).filter(function (item) {
            if (item.cities.length === countries[0].cities.length) {
                return item;
            }
        });
    }

    var maxCitiesNumberCountriesList = getMaxCitiesNumberCountriesList(countries);

    console.log("Страны с максимальным количеством городов: \n");

    maxCitiesNumberCountriesList.forEach(function (item) {
        console.log(item.name + "\n");
    });

    function getCountriesAndPopulationsAsObject(countries) {
        var countriesAndPopulationsArray = countries.map(function (item) {
            var countryAndPopulation = {};

            countryAndPopulation.name = item.name;
            countryAndPopulation.population = item.cities.map(function (item) {
                return item.population
            }).reduce(function (res, item) {
                var sum = res;

                sum += parseInt(item);

                return sum;
            }, 0);

            return countryAndPopulation;
        });

        var countriesAndPopulationsObject = {};

        countriesAndPopulationsArray.forEach(function (item) {
            countriesAndPopulationsObject[item.name] = item.population;
        });

        return countriesAndPopulationsObject;
    }

    var countriesAndPopulationsObject = getCountriesAndPopulationsAsObject(countries);

    console.log("Страны и население (печать из объекта):");
    for (var propName in countriesAndPopulationsObject) {
        console.log(propName + ": " + countriesAndPopulationsObject[propName]);
    }
}());