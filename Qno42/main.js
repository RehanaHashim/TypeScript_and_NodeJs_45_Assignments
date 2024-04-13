"use strict";
// Q no #42
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
function make_great(magicians) {
    return magicians.map(magician => `The Great ${magician}`);
}
let magicians = ["Hanif", "Mehboob", "Haroon", "Zeeshan", "Waqas"];
magicians = make_great(magicians);
show_magicians(magicians);
