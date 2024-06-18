// Initialize Variables below

let date = new Date("2019-03-18T10:05:34");
let time = date.toLocaleTimeString();
let astronautCount = 7;
let astronautStatus = "ready";
let averageAtronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAtronautMassKg;
let fuelMassKg = 760_000;
const shuttleMassKg = 74_842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maxiumumMassLimit = 850_000;
let fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftOff = true;

//console.log(shuttleMassKg);

console.log("\nVerification:");

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
console.log(astronautCount <= 7 ? "The astronaut count does not exceed 7." : preparedForLiftOff = false);

// add logic below to verify all astronauts are ready
console.log(astronautStatus === "ready" ? "The Astronuats are ready." : preparedForLiftOff = false);


// add logic below to verify the total mass does not exceed the maximum limit of 850000
console.log(totalMassKg <= 850_000 ? "Total mass does not exceed the maximum limit of 850000" : preparedForLiftOff = false);

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
console.log((minimumFuelTemp >= -300 || maximumFuelTemp <= -150) ?
 "The fuel temperature is within the appropriate range of -150 and -300" : preparedForLiftOff = false);

// add logic below to verify the fuel level is at 100%
console.log(fuelLevel === 100 ? "The fuel level is at 100%." : preparedForLiftOff = false);

// add logic below to verify the weather status is clear
console.log(weatherStatus === "clear" ? "The weather status is clear." : preparedForLiftOff = false);

// Verify shuttle launch can proceed based on above conditions
if(preparedForLiftOff) {
  console.log();
  console.log("Ready for lift off! Starting Launch sequence!");
  console.log("***************************");
  console.log("Date: " + date.toDateString());
  console.log("Time: " + date.toLocaleTimeString());
  console.log("Astronaut Count: " + astronautCount);
  console.log("Crew Mass: " + crewMassKg);
  console.log("Shuttle Mass: " + crewMassKg);
  console.log("Total Mass: " + totalMassKg);
  console.log("Fuel Temperature: " + fuelTempCelsius + "°C");
  console.log("Weather Status: " + "clear");
  console.log("***************************");
  console.log("Have a safe trip astronuats!");
}