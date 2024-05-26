// 40. Album: 
// Write a function called make_album() that builds an Object describing a music album. The 
// function should take in an artist name and an album title, and it should return a Object containing 
// these two pieces of information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make 
// at least one new function call that includes the number of tracks on an album.
// function myAlbum(artistName: string , albumTitle: string){
//     return{artistName, albumTitle}
// }
// let album1 = myAlbum("abida Parveen", "Raqs_E_bismil");
// let album2 = myAlbum("Mehdi Hassan", "Aman ki Asha");
// let album3 = myAlbum("Nusrat Fateh Ali Khan", "The Emperor");
// console.log(album1);
// console.log(album2);
// console.log(album3);
//number of tracks
function myAlbum(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album1 = myAlbum("abida Parveen", "Raqs_E_bismil", 55);
var album2 = myAlbum("Mehdi Hassan", "Aman ki Asha", 78);
var album3 = myAlbum("Nusrat Fateh Ali Khan", "The Emperor");
console.log(album1);
console.log(album2);
console.log(album3);
