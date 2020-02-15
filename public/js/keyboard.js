$(document).ready(function (){
    // Requires jQuery

$('.osk_key').click(function(e) {
	e.preventDefault();
	console.log('--> clicked: osk_key = '+ $(this).attr('id').replace('osk_key-','') );

	var currentVal = $('#osk_input').val(),
		keyVal = '';
	if ( $(this).hasClass('osk_letter') || $(this).hasClass('osk_number') ) {
		keyVal = $(this).attr('id').replace('osk_key-','');
		if ( $('.osk_box').hasClass('shifted') ) {
			$('#osk_input').val(currentVal+=keyVal.toUpperCase() ).focus();
			$('.osk_box').removeClass('shifted');
		} else {
			$('#osk_input').val(currentVal+=keyVal).focus();
			$('.osk_box').removeClass('shifted');
		}
	} else if ( $(this).hasClass('osk_spacebar') ) {
		$('#osk_input').val(currentVal+=' ').focus(); //add a space. so currentVal is our thing.
	} else if ( $(this).hasClass('osk_shift') ) {
		$('.osk_box').toggleClass('shifted');
	} else if ( $(this).hasClass('osk_backspace') ) {
		$('#osk_input').val(currentVal.slice(0,-1)).focus();
	} else if ( $(this).hasClass('osk_enter') ) {
		var text = currentVal; //then access with osk_input $texttosend = $_COOKIE['texttosend'];
		console.log(keyVal);
		console.log(currentVal);
		console.log(text);
		document.cookie = "text=" + currentVal;
		console.log(document.cookie);
		// $('.osk_box').slideUp(250); //send to twilio
	}
});



	$('#osk_input').click(function() {
		$('.osk_box').slideToggle(100);
		$("#menu").toggle();
		$("#menu1").toggle();
		document.getElementById("menu-toggler3").checked = true;
		$("#goback").toggle();
	});

	// use the a href feature to activate the php file without redirecting.
	$('a.access-only').click(function() {
		$.get($(this).attr('href'), function(response) {
			//Do nothing here, the URL has been accessed.
		});
		//Return false to prevent the browser's default click action.
		return false;
	});
});
