// Code your solution in this file!
// Constants
const HQ_BLOCK = 42;
const BLOCK_SIZE_IN_FEET = 264;
const MAX_FARE_DISTANCE = 2500; // Maximum distance allowed for a ride

// Function to calculate the distance from HQ in blocks
function distanceFromHqInBlocks(block) {
  return Math.abs(block - HQ_BLOCK);
}

// Function to calculate the distance from HQ in feet
function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * BLOCK_SIZE_IN_FEET;
}

// Function to calculate the distance traveled in feet
function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock) * BLOCK_SIZE_IN_FEET;
}

// Function to calculate the fare price
function calculatesFarePrice(startBlock, destinationBlock) {
  const distanceInFeet = distanceTravelledInFeet(startBlock, destinationBlock);

  // First 400 feet are free
  if (distanceInFeet <= 400) {
    return 0;
  }
  
  // Charges 2 cents per foot for distances between 400 and 2000 feet
  const chargeableDistance = distanceInFeet - 400;
  if (chargeableDistance <= 1600) {
    return chargeableDistance * 0.02;
  }

  // Charges 25 dollars for distances over 2000 feet
  if (distanceInFeet > 2000 && distanceInFeet <= MAX_FARE_DISTANCE) {
    return 25;
  }

  // If the distance exceeds 2500 feet, the ride is not allowed
  return 'cannot travel that far';
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInFeet(43));
console.log(distanceTravelledInFeet(43, 48)); 
console.log(calculatesFarePrice(43, 44)); 
console.log(calculatesFarePrice(34, 32)); 
console.log(calculatesFarePrice(50, 58)); 
console.log(calculatesFarePrice(34, 24));
