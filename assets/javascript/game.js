$(document).ready(function(){
  var yourScore = 0;
    console.log(yourScore);
  var winCounter = 0;
    console.log(winCounter);
  var lossCounter = 0;


//creates a random number for the computer
  var computerChoice = Math.floor((Math.random() * 50) + 20);
  		// console.log(computerChoice)
  //random number into HTML
  $("#computer-number").html(computerChoice);


// Win and Loss counters
  var result = function (){
    if(yourScore === computerChoice){
      winCounter++;
      $("#win-count").text("Wins: " + winCounter);   
    }
    
    else if (yourScore > computerChoice){
      lossCounter++;
      $("#loss-count").text("Losses: " + lossCounter++);     
    }
  }

//Reset function --------- This is not working! 
  function reset(){
    var yourScore = 0;
    var computerChoice = Math.floor((Math.random() * 50) + 20);
  }


//creates random numbers for crystals
  var crystalOne =  Math.floor((Math.random() * 12) + 1);
  		// console.log(crystalOne)
  var crystalTwo =  Math.floor((Math.random() * 12) + 1);
  		// console.log(crystalTwo)
  var crystalThree =  Math.floor((Math.random() * 12) + 1);
  		// console.log(crystalThree)
  var crystalFour =  Math.floor((Math.random() * 12) + 1);
  		// console.log(crystalFour)


//your score functions for each crystal

//crystal 1
  $("#crystal-1").click(function(){
    yourScore = crystalOne + yourScore;
    console.log(yourScore);
    $("#your-number").html(yourScore);
    result();
    reset();
  });

//crystal 2
  $("#crystal-2").click(function(){
    yourScore = crystalTwo + yourScore;
    // console.log(yourScore);
    $("#your-number").html(yourScore);
    result();
    reset();
  });

//crystal 3
  $("#crystal-3").click(function(){
    yourScore = crystalThree + yourScore;
    // console.log(yourScore);
    $("#your-number").html(yourScore);
    result();
    reset();
  });

//crystal 4
  $("#crystal-4").click(function(){
    yourScore = crystalFour + yourScore;
    // console.log(yourScore);
    $("#your-number").html(yourScore);
    result();
    reset();
  });





});