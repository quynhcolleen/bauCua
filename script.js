function roll() {
  const xucXac = document.querySelectorAll("xucXac");
  const images = [
    "./1.png",
    "./2.png",
    "./3.png",
    "./4.png",
    "./5.png",
    "./6.png"
  ];
  const values = [];
  const hoiCham = document.getElementById("hoiCham");
  hoiCham.style.visibility = 'hidden';
  let imageTags = '';
  for (let i = 0; i < 3; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    imageTags += `<img src="${images[value - 1]}">`;
  }

  xucXac.innerHTML = imageTags;
}
function increment(id) {
  const input = document.getElementById('chonGiong-' + id);
  input.value = parseInt(input.value) + 1;
}

function decrement(id) {
  const input = document.getElementById('chonGiong-' + id);
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
}