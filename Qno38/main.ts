//   Qno #38

// a function called describe_city
function describe_city(city: string, country: string = "Unknown"): void 
{
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Canada"); 