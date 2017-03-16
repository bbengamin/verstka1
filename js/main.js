$(document).ready(function(){

	$('.login').click(function(){
		$('.wrap-log').fadeIn(400);
		return false;
	});
	$('.wrap-log .close').click(function(){
		$('.wrap-log').fadeOut(400);
	});
	$('.burger').click(function(){
		$(this).toggleClass('open');
	});
	$('.pop-login form .eye .eye-inp').click(function(){
		$(this).toggleClass('open');
		if ( $(this).hasClass('open') )
			$(this).parent().find('input').attr('type', 'text');
		else
			$(this).parent().find('input').attr('type', 'password');
	});

	$('.play-btn').click(function(){
		$('.videopopup').fadeIn(400);
	});

	$('.video .close').click(function(){
		$('.videopopup').fadeOut(400);
	});

	function hideMenu() {
		if ( $(window).width() <= 800 ) {
			$('header div.menu ul.menu li ul.sub-menu').hide();
			if ( parseInt( $('header div.menu ul.menu').css('left') ) == 0 )
				$('header div.menu ul.menu').css('left', -230);
		} else { 
			$('header div.menu ul.menu li ul.sub-menu').css('display', '');
			$('header div.menu ul.menu').css('left', '');
			$('body').css('overflow', '');
			$('.wrap-menu').hide();
			$('.close-menu').css({left:-205});
		}
	}

	hideMenu();

	$(window).resize(function(){
		hideMenu();
	});

	$('li.has-child > a').click(function(){

		if ( $(this).parent().find('.sub-menu').is(':visible') )  return true;
		$(this).parent().find('.sub-menu').slideDown(300);

		return false;
	});

	$('.left-burger').click(function(){
		$('header div.menu ul.menu').animate({left: -1}, 300);
		$('.close-menu').animate({left:205}, 300);
		$('body').css('overflow', 'hidden');
		$('.wrap-menu').fadeIn(300);
		return false;
	});

	$('.wrap-menu, .close-menu').click(function(){
		$('header div.menu ul.menu').animate({left: -230}, 300);
		$('.close-menu').animate({left:-205}, 300);
		$('body').css('overflow', '');
		$('.wrap-menu').fadeOut(300);
	});

	var lastTop = 0;
	$(window).scroll(function(){
		var offset = $('aside .banners').offset().top-20;
		var scroll = $(this).scrollTop();
		var top = (scroll-offset);
		

		var footer_off = $('footer').offset().top;
		var b_he = $('aside .banners .banner').height();

		//console.log( offset );

		if ( scroll >= offset ) {
			//	console.log( footer_off - b_he );

			//console.log( scroll );
			
			//console.log( typeof top );
			$('aside .banners .banner').css({position: 'absolute', top: lastTop});
			if ( footer_off - b_he - 20 > scroll )
				lastTop = top;
			///$('aside .banners .banner').css('top', (scroll-top) );
		} else {
			$('aside .banners .banner').css('position', '');
			$('aside .banners .banner').css('top', '');
		}

		

	});

	$('.select .selected').click(function(){
		$(this).parent().find('.options').toggleClass('open');
	});

	$('.select .options .option').click(function(){
		$(this).parent().parent().find('.selected').html( $(this).text() );
		$(this).parent().removeClass('open');
	});

    $('#optimization_first_links').click(function (event) {
        event.preventDefault();
        $('#optimization_first_list .links-hiddens').slideDown(300);
    });
    $('#optimization_second_links').click(function (event) {
        event.preventDefault();
        $('#optimization_second_list .links-hiddens').slideDown(300);
    });
    $('#content_first_links').click(function (event) {
        event.preventDefault();
        $('#content_first_list .links-hiddens').slideDown(300);
    });
    $('#content_second_links').click(function (event) {
        event.preventDefault();
        $('#content_second_list .links-hiddens').slideDown(300);
    });
    $('#drop-tittle').click(function (event) {
        event.preventDefault();
        $('#drop-tittle .drop-inner-show').toggle(600);
        $('#drop-tittle a').toggleClass('rotate');
    });
    $('#drop-description').click(function (event) {
        event.preventDefault();
        $('#drop-description .drop-inner-show').toggle(600);
        $('#drop-description a').toggleClass('rotate');
    });
    $('#drop-key').click(function (event) {
        event.preventDefault();
        $('#drop-key .drop-inner-show').toggle(600);
        $('#drop-key a').toggleClass('rotate');
    });
    $('#drop-h1tag').click(function (event) {
        event.preventDefault();
        $('#drop-htag.drop-inner-show').toggle(600);
        $('#drop-h1tag a').toggleClass('rotate');
    });
    $('#separet').click(function (event) {
		event.preventDefault();
		$('#space').removeClass('active');
		$('#separet').toggleClass('active');
    });
    $('#space').click(function (event) {
        event.preventDefault();
        $('#separet').removeClass('active');
        $('#space').toggleClass('active');
    });

    $('.drop-row').click(function (event) {
        event.preventDefault();
        $(this).find('.drop-inner').slideToggle( "slow" ,function(){
      
        });
        $(this).find('a').toggleClass('rotate');
        $(this).find('.links-span').toggleClass('none');
        $(this).find('.prompt').slideToggle( "slow" ,function(){

        });
    });
    $('.links-span').click(function (event) {
        event.preventDefault();
        $(this).find('.links-span').toggleClass('none');
        $(this).find('.prompt').slideToggle( "slow" ,function(){

        });
    });






    $('#example').DataTable();
    $('#example-2').DataTable();
    $('#example-3').DataTable();
    $('#example-4').DataTable();
    $('#table-first').DataTable();
    $('#second-table').DataTable();

    $(document).scroll(function(){
        if($(window).scrollTop() > $('#blocks-1').offset().top - 100){
            $('#nav-fixed').addClass('fixed');
        }else{
            $('#nav-fixed').removeClass('fixed');
        }
    });

    $('#example_wrapper').after("<span id='example-table' class='table-count'><span>Показывать по:</span> <a class='btn-table-count active' id='exa-btn10' data-count='10'>10</a><a id='exa-btn50' class='btn-table-count' data-count='50'>50</a><a id='exa-btn100' class='btn-table-count' data-count='100'>100</a></span>");
    $(document).on('click','.btn-table-count', function(){
        $('[name="example_length"]').val($(this).attr('data-count'));
        $('[name="example_length"]').trigger('change');
	});
    $('#example-2_wrapper').after("<span id='example-table' class='table-count'><span>Показывать по:</span> <a class='btn-table-count active' id='exa-btn10' data-count='10'>10</a><a id='exa-btn50' class='btn-table-count' data-count='50'>50</a><a id='exa-btn100' class='btn-table-count' data-count='100'>100</a></span>");
    $(document).on('click','.btn-table-count', function(){
        $('[name="example-2_length"]').val($(this).attr('data-count'));
        $('[name="example-2_length"]').trigger('change');
    });
    $('#example-3_wrapper').after("<span id='example-table' class='table-count'><span>Показывать по:</span> <a class='btn-table-count active' id='exa-btn10' data-count='10'>10</a><a id='exa-btn50' class='btn-table-count' data-count='50'>50</a><a id='exa-btn100' class='btn-table-count' data-count='100'>100</a></span>");
    $(document).on('click','.btn-table-count', function(){
        $('[name="example-3_length"]').val($(this).attr('data-count'));
        $('[name="example-3_length"]').trigger('change');
    });
    $('#example-4_wrapper').after("<span id='example-table' class='table-count'><span>Показывать по:</span> <a class='btn-table-count active' id='exa-btn10' data-count='10'>10</a><a id='exa-btn50' class='btn-table-count' data-count='50'>50</a><a id='exa-btn100' class='btn-table-count' data-count='100'>100</a></span>");
    $(document).on('click','.btn-table-count', function(){
        $('[name="example-4_length"]').val($(this).attr('data-count'));
        $('[name="example-4_length"]').trigger('change');
    });
    $('#table-first_wrapper').after("<span id='count-table' class='table-count'><span>Показывать по:</span> <a id='first-btn10' class='btn-table-count active' data-count='10'>10</a><a id='first-btn10' class='btn-table-count' data-count='50'>50</a><a id='first-btn10' class='btn-table-count' data-count='100'>100</a></span>");
    $(document).on('click','.btn-table-count', function(){
        $('[name="table-first_length"]').val($(this).attr('data-count'));
        $('[name="table-first_length"]').trigger('change');
    });
    /*CHECK PLS*/
   /* $('#exa-btn10').click(function (event) {
        event.preventDefault();
        $('#example-table .btn-table-count').removeClass('.active'):
        $('#exa-btn10').addClass('active');
    });
    $('#exa-btn50').click(function (event) {
        event.preventDefault();
        $('#example-table .btn-table-count').removeClass('.active'):
        $('#exa-btn50').addClass('active');
    });
    $('#exa-btn100').click(function (event) {
        event.preventDefault();
        $('#first-table .btn-table-count').removeClass('.active'):
        $('#first-btn100').addClass('active');
    });
    $('#first-btn10').click(function (event) {
        event.preventDefault();
        $('#count-table .btn-table-count').removeClass('.active'):
        $('#first-btn10').addClass('active');
    });
    $('#first-btn50').click(function (event) {
        event.preventDefault();
        $('#count-table .btn-table-count').removeClass('.active'):
        $('#first-btn50').addClass('active');
    });
    $('#first-btn100').click(function (event) {
        event.preventDefault();
        $('#count-table .btn-table-count').removeClass('.active'):
        $('#first-btn100').addClass('active');
    });*/

   //smooth-scroll
    function getTargetTop(a) {
        var c = a.attr("href");
        var b = 100;
        return $(c).offset().top - b
    }
    $('#nav-fixed a[href^="#"]').click(function (a) {
        var b = getTargetTop($(this));
        $("html, body").animate({scrollTop: b}, 1500);
        a.preventDefault()
    });
});

$(window).scroll(function () {
    var t = $(window).scrollTop() + 120;
    $(".section").each(function () {
        var e = $(this).offset().top;
        e < t && t < e + $(this).height() && ($(".menus-lists").removeClass("active"),
            $('.menus-lists[href="#' + $(this).attr("id") + '"]').addClass("active"))
    })
})