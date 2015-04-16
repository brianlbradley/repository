var bio = {
   "name": "Brian L. Bradley",
   "role": "Forecast Manager",
   "contacts":{
      "mobile": "(205)213-5431",
      "email": "brianlbradley@bellsouth.net",
      "github": "brianlbradley",
      "location": "Birmingham, AL"
   },
   "message":"Thanks for visiting my page!",
   "skills":[
      "Forecasting",
      "SQL",
      "Web Developer",
      "Data Analysis",
      "Project Management"
   ],
   "picture":"images/DSC_0010.jpeg",



"display":function () {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName)
    $("#header").append(HTMLskillsStart);
    $("#header").prepend(HTMLbioPic.replace("%data%", bio.picture));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.message));
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
   }
}
 };

    bio.display();

var education = {
   "schools":[{

         "name": "Birmingham Southern College",
         "location": "Birmingham, AL",
         "degree": "Bachelor of Science",
         "major": "Marketing",
         "minor": "English",
         "GradYear": 1997
      },
      {
         "name": "Jefferson State Community College",
         "location": "Birmingham, AL",
         "degree": "",
         "major": "Business",
         "minor": "English",
         "GradYear ":1995
      }
   ],
   "onlineCourses":[
      {
         "title": [
            "HTML and CSS",
            "Java Script"
         ],
         "school": "Udacity",
         "dates": 2015,
         "url": "http://www.udacity.com"
      },
      {
         "title":[
            "Statistics"
         ],
         "school":"Coursera",
         "dates":2013,
         "url":"https://www.coursera.org",
      }
   ],


"display": function() {
    for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedschooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedschoolnamedegree = formattedschoolname + formattedschooldegree;
    $(".education-entry:last").append(formattedschoolnamedegree);
    var formattedschooldates =HTMLschoolDates.replace("%data%", education.schools[school].GradYear);
    $(".education-entry:last").append(formattedschooldates);
    var formattedschoolmajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedschoolmajor);
    }

    $("#education").append(HTMLonlineClasses);

    for (school in education.onlineCourses){
    $("#education").append(HTMLschoolStart);
    formattedonlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
    formattedonlineschool=HTMLonlineSchool.replace("%data%",education.onlineCourses[school].school);
    formattedonline= formattedonlinetitle + formattedonlineschool;
    $(".education-entry:last").append(formattedonline);
    formattedonlinedates= HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
    $(".education-entry:last").append(formattedonlinedates);
    formattedonlineurl =HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
    $(".education-entry:last").append(formattedonlineurl);
  }
 }
};

    education.display();


var work = {
   "jobs":[
      {
         "employer": "at&t",
         "position": "Forecasting Manager",
         "location": "Birmingham AL",
         "dates": "June, 2011 - Present",
         "description": "Create, design, and implement forecasts for 30 + call centers in various locations in the U.S and abroad. Multiple Forecasts consist of monthly, weekly, daily, and hourly volume along with AHT projections."
      },
      {
         "employer": "at&t",
         "position": "Systems Manager",
         "location": "Birmingham AL",
         "dates": "February, 2005 - June, 2011",
         "description": "Project Managed the ordering and maintenance Systems for a module of 250 customers. Migrated customers off expiring systems and implemented customers on new systems. Gave site presentations and conducted business analysis to determine best interface for customer. Trained customers using interactive demonstrations on how to utilize systems."
      },
      {
         "employer": "Compass Bank",
         "position": "Customer Service Representative",
         "location": "Richardson, TX",
         "dates": "March, 2002 - February,2005",
         "description": "Disseminated customer banking information for deposit and loan accounts. Upsold customers for new services including installment loans,PC Banking, and Certificates of Deposit."
      }
   ],


"display": function () {
    for (job in work.jobs) {
  	$("#workExperience").append(HTMLworkStart);
  	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var  formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}
};
      work.display();



var projects = {
   "projects":[{

         "title": "Forecast Modeling",
         "description": "Created Forecast Models for 33 Call Centers. Models include monthly, weekly, and hourly volume distributions.",
         "year":2014
      },
      {
         "title": "Customer Migrations",
         "description":"Project Managed 300 + customers from expiring systems to new Operational Support Systems.",
         "year":2012
      },
      {
         "title": "Database Tracker",
         "description": "Designed, created, and implemented Access Database to keep track of billing records. Database was utilized in an expense reduction worth 1.6 million dollars.",
         "year":2011
      }
   ],



"display": function() {
      for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].year);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
       $(".project-entry:last").append(formattedDescription);
    }
  }
};

projects.display();

$(document).click(function(loc) {
   var x = loc.pageX;
   var y = loc.pageY;
   logClicks (x,y);
});

$("#mapDiv").append(googleMap);

function inName(name)  {
    name = name.trim().split(" ");
    console.log(name);

    name[1]=names[1].toUpperCase();
    name[0]= names.slice[0,1].toUpperCase()+
    name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];

};

$("#main").append(internationalizeButton);



