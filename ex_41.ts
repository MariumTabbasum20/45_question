// 41. Magicians: 
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array.

let magicianNames = ["Ali","Abdul","Basit","Roy"];

function show_magicians(){
    for(let name of magicianNames){
        console.log(name)
    }
};
show_magicians();  //calling of functions
show_magicians();  //2nd calling of functions
