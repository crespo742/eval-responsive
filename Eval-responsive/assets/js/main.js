const toggleButton = document.getElementById('toggle-btn');
const sideBar = document.getElementById('side-bar');
const main = document.getElementById('main');

toggleButton.addEventListener('click', show);

function show(){
  sideBar.classList.toggle('active');
}

// To remove the sidebar if we click on the main
// Pour enlever la sidebar si on clique sur le main
const content = document.querySelector('main');