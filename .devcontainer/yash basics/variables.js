const accountId = 144553
let accountEmail = "yashdsoni@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail= "hdfc@gmail.com"
accountPassword = 2
accountCity = "mumbai"


/*
Prefer not to use var
because of issue in block scope and functional schope
*/
console.log(accountId);

console.table([accountId , accountEmail , accountPassword, accountCity , accountState])