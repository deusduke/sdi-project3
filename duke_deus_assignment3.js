// Deus Duke
// SDI 1302
// Project 3
// Third project for SDI at Full Sail University

var rooms = { "items" : [
	{"feetSquared": "12", "furnitureCount": "4"},
	{"feetSquared": "25", "furnitureCount": "8"},
	{"feetSquared": "10", "furnitureCount": "3"}
	]
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

roomba.setChargeLevel = function (chargeLevel) {
	this.chargeLevel = chargeLevel;
};

roomba.roomCleanTime = function (room) {
	return (room.feetSquared * room.furnitureCount) / 3;
};

roomba.getFullName = function () {
	return this.name + " " + this.versionNumber;
};

roomba.fullyCharged = function () {
	return this.chargeLevel >= 100;
};

roomba.getGreetings = function () {
	return this.greetings;
};

roomba.printRandomGreeting = function () {
	// print a random greeting
	arrGreetings = this.getGreetings();
	var randomNumber = Math.floor((Math.random()*arrGreetings.length)+1);
	console.log(this.getFullName() + " would like to say: " + arrGreetings[randomNumber]);

	// print charge level
	if (this.fullyCharged()) {
		print("We are fully charged");
	}

	else {
		print ("We are not fully charged");
	}
};

roomba.cleanRooms = function () {
	this.printRandomGreeting();
	currentRoom = 0;
	console.log(this.getFullName() + " is about to start cleaning!!!");

	var cleanTimes = [];

	if (rooms.items[currentRoom].feetSquared > 15) {
		console.log("This is a large room");

		if (rooms.items[currentRoom].furnitureCount > 4) {
			console.log("This room also has a lot of furniture, this might take a while");
		}

		else {
			console.log("This room doesn't have too much furniture");
		}
	}

	else
		console.log("This is a reasonable sized room");

	console.log("It will take " + this.roomCleanTime(rooms.items[currentRoom]) + " minutes to clean this room");
	cleanTimes.push(this.roomCleanTime(rooms.items[currentRoom]));

	// clean all the rooms
	while (currentRoom < rooms.length) {
		for (var i = 0; i < rooms.items[currentRoom].furnitureCount; ++i) {
			console.log("Cleaning under furniture number " +
				rooms.items[currentRoom].furnitureCount + " for room " + currentRoom);
		}

		console.log("Finished cleaning room " + currentRoom);

		cleanTimes.push(rooms.items[currentRoom]);
		++currentRoom;
	}

	console.log(this.getFullName() + " finished cleaing all the rooms!!!");

	return cleanTimes;
};

roomba.setChargeLevel(75);
console.log("My roomba name is " + roomba.getFullName());
var cleanTimes = roomba.cleanRooms();

var totalTime = 0;
for(var time in cleanTimes) {
	totalTime += time;
}

console.log("It took roomba " + totalTime + " minutes to clean all the rooms");
