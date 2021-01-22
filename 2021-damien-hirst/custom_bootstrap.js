console.log('custom_bootstrap.js triggered...');

// General page styling
const main = document.getElementsByTagName('main');
main[0].style.padding = "0";

// Custom code blocks
const sqsBlockCode = document.getElementsByClassName('sqs-block-code');
if (sqsBlockCode) {
  sqsBlockCode.forEach(blockCode => {
    console.log(blockCode);
    blockCode.parentNode.style.padding = "0";
  })
}
