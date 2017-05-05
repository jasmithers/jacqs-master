$(document).ready(function(){
    $(window).scroll(function(){
        backToTop();
    })
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

//
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
