// Qno# 15

let guestlist: string[] = ["Rehana", "Hania", "Haleema"];

for (let i = 0; i < guestlist.length; i++) {
  console.log(
    `Dear` +
      guestlist[i] +
      `, It is our pleasure to invite you to the dinner party. Thank you!`
  );
}

let absentGuest: string = "Rehana";
let newGuest: string = "Rabail";

guestlist[0] = newGuest;

for (let i = 0; i < guestlist.length; i++) {
  console.log(
    `Dear` +
      guestlist[i] +
      `,It is our pleasure to invite you to the dinner party.Thank you!`
  );
}

console.log(`Dear ${absentGuest} is not coming to the dinner party.`);
