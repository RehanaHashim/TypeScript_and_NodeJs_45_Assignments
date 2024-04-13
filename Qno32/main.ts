// Qno #32

// array array name store in a variable
let current_users: string[] = 
["Hina", "Nabila", "Areeba", "Maria", "Dua"];

// new array names store in a variables
let new_users: string[] = 
["Hafsa", "Hina", "Areeba", "Hania", "Saiqa"];

let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users)
    {
    if (current_users_lower.includes(new_user.toLowerCase()))
        {
        console.log(`Sorry,this username ${new_user},is already taken.You will have to enter a new username.`);
        }
    else{
        console.log(`Yes ${new_user}, is available`);
        }
    }
