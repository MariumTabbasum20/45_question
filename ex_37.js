// 37. Large Shirts: 
// Modify the make_shirt() function so that shirts are large by default, with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
// size with a different message.
// function myTshirt(size: string, label:string){
//     return size + label
// }
// let myFunction = myTshirt("large", " cool day ");
// console.log(myFunction)
//making large as default
// function myTshirt( label:string, size: string = "large"){
//     return size + label
// }
// let myFunction = myTshirt("large", " cool day ");
// console.log(myFunction)
//making medium as default
// function myTshirt( label:string, size: string = "Medium"){
//     return size + label
// }
// let myFunction = myTshirt("Medium", " cool day ");
// console.log(myFunction)
//make shirt of any size
function myTshirt(label, size) {
    return size + label;
}
var myFunction = myTshirt("any size", " I love Pakistan ");
console.log(myFunction);
