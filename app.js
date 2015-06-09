var ready = function () {
	var trying = function (){
		var color1 = "rgb(0, 0, 0)";
		var color2 = "rgb(255, 255, 255)";
		$("h1").each(function(){
			if(($(this).css("color")) === color1 ){
				($(this)).css("color", color2);
			} else {
				console.log(($(this).css("color")));
				($(this)).css("color", color1)
			}
		});
	}

	var nIntervId;
	function changeColor() {
		nIntervId = setInterval(trying, 3000);
	}

	changeColor();


};

$(document).ready(ready);
$(document).on('page:load',ready);
