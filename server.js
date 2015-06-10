var indexSource;
var indexTemplate;
var aboutSource;
var aboutTemplate;
var projectsSource;
var projectsTemplate;
var experienceSource;
var experienceTemplate;
var wiwoSource;
var wiwoTemplate;
var blogSource;
var blogTemplate;
var contactSource;
var contactTemplate;

function resizeBoxes(){
	var boxHeight = $(".titleBox").css("height");
	$(".contentBox").css("height", boxHeight);
}


var Router = Backbone.Router.extend({
	routes: {
		"":"index",
		"about": "about", 
		"projects":"projects",
		"experience": "experience",
		"wiwo": "wiwo",
		"blog": "blog",
		"contact":"contact"
	}
});

var router = new Router();



(function() {
	indexSource = $("#index").html();
	indexTemplate = Handlebars.compile(indexSource);
	aboutSource = $("#about").html();
	aboutTemplate = Handlebars.compile(aboutSource);
	projectsSource = $("#projects").html();
	projectsTemplate = Handlebars.compile(projectsSource);
	experienceSource = $("#experience").html();
	experienceTemplate = Handlebars.compile(experienceSource);
	wiwoSource = $("#wiwo").html();
	wiwoTemplate = Handlebars.compile(wiwoSource);
	blogSource = $("#blog").html();
	blogTemplate = Handlebars.compile(blogSource);
	contactSource = $("#contact").html();
	contactTemplate = Handlebars.compile(contactSource);
})();

function index () {
	var content = indexTemplate({
		name: "LALO GONZALEZ",
		title1: "WEB DEVELOPER",
		title2: "MARKETING"
	});	
	$("#container").html(content);
};

function about (){
	var content = aboutTemplate({
		title: "About",
		intro: "I'm a Web Developer and Marketer, who enjoys building usable and enjoyable stuff for the Internet age.",
		items: 
		[{ 	title: "Web Developer",
			text: "I can code in Ruby, Javascript, HTML and CSS. I experienced working with frameworks such as: Ruby on Rails, Nodejs, Sequelize, Express, Handlebars and Backbone. I normally use Postgresql as DB and Passport/Bcrypt or Devise for authentication. I have deployed to Heroku and AWS. I was trained at General Assembly in San Francisco, CA and I'm sharping my skills at Onemonth.edu."
		},
		{  title: "Marketing",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
		}
		]
});	
	$("#container").html(content);
	$("#aboutButton").css("background-color", "yellow");
	resizeBoxes();
};

function projects () {
	var content = projectsTemplate({
		experience: [
		{
			title: "Case Designer",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
			liveapp: "http://www.spacioc.com",
			github: "http://github.com/lalogf/casedesigner",
			carouselClass: "item active",
			image: "assets/PreviewCaseDesigner.png"
		},
		{
			title: "Survival Guide",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
			liveapp: "http://zombiesurvivalguide.herokuapp.com",
			github: "http://github.com/lalogf/zombielist",
			carouselClass: "item",
			image: "assets/ZombieSurvivalGuide.png"
		},
		{
			title: "Plan Compare",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
			liveapp: "http://peru-compare.herokuapp.com",
			github: "http://github.com/lalogf/plan",
			carouselClass: "item",
			image: "assets/PreviewPlanCompare.png"
		}]
	});
	$("#container").html(content);
	$("#projectsButton").css("background-color", "yellow");
}

function experience () {
	var content = experienceTemplate({
	});
	$("#container").html(content);
	$("#experienceButton").css("background-color", "yellow");
}

function wiwo () {
	var content = wiwoTemplate({
		title: "What I'm Working on",
		wiwo1: "This"
	});
	$("#container").html(content);
	$("#wiwoButton").css("background-color", "yellow");
}

function blog () {
	var content = blogTemplate({
		article: "Coming soon"
	});
	$("#container").html(content);
	$("#blogButton").css("background-color", "yellow");
}

function contact () {
	var content = contactTemplate({
		title: "Contact"
	});
	$("#container").html(content);
	$("#contactButton").css("background-color", "yellow");
}

router.on("route:index", index);
router.on("route:about", about);
router.on("route:projects", projects);
router.on("route:experience", experience);
router.on("route:wiwo", wiwo);
router.on("route:blog", blog);
router.on("route:contact", contact);

Backbone.history.start();