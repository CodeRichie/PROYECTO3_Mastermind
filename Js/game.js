
const colors = ['brown', 'rgb(87, 185, 48)', 'rgb(37, 105, 194)', 'rgb(162, 48, 185)'];
let currentIndex = 0;
const savedColorOrder = JSON.parse(localStorage.getItem('colorOrder'));
let colorOrder = savedColorOrder || [];
const winnerMessage = document.getElementById('winnerMessage');
const board = document.getElementById('container');

function createDiv(rowId, boxIndex) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.onclick = function() {
        currentIndex = (currentIndex + 1) % colors.length;
        this.style.backgroundColor = colors[currentIndex];

        const clickedColor = colors[currentIndex];
        const savedColor = colorOrder[boxIndex];
        if (clickedColor === savedColor) {
          const circles = document.querySelectorAll(`.circle[data-row-id="${rowId}"][data-circle-index="${boxIndex}"]`);
          circles.forEach(circle => {
            const div = document.createElement('div');
            circle.appendChild(div);
            div.classList.add('check');
          });
        }else{
            const circles = document.querySelectorAll(`.circle[data-row-id="${rowId}"][data-circle-index="${boxIndex}"]`);
            circles.forEach(circle => {
                circle.innerHTML = "";
            });
        }   
        checkWinner(rowId);
    };
    return div;
    }

    function createRow(rowId) {
      const row = document.createElement('div');
      row.classList.add('row');
      if (!colorOrder[rowId]) {
          colorOrder[rowId] = [];
        }    
      for (let i = 0; i < 4; i++) {
        const box = createDiv(rowId, i);
        row.appendChild(box);
        box.dataset.rowId = rowId;
        const circle = document.createElement('div');
        circle.classList.add('circle');
        row.appendChild(circle);
        circle.dataset.rowId = rowId;
        circle.dataset.circleIndex = i;
      }
      return row;
    }

function createRows() {
    const container = document.getElementById('container');
    for (let i = 0; i < 10; i++) {
      const row = createRow(i);
      container.appendChild(row);
    }
}

  // Function to check if all circles in a row are matched
  function checkWinner(rowId) {
    const allMatched = Array.from(document.querySelectorAll(`.circle[data-row-id="${rowId}"]`)).every(circle => circle.firstElementChild?.classList.contains('check'));
    console.log("🚀 ~ checkWinner ~ allMatched:", allMatched)
    if (allMatched) {
      winnerMessage.style.display = 'block';
      board.style.display = 'none';
      const itemName = localStorage.getItem('nombreJugador');
      winnerMessage.textContent = `Congratulations! You've won ${itemName}!`;
    }
  }

createRows();