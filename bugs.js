$(document).ready(function() {
    $('.silverfish').on('click', function() {
	$('button').closest('.silverfish')
	    .find('.sil-answer').slideToggle();
    });
    
    $('.slender-dipluran').on('click', function() {
	$(this).closest('.slender-dipluran')
	    .find('.sle-answer').slideToggle();
    });
    
    $('.burrowing-mayfly').on('click', function() {
	$(this).closest('.burrowing-mayfly')
	    .find('.bur-answer').slideToggle();
    });

    $('.clubtail').on('click', function() {
	$('button').closest('.clubtail')
	    .find('.clu-answer').slideToggle();
    });

    $('.biddie').on('click', function() {
	$('button').closest('.biddie')
	    .find('.bid-answer').slideToggle();
    });

    $('.white-tailed-skimmer').on('click', function() {
	$('button').closest('.white-tailed-skimmer')
	    .find('.whi-answer').slideToggle();
    });

    $('.western-widow').on('click', function() {
	$('button').closest('.western-widow')
	    .find('.wes-answer').slideToggle();
    });

    $('.american-ruby-spot').on('click', function() {
	$('button').closest('.american-ruby-spot')
	    .find('.ame-answer').slideToggle();
    });

    $('.blackwing').on('click', function() {
	$('button').closest('.blackwing')
	    .find('.bla-answer').slideToggle();
    });
    
});
