// Qno #33

let ordinalNumbers: number[] = 
[1,2,3,4,5,6,7,8,9];

for(let ordinalNumber of ordinalNumbers)
    {
    if(ordinalNumber === 1)
        {
        console.log(`${ordinalNumber}st`);
        }
    else if(ordinalNumber === 2)
        {
        console.log(`${ordinalNumber}nd`);
        }
    else if(ordinalNumber === 3)
        {
        console.log(`${ordinalNumber}rd`);
        }
    else
        {
          console.log(`${ordinalNumber}th`);
        }
    }

