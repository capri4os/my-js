var chessDiv = document.querySelector("div.chess-table");
var board = document.createElement("table");
chessDiv.appendChild(board);
board.className = "chess";

for (i = 0; i < 10; i++) {
    var row = document.createElement("tr");
    board.appendChild(row);
    row.className = "chess-row";
    row.setAttribute("id", i);
    for (j = 0; j < 10; j++) {
        var cell = document.createElement("td");
        row.appendChild(cell);
        cell.className = "chess-cell";
        cell.setAttribute("id", j);
    }
}

// выбрать первую строку, 
//в ней ячейки со вторую по девятую, 
//проставить буквы от a до h;
// перевернуть буквы на 90 градусов

for (j = 1; j < 9; j++) {
    var textRow = document.querySelectorAll("tr td")[j];
    textRow.innerHTML = j;
}

// выбрать последнюю строку, в ней ячейки со вторую по девятую, проставить буквы от a до h


// выбрать первые ячейки в каждой строке, начиная со второй ячейки, проставить цифры в порядке убывания от 8 до 1

// выбрать последние ячейки в каждой строке, начиная со второй ячейки, проставить цифры в порядке убывания от 8 до 1; перевернуть буквы на 90 градусов

// во вторую и восьмую строки проставить буквы / значки шахматных фигур

// в третью и девятую строку проставить буквы / значки пешек

// стилизовать ячейки:
// в каждой четной строке чередование белых и черных клеток, начиная со второй
// в каждой нечетной строке чередование черных и белых клеток, начиная со второй
