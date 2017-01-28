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

    $('.western-widow').on('click', 'button', function() {
	$(this).closest('.western-widow')
	    .find('.wes-answer').slideToggle();
    });

    $('.american-ruby-spot').on('click', 'button', function() {
	$(this).closest('.american-ruby-spot')
	    .find('.ame-answer').slideToggle();
    });

    $('.blackwing').on('click', 'button', function() {
	$(this).closest('.blackwing')
	    .find('.bla-answer').slideToggle();
    });
    
});
