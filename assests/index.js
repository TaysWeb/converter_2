
  // variables 
  let result = " ";
 let getTemp = document.getElementById("clickTemp") ;
 let disTemp = document.getElementById("disTempC") ;
 let temperature ;
 let conversionType ;
 let deg ;

 function getTemperature() {

     temperature = parseFloat(prompt("Enter the temperature:"));
      conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)");
      deg = document.getElementById("clickTemp").value ;

}
 

  // Function to convert Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    deg = ((temperature * 9 / 5 ) + 32 ).toFixed(2);
}
// Function to convert Fahrenheit to Celsius 
function fahrenheitToCelsius(fahrenheit) {
  deg = ((temperature - 32 ) * 5 / 9 ).toFixed(2);  
}
 

function displayTemperature() { 
disTemp.addEventListener("click" , function() {
   //to check what conversion user type in
  if (conversionType.toLowerCase() === "celsius to fahrenheit") {
      celsiusToFahrenheit();
      result = deg + " " + "C";  
  } else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
    fahrenheitToCelsius() ;
    result = deg + " " + "C";  
  } else {
    alert("Invalid conversion type.");
  }

  document.getElementById("conversion").innerHTML = result ;
});

 }
 function tempClear() {
    document.getElementById("conversion").innerHTML =  " "  ;
    }