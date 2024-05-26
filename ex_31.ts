// 31. No Users: 
// Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

// let userNames2: string[] = ["Ali", "Ahmed", "Hussain", "Tariq", "Ayan", "Ayaz"];

// //to remove all member'
// // userName2 = [];
// // console.log(userName2);

// if(userNames2.length > 0 ){
//     for (let i =0; i< userNames2.length; i++){

//         if(userNames2[i] == "Admin"){
//             console.log(` \n Hello ${userNames2[i]}, would you like to see status report?\n`)
    
//         }else{
//             console.log(`Hello ${userNames2[i]} ,thank you for logging in again`)
//         }
//     } 

// }else{
//     console.log("we need to find some users!")
// }

let userName2: string[] = ["Ali", "Ahmed", "Hussain", "Tariq", " Admin", "Ayan", "Ayaz"];

//to remove all member'
// userName2 = [];
// console.log(userName2);

if(userName2.length > 0 ){
    for (let i =0; i< userName2.length; i++){

        if(userName2[i] == "Admin"){
            console.log(` \n Hello ${userName2[i]}, would you like to see status report?\n`)
    
        }else{
            console.log(`Hello ${userName2[i]} ,thank you for logging in again`)
        }
    } 

}else{
    console.log("we need to find some users!")
}