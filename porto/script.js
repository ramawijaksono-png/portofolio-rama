// navigation + panel switch + keyboard support
const buttons = document.querySelectorAll('.nav-btn');
const panels = document.querySelectorAll('.panel');

function showPanel(id){
  // buttons
  buttons.forEach(b => b.classList.toggle('active', b.dataset.target === id));
  // panels
  panels.forEach(p => p.classList.toggle('active', p.id === id));
  // focus the panel for accessibility
  const target = document.getElementById(id);
  if(target) target.focus();
}

// click behavior
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    showPanel(btn.dataset.target);
  });
});

// support Left/Right arrows to change panels
let order = Array.from(panels).map(p => p.id);
let currentIndex = order.indexOf(document.querySelector('.panel.active')?.id || 'home');

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowRight' || e.key === 'ArrowDown'){
    currentIndex = (currentIndex + 1) % order.length;
    showPanel(order[currentIndex]);
  } else if(e.key === 'ArrowLeft' || e.key === 'ArrowUp'){
    currentIndex = (currentIndex - 1 + order.length) % order.length;
    showPanel(order[currentIndex]);
  }
});
