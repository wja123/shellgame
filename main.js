var docReady = document.addEventListener('DOMContentLoaded',function(){

	var turnsTaken = 0;
	var outerBoxElem = document.getElementsByClassName("outerbox");
	var innerBoxElem = document.getElementsByClassName("innerbox");
	var statusBox = document.getElementsByClassName("gamestatus")[0];


	var clickBox = outerBoxElem[0].addEventListener("click",function(event){
		console.log("click");
		if(turnsTaken===0){
			for(var i = 0; i < outerBoxElem[0].children.length ; i++){
				if(outerBoxElem[0].children[i] === event.target){
					winLose(event.target,i);
				}
			}
		}	

	});

	var resetButton = document.getElementsByClassName("newgamebutton")[0].addEventListener("click",function(event){
		newGame();
	});

	function winLose(target,val){
		turnsTaken++;
		var rightGuess= Math.floor(Math.random()*3);
		if( rightGuess === val){
			gameWon(target);
		}
		else{
			gameLoss(target);
			revealAnswer(rightGuess);

		}
	}

	function gameLoss(target){
		target.classList.add("wrongselection");
		statusBox.innerHTML="You LOST!!!";

		var lossTimeOut=setTimeout(function(){
			statusBox.innerHTML="New Game?";
		},2000);

	}

	function gameWon(target){
		target.classList.add("winclass");
		statusBox.innerHTML="You Won!!!";
		var winTimeOut=setTimeout(function(){
			statusBox.innerHTML="New Game?";
		},2000);

	}

	function revealAnswer(val){
		console.log(val);
		console.log(outerBoxElem[0].children[val]);
		outerBoxElem[0].children[val].classList.add("winclass");
	}

	function newGame(){
		turnsTaken = 0;
		for(var i = 0;i < outerBoxElem[0].children.length;i++){
			outerBoxElem[0].children[i].classList.remove("wrongselection");
		}
		for(var i = 0;i < outerBoxElem[0].children.length;i++){
			outerBoxElem[0].children[i].classList.remove("winclass");
		}
		statusBox.innerHTML="";
	}

});