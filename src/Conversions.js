export const tempConversion = {
    Celsius: {
      Celsius: function (x) {
        return x;
      },
      Fahrenheit: function (x) {
        return x * 1.8 + 32;
      },
      Kelvin: function (x) {
        return x + 273.15;
      },
      Rankine: function (x) {
        return x * (9 / 5) + 491.67;
      },
    },
    Fahrenheit: {
      Celsius: function (x) {
        return (x - 32) * (5 / 9);
      },
      Fahrenheit: function (x) {
        return x;
      },
      Kelvin: function (x) {
        return (x - 32) * (5 / 9) + 273.15;
      },
      Rankine: function (x) {
        return x + 459.67;
      },
    },
    Kelvin: {
      Celsius: function (x) {
        return x - 273.15;
      },
      Fahrenheit: function (x) {
        return (x - 273.15) * (9 / 5) + 32;
      },
      Kelvin: function (x) {
        return x;
      },
      Rankine: function (x) {
        return x * 1.8;
      },
    },
    Rankine: {
      Celsius: function (x) {
        return (x - 491.67) * (5 / 9);
      },
      Fahrenheit: function (x) {
        return x - 459.67;
      },
      Kelvin: function (x) {
        return x * (5 / 9);
      },
      Rankine: function (x) {
        return x;
      },
    },
  };

  export const volConversion = {
    'Cubic-inches': {
      'Cubic-inches': function (x) {
        return x;
      },
      'Cubic-feet': function (x) {
        return x / 1728;
      },
      Cups: function (x) {
        return x / 14.646;
      },
      Gallons: function (x) {
        return x / 231;
      },
      Liters: function (x) {
        return x / 61.024;
      },
      Tablespoons: function (x) {
        return x * 1.108;
      },
    },
    'Cubic-feet': {
      'Cubic-inches': function (x) {
        return x * 1728;
      },
      'Cubic-feet': function (x) {
        return x;
      },
      Cups: function (x) {
        return x * 118;
      },
      Gallons: function (x) {
        return x * 7.481;
      },
      Liters: function (x) {
        return x * 28.317;
      },
      Tablespoons: function (x) {
        return x * 1915;
      },
    },
    Cups: {
      'Cubic-inches': function (x) {
        return x * 14.646;
      },
      'Cubic-feet': function (x) {
        return x / 118;
      },
      Cups: function (x) {
        return x;
      },
      Gallons: function (x) {
        return x / 15.772;
      },
      Liters: function (x) {
        return x / 4.167;
      },
      Tablespoons: function (x) {
        return x * 16.231;
      },
    },
    Gallons: {
      'Cubic-inches': function (x) {
        return x * 231;
      },
      'cubic-feet': function (x) {
        return x / 7.48;
      },
      Cups: function (x) {
        return x * 15.773;
      },
      Gallons: function (x) {
        return x;
      },
      Liters: function (x) {
        return x * 3.785;
      },
      Tablespoons: function (x) {
        return x * 256;
      },
    },
    Liters: {
      'Cubic-inches': function (x) {
        return x * 61.024;
      },
      'Cubic-feet': function (x) {
        return x / 28.317;
      },
      Cups: function (x) {
        return x * 4.167;
      },
      Gallons: function (x) {
        return x / 3.785;
      },
      Liters: function (x) {
        return x;
      },
      Tablespoons: function (x) {
        return x * 67.628;
      },
    },
    Tablespoons: {
      'Cubic-inches': function (x) {
        return x / 1.108;
      },
      'Cubic-feet': function (x) {
        return x / 1915;
      },
      Cups: function (x) {
        return x / 16.231;
      },
      Gallons: function (x) {
        return x / 256;
      },
      Liters: function (x) {
        return x / 67.628;
      },
      Tablespoons: function (x) {
        return x;
      },
    },
  };

