'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.querySelectorAll('.show-modal').forEach(btn => {
  btn.addEventListener('click', showModal);
});

document.querySelector('.close-modal').addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  const close = e.key === 'Escape';
  const isShown = !modal.classList.contains('hidden');
  if (close && isShown) {
    closeModal();
  }
});
