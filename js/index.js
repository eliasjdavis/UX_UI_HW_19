console.log('Your index.js is loaded correctly!');

$('#downloadResume').on('click', function(){
	console.log('You clicked #downloadResume');
});

$('.customBtn').hover(function() {
	 $(this).addClass("hover");
}, function() {
     $(this).removeClass("hover");
});