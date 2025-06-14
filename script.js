// MOBILE MENU TOGGLE
const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// MODAL FUNCTIONALITY
const modal = document.querySelector('#modal');
const openModalButtons = document.querySelectorAll('.open-modal');
const closeModalButton = document.querySelector('.close-modal');

// Open modal
openModalButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
  });
});

// Close modal
closeModalButton.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Close modal when clicking outside modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

// READ MORE FUNCTIONALITY (only once inside DOMContentLoaded)
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const card = button.closest(".card");
      const moreContent = card.querySelector(".more-content");

      if (moreContent.style.display === "block") {
        moreContent.style.display = "none";
        button.textContent = "Read More";
      } else {
        moreContent.style.display = "block";
        button.textContent = "Read Less";
      }
    });
  });
});

// BLOG POST LOADING
function loadPost(id) {
  const post = blogPosts[id];
  if (post) {
    document.getElementById('post-content').innerHTML = `
      <h2>${post.title}</h2>
      ${post.content}
    `;
    showSection('details');
  }
}

function showSection(sectionId) {
  document.getElementById('home').classList.add('hidden');
  document.getElementById('details').classList.add('hidden');
  document.getElementById(sectionId).classList.remove('hidden');
}