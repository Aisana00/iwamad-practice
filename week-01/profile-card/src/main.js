const likeBtn = document.querySelector('#like-btn');
const card = document.querySelector('.card');

likeBtn.addEventListener('click', function () {
  card.classList.toggle('liked');
  if (card.classList.contains('liked')) {
    likeBtn.textContent = '❤️ Liked';
  } else {
    likeBtn.textContent = '🤍 Like';
  }
});