// Print all possible paths from top left to bottom right of a mXn matrix
// The problem is to print all the possible paths from top left to bottom 
// right of a mXn matrix with the constraints that from each cell you can 
// either move only to right or down.
//        (or)
// 9.2. Imagine a robot sitting on the upper left corner of an X by Y grid. The
// robot can only move in two directions: right and down. How many possible
// paths are there for the robot to go from (0, 0) to (X, Y)?

// FOLLOW UP

// Imagine certain spots are "off limits", such that the robot cannot step on
// them. Design an algorithm to find a path for the robot from the top left to
// the bottom right.
var result = {};


function getPath(maze, row, cols) {
    if (row === 0 && cols === 0) {
        return true;
    } else if (row < 0 || cols < 0 || maze[row][cols] == -1) {
        return false;
    } else if (result[row + ',' + cols]) {
        return result[row + ',' + cols];
    } else {
        var left = getPath(maze, row - 1, cols);
        var down = getPath(maze, row, cols - 1);
        if (left || down) {
            result[row + ',' + cols] = true;
            return true;
        } else {
            return false;
        }

    }

}

(function unitTest() {
    var input = [
        [1, 2, 3],
        [4, -1, 6],
        [7, 8, 9]

    ];
    //var input = [
    //     [1, 2],
    //     [3, 4]
    // ];
    var row = 3;
    var col = 3;
    getPath(input, row - 1, col - 1);
    console.log(result);
})();