const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([7, 4, 1]);
    reject("Thigs went wrong");
    resolve([2, 3, 2]); // only one reject or resolve work in promise
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("Success", result);
  })
  .catch((error) => {
    console.log("Error", error);
  });


  //Advantages of promise over callback
  //then and catch automatically manage the errors
  //Promise stop when resolve and reject get in callback mutiple callback allowed
  //