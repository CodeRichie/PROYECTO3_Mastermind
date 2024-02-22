const colors = ['brown', 'rgb(87, 185, 48)', 'rgb(37, 105, 194)', 'rgb(162, 48, 185)'];
let currentIndex = 0;
let colorOrder = [];

function createDiv(color) {
    
    const div = document.createElement('div');
    div.classList.add('boxGeneric');
    div.style.backgroundColor = color;
    div.onclick = function() {
        currentIndex = (currentIndex + 1) % colors.length;
        this.style.backgroundColor = colors[currentIndex];
        colorOrder = Array.from(document.querySelectorAll('.boxGeneric')).map(box => box.style.backgroundColor);
        localStorage.setItem('colorOrder', JSON.stringify(colorOrder));
      };
      return div;  
    }

function createAllDivs() {
  const colorOrder = JSON.parse(localStorage.getItem('colorOrder'));
    const container = document.getElementById('select');
    const colorsToPrint =   colorOrder ?? Array.from({ length: 4 });
    colorsToPrint.forEach(color => {
        const div = createDiv(color);
        container.appendChild(div);
    });
  }
    
createAllDivs();

const renderButton = document.getElementById('jugar');

renderButton.addEventListener('click', function() {
  const colorOrder = JSON.parse(localStorage.getItem('colorOrder'));
  if (!colorOrder) {
    alert('Please complete the color sequence before rendering another page.');
  }

  if (colorOrder ) {
    if (colorOrder.some(color => color === '')) {
      alert('Please complete the color sequence before rendering another page.');
    }
    if (colorOrder.every(color => color !== '')) {  
      window.location.href = 'Juego.html'; 
    }
  }
});



