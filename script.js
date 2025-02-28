const rows = 15;
const cols = 10;
const spreadsheet = document.getElementById("spreadsheet");
const formulaBar = document.getElementById("formulaBar");

let selectedCell = null;
let data = {};

function createSpreadsheet() {
  for (let i = 0; i <= rows; i++) {
    let row = spreadsheet.insertRow();
    for (let j = 0; j <= cols; j++) {
      let cell = row.insertCell();
      if (i === 0 && j > 0) {
        cell.innerText = String.fromCharCode(64 + j); // Column Headers (A, B, C...)
      } else if (j === 0 && i > 0) {
        cell.innerText = i; // Row Numbers
      } else if (i > 0 && j > 0) {
        let input = document.createElement("input");
        input.setAttribute("data-row", i);
        input.setAttribute("data-col", j);
        input.addEventListener("focus", () => (selectedCell = input));
        input.addEventListener("input", updateData);
        cell.appendChild(input);
      }
    }
  }
}

function updateData(event) {
  let input = event.target;
  let row = input.dataset.row;
  let col = input.dataset.col;
  let value = input.value.trim();

  if (value.startsWith("=")) {
    try {
      let formula = value.substring(1);
      input.value = eval(formula);
    } catch {
      input.value = "ERROR";
    }
  }

  data[`${row}-${col}`] = input.value;
}

function updateFormula() {
  if (selectedCell) {
    selectedCell.value = formulaBar.value;
    updateData({ target: selectedCell });
  }
}

/* Formatting Functions */
function setBold() {
  if (selectedCell) selectedCell.style.fontWeight = "bold";
}

function setItalic() {
  if (selectedCell) selectedCell.style.fontStyle = "italic";
}

function setFontSize() {
  if (selectedCell) {
    let size = document.getElementById("fontSize").value;
    selectedCell.style.fontSize = size;
  }
}

function setTextColor() {
  if (selectedCell) {
    let color = document.getElementById("textColor").value;
    selectedCell.style.color = color;
  }
}

/* Remove Duplicates */
function removeDuplicates() {
  let values = new Set();
  document.querySelectorAll("input").forEach((input) => {
    if (values.has(input.value)) {
      input.value = "";
    } else {
      values.add(input.value);
    }
  });
}

/* Find and Replace */
function findAndReplace() {
  let findText = prompt("Find:");
  let replaceText = prompt("Replace with:");
  document.querySelectorAll("input").forEach((input) => {
    if (input.value.includes(findText)) {
      input.value = input.value.replace(new RegExp(findText, "g"), replaceText);
    }
  });
}

createSpreadsheet();
