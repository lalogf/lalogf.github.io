var indexSource;
var indexTemplate;
var aboutSource;
var aboutTemplate;

var Router = Backbone.Router.extend({
	routes: {
		"":"index",
		"about": "about", 
	}
});

var router = new Router();



(function() {
	indexSource = $("#index").html();
	indexTemplate = Handlebars.compile(indexSource);
	aboutSource = $("#about").html();
	aboutTemplate = Handlebars.compile(aboutSource);
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



router.on("route:index", index);
router.on("route:about", about);

Backbone.history.start();