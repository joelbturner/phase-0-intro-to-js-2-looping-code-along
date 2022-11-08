// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
//   }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


function writeCards(arrayOfNames, event){
    const shoppingCart = []
    for (let i = 0; i < arrayOfNames.length; i++){
        shoppingCart.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!` );
        debugger;
    }
    return shoppingCart

}

const myArrayOfNames = ["Charles", "Sal", "Alice"]
const myEvent = "Christmas"
    writeCards(myArrayOfNames,myEvent);


function countDown(){
let i = 10;
while (i > -1) {
    console.log(i--);
    }
return i
}

