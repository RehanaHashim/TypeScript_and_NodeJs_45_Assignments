// Qno #42

function show_magicians(magicians: string[]): void 
{
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] 
{
    return magicians.map(magician => `The Great ${magician}`);
}

let magicians: string[] = 
["Hanif", "Mehboob", "Haroon", "Zeeshan", "Waqas"];

magicians = make_great(magicians);

show_magicians(magicians);