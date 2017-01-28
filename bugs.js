$(document).ready(function() {
    $('.silverfish').on('click', 'button', function() {
	$(this).closest('.silverfish')
	    .find('.sil-answer').slideToggle();
    });
    
    $('.slender-dipluran').on('click', 'button', function() {
	$(this).closest('.slender-dipluran')
	    .find('.sle-answer').slideToggle();
    });
    
    $('.burrowing-mayfly').on('click', 'button', function() {
	$(this).closest('.burrowing-mayfly')
	    .find('.bur-answer').slideToggle();
    });

    $('.clubtail').on('click', 'button', function() {
	$(this).closest('.clubtail')
	    .find('.clu-answer').slideToggle();
    });

    $('.biddie').on('click', 'button', function() {
	$(this).closest('.biddie')
	    .find('.bid-answer').slideToggle();
    });

    $('.white-tailed-skimmer').on('click', 'button', function() {
	$(this).closest('.white-tailed-skimmer')
	    .find('.whi-answer').slideToggle();
    });
    
});
