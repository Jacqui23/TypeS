

function convertPoundsToKilograms(pounds : number):number{
    return  pounds * 0.453592;
  }
  
  function convertInchestoCentimetres (inches : number):number{
     return inches * 2.54;
  }
  
  function convertFahrenheittoCelsius (Fahrenheit : number) : number {
    return (Fahrenheit-32) * 5/9
  }
  
  function convertFeetheittoMetres (Feet : number) : number {
    return Feet * 3.281;
  }
  
  console.log (convertPoundsToKilograms(10))
  console.log (convertInchestoCentimetres(10))
  console.log (convertFahrenheittoCelsius(15))
  console.log (convertPoundsToKilograms(15))

