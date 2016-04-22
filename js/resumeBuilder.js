//		RESUME INFORMATION ARRAYS

var bio = {
	"name": "Ryan Harris",
	"role": "Front-End Developer",
	"contacts": {
		"email": "harrisryan1@gmail.com",
		"github": "ryancharrs",
		"twitter": "@ryan_c_harris",
		"location": "Portland, ME"
	},
	"welcomeMessage": "Hello!",
	"skills": [
		"Web Development", "Videography", "Video Editing", "Animation"
	],
	"bioPic": "https://pbs.twimg.com/profile_images/462414794738257920/WPdnErVt_400x400.jpeg"
};

var education = {
	"schools": [
		{
			"name": "Ithaca College",
			"locations": "Ithaca, NY",
			"degree": "B.S.",
			"majors": ["Cinema Production"],
			"dates": "2003-2007",
			"url": "http://www.ithaca.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Developer Track",
			"school": "Treehouse",
			"dates": "2012 - 2016",
			"url": "http://www.teamtreehouse.com"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2016",
			"url": "http://www.udacity.com"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Freelance",
			"title": "Web Developer",
			"location": "Portland, ME",
			"dates": "2016 - Present",
			"description": "Designing & building websites",
		},
		{
			"employer": "Make Sense Productions",
			"title": "Scriptwriter",
			"location": "Portland, ME",
			"dates": "2015 - 2016",
			"description": "Writing comedy for a daily satirical news show",
		},
		{
			"employer": "Rutgers Film Bureau",
			"title": "Editor / Animator / Producer",
			"location": "New Brunwick, NJ",
			"dates": "2014-2015",
			"description": "Worked on 'Antarctic Edge', a documentary about climate change",
		},
	]
};

var projects = {
	"projects": [
		{
			"title": "www.ryancharris.com",
			"dates": "2016",
			"description": "Redesigned my portfolio website",
			"images": ["../images/ryancharris.png"]
		},
		{
			"title": "Antarctic Edge: 70° South",
			"dates": "2015",
			"description": "NSF-funded documentary about climate change in Antarctica",
			"images": ["../images/antarctic-edge.png"]
		}
	]
};

//		CREATE THE SKILLS SECTION

var skillsList = bio.skills.length;

if (skillsList > 0) {
	$('#header').append(HTMLskillsStart);

	$('#skills').append(HTMLskills.replace('%data%', bio.skills[0]));
	$('#skills').append(HTMLskills.replace('%data%', bio.skills[1]));
	$('#skills').append(HTMLskills.replace('%data%', bio.skills[2]));
	$('#skills').append(HTMLskills.replace('%data%', bio.skills[3]));
}

// DISPLAY WORK HISTORY

function displayWork() {

	var jobList = work.jobs;

	for (var i = 0; i < jobList.length; i++) {
		$('#workExperience').append(HTMLworkStart);

		// Get and append employer & title
		var employer = HTMLworkEmployer.replace('%data%', jobList[i].employer);
		var title = HTMLworkTitle.replace('%data%', jobList[i].title);
		var jobInfo = employer + title;
		$('.work-entry:last').append(jobInfo);

		// Get and append dates worked
		var dates = HTMLworkDates.replace('%data%', jobList[i].dates);
		$('.work-entry:last').append(dates);

		// Get and append work location
		var locale = HTMLworkLocation.replace('%data%', jobList[i].location);
		$('.work-entry:last').append(locale);

		// Get and append job description
		var desc = HTMLworkDescription.replace('%data%', jobList[i].description);
		$('.work-entry:last').append(desc);
	}

}

displayWork();

//		INTERNATIONALIZE NAMES

function inName(name) {
	var name = name.trim();
	var splitName = name.split(" ");

	var firstName = splitName[0];
	var lastName = splitName[1];

	firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
	lastName = lastName.toUpperCase();


	return firstName + " " + lastName;
}

$('#main').append(internationalizeButton);

//		LOG MOUSE CLICK COORDINATES

$(document).click(function(loc) {

	var xCoord = loc.pageX;
	var yCoord = loc.pageY;

	logClicks(xCoord, yCoord);

});




