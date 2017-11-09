document.addEventListener('marker-shown', function(e) {
  document.getElementById('message').style.display = 'none';
});

document.addEventListener('marker-hidden', function(e) {
  document.getElementById('message').style.display = 'block';
});
