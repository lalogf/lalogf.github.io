// require('app.js');

var indexSource;
var indexTemplate;
var aboutSource;
var aboutTemplate;
var projectsSource;
var projectsTemplate;
var extrasSource;
var extrasTemplate;
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
		"extras": "extras",
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
	extrasSource = $("#extras").html();
	extrasTemplate = Handlebars.compile(extrasSource);
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
			text: "Market place where a designer can upload his best designs and adapt them to phone cases, which later will be sold to final customers. Each designer has his own personalized store with an avatar and a quote. After sign up they can upload their designs and adapt them to different models of phone cases, including iPhone 6, iPhone 5/5s, Galaxy S5 and Moto G. Built with Ruby on Rails, using Paperclip and Fabric.js for image uploading and canvas, Devise for authentication, Mandril API for emailing and deployed to AWS.",
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

function extras () {
	var content = extrasTemplate({
		title:"Extras"
	});
	$("#container").html(content);
	$("#extrasButton").css("background-color", "yellow");
}

function wiwo () {
	var content = wiwoTemplate({
		title: "What I'm Working on",
		wiwo: [
		{
			title: "Renalab",
			text: "Web app for a Medical Laboratory. The app will allow patients to login into the app and see their results as well as the notes and diagnosis that the physician will leave them. On the other hand, this app would allow the company store all their patients results and become a paperless company. The project is being build in Ruby on Rails and will use Mandrill and Twilio APIs.",
			link: "href=https://github.com/lalogf/renalab target=blank",
			button:"Github",
			modal: false,
			modalId: "github"
		},
		{
			title: "Soulutions",
			text: "Website for a new Digital Boutique. Showing their previous works and offering their services to create and develop astonishing digital products.",
			link: "data-toggle=modal data-target=#screenshotModal",
			button: "Screenshot",
			modal: true,
			modalId: "screenshotModal",
			modalcontent:"<img style=width:100% src=http://www.ucarecdn.com/21d579b3-01c8-4548-a01c-bb11537affb2/ScreenShot20150613at125002AM.png>"
		},
		{
			title: "Peru API",
			text: "Web API that will store the whole list of districts, provinces and departments from Peru, so developers will be able to use it to help their costumers when filling their contact and check out forms. It began as a helper for my own projects, but it'll be open source. Its first version is built on Ruby on Rails and deployed to Heroku.",
			link: "data-toggle=modal data-target=#sneakPeekModal",
			button:"Sneak peek",
			modal: true,
			modalId: "sneakPeekModal",
			modalcontent:"<form><p>Departamento</p><select id=departamentos class=form-control><option>Departamento</option></select><p>Provincia</p><select id=provincias class=form-control><option>Provincia</option></select ><p>Distrito</p><select id=distritos class=form-control><option>Distrito</option></select></form>"
		},
		]
	});
	$("#container").html(content);
	$("#wiwoButton").css("background-color", "yellow");
	departamentos();
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

var departamentos = function (){
	var depo, depid;

	$.ajax({
		url: "https://powerful-hollows-4606.herokuapp.com/departamentos.json",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		type: "GET",
		success: function(data) {
			$("#departamentos").empty();
			depo = data;
			$(data).each(function (i) {
				$("#departamentos").append("<option value=\""+data[i].departamento +"\" number=\""+data[i].id+"\" id=\""+i+"\" >"+data[i].departamento+"</option>");
			});
			$("#provincias").empty();
			$(data[0].provincias).each(function(i){
				$("#provincias").append("<option value= \""+ data[0].provincias[i].provincia.nombre + "\" number = \"" + data[0].provincias[i].provincia.id + "\" id=\""+i+"\"  >" + data[0].provincias[i].provincia.nombre + "</option>");
			});
			$("#distritos").empty();
			$(data[0].provincias[0].distritos).each(function(i){
				$("#distritos").append("<option value= \""+ data[0].provincias[0].distritos[i].nombre + "\" number = \"" + data[0].provincias[0].distritos[i].id + "\" id=\""+i+"\" >" + data[0].provincias[0].distritos[i].nombre + "</option>");
				
			});	

		},
		error: function() {
			alert("something went wrong ..."); 
		}
	});

	$("#departamentos").change(function(){
		depid = $("#departamentos").find(':selected').attr('id');
		var provs = depo[depid].provincias;
		var distritos_op1 = provs[0].distritos
		$("#provincias").empty();
		$(provs).each(function(i){
				$("#provincias").append("<option value= \""+ provs[i].provincia.nombre + "\" number = \"" + provs[i].provincia.id + "\" id=\""+ i +"\" >" + provs[i].provincia.nombre + "</option>");
			});
			$("#distritos").empty();
			$(distritos_op1).each(function(i){
				$("#distritos").append("<option value= \""+ distritos_op1[i].nombre + "\">" + distritos_op1[i].nombre + "</option>");
			});
	});

	$("#provincias").change(function(){
		var provid = $("#provincias").find(':selected').attr('id');
		var distritos_provincia_selected = depo[depid].provincias[provid].distritos;
		$("#distritos").empty();
		$(distritos_provincia_selected).each(function(i){
			$("#distritos").append("<option value= \""+ distritos_provincia_selected[i].nombre + "\">" + distritos_provincia_selected[i].nombre +   "</option>");
		});
	});
}




router.on("route:index", index);
router.on("route:about", about);
router.on("route:projects", projects);
router.on("route:extras", extras);
router.on("route:wiwo", wiwo);
router.on("route:blog", blog);
router.on("route:contact", contact);

Backbone.history.start();