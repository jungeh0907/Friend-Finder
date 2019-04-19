// Creating an array to hold the survey data that is used to match friends; starting with dummy data
var friendsArray = [
	{
		name: "Alex",
		photo: "https://randomuser.me/api/portraits/men/82.jpg",
        scores: ["5","5","3","3","1","2","4","5","5","2"]
	},
	{
		name: "Darius",
		photo: "https://randomuser.me/api/portraits/men/57.jpg",
		scores: ["3","2","4","3","4","5","5","5","5","4"]
	},
	{
		name: "Draven",
		photo: "https://randomuser.me/api/portraits/men/0.jpg",
		scores: ["3","2","4","3","4","5","5","5","5","4"]
	},
	{
		name: "Ahri",
		photo: "https://randomuser.me/api/portraits/women/60.jpg",
		scores: ["5","5","4","3","4","5","5","4","5","4"]
    },
    {
		name: "Sona",
		photo: "https://randomuser.me/api/portraits/women/66.jpg",
		scores: ["4","4","4","5","4","5","3","4","5","3"]
    },
    {
		name: "Vanye",
		photo: "https://randomuser.me/api/portraits/women/10.jpg",
		scores: ["3","2","3","4","5","5","2","4","3","3"]
    },
];

//Exporting the array so that it is accessible to other files using require
module.exports = friendsArray;