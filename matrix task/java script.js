
let matrix;
let rows = 3;
let cols = 3;

onload = () => {
    matrix = document.getElementById("matrix");
    createMatrix();
}

createMatrix = () => {
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < cols; j++) {
            let col = document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);
        }
        matrix.appendChild(row);
    }
}

paintMainDiagonal = () => {
    for (let i = 0; i < rows; i++) {
        matrix.children[i].children[i].classList.add("background");
    }
}

paintSideDiagonal = () => {
    for (let i = 0; i < rows; i++) {
        matrix.children[i].children[rows - 1 - i].classList.add("background");
    }
}

paintDiagonals = () => {
    reset();
    paintMainDiagonal();
    paintSideDiagonal();
}

paintBorder = () => {
    reset();
    for (let i = 0; i < rows; i++) {
        matrix.children[0].children[i].classList.add("background"); // first row
        matrix.children[rows - 1].children[i].classList.add("background"); // last row
        matrix.children[i].children[0].classList.add("background"); // first col
        matrix.children[i].children[rows - 1].classList.add("background"); // last col
    }
}

paintUpperPart = () => {
    reset();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j + i < rows; j++) {
            matrix.children[i].children[j].classList.add("background");

        }
    }
}

paintDownPart = () => {
    reset();
    for (let i = 0; i < rows; i++) {
        for (let j = rows - 1; j + i >= rows - 1; j--) {
            matrix.children[i].children[j].classList.add("background");

        }
    }
}

reset = () => {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrix.children[i].children[j].classList.remove("background");
        }
    }
}