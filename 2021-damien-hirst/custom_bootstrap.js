console.log('custom_bootstrap.js triggered...');

// General page styling
setTimeout(function() {
  const main = document.getElementsByTagName('main');
  if (main) {
    main[0].style.padding = "0";
    console.log(main[0]);
  }
}, 2000);


// Custom code blocks
setTimeout(function() {
  const sqsBlockCode = document.getElementsByClassName('sqs-block-code');
  if (sqsBlockCode) {
    sqsBlockCode.forEach(blockCode => {
      blockCode.parentNode.style.padding = "0";
      console.log(blockCode);
    })
  }
}, 2000);


