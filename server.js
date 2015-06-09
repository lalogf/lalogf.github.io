var aboutSource;
var aboutTemplate;

var Router = Backbone.Router.extend({
	routes: {
		"index":"index",
		"about": "about", 
	}
});

var router = new Router();



(function() {
	aboutSource = $("#about").html();
	aboutTemplate = Handlebars.compile(aboutSource);
})();


function about (){
	var content = aboutTemplate({
		title: "Lalo",
		author: "Gonzalez",
		release_date: "Today"
	});	
	$("#container").html(content);	
};

function getProducts() {
	console.log("working")
};

router.on("route:index", getProducts);
router.on("route:about", about);

Backbone.history.start();