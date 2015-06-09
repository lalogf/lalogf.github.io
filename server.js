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
		full: "FULL STACK",
		dev: "WEB DEVELOPER",
		marketing: "MARKETING"
	});	
	$("#container").html(content);
};

function about (){
	var content = aboutTemplate({
		title: "Lalo",
		author: "Gonzalez",
		release_date: "Today"
	});	
	$("#container").html(content);	
};

function projects () {
	var content = projectsTemplate({
		project1: "Project1",
		project2: "Project2"
	});
	$("#container").html(content);
}

function experience () {
	var content = experienceTemplate({
		experience: "GA"
	});
	$("#container").html(content);
}

function wiwo () {
	var content = wiwoTemplate({
		wiwo1: "This"
	});
	$("#container").html(content);
}

function blog () {
	var content = blogTemplate({
		article: "Coming soon"
	});
	$("#container").html(content);
}

function contact () {
	var content = contactTemplate({
	});
	$("#container").html(content);
}

router.on("route:index", index);
router.on("route:about", about);
router.on("route:projects", projects);
router.on("route:experience", experience);
router.on("route:wiwo", wiwo);
router.on("route:blog", blog);
router.on("route:contact", contact);

Backbone.history.start();