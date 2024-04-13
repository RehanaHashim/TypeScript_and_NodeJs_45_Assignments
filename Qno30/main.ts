// Qno# 30

let userNames: string[] = 
['Admin', 'Shahnaz' ,'Huma', 'Nazia', 'Hina'];

userNames.forEach((username) => 
  {
      if (username == "Admin") 
        {
        console.log("Hello Admin, would you like to see a status report?");
        } 
        else 
        {
        console.log(`Hello ${username}, Thank you for logging in again.`);
        }
  });  

    