const gridSquare = document.getElementById('container');
const inputStorageID = "userInputStorage";
function getUserInput() {
    let userInput = prompt("Please enter grid sizes in numerical values(eg: 16 16 or 5 5 etc)").split(" ");
    localStorage.setItem(inputStorageID, JSON.stringify(userInput));
    return userInput;
}

function gameInit(userInput) {
    createGrid(userInput[0], userInput[1]);
    const cells = document.querySelectorAll('.gridCell');
    cells.forEach((gridCell) => {
        gridCell.addEventListener('mouseover', function() {     
            gridCell.style.backgroundColor = "orange";
        });
    })
}

function clearColor() {
    const cells = document.querySelectorAll('.gridCell');
    cells.forEach((gridCell) => {
        gridCell.style.backgroundColor = "";
    })
}

function resetGame() {
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
const loadfromStorage = () => {
    let userInputFromStorage = JSON.parse(localStorage.getItem(inputStorageID));
    if (userInputFromStorage != null) {
        const user_input = userInputFromStorage;
        gameInit(user_input);
    } else { gameInit(getUserInput()) };
    
}

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function() {
    clearColor();
    resetGame();
    loadfromStorage();
});

const newGameBtn = document.getElementById('new-game');
newGameBtn.addEventListener('click', function() { 
    gameInit(getUserInput());
});

clearBtn.click()