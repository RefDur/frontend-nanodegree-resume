
var bio = {
    "contact" : 
	{ 
	    "mail" : "refiz.duro@gmail.com",
	    "tel"  : 098983998121123,
	    "mobile" : 123456789
	},
    "skills" : ["analyst","scientist","programmer"],
    "picture": "images/fry.jpg"
}


var work = {
    "jobs" : [
	{
	    "position" : "Scientist",
	    "employer"  : "AIT"
	},
	{
	    "position" : "Analyst",
	    "employer"  : "Medizinkraft"
	}
    ]
}

var education = {
    "schools" : [
	{"name" : "Sternwarte",
	 "city" : "Bamberg"
	},
	{"name" : "Astro",
	 "city" : "Oslo"
	}
    ],
    "courses" : [
	{
	    "name" : "MA876",
	    "year" : 2012
	},
	{
	    "name" : "EDX88",
	    "year" : 2011
	}
    ]
}
console.log(education.schools[0].city);

 
var projects = {
    "name" : "Freelancing",
    "year" : 2011
}
 
var skills = {
    "soft" : "Presenter",
    "year" : 2011
}


if(jQuery.isEmptyObject(bio) === false) //when not empty giving true
//if(bio.length > 0)
{
    console.log("BLA");
    $("#header").append(HTMLskillsStart);
    console.log(bio.contact);
    skills = bio.skills.join(" ");
    var formattedSkills = HTMLskills.replace("%data%",skills);
    
    $("#header").append(formattedSkills);
    // for(var i=0; i < bio.skills.length; i++){
    // 	var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
    // 	$("#header").append(formattedSkills);
    // 	console.log(formattedSkills[i]);
    // }
}
else{
    console.log("AAA");
}

var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
$("#header").prepend(formattedPic);

//console.log(work.jobs.employer);
console.log(bio.contact.tel);

var formattedJobs = HTMLworkStart.replace("%data%",work.jobs);
$("#header").append(formattedJobs);

for(var i in work.jobs)
{
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].position);
    $("#workExperience").prepend(formattedTitle);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
    $("#workExperience").append(formattedEmployer);
						     
						    

}









//console.log(bio.isEmptyObject);



// $("#main").append(["Refiz Duro"]);

// var firstName ="RD";
// var age=32;
// console.log(firstName);

// var awesomeThougths = "I am Refiz and I am AWESOME!"
// console.log(awesomeThougths);
// var funThougths = awesomeThougths.replace(["AWESOME"],["FUN"]);
// console.log(funThougths);
// $("#main").append("<br>");
// $("#main").append(funThougths);
var name = "Refiz Duro";
var role = "Scientist";
var mail = "refiz.duro@gmail.com";

var formattedName = HTMLheaderName.replace("%data%",name);
//var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedName);
//$("#header").append(formattedRole);

// test = "audacity";
// var skills = ["awesomeness","programming","JS"];
// //$("#main").append(skills);
// $("#main").append(skills[2]);

// var nameNew = "reFIz duRo";
// function nameChanger(oldName){
//     var finalName = oldName;
//     var oldName = oldName.split(" ");
//     oldName[1] = oldName[1].toUpperCase();
//     console.log(oldName[0]);
//     console.log(oldName[1]);
//     oldName[0] = oldName[0].charAt(0).toUpperCase()  + oldName[0].slice(1).toLowerCase();
// //    finalString = oldName[0] +  " " + oldName[1];
//     finalString = oldName.join(" ")
//     console.log(finalString);
//     return finalName;
// }

// $("#main").append("<br>");
// $("#main").append(nameChanger(nameNew));

// var bio = {
//     "name" : nameChanger(nameNew),
//     "age"  : 35,
//     "skills" : skills,
//     "role" : role,
//     "contact" : mail,
//     "message" : "Welcome to my resume!",
//     "image"  :  "images/fry.jpg"
// };
// $("#main").append("<br>");
// $("#main").append(bio.message).append("<br>");
// $("#main").append(bio.name).append("<br>");
// $("#main").append(bio.role).append("<br>");
// $("#main").append(bio.image).append("<br>");
// for(i=0;i<skills.length;i++)
// {
//     $("#main").append(bio.skills[i]).append(" ");
// }

// $("#main").append("<br>").append(bio.contact);


// $("#main").append("<br>").append(education.courses[1].name);
// console.log(education.courses[1])

// education["lastSchool"] = "Bamberg";
// education["citySchool"] = "Sternwarte";
// education["yearsSchool"] = 3;

//$("#main").append("<br>").append(work.job).append("<br>").append(education.lastSchool);



// var charEscape = function(_html)
// {
//     var newHTML = _html;
//     newHTML = newHTML.replace(/>/g,"\"");
//     newHTML = newHTML.replace(/</g,"\"");
//     return newHTML;
// }
// t = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

// console.log(charEscape(t));
// for (var i = 0 ; i < 9 ; i++)
// {
//     console.log(i);
// }
