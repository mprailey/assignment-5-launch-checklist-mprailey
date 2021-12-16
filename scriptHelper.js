//const extMod = require('isomorphic-fetch');
// Write your helper functions here!
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget =document.getElementById("missionTarget");
            missionTarget.innerHTML=`
              <div id="missionTarget" data-testid="missionTarget">
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src=${imageUrl}></img>
            </div>
         `;   
 }

function validateInput(testInput) {
 
    // Test if string is  empty, Return "Empty" , if true.
    if(testInput === ""){
        return "Empty";
    //Test if testInput is a number.  Return a string indicating result
    } else if(isNaN(testInput)){
        return "Not a Number";
        }else {
             return "Is a Number";
         }
  }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
 //Validate all values were entered and Fuel level and cargo mass are numbers

       if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value)==="Empty"|| validateInput(fuelLevel.value)==="Empty" || validateInput(cargoMass.value) === "Empty"){
            alert("All fields are required!")
            }else if(validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoMass.value) === "Not a Number" ){
                alert("Fuel level and Cargo Mass must be numeric");
                }else {
                    document.getElementById('pilotStatus').innerHTML="Pilot " + pilot.value + " is Ready "; /* update pilot ready  message */
                    document.getElementById('copilotStatus').innerHTML="Co-Pilot " + copilot.value + " is Ready"; /* update copilot ready  message */
                 //If fuelLevel is less than 10000 or cargoMass is greater than 10000
                      if (Number(fuelLevel.value) < 10000 || Number(cargoMass.value) > 10000){ 
                        if (Number(fuelLevel.value) < 10000 ){
                           document.getElementById('fuelStatus').innerHTML="Fuel level is too low for launch";   
                        }
                        if (Number(cargoMass.value) > 10000 ){
                            document.getElementById('cargoStatus').innerHTML="Cargo Mass is too large for launch";   
                        }	
                        document.getElementById('faultyItems').style.visibility = 'visible';
                        document.getElementById('launchStatus').style.color='red';
                        document.getElementById('launchStatus').innerHTML="Shuttle Not Ready for Launch"
                    } else if(Number(fuelLevel.value) > 10000 && Number(cargoMass.value) < 10000) {
                        document.getElementById('launchStatus').style.color='green';
                        document.getElementById('launchStatus').innerHTML="Shuttle Ready for Launch";
                        document.getElementById('faultyItems').style.visibility = 'hidden';
                       }
                }
}
async function myFetch() {
    let planetsReturned=[];

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json", {
        });
    return planetsReturned.json();       
}

function pickPlanet(planets) {
    const numPlanets=5;
    let randomNum=(Math.floor(Math.random() * numPlanets ));
    return randomNum;
}

//exports.addDestinationInfo = addDestinationInfo;
//exports.validateInput = validateInput;
//exports.formSubmission = formSubmission;
//exports.pickPlanet = pickPlanet; 
//exports.myFetch = myFetch;
