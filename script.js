/*
conditionals oppgave
 
const userName = "Tom";
const userAge = 18;
 
let userIsAdmin = true;
let userIsLoggedIn = false;
let userIsBlocked = false;
 
let goToPage = "";

Lag en conditional som sjekker om userName eksisterer (har innhold), at brukeren er over 18, og at user ikke er blocked.
Hvis en eller flere av disse ikke oppfylles, skal du console.log() en feilmelding.
Hvis alle kriterier er oppfylt, sett variabelen goToPage til "/home", og endre userIsLoggedIn til true.
Hvis brukeren er admin, endre variabelen goToPage til "/admin" istedenfor "/home".
 
 
console.log(goToPage) til slutt for å se at bruker har blitt sendt til rett side.
 
endre på verdiene i variablene for å se at din conditional kan håndtere alle cases

*/

// let tomObject = {
//   userName: "Tom",
//   userAge: 18,
//   userIsAdmin: true,
//   userIsLoggedIn: false,
//   userIsBlocked: false,
// }; //I do not use an object here, but I imagine it could be useful, by having for example admin rights and non-blocked statuses linked to the users object

const userName = "Tom"; //these are variables to call later
const userAge = 18;

let userIsAdmin = false;
let userIsLoggedIn = false;
let userIsBlocked = false;

let goToPage = ""; //Makes an empty string container
// console.log(userName != null);  //just to check if != null worked

if (
  userName != null && //checks if the userName is not nothing
  userAge >= 18 && //Checks if the age is more than 18
  userIsBlocked != true && //Checks that the user is not blocked (could check if he is blocked, but I wanted to use !=)
  userIsLoggedIn == false //if the user is already logged in, they should not reach this screen to begin with
) {
  let userIsLoggedIn = true; //flips the login variable to true
  if (userIsAdmin == true) {
    //checks if the user is an admin and prints the message below if they are
    let goToPage = "/admin";
    console.log("You are now logged in to", goToPage, ". Welcome.");
  } else {
    //if they are not an admin, the stuff below gets posted
    let goToPage = "/home";
    console.log(
      "You are now logged in to",
      goToPage,
      ". Please contact an administrator if you are supposed to have further access."
    );
  }
} else {
  //If they either have no username, their age is 18 or less, they are blocked, or they are already logged in, they will get the error message below
  console.log(
    "Something is not correct; either your age, name, or you are blocked/already logged in."
  );
}
