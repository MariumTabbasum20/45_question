// 18. Seeing the World: 
// Think of at least five places in the world you’d like to visit.
// •Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order
// •Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
// changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
// order has changed.
1; //
var places = ["karachi", "lahore", "faislabad", "murree", "multan"];
console.log(places); //given original
2; //
var copyOfArry = places.slice();
var sortedArry = copyOfArry.sort();
console.log(sortedArry);
3; //
console.log(places);
4; //
var copyofArry2 = places.slice();
var reverseoriArry = places.reverse();
console.log(reverseoriArry);
5; //
console.log(places);
6; //
var reverseoriArry2 = places.reverse();
console.log(reverseoriArry2);
7; //
var againReverse = reverseoriArry2.reverse();
console.log(againReverse); // same as original
8; //
var sortoriArry = places.sort();
console.log(sortoriArry);
9; //
var reversesortedArray = sortoriArry.reverse();
console.log(reversesortedArray);
