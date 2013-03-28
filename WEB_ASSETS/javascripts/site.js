(function() {
  var panelSlide, _taglineAdder;

  panelSlide = function() {
    var $accordionLink, allPanels;
    allPanels = $('.accordion > dd');
    allPanels.hide();
    $accordionLink = $('.accordion > dt > a');
    return $('.accordion > dt > a').on('click', function() {
      var $self;
      $self = $(this);
      allPanels.slideUp('fast');
      $('.accordion > dt > a.open').removeClass('open');
      if (String($self.parent().next('dd').css('display')) === 'none') {
        $self.parent().next('dd').slideDown('fast', function() {
          return $('body').animate({
            scrollTop: $self.offset().top
          }, 'fast');
        });
        $self.addClass('open');
      } else {
        $self.parent().next('dd').slideUp('fast');
        $self.removeClass('open');
      }
      return false;
    });
  };

  _taglineAdder = function() {
    var byline, newSrc, taglineDictionary;
    taglineDictionary = {
      'richardbranson': ['the idealist', 'branson@2x.jpg'],
      'petershawntaylor': ['the skeptic', 'taylor@2x.jpg'],
      'jamescowan': ['the realist', 'cowan@2x.jpg'],
      'madelainedrohan': ['on natural resources', 'drohan@2x.jpg'],
      'brucephilp': ['the messenger', 'philp@2x.jpg']
    };
    byline = String($('.byline').text().replace(/\s+/g, '').toLowerCase());
    if (taglineDictionary.hasOwnProperty(byline)) {
      $('.tagline').text(taglineDictionary[byline][0]);
      newSrc = $('.head-furniture').attr('src').replace(/images\/.*/, '/images/' + taglineDictionary[byline][1]);
      return $('.head-furniture').attr('src', newSrc);
    }
  };

  this.small = "small";

  this.medium = "medium";

  this.large = "large";

  this.fontSizeChange = function(fontSize) {
    return $('div.content, dl').children().not('div.weblinks, dt, div.content .hedline h1, div.content .byline, div.content .slug, blockquote, div.content b, div.content em').each(function() {
      return $(this).removeClass("large medium small").addClass(fontSize);
    });
  };

  $(function() {
    $(".fancybox").fancybox({
      width: 320,
      padding: 0,
      helpers: {
        title: {
          type: 'outside'
        },
        overlay: {
          speedIn: 200,
          speedOut: 200
        }
      },
      openEffect: 'fade',
      closeEffect: 'fade'
    });
    $('#firstBatch').click(function() {
      $('div.container').hide();
      $('#main-image').css('visibility', 'hidden');
      $('div#first').css('visibility', 'visible');
      $('body').css('background-color', 'black');
      return false;
    });
    $('#close-gallery').click(function() {
      $(this).parent('.image-featured').css('visibility', 'hidden');
      $('#main-image').css('visibility', 'visible');
      if (String($('body').css('background-color')) !== 'white') {
        $('body').css('background-color', 'white');
      }
      $('div.container').fadeIn();
      return false;
    });
    $('a.toggle-caption').click(function() {
      var captionDisplay;
      if (!$(this).hasClass('here')) {
        captionDisplay = "show";
        $('a.toggle-caption').addClass('here').removeClass('gone');
        $('div.caption-YIP').text($(this).attr('title')).fadeIn();
        $(this).text('Hide Caption');
      } else {
        $('a.toggle-caption').removeClass('here').addClass('gone');
        $('div.caption-YIP').text($(this).attr('title')).fadeOut();
        $(this).text('Show Caption');
      }
      return false;
    });
    fontSizeChange(medium);
    panelSlide();
    if ($('.tagline').length > 0) {
      return _taglineAdder();
    }
  });

}).call(this);
