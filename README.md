Mimicking_google-sheet
Overview

This project is a web-based spreadsheet application similar to Google Sheets. It allows users to input, format, and manipulate data within a tabular structure. Users can perform basic spreadsheet operations such as formatting text, using formulas, adding/removing rows and columns, removing duplicates, and finding & replacing values.

Features

Basic Spreadsheet Structure:

15 rows and 10 columns by default.

Column headers (A, B, C, ...) and row numbers (1, 2, 3, ...).

Each cell is an input field allowing user input.

Formula Bar:

Allows users to input formulas (e.g., =5+3).

Uses JavaScript's eval() to compute formula values.

Text Formatting:

Bold and Italic styling for selected cells.

Adjustable font size and text color.

Spreadsheet Operations:

Add/Delete rows and columns dynamically.

Remove duplicate values from cells.

Find and replace text within the sheet.

Files

index.html: The main HTML file containing the structure of the spreadsheet and toolbar.

styles.css: (Not provided, but should include styling for the spreadsheet and UI elements).

script.js: JavaScript file handling all spreadsheet functionalities.

Setup and Usage

Clone or download the repository.

Open index.html in a web browser.

Use the toolbar for formatting text.

Enter formulas in cells using = (e.g., =5+3).

Use toolbar buttons for row/column management, duplicate removal, and find & replace.

Functions Breakdown

Creating the Spreadsheet

createSpreadsheet(): Initializes the table structure and assigns event listeners.

Handling Data Input

updateData(event): Updates stored data when user inputs values.

updateFormula(): Updates cell values when formula bar is edited.

Formatting Functions

setBold(), setItalic(): Apply text formatting.

setFontSize(), setTextColor(): Adjust font size and color.

Additional Features

removeDuplicates(): Clears duplicate values.

findAndReplace(): Allows text replacement in cells.

Future Enhancements

Improve formula parsing to support cell references.

Add persistent data storage.

Implement more spreadsheet functions (SUM, AVG, etc.).

Author

Developed as a web-based spreadsheet clone inspired by Google Sheets.

pip uninstall code
