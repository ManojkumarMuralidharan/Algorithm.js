The "Sudoku Solver" Problem

Write the function sudokuSolve that checks whether a given sudoku board (i.e. sudoku puzzle) is solvable. If so, the function will returns True. Otherwise (i.e. there is no valid solution to the given sudoku board), returns False.

In sudoku, the objective is to fill a 9x9 board with digits so that each column, each row, and each of the nine 3x3 sub-boards that compose the board contains all of the digits from 1 to 9. The board setter provides a partially completed board, which for a well-posed board has a unique solution. As explained above, for this problem, it suffices to calculate whether a given sudoku board has a solution. No need to return the actual numbers that make up a solution.

A sudoku board is represented in a two dimensional 9x9 array with the numbers 1,2,...,9 and blank spaces, and the function should fill the blank spaces with numbers such that the following rules apply:

In every row of the array, all numbers 1,2,...,9 appear exactly once.
In every column of the array, all numbers 1,2,...,9 appear exactly once.
In every 3x3 sub-board that is illustrated below, all numbers 1,2,...,9 appear exactly once.
A solved sudoku is a board with no blank spaces, i.e. all blank spaces are filled with numbers that abide to the constraints above. If the function succeeds in solving the sudoku board, it'll return true (false, otherwise).

Example (more examples can be found here):

Unsolved Board
A typical Sudoku board setter	 	Solved Board
The same board with solution numbers marked in red
Write a readable an efficient code, explain how it is built and why you chose to build it that way.


src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Sudoku-by-L2G-20050714.svg"


Web Technologies 
Application Framework
Client side libraries Tools Mobile Technologies




Web Technologies:
  JavaScript (ES5, ES6), HTML, CSS, AJAX, REST
Application Framework: 
   Express, Angular, Backbone, React, Thinky (ORM)
Client side libraries:
  jQuery, lodash, Underscore, Modernizr, require.js
Tools:  
  grunt, gulp, webpack, stash, git, Jenkins, Firebase, Chrome dev tools, node.js 
Mobile Technologies: 
  Android, Nativescript


