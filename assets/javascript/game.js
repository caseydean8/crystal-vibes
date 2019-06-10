// Begin by assigning variables. I'm using let because because the varibles will have different values assigned to them
let wins = 0;

let losses = 0;

let crys1 = 0;

let crys2 = 0;

let crys3 = 0;

let crys4 = 0;

let total = 0;

let score = 0;

//create a total value between 19 and 120 using Math.random.
const min = 19; 
const max = 120  
    total =Math.floor(Math.random() * (+max - +min)) + +min; 
    console.log(total);  
