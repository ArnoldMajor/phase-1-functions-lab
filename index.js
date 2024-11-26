// Code your solution in this file!
let blocksNumber;
let distance;
function distanceFromHqInBlocks(street) {
    blocksNumber = Math.abs(street - 42);
    return blocksNumber;
}

function distanceFromHqInFeet(street) {
    distanceFromHqInBlocks(street);
    const totalDistance = blocksNumber * 264;
    return totalDistance;
}

function distanceTravelledInFeet(start, destination) {
    distance = Math.abs((destination - start) * 264);
    return distance;
}

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
    let farePrice;
    if (distance < 400) {
        farePrice = 0;
        return farePrice;
    } else if (distance >= 400 && distance <= 2000) {
        farePrice = Math.abs((distance - 400) * 0.02);
        return farePrice
    } else if (distance > 2000 && distance <= 2500) {
        farePrice = 25;
        return farePrice
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }
}
