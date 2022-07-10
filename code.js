//sets variable
var timer = 11;
var i = 0

//defines function
function start() {
	//runs code if value is 1
	if(i==1) { 
		i = 0;
		timer = 11;
		return; //stop the execution of function
	}

	else
	//lowers timer count
    timer--;
	//tells script to run at specific numbers
    if (timer > 4){
		//shows variable in console
    console.log(timer);
	//sets variable
    document.getElementById("countdownStatus").innerHTML = timer;
	//repeats code
    setTimeout(start, 1000); 
}
//tells script to run under specific condition
else if (timer < 5 && timer > 0)
{ 
		   document.getElementById("countdownStatus").innerHTML = "Warning Less than ½ way to launch, time left = " + timer;
		   console.log(timer);
		   setTimeout(start, 1000); /* replicate wait 1 second */
}
//tells script to run under specific condition
else if (timer <= 0){ 
		   document.getElementById("countdownStatus").innerHTML = "Blastoff!";
}

}

function stop() {
	//sets buttons to disabled or enabled
	document.getElementById("StartButton").disabled = false;
	document.getElementById("StopButton").disabled = true;
	document.getElementById("countdownStatus").innerHTML = "Timer Stopped!";
}

function set() {
	//sets variables
	timer == 0;
	i = 1;
}

function disable() {
	//sets buttons to disabled or enabled
	document.getElementById("StartButton").disabled = true;
	document.getElementById("StopButton").disabled = false;
}

//Starts script when play is pressed

function play() {
    //sets variables
    var die1 = 5
    var die2 = 2
    //displays text
    document.write("Cantina Casino's Craps")
       //makes a new line
    document.write("<br/>")
     //displays text
    document.write("Welcome to Mos Eisley's Cantina, located on the wonderful world of Tatooine! Let's take a roll of some dice, shall we? ")
    //makes a new line
    document.write("<br/>")
    //makes a new variable by addied previous variables together
    var sum = die1+die2
    //displays text, then displays variable
    document.write("Die 1 = " + die1)
        //makes a new line
    document.write("<br/>")
      //displays text, then displays variable
    document.write("Die 2 = " + die2)
        //makes a new line
    document.write("<br/>")
      //displays text, then displays variable
    document.write("Sum = " + sum)
        //makes a new line
    document.write("<br/>")
    //runs script if variable is a specific number
    if (sum == 7 || sum == 11)
    //displays text
    { document.write("CRAPS - you lose")
    //makes a new line
    document.write("<br/>")
    }
    //runs script if variable is specific number
    else if (die1== die2 && die1%2 == 0)
    {
        //displays text
    document.write("DOUBLES - you win")
    //makes new line
    document.write("<br/>")
    }
}