
var ready = function () {

	$(".navbarMenuItems").click(function(){
		$(".navbarMenuItems").css("background", "none");
		$(this).css("background-color", "yellow");
	});

	var changeIcons = function() {
		$(".outer-shape").hover(function(){
		$(this).css("fill","rgb(0,0,0)")},function(){
			$(this).css("fill","rgb(0,121,191)")
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

