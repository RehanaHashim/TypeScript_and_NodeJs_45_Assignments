// Q no# 35

const animals: string[] = 
["Goat", "Tiger", "Lion","Camel"];


console.log("Animal names:");
for (let animal of animals) 
    {
    console.log(animal);
    }
console.log("\n statements about animals:");

for (let animal of animals) 
    {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
    }

console.log("\nAny of these animals would make a great pet!");