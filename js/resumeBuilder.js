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

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

test = "audacity";
var skills = ["awesomeness","programming","JS"];
//$("#main").append(skills);
$("#main").append(skills[2]);




