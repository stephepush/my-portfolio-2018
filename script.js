var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    this.classList.toggle('is-open');
    var content = this.nextElementSibling;
    console.log(content);
    if (content.style.maxHeight) {
      // accordion is open, you need to close it
      content.style.maxHeight = null;  
    } else {
      // accordion is closed
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');
