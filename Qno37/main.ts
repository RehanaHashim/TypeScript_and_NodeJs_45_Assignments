// Qno # 37

function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void 
{
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

make_shirt();
make_shirt("Medium");
make_shirt("Small", "This is for you!");