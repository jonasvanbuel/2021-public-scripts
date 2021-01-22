console.log('custom_bootstrap.js triggered...');

// General page styling
// setTimeout(function() {
//   const main = document.getElementsByTagName('main');
//   if (main) {
//     main[0].style.padding = "0";
//     console.log(main[0]);
//   }
// }, 2000);

const windowWith = window.with;

window.onload = () => {
  console.log('window loaded...');

  // Custom code blocks
  const sqsBlockCode = document.getElementsByClassName('sqs-block-code');
  if (sqsBlockCode) {
    sqsBlockCode.forEach(blockCode => {
      blockCode.parentNode.style.padding = "0";
    })
  };

  // Scale fullscreen slideshows

}

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    console.log(mutations, observer);
    var galleryFullscreenSlideshow =  document.getElementsByClassName('gallery-fullscreen-slideshow');
    if (galleryFullscreenSlideshow) {
      galleryFullscreenSlideshow.forEach(slideshow => {
        if (windowWith <= 576) {
          slideshow.style.height = "320px";
        };
        if (windowWith <= 992) {
          slideshow.style.height = "480px";
        }
        if (windowWith <= 1200) {
          slideshow.style.height = "600px";
        }
        if (windowWith > 1200) {
          slideshow.style.height = "700px";
        }
      })
    }
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
// observer.observe(document, {
//   subtree: true,
//   attributes: true
//   //...
// });


// RESPONSIVE TEMPLATE
// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) {
// }

// Medium devices (tablets, 768px and up)
// @media (min-width: 768px) {
// }

// Large devices (desktops, 992px and up)
// @media (min-width: 992px) {
// }

// Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) {
// }
