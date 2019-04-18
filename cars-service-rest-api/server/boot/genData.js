

module.exports = function (app) {
  var data = [
    {
      "model": "Mazda Rx7",
      "type": "Coupe",
      "year": "1998",
      "color": "red",
      "isFullyDamaged": false,
      "clientFirstName": "Jan",
      "clientSurname": "Kowalski",
      "power": 155,
      "plate": "GWE22118",
      "deliveryDate": "2017-03-01T17:16:39.259Z",
      "deadline": "2017-12-01T17:16:39.260Z",
      "parts": [
        {
          "name": "Air filters",
          "inStock": true,
          "price": 600
        },
        {
          "name": "Alternators",
          "inStock": false,
          "price": 600
        },
        {
          "name": "Belts",
          "inStock": false,
          "price": 250
        },
        {
          "name": "Ball Joints",
          "inStock": true,
          "price": 800
        }
      ]
    },
    {
      "model": "Mercedes 124",
      "type": "Kombi",
      "year": "1993",
      "color": "green",
      "isFullyDamaged": true,
      "clientFirstName": "Marcin",
      "clientSurname": "Kowal",
      "power": 96,
      "plate": "GD2214X",
      "deliveryDate": "2017-08-03T17:16:39.259Z",
      "deadline": "2017-11-04T17:16:39.260Z",
      "parts": [
        {
          "name": "Air filters",
          "inStock": true,
          "price": 400
        },
        {
          "name": "Alternators",
          "inStock": false,
          "price": 1200
        }
      ]
    },
    {
      "model": "Audi R8",
      "type": "Coupe",
      "year": "2014",
      "color": "yellow",
      "isFullyDamaged": false,
      "clientFirstName": "Stefan",
      "clientSurname": "Tusk",
      "power": 420,
      "plate": "KRK44333",
      "deliveryDate": "2017-05-12T17:16:39.259Z",
      "deadline": "2017-12-14T17:16:39.260Z",
      "parts": [
        {
          "name": "Air filters",
          "inStock": true,
          "price": 400
        },
        {
          "name": "Belts",
          "inStock": false,
          "price": 800
        },
        {
          "name": "Ball Joints",
          "inStock": true,
          "price": 1200
        }
      ]
    },
    {
      "model": "BMW M3",
      "type": "Sedan",
      "year": "2004",
      "color": "silver",
      "isFullyDamaged": false,
      "clientFirstName": "Karolina",
      "clientSurname": "Boczek",
      "power": 200,
      "plate": "KRK30301",
      "deliveryDate": "2017-09-11T17:16:39.259Z",
      "deadline": "2017-10-18T17:16:39.260Z",
      "parts": [
        {
          "name": "Brake Rotors and Pads",
          "inStock": false,
          "price": 2300
        },
        {
          "name": "Belts",
          "inStock": false,
          "price": 300
        },
        {
          "name": "Ball Joints",
          "inStock": true,
          "price": 900
        }
      ]
    },
    {
      "model": "Renault Clio",
      "type": "Sedan",
      "year": "2012",
      "color": "silver",
      "isFullyDamaged": true,
      "clientFirstName": "Franek",
      "clientSurname": "Nowak",
      "power": 170,
      "plate": "CB12404",
      "deliveryDate": "2017-04-17T17:16:39.259Z",
      "deadline": "2017-11-11T17:16:39.260Z",
      "parts": [
        {
          "name": "Brake Rotors and Pads",
          "inStock": false,
          "price": 1800
        },
        {
          "name": "Oxygen Sensors",
          "inStock": false,
          "price": 500
        },
        {
          "name": "Ball Joints",
          "inStock": true,
          "price": 600
        }
      ]
    },
    {
      "model": "Renault Megane",
      "type": "Kombi",
      "year": "2011",
      "color": "black",
      "isFullyDamaged": false,
      "clientFirstName": "Zbigniew",
      "clientSurname": "Kluska",
      "power": 136,
      "plate": "GPU44000",
      "deliveryDate": "2017-04-22T17:16:39.259Z",
      "deadline": "2017-09-22T17:16:39.260Z",
      "parts": [
        {
          "name": "Brake Rotors and Pads",
          "inStock": false,
          "price": 1200
        },
        {
          "name": "Carburetors",
          "inStock": false,
          "price": 2000
        },
        {
          "name": "Ball Joints",
          "inStock": true,
          "price": 300
        }
      ]
    },
    {
      "model": "Ford Fiesta",
      "type": "Coupe",
      "year": "1999",
      "color": "blue",
      "isFullyDamaged": false,
      "clientFirstName": "Anna",
      "clientSurname": "Gryc",
      "power": 130,
      "plate": "GBA55033",
      "deliveryDate": "2017-04-30T17:16:39.259Z",
      "deadline": "2017-12-30T17:16:39.260Z",
      "parts": [
        {
          "name": "Brake Rotors and Pads",
          "inStock": false,
          "price": 2300
        },
        {
          "name": "Compressors",
          "inStock": false,
          "price": 1200
        }
      ]
    },
    {
      "model": "Ford Focus",
      "type": "Kombi",
      "year": "2004",
      "color": "red",
      "isFullyDamaged": true,
      "clientFirstName": "Monika",
      "clientSurname": "Bach",
      "power": 170,
      "plate": "KKP90777",
      "deliveryDate": "2017-03-30T17:16:39.259Z",
      "deadline": "2017-08-30T17:16:39.260Z",
      "parts": [
        {
          "name": "Brake Rotors and Pads",
          "inStock": false,
          "price": 2300
        },
        {
          "name": "Compressors",
          "inStock": false,
          "price": 1200
        },
        {
          "name": "Air filters",
          "inStock": true,
          "price": 600
        },
        {
          "name": "Alternators",
          "inStock": false,
          "price": 600
        }
      ]
    }
  ];

  data = data.map(function(car) {
      car.cost = getCost(car.parts);
      return car;
  });

  function getCost(parts) {
    return parts.reduce(function(prev, next) {
      return prev + next.price
    }, 0);
  }

  var db = app.dataSources.db;
  const CarModel = app.models.Car || db.buildModelFromInstance("Car", data, {idInjection: true});

  data.map(function(car) {
    CarModel.create(car, function (err, u) {
    if (err) {
      throw err;
    }
  });
})

}
