$(document).ready(function(){
    $(window).scroll(function(){
        backToTop();
        galleryAnimate();
    });
    scrollToTop();
})



// MOBILE MENU
$(document).on('click', '.menu', function() {
    console.log("hi");
    $('nav').addClass("mobile");
});

$(document).on('click', document, function(e){
  if (!$(e.target).is('.menu')&&!$(e.target).is('nav')) {
    $('nav').removeClass('mobile');
  }
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
