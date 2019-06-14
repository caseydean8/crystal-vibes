// Global variables assigned.
var wins = 0;

var losses = 0;

var score = 0;

// Create a reset function.
function reset() {
    score = 0;
    startLogic();
}

// Create a function that holds five random number generators.
function startLogic() {
    
    //Create a total value between 19 and 120 using Math.random.
    let min = 19; 
    let max = 120  
    let total = Math.floor(Math.random() * (+max - +min)) + +min; 
    console.log(total);
    // Outputs total to the screen.
    $("#total-html").html(total);

    //Create separate values for 4 crystals.
    let crysMin = 1;
    let crysMax = 12;
    crys1 = Math.floor(Math.random() * (+crysMax - +crysMin)) + +crysMin;
    console.log(crys1, "yellow button");
    crys2 = Math.floor(Math.random() * (+crysMax - +crysMin)) + +crysMin;
    console.log(crys2, "blue button");
    crys3 = Math.floor(Math.random() * (+crysMax - +crysMin)) + +crysMin;
    console.log(crys3, "green button");
    crys4 = Math.floor(Math.random() * (+crysMax - +crysMin)) + +crysMin;
    console.log(crys4, "purple button");

    // Utilize click events to add crystal values to player score.
    $("#crystal-1").off().on("click", function (){
    $("#score-html").html(score += crys1);
    $("#top").text("Sweet!");
    $("#heading").css("color", "yellow");
    if (score >= total){
        scoring();
        }
    })

    $("#crystal-2").off().on("click", function (){
    $("#score-html").html(score += crys2);
    $("#top").text("righteous man!");
    $("#heading").css("color", "blue");
    if (score >= total){
        scoring();
        }
    })

    $("#crystal-3").off().on("click", function (){
    $("#score-html").html(score += crys3);
    $("#top").text("gnarly dude!");
    $("#heading").css("color", "green");
    if (score >= total){
        scoring();
        }
    })

    $("#crystal-4").off().on("click", function (){
    $("#score-html").html(score += crys4);
    $("#top").text("Whoa!");
    $("#heading").css("color", "purple");
    if (score >= total){
        scoring();
        }
    })

    // Win/loss counting function that directs game to reset.
    function scoring(){
    if (score === total) {
        wins++
        $("#wins").html("wins " + wins);
        $("#score-html").text(0);
        $("#top").text("Totally Nailed It!");
        $("#heading").css("color", "black");
        reset();
        }

    else if (score > total) {
        losses++;
        $("#losses").html("losses " + losses);
        $("#score-html").text(0);
        $("#top").text("bummer dude your not like smart");
        $("#heading").css("color", "black");
        reset();
        }
    }

}

  

        

