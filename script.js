document.getElementById('yes-btn').addEventListener('click', function() {
  alert('Sabia que aceptarias ¿Cuando quieres ir?');
});

document.getElementById('no-btn').addEventListener('click', function() {
  moveNoButton(); // Mueve el botón "No" cada vez que se hace clic en él
});

function moveNoButton() {
  var button = document.getElementById('no-btn');
  button.style.position = 'absolute';
  button.style.left = Math.random() * (window.innerWidth - button.offsetWidth) + 'px';
  button.style.top = Math.random() * (window.innerHeight - button.offsetHeight) + 'px';
}