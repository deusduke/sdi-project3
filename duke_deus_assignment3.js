// Deus Duke
// SDI 1302
// Project 3
// Third project for SDI at Full Sail University

var rooms = {
	{"feetSquared": "12", "furnitureCount": "4"},
	{"feetSquared": "25", "furnitureCount": "8"},
	{"feetSquared": "10", "furnitureCount": "3"}
};

// declare roomba object
var roomba = {};

// object variables
roomba.timeToClean = true;
roomba.roomsToClean = rooms;
roomba.name = "Roku";
roomba.versionNumber = 770;
roomba.errorCodes = ["Pass", "Fail"];
roomba.chargeLevel = 100;
roomba.greetings = [
		"Hello there!",
		"Good morning!",
		"Howdy!"
	];

roomba.setChargeLevel = function (chargeLevel: Number) {
	this.chargeLevel = chargeLevel;
}

roomba.roomCleanTime = function (room: Object) {
	return (room.feetSquared * furnitureCount) / 3;
}

roomba.getFullName = function () {
	return this.name + " " + this.versionNumber;
}

roomba.fullyCharged = function () {
	return this.chargeLevel >= 100;
}

roomba.getGreetings = function () {
	return this.greetings;
}

roomba.getRandomGreeting = function () {
	return
}

roomba.cleanRooms = function () {
	// print a random greeting
	arrGreetings = this.getGreetings();
	var randomNumber = Math.floor((Math.random()*arrGreetings.length)+1);
	console.log(this.getFullName() " would like to say: " + arrGreetings[randomNumber]);

	currentRoom = 0;
	console.log(this.getFullName() + " is about to start cleaning!!!");

	if (rooms[currentRoom].feetSquared > 15) {
		console.log("This is a large room");

		if (rooms[currentRoom].furnitureCount) > 4) {
			console.log("This room also has a lot of furniture, this might take a while");
		}
	}

	else
		console.log("This is a reasonable sized room");

	console.log("It will take " + this.roomCleanTime(rooms[currentRoom]) + " minutes to clean this room");

	// clean all the rooms
	while (roomsCleaned < rooms.length) {
		for (int i = 0; i < rooms[currentRoom].furnitureCount; ++i) {
			console.log("Cleaning under furniture number " +
				rooms[currentRoom].furnitureCount + " for room " + currentRoom);
		}

		console.log("Finished cleaning room " + currentRoom);

		++currentRoom;
	}

	console.log(this.getFullName() + " finished cleaing all the rooms!!!");
};

roomba.setChargeLevel(75);
console.log("My roomba name is " + roomba.getFullName());
roomba.cleanRooms();
