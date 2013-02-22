// Deus Duke
// SDI 1302
// Project 3
// Third project for SDI at Full Sail University


var room = {
	feetSquare: 12,		// square footage
	furnitureCount: 4	// items of funiture in the room
};

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

roomba.setChargeLevel = function (chargeLevel: Number) {
	roomba.chargeLevel = chargeLevel;
}

roomba.roomCleanTime = function (room: Object) {
	return (room.feetSquared * furnitureCount) / 3;
}

roomba.getFullName = function () {
	return roomba.name + " " + roomba.versionNumber;
}

roomba.cleanRooms = function () {
	roomsCleaned = 0;
	while (roomsCleaned < rooms.length) {
		console.log(roomba.getFullName() + " is about to start cleaning!!!");

		console.log(roomba.getFullName() + " finished cleaing all the rooms!!!");
		++roomsCleaned;
	}
};