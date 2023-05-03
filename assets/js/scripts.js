/*
Author: @ankushm
Author URL: ankushm.dev(coming soon)
*/

/*
    = Preloader
    = Animated scrolling / Scroll Up
    = Full Screen Slider
    = Sticky Menu
    = Back To Top
    = Countup
    = Progress Bar
    = More skill
    = Shuffle
    = Magnific Popup
    = Vidio auto play
    = Fit Vids
    
    IMP: Some sections are under 
         development.

*/

jQuery(function ($) {

    'use strict';

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

    $(window).ready(function() {
        $('#pre-status').fadeOut();
        $('#tt-preloader').delay(350).fadeOut('slow');
    });




    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function () {
        $('a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    }());



    // -------------------------------------------------------------
    // Full Screen Slider
    // -------------------------------------------------------------
    (function () {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function(){
            $(".tt-fullHeight").height($(window).height());
        });

    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());




    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());


    // -------------------------------------------------------------
    // Countup
    // -------------------------------------------------------------
    $('.count-wrap').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------
 
    $('.skill-progress').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).unbind('inview');
        }
    });
    
    // -------------------------------------------------------------
    // More skill
    // -------------------------------------------------------------
    $('.more-skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor:'#68c3a3',
                trackColor:'rgba(255,255,255,0.2)',
                scaleColor: false,
                lineWidth: 8,
                size: 140,
                animate: 2000,
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Shuffle
    // -------------------------------------------------------------

    (function () {

        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item'
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').click(function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });


    }());


    // -------------------------------------------------------------
    // Magnific Popup
    // -------------------------------------------------------------

    (function () {
      $('.image-link').magnificPopup({

        gallery: {
          enabled: true
        },
        removalDelay: 300, // Delay in milliseconds before popup is removed
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        type:'image'
      });

    }());



    (function () {
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            removalDelay: 300,
            preloader: false,
            fixedContentPos: false
        });
    }());





    // -------------------------------------------------------------
    // Fit Vids
    // -------------------------------------------------------------
    (function () {
        $(".video-container").fitVids();
    }());




    // -------------------------------------------------------------
    // STELLAR FOR BACKGROUND SCROLLING
    // -------------------------------------------------------------

    $(window).load(function() {

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
         
        }else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });


    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile:  false

        }).init();

    }());



    // -------------------------------------------------------------
    // Contact Form
    // -------------------------------------------------------------

    $('#contactForm').on('submit',function(e){

        e.preventDefault();

        var $action = $(this).prop('action');
        var $data = $(this).serialize();
        var $this = $(this);

        $this.prevAll('.alert').remove();

        $.post( $action, $data, function( data ) {

            if( data.response=='error' ){

                $this.before( '<div class="alert alert-danger">'+data.message+'</div>' );
            }

            if( data.response=='success' ){

                $this.before( '<div class="alert alert-success">'+data.message+'</div>' );
                $this.find('input, textarea').val('');
            }

        }, "json");

    });

});

	function removeITag()
	{ 
		var button = document.getElementById("submit-form"); 
		var iTag = document.getElementById("button-loader"); 
		button.removeChild(iTag); 
	}
	
	function nameValidator() {
 	 let input = document.getElementById("name").value;
 	 let text;
  		if (input.length === 0) {
    		text = "Name is mandatory.";
    		document.getElementById("name-message").innerHTML = text;
    		return false;
 		}
 		else{
 			return true;
 		} 
 		
	}
	
	function emailValidator() {
	 var mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 	 let input = document.getElementById("email").value;
 	 let text;
  		if (input.length === 0) {
    		text = "Email is mandatory.";
    		document.getElementById("email-message").innerHTML = text;
    		return false;
 		}else if(!input.match(mailRegex)) {
 			text = "Invalid email, it should look like: abc@domain.xyz"
 			document.getElementById("email-message").innerHTML = text;
 			return false;
 		}else{
 			return true;
 		} 
	}
	
	function subjectValidator() {
 	 let input = document.getElementById("subject").value;
 	 let text;
  		if (input.length === 0) {
    		text = "Subject is mandatory.";
    		document.getElementById("subject-message").innerHTML = text;
    		return false;
 		}else{
 			return true;
 		}
 		
	}
	
	function textAreaValidator() {
 	 let input = document.getElementById("message").value;
 	 let text;
  		if (input.length === 0) {
    		text = "Message is mandatory.";
    		document.getElementById("text-message").innerHTML = text;
    		return false;
 		}else{
 			return true;
 		}
 		
 		
	}
	
	function resetValidationTexts() {
	 let text = '';
	 document.getElementById("name-message").innerHTML = text;
	 document.getElementById("email-message").innerHTML = text;
	 document.getElementById("subject-message").innerHTML = text;
	 document.getElementById("text-message").innerHTML = text;
	}
	
	$('#submit-form').on('click', function() {

	resetValidationTexts();
	
	let nameVal = nameValidator();
	let emailVal = emailValidator();
	let subVal = subjectValidator();
	let textVal = textAreaValidator();
	
    if (nameVal && emailVal && subVal && textVal) {

        var button = document.getElementById("submit-form");
        var iTag = document.createElement('i');
        iTag.setAttribute('class', "fa fa-spinner fa-spin");
        iTag.setAttribute('id', "button-loader");
        button.appendChild(iTag);
        $('#submit-form').prop('disabled', true);


        $.ajax({
            url: $('#contactForm').attr('action'),
            data: $('#contactForm').serialize(),
            type: "post",
            success: function(result) {
                $('#contactForm')[0].reset(); // Reset all form data
                $('#submit-form').prop('disabled', false);
                removeITag();
                toastr.success(result.message);
            },
            error: function(error) {
                console.log(error);
                $('#contactForm')[0].reset(); // Reset all form data
                $('#submit-form').prop('disabled', false);
                removeITag();
                toastr.error(error.message);
            }
        });

    }



});



