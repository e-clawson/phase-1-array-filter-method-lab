// Code your solution here
function findMatching(drivers, name){
    const newDrivers = drivers.filter(function(person){return person.toLowerCase() === name.toLowerCase()});
    return newDrivers;
}
function fuzzyMatch(drivers, name) { {
        return drivers.filter(
          (possibleMatch) =>
            possibleMatch.toLowerCase().indexOf(name.toLowerCase()) === 0
        );
      }
}

function matchName(drivers, name){ 
    return drivers.filter(function(driver){
        return driver.name === name
        });
}