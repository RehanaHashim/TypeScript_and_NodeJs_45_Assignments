// Qno #43

function show_magicians(magicians: string[]): void 
{
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] 
{
    return magicians.map(magician => `the Great ${magician}`);
}


const originalMagicians: string[] = 
["Hanif", "Mehboob", "Haroon", "Zeeshan", "Waqas"];

const greatMagicians: string[] = make_great([...originalMagicians]);

console.log("Original Magicians:");
show_magicians(originalMagicians);


console.log("\n Great Magicians:");
show_magicians(greatMagicians);
