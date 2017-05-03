window.onload = function() {
    let am_list = [];
    $('input[type=checkbox]').change(function () {
	$(this).each( function() {
	    let am_name = $(this).attr('data-name');
	    if ($(this).is(":checked")) {
		am_list.push(am_name);
	    } else {
		am_list.pop(am_name);
	    }
	});
	if (am_list.length === 0) {
	    $('DIV.amenities').find('h4').text('\u00A0');
	} else {
	    $('DIV.amenities').find('h4').text(am_list.join(', '));
	}
    });

    $.getJSON('http://0.0.0.0:5001/api/v1/status/', function(data) {
	if (data['status']) {
	    $('DIV#api_status').addClass('available');
	} else {
	    $('DIV#api_status').removeClass('available');
	}
    });
}
