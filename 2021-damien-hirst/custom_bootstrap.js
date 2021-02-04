console.log('custom_bootstrap.js triggered...');

// General page styling
// setTimeout(function() {
//   const main = document.getElementsByTagName('main');
//   if (main) {
//     main[0].style.padding = "0";
//     console.log(main[0]);
//   }
// }, 2000);

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
  const galleryFullscreenSlideshow =  document.getElementsByClassName('gallery-fullscreen-slideshow');
  if (galleryFullscreenSlideshow) {
    galleryFullscreenSlideshow.forEach(slideshow => {
      if (window.innerWidth > 1200) {
        slideshow.style.height = "700px";
      }
      if (window.innerWidth <= 1200) {
        slideshow.style.height = "600px";
      }
      if (window.innerWidth <= 992) {
        slideshow.style.height = "480px";
      }
      if (window.innerWidth <= 576) {
        slideshow.style.height = "320px";
      };
    })
  };

  // Full-bleed styling
  const fullBleedArray = document.getElementsByClassName('anchor-fb');
  fullBleedArray.forEach(el => {
    const contentWrapper = el.closest(".content-wrapper");
    const sectionBackground = contentWrapper.previousElementSibling;
    sectionBackground.style.maxHeight = "85vh";
    const pageSection = sectionBackground.closest(".page-section");
    pageSection.style.minHeight = "70vw";
    pageSection.style.maxHeight = "70vh";
  })

  // Quote styling
  const quoteArray = document.getElementsByClassName('anchor-quote');
  quoteArray.forEach(quote => {
    // quote.closest(".sqs-block-code").style.padding = "0px";
    // quote.closest(".content").style.marginTop = "140px";
    quote.closest(".content-wrapper").style.paddingTop = "160px";
    quote.closest(".content-wrapper").style.paddingBottom = "120px";
  })

  // Gallery Grid styling
  const gridArray = document.getElementsByClassName('gallery-grid');
  gridArray.forEach(grid => {
    grid.style.paddingTop = "120px";
  })

  // CHANGE HEIGHT ALL FULL BLEED ELEMENTS === ALL ELEMENTS...

  // const backgroundWidthFullBleed =  document.getElementsByClassName('background-width--full-bleed');
  // if (backgroundWidthFullBleed) {
  //   backgroundWidthFullBleed.forEach(section => {
  //     console.log(section);
  //     if (section.innerText === "") {
  //       if (window.innerWidth > 1200) {
  //         section.style.height = "700px";
  //         const background = section.getElementsByClassName('section-background')[0];
  //         background.style.height = "700px";
  //         background.style.margin = "auto 0";
  //       }
  //       if (window.innerWidth <= 1200) {
  //         section.style.height = "600px";
  //         const background = section.getElementsByClassName('section-background')[0];
  //         background.style.height = "600px";
  //         background.style.margin = "auto 0";
  //       }
  //       if (window.innerWidth <= 992) {
  //         section.style.height = "480px";
  //         const background = section.getElementsByClassName('section-background')[0];
  //         background.style.height = "480px";
  //         background.style.margin = "auto 0";
  //       }
  //       if (window.innerWidth <= 576) {
  //         section.style.height = "320px";
  //         const background = section.getElementsByClassName('section-background')[0];
  //         background.style.height = "320px";
  //         background.style.margin = "auto 0";
  //       };
  //     }
  //   })
  // };

}


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
