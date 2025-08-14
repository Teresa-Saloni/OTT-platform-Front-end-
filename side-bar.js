const openPanelBtn = document.getElementById('openPanel');
const closePanelBtn = document.getElementById('closePanel');
const panel = document.getElementById('panel');
const overlay = document.getElementById('overlay');

openPanelBtn.addEventListener('click', openPanel);
closePanelBtn.addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);

function openPanel() {
  panel.style.left = '0';
  overlay.style.display = 'block';
}

function closePanel() {
  panel.style.left = '-300px';
  overlay.style.display = 'none';
}