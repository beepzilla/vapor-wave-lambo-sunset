/**
* Grid by Pavlovsk, some edits made.
* https://codepen.io/pavlovsk/pen/AXGYYv
**/
// Instead of writing HAML
function nJoin(n, fn) {
  return new Array(n)
    .join(' ')
    .split(' ')
    .map(typeof fn === 'function' ?
      fn : e => fn)
    .join('')
}

// Create <div></div> 320 times
var cells = nJoin(320, '<div></div>')
grid.innerHTML = cells



var audio = new Audio('https://a.tumblr.com/tumblr_oat8zhArMY1u1vzz5o1.mp3');
audio.oncanplay = function() {
  if (document.getElementById('sound').checked) {
    this.play();
  }
}
function myfunction(el) {    
  if (el.checked) {
    if (audio.readyState) {
      audio.play();
      audio.loop = true;
    } else {
      audio.load();
    }
  } else {
    audio.pause();
  }
}
