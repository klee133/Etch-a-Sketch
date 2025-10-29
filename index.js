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

function hover(e) {
    e.target.style.backgroundColor = "darkgray";
}

createGrid(16);

const squares = Array.from(document.getElementsByClassName("square"));
squares.forEach((square) => {
    square.addEventListener("mouseover", hover);
});
