// Qno# 3

let personName: string = "rehana hashim";

// Person name in a Lowercase
console.log("Lowercase:", `${personName.toLowerCase()}`);

// Person name in a Uppercase
console.log("Uppercase:", `${personName.toUpperCase()}`);

// pPerson name in a Title Case
let titleCaseName = `${personName[0].toUpperCase()}${personName.slice(1).toLowerCase()}`;
console.log("Titlecase:", titleCaseName);
