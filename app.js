
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



};

$(document).ready(ready);
$(document).on('page:load',ready);

