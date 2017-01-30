'use strict';
$(document).ready(function() {

  // Navbar click scroll effect
  function scrollToSection(id) {
    let section = $(`#${id}`);
    $('html,body').animate({scrollTop: section.offset().top},'slow');
  }

  $("a").click(function(e) {
     scrollToSection(`${e.target.name}`);
  });
  // End Navbar click scroll effect

  // FadeInUp Scroll Animation
  let $animation_elements = $('.flexProject');
  console.log($animation_elements)
  let $window = $(window);

  $window.trigger('scroll');
  $window.on('scroll', check_if_in_view);
  $window.on('scroll resize', check_if_in_view);

  function check_if_in_view() {
    let window_height = $window.height();
    let window_top_position = $window.scrollTop();
    let window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      let $element = $(this);
      let element_height = $element.outerHeight();
      let element_top_position = $element.offset().top;
      let element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        $element.css('visibility', 'visible').addClass('in-view');
      } else {
        $element.css('visibility', 'hidden').removeClass('in-view');
      }
    });
  }


});
