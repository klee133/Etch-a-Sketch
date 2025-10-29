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
    if(e.target.dataset.color === undefined) {
        let color = getRandomColor();
        e.target.dataset.color = color;
        e.target.style.backgroundColor = color;
        e.target.dataset.opacity = 0.1;
        e.target.style.opacity = "0.1";
    }else{
        let num = Number(e.target.dataset.opacity) + 0.1;
        e.target.dataset.opacity = num;
        e.target.style.opacity = num;
    }
}

function addHover() {
    const squares = Array.from(document.getElementsByClassName("square"));
    squares.forEach((square) => {
        square.addEventListener("mouseenter", hover);
    });
}

function getRandomColor() {
    let random = Math.floor(Math.random() * ((256*256*256) - 1));
    let randomHex = random.toString(16);
    if(randomHex.length < 6) {
        randomHex = "0" + randomHex;
    }
    return "#" + randomHex;
}

createGrid(16);
addHover();