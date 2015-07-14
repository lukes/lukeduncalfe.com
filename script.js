var time = 2000;

var rgba = function() {
  var a = [];
  for (var i = 0; i < 3; i++ ) {
    a.push(Math.round(Math.random() * 255));
  }
  return 'rgba(' + a.join(',') + ', .3)';
};

(function setBodyBackground() {
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundColor = rgba();
  setTimeout(setBodyBackground, time);
})();

(function setTitleColor() {
  var h1 = document.getElementsByTagName('h1')[0];
  h1.style.color = rgba();
  setTimeout(setTitleColor, time);
})();

(function setTitleMargin() {
  var h1 = document.getElementsByTagName('h1')[0];
  var v = 0 - (Math.random() * 7);
  h1.style.letterSpacing = v + 'vw';
  setTimeout(setTitleMargin, time);
})();
