$(document).ready(function() {
    $('.waterBirds').on('click', 'button', function() {
	$(this).closest('.waterBirds').find('.water-birds').slideDown();
    });
});
