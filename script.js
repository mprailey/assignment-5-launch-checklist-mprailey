// const importMods = require('./scriptHelper.js');
// Write your JavaScript code here!

window.addEventListener("load", function() {
    const pilotName=document.getElementById("pilotName");
    console.log("Pilot Name is ", pilotName.value);
    const copilotName=document.querySelector("input[name=copilotName]");
    console.log("Co Pilot Name is ", copilotName.value);
    const fuelLevel=document.querySelector("input[name=fuelLevel]");
    console.log("Fuel Level is ", fuelLevel.value);
    const cargoMass=document.querySelector("input[name=cargoMass");
    console.log("Cargo Mass ", cargoMass.value);
    const faultyList=document.querySelector("input[name=faultyList");
    let button = document.getElementById("formSubmit");
   //Button listener
    button.addEventListener("click", function(event) {
      event.preventDefault();
      formSubmission(document,faultyList,pilotName,copilotName,fuelLevel,cargoMass);
   });
    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse=myFetch();
   console.log(listedPlanetsResponse);
   listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
 
   }).then(function () {
       console.log(listedPlanets);  
       let planetIndex=(pickPlanet(listedPlanets));
       addDestinationInfo(document, listedPlanets[planetIndex].name, listedPlanets[planetIndex].diameter, listedPlanets[planetIndex].star, listedPlanets[planetIndex].distance, listedPlanets[planetIndex].moons, listedPlanets[planetIndex].image);
      });
  
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination
    
  
 // 
});