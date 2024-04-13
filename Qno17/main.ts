// Qno #17

let guestlist: string[] = ["Rehana", "Hania", "Haleema"];
// for (let i = 0; i < guestlist.length; i++) {
//   console.log(`Dear` +guestlist[i] +`, It is our pleasure to invite you to the dinner party. Thank you!`);
// }
let absentGuest: string = "Rehana";
let newGuest: string = "Rabail";
guestlist[0] = newGuest;
// for (let i = 0; i < guestlist.length; i++) {
//   console.log(`Dear` +guestlist[i] +`,It is our pleasure to invite you to the dinner party.Thank you!`);
// }
console.log(`Dear ${absentGuest} is not coming to the dinner party.`);
console.log(`Good News! We find big table so we are inviting 3 more guest.`);

// Add 3 guest
guestlist.unshift("Eman");
guestlist.splice(2, 0, `Hashim`);
guestlist.push("Qasim");

// Print array guest
for (let i = 0; i < guestlist.length; i++) {
  console.log(`Dear` +guestlist[i] +`,It is our pleasure to invite you to the dinner party.Thank you!`);
}

// Guest for not ivited
console.log(`Sorry we cannot arrange big table, only two peoples will be invited.`);

// Remove guest from array
while(guestlist.length > 2){
 let removeguest = guestlist.pop();
 console.log(`Sorry Dear ${removeguest}, you are not invited for the dinner.`)
}

// still two invited guest
for (let i = 0; i < guestlist.length; i++) {
  console.log(`Dear`+ " "+guestlist[i] +`, you are still invited.Thank you!`);
}
// Remove guest from array
guestlist.splice(0, 2);
console.log(guestlist);

