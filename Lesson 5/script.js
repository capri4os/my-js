var letters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];
var blackPieces1 = ['8', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', '8'];
var blackPieces2 = ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '7'];
var whitePieces1 = ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '1'];
var whitePieces2 = ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'];

var chessDiv = document.querySelector("div.chess-table");
var board = document.createElement("table");
chessDiv.appendChild(board);
board.className = "chess";

for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) {
    var row = board.insertRow(i);
    row.className = "chess-row";
    for (var j = 0; j < 10; j++) {
        var cell = row.insertCell(j);
        cell.className = "chess-cell";
        switch (i) {
            case 0:
                cell.innerText = letters[j];
                break;
            case 1:
                cell.innerHTML = blackPieces1[j];
                break;
            case 2:
                cell.innerHTML = blackPieces2[j];
                break;
            case 7:
                cell.innerHTML = whitePieces2[j];
                break;
            case 8:
                cell.innerHTML = whitePieces1[j];
                break;
            case 9:
                cell.innerText = letters[j];
                break;
            default:
                if (j == 0 || j == 9) {
                    cell.innerHTML = a;
                }
                break;
        }
    }
}