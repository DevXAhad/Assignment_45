// Question 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. If the list is empty, print the message We need to find some users! Remove all of the usernames from your array, and make sure the correct message is printed.
var users = ['Ali', 'Ali', 'Ali', 'Ali', 'Ali', 'Ali', 'Ali',];
if (users.length === 0) {
    console.log("List is empty, We need to find some users!");
}
else if (users.length != 0) {
    //users = [];
    console.log("All the users have been removed, array contains: ".concat(users.length, " element(s)."));
}
