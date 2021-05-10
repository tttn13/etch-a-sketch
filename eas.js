const gridSquare = document.getElementById('container');


function gameInit() {
    var userInput = prompt("Please enter grid sizes (eg: 16 16 or 13 13 etc)").split(" ");
    createGrid(userInput[0], userInput[1]);
    const cells = document.querySelectorAll('.gridCell');
    cells.forEach((gridCell) => {
        gridCell.addEventListener('mouseover', function() {     
            gridCell.style.backgroundColor = "orange";
        });
    })
}

function resetGame() {
    const cells = document.querySelectorAll('.gridCell');
    cells.forEach((gridCell) => {
        gridCell.style.backgroundColor = "";
    })
}

function clearDiv() {
    gridSquare.innerHTML = "";
}

function createGrid(gridWidth, gridHeight) {
    gridSquare.style.display = "grid";
    if ((gridWidth < 100) && (gridHeight < 100)) {
        gridSquare.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
        gridSquare.style.gridTemplateRows = `repeat(${gridHeight}, 1fr)`;
        for(let i = 0; i < gridWidth ; i++) {
            for(let x = 0; x<gridHeight; x++) {
                var div = document.createElement("div");
                div.className = "gridCell";
                gridSquare.appendChild(div);
            }
        }
    }
}

var clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function() {
    resetGame();
    clearDiv();
    gameInit();
});




