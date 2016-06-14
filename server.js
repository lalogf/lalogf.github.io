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
		var newarray = [];
		$(".contentText").each(function(){newarray.push($(this).css("height").split("px")[0])});
		var newsize = Math.max.apply(Math,newarray);
		$(".contentText").css("height",newsize);
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
		title1: "UX - DESIGNER",
		title2: "WEB DEVELOPER"
	});	
	$("#container").html(content);
};

function about (){
	var content = aboutTemplate({
		title: "About",
		intro: "I'm a UX Designer, Marketer and Web Developer, who enjoys building usable and enjoyable stuff for the Internet age.",
		items: 
		[{  title: "UX Designer - Marketing",
		text: "I have over 8 years of experience in Product Managment and UX Design. During this years, I have helped organizations and businesses of all sizes to craft better digital products. I have participated in the planning and design of the most downloaded and used Mobile Banking app in Peru. I have helped a NGO that defends Human Rigths in the Digital field."},
		{ 	title: "Web Developer",
		text: "I can code in Ruby, Javascript, HTML and CSS. I experienced working with frameworks such as: Ruby on Rails, Nodejs, Sequelize, Express, Handlebars and Backbone. I normally use Postgresql as DB and Passport/Bcrypt or Devise for authentication. I have deployed to Heroku and AWS. I was trained at General Assembly in San Francisco, CA and I'm sharping my skills at Onemonth.com."}
		]
	});	
	$("#container").html(content);
	$("#aboutButton").css("background-color", "yellow");
};

function projects () {
	var content = projectsTemplate({
		experience: [
		{
			title: "Laboratoria",
			text: "Worked in a variety of projects as UX Designer and Project Manager",
			projects: [
				{projecttitle:"Universidad del Pacifico",
				projectdescription:"UX researcher in a project for one of the most important business schools in Peru. The problem: Find a tool to strengthen the relationship with its students and find a better way to communicate with them other than email.",
				liveapp: "https://marvelapp.com/1e2556e target=blank",
				link: "Play with the prototype",
				},
				{projecttitle:"Cienciactiva",
				projectdescription:"UX researcher and Designer in a project for a government entity that gives funds and opportunities in R&D to peruvian scientists. The challenge: How might we engage more peruvian scientists with the opportunities that Cienciactiva offers.",
				liveapp: "https://invis.io/EZ72QUVB4#/153332315_HOME target=blank",
				link: "Explore the design",
				},
				{projecttitle:"ADEX",
				projectdescription:"UX researcher and designer in a project with ADEX. The challenge: Unify the digital experience in all of the ADEX's different business units.",
				liveapp: "https://invis.io/DG7AR8YA8#/158488539_HOME  target=blank",
				link: "Explore the design",
				},
				{projecttitle:"Peru2021",
				projectdescription:"UX Designer in a project with Peru 2021, helping them to reinforce their positioning as the referent in all things related with Social Responsibility and Sustainability.",
				liveapp: "https://invis.io/D76A3ABKB#/133293341_HOME target=blank",
				link: "Explore the design",
				},
				{projecttitle:"LOOP",
				projectdescription:"UX Researcher and Designer to help LOOP be seen by its community as a social entrepreneurship and not as a non-profit.",
				liveapp: "https://invis.io/RM5P31D9W#/129446408_Home target=blank",
				link: "Explore the design",
				},
				{projecttitle:"Kmimos",
				projectdescription:"Project Manager and sometimes web developer to help this mexican startup validate their business model.",
				liveapp: "https://www.kmimos.la target=blank",
				link: "Go to the app",
				}
			],
		},
		{
			title: "Banco de Credito -  BCP",
			text: "Worked for over 5 years in the largest bank in Peru. Started as an intern and later worked as a Product Manager for different banking channels such as Online, Mobile, ATM and Kiosks.",
			class: "vertical",
			image: "assets/PreviewBCP.png",
			projects: [
			{
				projecttitle:"Banca Movil",
				projectdescription:"Design of the Mobile Banking app. I defined a better way to authenticate costumers, a new and improved UI, an easier way to make key transactions (improving UX), and a list of new, mobile only, features such as shared payments.",
				liveapp: "https://itunes.apple.com/cr/app/banca-movil-bcp/id777961079?mt=8",
				link: "Go to the app"
			},
			{
				projecttitle:"ATMs Navigation Menu",
				projectdescription:"Project to improve the architecture information and the visual design of the ATM menus, in order to make them more friendly to the users and to promote their usage for transactions other than cash withdrawal."
			},
			{
				projecttitle:"Deposit ATMs",
				projectdescription:"Ran the pilot in 10 BCP branches, worked closely with users, costumers and bank tellers, to get their feedback on how did they feel using this new ATMs. Later I managed the deployment of the Cash deposit ATMs nationwide."
			}
			]
		},
		{
			title: "General Assembly",
			text: "Intense and challenging 12 week Full-Stack Web Development program, covering the best practices in front end and back end web development",
			projects:[
			{
				projecttitle:"Zombie Survival Guide",
				projectdescription:"Site that gives user information about secure places to hide in the case of a Zombie attack. It displays a  It also gives you options to buy survival kits. Built in Ruby on Rails, using MapBox and Foursquare APIs, and Rspec and Capybara for testing.",
				link:"Explore",
				liveapp:"http://peru-compare.herokuapp.com",
				size:2,
				github: "http://github.com/lalogf/plan"
			},
			{
				projecttitle:"Plan Compare",
				projectdescription:"Site that allows users to choose their best option when buying or renewing a smartphone. It compares plans based on prices, amount of data and SMS and minutes offered by the mobile carriers. Built in Node.js, using Sequelizejs, Expressjs, Passport and Bcrypt.",
				liveapp:"http://zombiesurvivalguide.herokuapp.com/",	
				link:"Explore",
				size:2,
				github:"https://github.com/lalogf/zombielist"
			},
			]
		}]
	});

	$("#container").html(content);
	$("#projectsButton").css("background-color", "yellow");
	resizeBoxes();
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
			title: "Arte Aparte",
			text: "Ecommerce that will offer custom phone cases. Users will be able to create and buy their own phone cases. In this ocassion I will emphazise in Emojis! This app is being built in Ruby on Rails and it is using Culqi for processing payments.",
			link: "href=https://arteaparte.herokuapp.com/crea-tu-case/new target=blank",
			button: "Live App - Dev Mode",
			modal: false,
			modalId: "screenshotModal",
			modalcontent:"<img style=width:100% src=http://www.ucarecdn.com/21d579b3-01c8-4548-a01c-bb11537affb2/ScreenShot20150613at125002AM.png>"
		},
		{
			title: "Accesibilidad.pe",
			text: "Personal research project on how peruvian government and businesses aren't obeying the law # 28530. This law encourages the usage of WCAG 2.0 to build more accesible websites so people with disabilites can access them.",
			link: "http://www.larediberoamericana.com/wp-content/uploads/2012/07/ley-de-promocion-de-acceso-a-internet-para-PCD.pdf target=blank",
			button:"Learn more about this law",
			modal: false,
			modalId: "github"
		},
		{
			title: "Peru API",
			text: "Web API that will store the whole list of districts, provinces and departments from Peru, so developers will be able to use it to help their costumers when filling their contact and check out forms. It began as a helper for my own projects, but it'll be open source. Its first version is built on Ruby on Rails and deployed to Heroku.",
			link: "data-toggle=modal data-target=#sneakPeekModal",
			button:"Sneak peek",
			modal: true,
			modalId: "sneakPeekModal",
			modalcontent:"<form><p>Departamento</p><select id=departamentos class=form-control><option>Departamento</option></select><p>Provincia</p><select id=provincias class=form-control><option>Provincia</option></select ><p>Distrito</p><select id=distritos class=form-control><option>Distrito</option></select></form>"
		}
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