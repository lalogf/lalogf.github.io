
var ready = function () {

	$(".navbarMenuItems").click(function(){
		$(".navbarMenuItems").css("background", "none");
		$(this).css("background-color", "yellow");
	});

	var trying = function (){
		var color1 = "rgb(0, 0, 0)";
		var color2 = "rgb(255, 255, 255)";
		$("h1").each(function(){
			if(($(this).css("color")) === color1 ){
				($(this)).css("color", color2);
			} else {
				($(this)).css("color", color1)
			}
		});
	}

	var nIntervId;
	function changeColor() {
		nIntervId = setInterval(trying, 3000);
	}

	changeColor();

	function resizeBoxes(){
		var boxHeight = $(".titleBox").css("height");
		$(".contentBox").css("height", boxHeight);
	}

	resizeBoxes();

	var theWindow = $(window);
	theWindow.resize(function() {
		resizeBoxes();
	});	

};

$(document).ready(ready);
$(document).on('page:load',ready);

