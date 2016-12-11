$(document).ready(function(){
	for(var x = 0; x < 16; x++) {
		for(var y = 0; y < 16; y++) {
			var unit = $('<div class="unit"></div>');
			unit.appendTo('.etch');
		}
	}

	$('.unit').hover(draw);
	buttonPress();
	
});

function draw() {
	var currentOp = +$(this).css('opacity');
	if (currentOp < 1) {
		currentOp += 0.1;
		$(this).css({'opacity': currentOp});
	}
}

function buttonPress() {
	$('button').on('click', function() {
		$('.unit').css({'opacity': 0.1});
	});
}


