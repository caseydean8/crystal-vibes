// Begin by assigning variables. I'm using let because because the varibles will have different values assigned to them
var wins = 0;

var losses = 0;

var score = 0;

var singletonDesign = false


// Create a reset function that logs wins and losses 
function reset() {
    // score = 0;
    $("#score").html(score); 
    startLogic();
}

// create a function that holds five? functions for generating the random numbers required for game.
//create a total value between 19 and 120 using Math.random.
function startLogic() {
    let min = 19; 
    let max = 120  
    let total = Math.floor(Math.random() * (+max - +min)) + +min; 
    // Outputs total to the screen.
    $("#total-html").html(total);
    console.log(total + " under random generator")
    //Create separate values for 4 crystals.
    let crysMin = 1;
    let crysMax = 12;
    crys1 = Math.floor(Math.random() * (+crysMax - +crysMin)) + +crysMin;
    console.log(crys1, "button 1");
    crys2 = Math.floor(Math.random() * (+crysMax - +crysMin)) + +crysMin;
    console.log(crys2, "button 2");
    crys3 = Math.floor(Math.random() * (+crysMax - +crysMin)) + +crysMin;
    console.log(crys3, "button 3");
    crys4 = Math.floor(Math.random() * (+crysMax - +crysMin)) + +crysMin;
    console.log(crys4, "button 4");

    // Utilize click events to add crystal values to player score.
    $("#crystal-1").off().on("click", function (){
    $("#score-html").html(score += crys1);
    console.log(score, total);
    if (score >= total){
        console.log(score, total , " under if statement btn 1")
        scoring();
        }
    })

    $("#crystal-2").off().on("click", function (){
    $("#score-html").html(score += crys2);
    if (score >= total){
        console.log(score, total , " under if statement btn 2")
        scoring();
        }
})

    $("#crystal-3").off().on("click", function (){
    $("#score-html").html(score += crys3);
    if (score >= total){
        console.log(score, total , " under if statement btn 3")
        scoring();
        }
})

    $("#crystal-4").off().on("click", function (){
    $("#score-html").html(score += crys4);
    if (score >= total){
        console.log(score, total , " under if statement btn 4")
        scoring();
        }
})

// setting singleton, not sure why...
function scoring(){
    if (score === total) {
        singletonDesign =true
    }
    if (singletonDesign) {
        console.log(score);
        wins++;
        $("#wins").html("Wins " + wins);
        score =0;
        reset();
    }
    else if (score > total) {
        // singletonDesign = true
        losses++;
        $("#losses").html("Losses " + losses);
        score = 0;
        reset();
    }
}

}

  

        

