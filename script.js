document.getElementById('convert-button').addEventListener('click', () => {
    const temperatureInput = document.getElementById('temperature').value.trim();
    const inputUnit = document.getElementById('input-unit').value;
    const outputUnit = document.getElementById('output-unit').value;
    const resultDiv = document.getElementById('result');
  
    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === "") {
      resultDiv.textContent = "Please enter a valid number!";
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
  
    // Conversion formulas
    const convertTemperature = (temp, fromUnit, toUnit) => {
      if (fromUnit === toUnit) return temp; // No conversion needed
  
      switch (fromUnit) {
        case 'Celsius':
          return toUnit === 'Fahrenheit'
            ? (temp * 9/5) + 32
            : temp + 273.15; // To Kelvin
        case 'Fahrenheit':
          return toUnit === 'Celsius'
            ? (temp - 32) * 5/9
            : ((temp - 32) * 5/9) + 273.15; // To Kelvin
        case 'Kelvin':
          return toUnit === 'Celsius'
            ? temp - 273.15
            : (temp - 273.15) * 9/5 + 32; // To Fahrenheit
        default:
          return temp;
      }
    };
  
    // Perform conversion
    const convertedTemp = convertTemperature(temperature, inputUnit, outputUnit).toFixed(2);
  
    // Display result
    resultDiv.textContent = `${temperature}° ${inputUnit} = ${convertedTemp}° ${outputUnit}`;
  });
  