document.addEventListener('marker-shown', function(e) {
  document.getElementById('js-message').style.display = 'none';
});

document.addEventListener('marker-hidden', function(e) {
  document.getElementById('js-message').style.display = 'block';
});
