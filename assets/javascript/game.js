// Begin by assigning variables. I'm using let because because the varibles will have different values assigned to them
let wins = 0;

let losses = 0;

let crys1 = 0;

let crys2 = 0;

let crys3 = 0;

let crys4 = 0;

let total = 0;

let score = 0;

// create a function that holds five? functions for generating the random numbers required for game.
function startLogic() {
    //create a total value between 19 and 120 using Math.random.
        let min = 19; 
        let max = 120  
        total = Math.floor(Math.random() * (+max - +min)) + +min; 
        console.log(total); 
        let crysMin = 1;
        let crysMax = 12;
        crys1 = Math.floor(Math.random() * (+crysMax - +crysMin)) + +crysMin;
        console.log(crys1);
        crys2 = Math.floor(Math.random() * (+crysMax - +crysMin)) + +crysMin;
        console.log(crys2);
        crys3 = Math.floor(Math.random() * (+crysMax - +crysMin)) + +crysMin;
        console.log(crys3);
        crys4 = Math.floor(Math.random() * (+crysMax - +crysMin)) + +crysMin;
        console.log(crys4);
}


