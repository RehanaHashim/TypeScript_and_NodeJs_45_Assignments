"use strict";
// Qno # 37
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "This is for you!");
