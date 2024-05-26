// 36. T-Shirt: 
// Write a function called make_shirt() that accepts a size and the text of a message that should 
// be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the 
// message printed on it. Call the function.

// function make_shirt(size: number , label:string){
//     return `My shirt size is ${size} and label is ${label}`;
// }

// let myTshirt = make_shirt(36,"Polo shirt")

// // how to print on console
// console.log(myTshirt)

let myTshirt= ( size: number, label: string) =>{
    return size + label
}
console.log(myTshirt(36, "Human being"))