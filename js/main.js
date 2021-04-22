$('.go_to').click(function () {
  var scroll_el = $(this).attr('href');
  if ($(scroll_el).length != 0) {
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500);
  }
  return false;
});
/*---------------------------------------------------end*/

$('.menuBtn').on('click', function () {
  $(this).toggleClass('active');
  $('.section-left').toggleClass('active');
})
/*---------------------------------------------------end*/
function videos() {
  const video = $('.block3-item').children('.block3-item__video');

  $('.videoPlay').on('click', function () {
    $(this).fadeOut();
    $('.block3-item').children('.block3-item__video').get(0).pause();
    const vid = $(this).parent('.block3-item').children('.block3-item__video')[0];
    vid.play();
  })

  video.on('click', function () {
    // console.log(this);
    $(this).get(0).pause();
    $(this).parent('.block3-item').children('.videoPlay').fadeIn();
    $(this).parent('.block3-item').addClass('done');

  })

}
videos()
/*---------------------------------------------------end*/
function form() {
  $('.next').on('click', function () {
    if ($(this).hasClass('to_second')) {
      $(".block4-item").removeClass('active');
      $('.block4-item.second').addClass('active');
    } else if ($(this).hasClass('to_third')) {
      $(".block4-item").removeClass('active');
      $('.block4-item.third').addClass('active');
    } else if ($(this).hasClass('to_fourth')) {
      $(".block4-item").removeClass('active');
      $('.block4-item.fourth').addClass('active');
    }
  })
} form()

/*---------------------------------------------------end*/
$('.main-slider').slick({
  infinite: true,
  arrows: false,
  dots: false,
  loop: true,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerMode: true,
      }
    },
  ]
});

/*---------------------------------------------------end*/

$(function () {
  function showModal(id) {
    $(id).fadeIn();
  }
  function hideModals() {
    $('.modal').fadeOut();
  };
  $('.modalClose').on('click', function () {
    hideModals();
  });
  $('.product-item').on('click', function () {
    showModal(product_order);
  });
  $('.store_products-open').on('click', function () {
    showModal(store_products);
  });

  $(document).on('click', function (e) {
    if (!(
      ($(e.target).parents('.modal-content').length)
      || ($(e.target).hasClass('modal-content'))

    )
    ) {
      hideModals();
    }
  });

});
/*---------------------------------------------------end*/
function required() {
  var empt = document.getElementById("refCode").value;
  if (empt === "") {
    alert("Пожалуйста введите Реферальный код");
    return false;
  }
  else {
    window.open("https://hubus.pro/smile/home.html");
    return true;
  }
} 