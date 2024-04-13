"use strict";
// Qno# 30
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ['Admin', 'Shahnaz', 'Huma', 'Nazia', 'Hina'];
userNames.forEach((username) => {
    if (username == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, Thank you for logging in again.`);
    }
});
