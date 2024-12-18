function openModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show');

  setTimeout(() => {
    modal.classList.add('hidden');
  }, 500);
}

document.querySelectorAll('.modal-link').forEach(link => {
  link.addEventListener('click', () => {
    closeModal();
  });
});

window.openModal = openModal;
window.closeModal = closeModal;
