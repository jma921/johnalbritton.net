'use strict';
// Mix It Up Instatiation

$(function(){
    $('#portfolio').mixItUp({
    	// animation: {
    	// 	animateResizeContainer: false
    	// }
    });  
});


// Material Design Init

$(function() {
	$.material.init();
});



// Scroll Easing

			$(function() {
              $('#contact-button').click(function() {
                  $('html, body').animate({
                      scrollTop: $('#contact').offset().top
                  }, 1000, 'easeInOutQuint');
              });
            });



// fancy box

	$(function() {
              $('.fancybox').fancybox({
                helpers: {
                  title: {
                    type: 'inside',
                    position: 'top'
                  },
                  overlay: {
                    css: {
                      'background' : 'rgba(58, 42, 45, 0.65)'
                    }
                  }
                },
                tpl: {
                      closeBtn: '<a title="Close" class="fancybox-item fancybox-close myClose btn btn-fab btn-raised btn-danger" href="javascript:;"><i class="mdi-navigation-close"></i></a>',
                      next     : '<a title="Next" class="fancybox-nav fancybox-next remove" href="javascript:;"><span></span></a>',
                      prev     : '<a title="Previous" class="fancybox-nav fancybox-prev remove" href="javascript:;"><span></span></a>'
                  },
                closeClick: true
              });
            });


// Fancy Hover


$(function() {
            $('.all').addClass('.active');
        });

        $('button.btn.btn-flat.btn-info.filter').click(function() {
            $(this).addClass('shadow-z-1');
        });