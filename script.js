function convertTemperature() {
    var inputTemperature = document.getElementById("inputTemperature").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var outputTemperature = document.getElementById("outputTemperature");
  
    if (inputUnit === outputUnit) {
      outputTemperature.value = inputTemperature;
      return;
    }
  
    var celsius;
  
    if (inputUnit === "celsius") {
      celsius = inputTemperature;
    } else if (inputUnit === "fahrenheit") {
      celsius = (inputTemperature - 32) * 5 / 9;
    } else if (inputUnit === "kelvin") {
      celsius = inputTemperature + 273.15;
    }
  
    var outputTemperatureValue;
  
    if (outputUnit === "celsius") {
      outputTemperatureValue = celsius;
    } else if (outputUnit === "fahrenheit") {
      outputTemperatureValue = celsius * 9 / 5 + 32;
    } else if (outputUnit === "kelvin") {
      outputTemperatureValue = celsius + 273.15;
    }
  
    outputTemperature.value = outputTemperatureValue.toFixed(2);
  }
  
