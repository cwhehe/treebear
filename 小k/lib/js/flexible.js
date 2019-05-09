; (function (win, doc) {
  var docEl = doc.documentElement, resizeEvent = "orientationchange" in window ? "orientationchange" : "resize", resizeHandle = function () { var WIDTH = docEl.clientWidth; var size = 100 * (WIDTH / 750); docEl.style.fontSize = size + "px"; }
  window.addEventListener(resizeEvent, resizeHandle, false); resizeHandle();
}(window, document))
console.log('resize')