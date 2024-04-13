// Qno #44 

function order(...items: string[]): void 
{
    console.log(" ordered with:");
    items.forEach(item => console.log(item));
    console.log("enjoy your sandwich!");
}

order("capsicum", "souce", "Tomato");
order("Cheese","fresh garlic","beef");
order("Peanut Butter","garlic chicken","extra cheese");
