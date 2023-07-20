let givenTime = 13;
let propertyType = ["Theatre", "pub", "commertial park"]; 
let propertyBuildTime = [5, 4, 10];
let prppertyRent = [1500, 1000, 3000];
let earning = [];
let propertyCount = [];
let sumEarning = 0;

//ittrating through each property build time
for (let i = 0; i < propertyBuildTime.length; i++) {
  let remainingTime = givenTime;
  let count = 0;
  //looping unless remaining time is less the minimum build time 
  while (remainingTime > propertyBuildTime[i]) {
    //calculating rent earned for each property 
    remainingTime = remainingTime - propertyBuildTime[i];
    sumEarning += prppertyRent[i] * remainingTime;
    count += 1;
  }
  //checking if any other property can be built with remaining time
  for (let j = i + 1; j < propertyBuildTime.length; j++) {
    if (remainingTime > propertyBuildTime[j]) {
      remainingTime = remainingTime - propertyBuildTime[j];
      sumEarning += prppertyRent[j] * remainingTime;
      count += 1;
    }
  }
  // each property earning
  earning.push(sumEarning);
  //each property count
  propertyCount.push(count);
  sumEarning = 0;
}

// finding max earning and its index
let maxValue = Math.max(...earning);
const indices = [];

const output = earning.filter((num, index) => {
  if (num === maxValue) {
    indices.push(index);
    return true;
  }
  return false;
});


/// dsiplaying OUTPUT

console.log("Time Unit", givenTime);
console.log("Earnings: $",output[0]);
for (let i = 0; i < indices.length; i++) {
  if (indices[i] === 0) {
    console.log(`Solutions: T: ${propertyCount[i]} P:0 C: 0`);
  } else if (indices[i] === 1) {
    console.log(`Solutions: T: 0 P:${propertyCount[i]} C: 0`);
  } else if (indices[i] === 2) {
    console.log(`Solutions: T: 0 P:0 C: ${propertyCount[i]}`);
  } else {
  }
}

//const maxValue = Math.max(...earning);
//const output = earning.filter(num => num === maxValue)
//
//let maxEarning=Math.max(...earning);
//console.log(output);

//console.log(`Earnings: $${maxEarning}`);
//let indx=earning.indexOf(maxEarning);
//if(indx===0)
//console.log(`Solutions: T: ${propertyCount[indx]} P:0 C: 0`)
// else if (indx===1)
// console.log(`Solutions: T: ${propertyCount[indx]} P:0 C: 0`)
