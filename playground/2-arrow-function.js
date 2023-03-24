//standard function
// const square = function(x) {
//     return x + x
// }

// console.log(square(3));

// arrow function

// const sqaure = (x) => {
//     return x + x;
// }

// short form of arrow function
// const square = (x) => x + x;
// console.log(square(3));

const event = {
    name:"BirthDay Party",
    guestList:["Andrew", "Jen","Mike"],
    printGuestList(){
        console.log("Guest list for " + this.name)
        this.guestList.forEach(guest => {
            console.log(guest + 'is attending ' +this.name)
        });
    }
}

event.printGuestList()



