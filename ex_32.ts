// 32. Checking Usernames: 
// Do the following to create a program that simulates how websites ensure that everyone has a 
// unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames 
// are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print 
// a message that the person will need to enter a new username. If a username has not been used, print 
// a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be 
// accepted.
let current_users = ["Zohaib", "Ahmed", "Hussain", "Tariq", "Ayan", "Ayaz"];

let new_Users = ["zohaib","ali","roy","Alex","jhonson"];

// we will use forEach method
new_Users.forEach(new_Users =>{
    let new_Userslower = new_Users.toLowerCase();

    //I will use some ()method
    let userNameTaken = current_users.some(current_users => current_users.toLowerCase() === new_Userslower);  //true or false

    // now will apply conditions
    if(userNameTaken){
        console.log(` ${new_Users} needs to choose a new username because it's already taken\n`);

    }else{
        console.log(` ${new_Users} is the new member added`);
        current_users.push(new_Users)  //add new user to current user
    }
});
console.log(current_users);