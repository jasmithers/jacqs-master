$(document).ready(function(){
    $(window).scroll(function(){
        backToTop();
        galleryAnimate();
    });
    scrollToTop();
})


//HTML INCLUDES
$.ajaxPrefilter( function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});
$.get(
    'http://jacqsstudio.ca/html-includes/header.html',
    function (response) {
      var header = document.createElement('header');
      $('main').before(header);
      $(header).html(response);
});
$.get(
    'http://jacqsstudio.ca/html-includes/head.html',
    function (response) {
      var head = document.getElementsByTagName('head')
      $('head').append(head);
      $(head).html(response);
});
$.get(
    'http://jacqsstudio.ca/html-includes/icons.html',
    function (response) {
      var div = document.createElement('div')
      document.body.prepend(div);
      $(div).html(response).css('position', 'absolute');
});

// MOBILE MENU
$(document).on('click', '.menu', function() {
  $('nav').toggleClass('mobile');
});



//PHOTOSWIPE
$('.picture').each( function() {
    var $pic     = $(this),
        getItems = function() {
            var items = [];
            $pic.find('a').each(function() {
                var $href   = $(this).attr('href'),
                    $size   = $(this).data('size').split('x'),
                    $width  = $size[0],
                    $height = $size[1];

                var item = {
                    src : $href,
                    w   : $width,
                    h   : $height,
                }

                items.push(item);
            });
            return items;

        }

    var items = getItems();
    var $pswp = $('.pswp')[0];
    $pic.on('click', 'figure', function(event) {
        event.preventDefault();

        var $index = $(this).index();
        var options = {
            index: $index,
            bgOpacity: 0.7,
            showHideOpacity: true
        }

        // Initialize PhotoSwipe
        var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
        lightBox.init();
    });

});

//THUMBNAILs
$('figure').each( function() {

var thumb = $(this).find('.thumbnail');
var image = $(this).find('a').attr('href');

$(thumb).css('background-image', 'url(' + image + ')');
});
//BACK TO top
function backToTop() {
  var headerHeight = 240;
  var scrollFromTop = $(window).scrollTop();

  if ( headerHeight <= scrollFromTop ) { //if window is lower than headeHeight
    $('.back-to-top-button').addClass('back-to-top');
  } else {
    $('.back-to-top-button').removeClass('back-to-top');
  }
}

//4. when clicked, scroll to top.
function scrollToTop() {
  $("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
}
//DISABLE RIGHT CLICK
//$(document).each(function() {
//  $(this)[0].oncontextmenu = function() {
//  alert('Images are available on request. Please contact me.');
//  return false;
//  };
//});


//animate in the photos up scrolling to them
function galleryAnimate() {
  $('.picture').each(function ( index ) {
    var scrollFromTop = $(window).scrollTop();
    var howOffset = $( this ).offset().top;
    if ( scrollFromTop >= ( howOffset - 380) ) {
      //.picture has come into view
      $( this ).removeClass('unseen-picture');
    } else {
      $( this ).addClass('unseen-picture');
    }
  });
}
