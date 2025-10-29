const container = document.querySelector(".container");

function createGrid(num) {
    for(let i = 0; i < num; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < num; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function newNumGrid() {
    let num = prompt("How many squares per side for this new grid? (Cannot be more than 100.)");
    while(num > 100) {
        let num = prompt("Number is more than 100. Please enter a number less than or equal to 100.");
    }
    let rows = Array.from(document.getElementsByClassName("row"));
    rows.forEach((row) => row.remove());
    createGrid(num);
    addHover();
}

function hover(e) {
    e.target.style.backgroundColor = "darkgray";
}

function addHover() {
    const squares = Array.from(document.getElementsByClassName("square"));
    squares.forEach((square) => {
        square.addEventListener("mouseenter", hover);
    });
}

createGrid(16);
addHover();