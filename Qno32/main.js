"use strict";
// Qno #32
Object.defineProperty(exports, "__esModule", { value: true });
// array array name store in a variable
let current_users = ["Hina", "Nabila", "Areeba", "Maria", "Dua"];
// new array names store in a variables
let new_users = ["Hafsa", "Hina", "Areeba", "Hania", "Saiqa"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry,this username ${new_user},is already taken.You will have to enter a new username.`);
    }
    else {
        console.log(`Yes ${new_user}, is available`);
    }
}
