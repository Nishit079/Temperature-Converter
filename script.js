function convertTemp() {
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerText = 
      `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  }