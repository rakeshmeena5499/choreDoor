const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
const startButton = document.getElementById('start');
let currentlyPlaying = true;


const isBot = (door) =>{
	if(door.src === botDoorPath){
		return true;
	}
	return false;
}

const isClicked = (door) =>{
	if(door.src === closedDoor){
		return false;
	}
	return true;
}

const playDoor = (door) =>{
	numClosedDoors--;
	if(numClosedDoors === 0){
		gameOver('win');
	}
	else if(isBot(door)){
		gameOver();
	}
}

const randomChoreDoorGenerator = () =>{
	let choreDoor = Math.floor(Math.random()*numClosedDoors);
	if(choreDoor === 0){
		openDoor3 = botDoorPath;
		openDoor2 = spaceDoorPath;
		openDoor1 = beachDoorPath;
	}
	else if(choreDoor === 1){
		openDoor2 = botDoorPath;
		openDoor1 = spaceDoorPath;
		openDoor3 = beachDoorPath;
	}
	else if(choreDoor === 2){
		openDoor1 = botDoorPath;
		openDoor3 = spaceDoorPath;
		openDoor2 = beachDoorPath;
	}

}

doorImage1.onclick = () =>{
	if(!isClicked(doorImage1) && currentlyPlaying){
		doorImage1.src = openDoor1;
		playDoor(doorImage1);
	}
}

doorImage2.onclick = () =>{
	if(!isClicked(doorImage2) && currentlyPlaying){
		doorImage2.src = openDoor2;
		playDoor(doorImage2);
	}
}

doorImage3.onclick = () =>{
	if(!isClicked(doorImage3) && currentlyPlaying){
		doorImage3.src = openDoor3;
		playDoor(doorImage3);
	}
}

startButton.onclick = () =>{
	if(!currentlyPlaying){
		startRound();
	}
}

const startRound = () =>{
	doorImage1.src = closedDoor;
	doorImage2.src = closedDoor;
	doorImage3.src = closedDoor;
	numClosedDoors = 3;
	startButton.innerHTML = 'Good luck!';
	currentlyPlaying = true;
	randomChoreDoorGenerator();
}

const gameOver = (status) =>{
	if(status === 'win'){
		startButton.innerHTML = 'You win! Play again?';
	}
	else{
		startButton.innerHTML = 'Game over! Play again?';
	}
	currentlyPlaying = false;
}

startRound();