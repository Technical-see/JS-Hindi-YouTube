const accountId = 123;
let accountEmail = "amitaec.786@gmail.com";
var accountPassword = "090807";
accountCity = "Agra";
// accountId = 2; //it is not allowed

accountEmail = "ami@google.com";
accountPassword = "g1g2g3";
accountCity = "Uttar Pradesh";

let accountState;

console.log(accountId);

console.table([accountEmail, accountPassword, accountCity,accountState]);

/*perfer not use var because of block scope & functional scope*/