// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady	= true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed	= 15000;
let engineTemperature = 3000;
let commandOverride = true;
// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

if (crewStatus) {
  console.log("Crew ready");
}else {
  console.log("Crew Not Ready");
}

if (computerStatusCode === 200) {
  console.log("Please stand by. Computer is rebooting.");
}else if (computerStatusCode === 400) {
  console.log("Success! Computer online.");
} else {
  console.log("ALERT: Computer offline!")
}

if (shuttleSpeed > 17500) {
  console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
  console.log("ALERT: Cannot maintain orbit!");
} else {
  console.log("Stable speed.");
}



console.log();


fuelLevel = 21000;
engineTemperature = 1200;
engineIndicatorLight = "NOT red blinking";


if((fuelLevel > 20_000) && engineTemperature <= 2500) {
  console.log("Full tank. Engines good");
} else if ((fuelLevel > 10_000) && engineTemperature <= 2500) {
  console.log("Fuel level above 50%. Engines good");
} else if ((fuelLevel > 5000) && engineTemperature <= 2500) {
  console.log("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 50000 || engineTemperature > 2500) {
  console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel < 1000 || engineTemperature > 3500
  || engineIndicatorLight === "red blinking" ) {
 console.log("ENGINE FAILURE IMMINENT!");
} else {
  console.log("Fuel and engine status pending…");
}

if (!commandOverride && fuelLevel > 5000
   && engineTemperature <= 2500) {
  console.log("Launch in sequence");
} else if (commandOverride) {
  console.log("Launch in sequence");
}

if (fuelLevel > 20_000 && engineIndicatorLight
   === "is NOT red blinking" || commandOverride) {
  console.log("Cleared to launch");
} else {
  console.log("Launched scrubbed");
}