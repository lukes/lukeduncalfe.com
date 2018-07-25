const time = 2000;

const rgba = function() {
  const a = [];
  for (let i = 0; i < 3; i++ ) {
    a.push(Math.round(Math.random() * 255));
  }
  return 'rgba(' + a.join(',') + ', .3)';
};

(function setBodyBackground() {
  const body = document.getElementsByTagName('body')[0];
  body.style.backgroundColor = rgba();
  setTimeout(setBodyBackground, time);
})();

(function setTitleColor() {
  const h1 = document.getElementsByTagName('h1')[0];
  h1.style.color = rgba();
  setTimeout(setTitleColor, time);
})();

(function setTitleMargin() {
  const h1 = document.getElementsByTagName('h1')[0];
  const v = 1 - (Math.random() * 6);
  h1.style.letterSpacing = v + 'vw';
  setTimeout(setTitleMargin, time);
})();
