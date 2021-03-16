function distanceFromHqInBlocks(startingLocation) {
    if (startingLocation >= 42) {
        return (startingLocation - 42)
    } else if (startingLocation < 42) {
        return (42 - startingLocation)
    }
};

function distanceFromHqInFeet(startingLocation) {
    return (startingLocation - 42) * 264
}

function distanceTravelledInFeet(startingPoint, destination) {
    if (startingPoint < destination) {
    return (destination - startingPoint) * 264
} else {
    return (startingPoint - destination) * 264
}
};
