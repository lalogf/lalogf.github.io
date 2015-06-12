// require('app.js');

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
	text: "I have more than 5 years of experience in Marketing. I have participated in the planning and design of the most used and awarded Mobile Banking app in Peru. I have helped a NGO that defends Human Rigths in the Digital field. I had a couple of entrepreneurial adventures. I'm certified in Digital Marketing and I'm currently attending a Growth Hacking online course.",
}
]
});	
	$("#container").html(content);
	$("#aboutButton").css("background-color", "yellow");
};

function projects () {
	var content = projectsTemplate({
		experience: [
		{
			title: "Phone Case Designer",
			text: "Market place where a designer can upload his best designs and adapt them to phone cases, which later will be sold to final customers. Each designer has his own personalized store with an avatar and a quote. After sign up they can upload their designs and adapt them to different models of phone cases, including iPhone 6, iPhone 5/5s, Galaxy S5 and Moto G. Built with Ruby on Rails, using Paperclip and Fabric.js.",
			liveapp: "http://www.spacioc.com",
			github: "http://github.com/lalogf/casedesigner",
			carouselClass: "item active",
			image: "assets/PreviewCaseDesigner.png"
		},
		{
			title: "Zombie Survival Guide",
			text: "Site that gives user information about secure places to hide in the case of a Zombie attack. It also gives you options to buy survival kits. Built in Ruby on Rails, using MapBox and Foursquare APIs." ,
			liveapp: "http://zombiesurvivalguide.herokuapp.com",
			github: "http://github.com/lalogf/zombielist",
			carouselClass: "item",
			image: "assets/ZombieSurvivalGuide.png"
		},
		{
			title: "Mobile Plan Compare",
			text: "Site that allows users to choose their best option when buying or renewing a smartphone. It compares plans based on prices, amount of data and SMS and minutes offered by the mobile carriers. Built in Node.js, using Sequelizejs, Expressjs, Passport and Bcrypt.",
			liveapp: "http://peru-compare.herokuapp.com",
			github: "http://github.com/lalogf/plan",
			carouselClass: "item",
			image: "assets/PreviewPlanCompare.png"
		}]
	});
		hideControls = function () {
			if ($(window).innerWidth() < 600){
				$(".controls").hide();
			} else {
				$(".controls").show();
			}
		};	

	hideControls();
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