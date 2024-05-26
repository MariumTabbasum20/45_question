// 42. Great Magicians: 
// Start with a copy of your program from Exercise 41. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
// show_magicians() to see that the list has actually been modified.
var magicianNames = ["Ali", "Abdul", "Basit", "Roy"];
function show_magicians(great) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var name_1 = magicianNames_1[_i];
        console.log(great, name_1);
    }
}
;
show_magicians("Hello, How are you Mr.");
show_magicians("Hello, "); //2nd time calling
