console.log('custom_bootstrap.js triggered...');

// General page styling
// setTimeout(function() {
//   const main = document.getElementsByTagName('main');
//   if (main) {
//     main[0].style.padding = "0";
//     console.log(main[0]);
//   }
// }, 2000);


// Custom code blocks
window.onload = () => {
  console.log('window loaded...');
  const sqsBlockCode = document.getElementsByClassName('sqs-block-code');
  if (sqsBlockCode) {
    sqsBlockCode.forEach(blockCode => {
      blockCode.parentNode.style.padding = "0";
      console.log(blockCode);
    })
  }
}


// setTimeout(function() {

// }, 2000);


