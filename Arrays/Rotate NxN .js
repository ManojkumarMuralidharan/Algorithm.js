function printMatrix(matrix, n) {
    matrix.map(function(element) {
        var row = '';
        element.map(function(inner_element) {
            row = row + "  " + inner_element;
        });
        console.log(row);
    });
}

function rotateMatrix(matrix, n) {
    var n, layers;
    // Identify the layers
    if (n === 1) {
        return matrix;
    }

    for (layers = 0; layers < n / 2; layers++) {
        var first, last, inner_loop;
        //calculate the first and the last element
        first = layers;
        last = n - layers - 1;
        //iterate from first to last and swap
        for (inner_loop = first; inner_loop < last; inner_loop++) {
            //save the top
            //Offset will be used when we are bactracking from the last element, 
            //using index inner_loop we can't backtrack the # of places
            var offset = inner_loop - first;

            var temp = matrix[first][inner_loop]; //last is not used, so we don;t use offset
            //swap top with bot
            matrix[first][inner_loop] = matrix[last - offset][first]; //last is used, so we use offset as we nned to backtrack
            //swap bot with right
            matrix[last - offset][first] = matrix[last][last - offset]; //last is used, so we use offset as we nned to backtrac
            //swap right with left
            matrix[last][last - offset] = matrix[inner_loop][last]; //last is used, so we use offset as we nned to backtrac
            //swap left with top
            matrix[inner_loop][last] = temp; //last is not used, so we don;t use offset
        }
    }
    //printMatrix(matrix);
    return matrix;
}

(function unitTest() {
    var input = [
        [1, 8, 5, 6, 7],
        [3, 4, 1, 1, 6],
        [2, 6, 3, 2, 3],
        [7, 3, 2, 5, 4],
        [8, 2, 8, 2, 5]
    ];

    var output = [
        [8, 7, 2, 3, 1],
        [2, 3, 6, 4, 8],
        [8, 2, 3, 1, 5],
        [2, 5, 2, 1, 6],
        [5, 4, 3, 6, 7]
    ];

    if (isEqual(rotateMatrix(input, 5), output)) {
        console.log('pass');
    }
})();

//Comparing two dimensional arrays 
// You cannot compare 2D arrays like array1 == array2 in javascript 
function isEqual(array1, array2) {
    return (array1.join('-') == array2.join('-'));
}