//    34. Pizzas: 
// Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and 
// then use a for loop to print the name of each pizza.
// • Modify your loop to print a sentence using the name of the pizza instead of printing just the name of 
// the pizza. For each pizza you should have one line of output containing a simple statement like I like 
// pepperoni pizza.
//  Add a line at the end of your program, outside the for loop, that states how much you like pizza. The 
// output should consist of three or more lines about the kinds of pizza, you like and then an additional 
//  sentence, such as I really love pizza!   
var myPizza = ["cheese Pizza", "Fajita Pizza", "vegetable Pizza"];
// print only names of pizza
for (var i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}
// print names and sentences message "
for (var i = 0; i < myPizza.length; i++) {
    console.log("i like to eat ".concat(myPizza[i], " "));
}
console.log("\n I like to eat pizza,pizza is having too many flavours and many of the different topping,and allows to customize by the choices of customers");