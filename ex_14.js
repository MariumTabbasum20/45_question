//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner
//You just heard that one of your guests can’t make the dinner, so you need to send out a new 
var myFriends = ["Ali", "Ahmed", "Hussain", "Tariq", "Ayan", "Ayaz"];
// 1st method with loop
for (var i = 0; i < myFriends.length; i++) {
    console.log("Mr. ".concat(myFriends[i], "! you are invited to my dinner on monday\n"));
}
//2nd method using map()
myFriends.map(function (ib) {
    console.log("Mr. ".concat(ib, "!you are invited to my dinner on monday\n"));
});
