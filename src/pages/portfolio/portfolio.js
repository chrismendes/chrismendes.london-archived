// require('offcanvaspanel/offcanvaspanel');
// require('tabs/tabs');
// var gallery = require('gallery/gallery');

require('imageinviewloader/imageinviewloader');


// // ---
// // Populate Off-Canvas Panel w/Gallery
// // ---
// $(document).on('offCanvasPanelOpen', function(event, $data) {
//   var $imageSets = $data.children();
//   var $galleryArea = $('.js-offcanvaspanel-loadedcontent');

//   var projectName = $data.attr('data-name');
//   var projectURL  = $data.attr('data-url');

//   $('.js-projectname').html(projectName);
//   $('.js-projecturl').html(projectURL);
//   $('.js-projecturl').attr('href', 'http://' + projectURL);

//   $imageSets.each(function(index, element) {
//     var $set = $(this);
//     var id = $set.attr('data-galleryid');
//     var container = '#tab-' + id;
//     var selector = '.' + $set.attr('class');

//     var $images = $(element).find('img');
//     $images.each(function(index, $image) {
//       $image.attr('src', $image.attr('dat-src'));
//     });

//     var screenshotCount = $set.attr('data-screenshots');
//     $('.js-screenshotcount').html(screenshotCount);

//     $target = $galleryArea.find(selector);
//     $target.html($set.children().clone());

//     gallery.initialise($target, screenshotCount, {
//       container:        container,
//       btnNext:          selector + '-next',
//       btnPrevious:      selector + '-previous',
//       currentSlide:     selector + '-currentslide',
//       screenshotCount:  selector + '-screenshotcount'
//     });
//   });

// });


// // ---
// // Clear Off-Canvas Panel
// // ---
// $(document).on('offCanvasPanelClose', function(event, data) {
//   gallery.tearDown();
// });
