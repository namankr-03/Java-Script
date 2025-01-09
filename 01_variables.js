const accountId = 14453
let accountEmail = "naman20@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId=2 Not allowed
accountEmail="hc@hc.com"
accountPassword="2221"
accountCity="Bangolre"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


/*
Prefer not to use var bcz of issue in block issue and functional scope.
*/