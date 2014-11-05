$("#main").append(["Refiz Duro"]);

var firstName ="RD";
var age=32;
console.log(firstName);

var awesomeThougths = "I am Refiz and I am AWESOME!"
console.log(awesomeThougths);
var funThougths = awesomeThougths.replace(["AWESOME"],["FUN"]);
console.log(funThougths);
$("#main").append("<br>");
$("#main").append(funThougths);
var name = "Refiz Duro";
var role = "Scientist";
var mail = "refiz.duro@gmail.com";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

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

var bio = {
    "contact" : "refiz.duro@gmail.com",
    "tel:"    : "098983998121123"
}


var work = {
    
    "jobs" : [
	{
	    "position" : "Scientist",
	    "company"  : "AIT"
	},
	{
	    "position" : "Analyst",
	    "company"  : "Medizinkraft"
	}
    ]
};
 
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

$("#main").append("<br>").append(education.courses[1].name);
console.log(education.courses[1])

var projects = {
    "name" : "Freelancing",
    "year" : 2011
};


// education["lastSchool"] = "Bamberg";
// education["citySchool"] = "Sternwarte";
// education["yearsSchool"] = 3;

//$("#main").append("<br>").append(work.job).append("<br>").append(education.lastSchool);






