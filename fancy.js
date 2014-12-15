$(document).ready(function() {

	$("a#photo").fancybox({
		'transitionIn'	: 'none',
		'transitionOut'	: 'none',
		'titlePosition'	: 'inside'	
	});

	$("a[rel=works]").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'over',
		'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
		    return '<span id="fancybox-title-over">' +  (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
		}
	});

	$(".iframe_upload").fancybox({
		'width'				: 900,
		'height'			: '100%',
	    'autoScale'     	: false,
	    'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe',
		'onClosed': function() {
			filterResults();
		}
	});

	$(".iframe_about").fancybox({
		'padding'			: 0,
		'margin'			: 0,
		'width'				: 605,
		'height'			: 486,
		'opacity'			: true,
	    'autoScale'     	: false,
	    'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe',
		'onClosed': function() {
//			filterResults();
		}
	});

});
