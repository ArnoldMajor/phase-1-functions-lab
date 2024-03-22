let streetNumber;
let officeStreet = 42;

function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(streetNumber - officeStreet);
}

let feetPerBlock = 264;

function distanceFromHqInFeet(streetNumber){
    return Math.abs(distanceFromHqInBlocks(streetNumber) * feetPerBlock);
}

let start;
let destination;

function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start) * feetPerBlock);
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    }

    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000){
        return Math.abs((2 * (distanceTravelledInFeet(start , destination)-400))/100);
    }

    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500){
        return 25;
    }

    else (distanceTravelledInFeet(start, destination) > 2500 ); {
        return 'cannot travel that far'
    }
}
