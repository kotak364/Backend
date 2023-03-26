//When function pass as arguments of other function it's call callback function

setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

const names = ["Andrew", "Jean", "Jess"];

const shortNames = names.filter((name) => {
  return name.length <= 4;
});

// const geocode = (address,callback) => {
// setTimeout(()=> {
//     const data = {
//         latiude:0,
//         longitude:0,
//     }
//     return data
// },2000)

// // const data = {
// //     latiude:0,
// //     longitude:0,
// // }
// // return data

// }

// const data  = geocode('Philadelphia')
// console.log(data,"data")

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latiude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);

  // const data = {
  //     latiude:0,
  //     longitude:0,
  // }
  // return data
};
geocode("Philadelphia", (data) => {
  console.log(data, "data");
});

//Challenge
// Goal: Mess around with the callback pattern
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
  setTimeout(() => {
    sum = a + b;
    callback(sum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});

//callback and promise comparsion
const doWorkCallback = (callback) => {
  setTimeout(() => {
    callback("This is my error", undefined);
    callback(undefined, [1, 4, 2]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }

  console.log(result);
});
