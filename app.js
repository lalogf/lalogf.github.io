
var ready = function () {

	$(".navbarMenuItems").click(function(){
		$(".navbarMenuItems").css("background", "none");
		$(this).css("background-color", "yellow");
	});

	var changeIcons = function() {
		$(".outer-shape").hover(function(){
		$(this).css("fill","rgba(255,255,255,0)")},function(){
			$(this).css("fill","rgba(0,0,0,0.7)")
		});
	};
	changeIcons();

	var blinkColors = function (){
		var color1 = "rgb(0, 0, 0)";
		var color2 = "rgb(255, 255, 255)";
		$(".blinkTitle").each(function(){
			if(($(this).css("color")) === color1 ){
				($(this)).css("color", color2);
			} else {
				($(this)).css("color", color1)
			}
		});
	}

	function changeColor() {
		setInterval(blinkColors, 2000);
	}

	changeColor();

	// function resizeBoxes(){
	// 	var boxHeight = $(".titleBox").css("height");
	// 	$(".contentBox").css("height", boxHeight);
	// }

	// resizeBoxes();

	hideControls = function () {
		var theWindow = $(window);
		theWindow.resize(function() {
			if (theWindow.innerWidth() < 600){
				$(".controls").hide();
			} else {
				$(".controls").show();
			}
		});	
	};

	hideControls();

	$('.nav a').on('click', function(){
		$(".btn-navbar").click(); 
		$(".navbar-toggle").click() 
	});

	$(".closeButton").click(function(){
		$(this).parent().attr("hidden","true")
	});

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

};

$(document).ready(ready);
$(document).on('page:load',ready);

