"use strict";
// Qno# 15
Object.defineProperty(exports, "__esModule", { value: true });
let guestlist = ["Rehana", "Hania", "Haleema"];
for (let i = 0; i < guestlist.length; i++) {
    console.log(`Dear` +
        guestlist[i] +
        `, It is our pleasure to invite you to the dinner party. Thank you!`);
}
let absentGuest = "Rehana";
let newGuest = "Rabail";
guestlist[0] = newGuest;
for (let i = 0; i < guestlist.length; i++) {
    console.log(`Dear` +
        guestlist[i] +
        `,It is our pleasure to invite you to the dinner party.Thank you!`);
}
console.log(`Dear ${absentGuest} is not coming to the dinner party.`);
