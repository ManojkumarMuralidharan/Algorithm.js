// Write an algorithm such that if an element in an MXN matix is 0, 
// its entire row and coloumn are set to 0

function ZeroMatrix(matrix) {
    var locationsToChange = {};

    //iterate over rows
    matrix.map(function(row_element, row_index) {
        //iterate over cols in a row
        row_element.map(function(indvidual_element, col_index) {
            // If a current element is 0, add its corresponsing rows and cols to hash
            // Using hash avoids duplicates
            if (indvidual_element === 0) {
                var start = 0;
                for (cols = 0; cols < row_element.length; cols++) {
                    locationsToChange[row_index + ',' + cols] = '';
                }
                for (row = 0; row < matrix.length; row++) {
                    locationsToChange[row + ',' + col_index] = '';
                }

            }

        });
    });

    for (key in locationsToChange) {
        var row = key.split(',')[0];
        var cols = key.split(',')[1];
        matrix[row][cols] = 0;
    }

    return matrix;
}


(function unitTest() {
    var input = [
        [1, 2, 0, 3],
        [4, 5, 6, 7],
        [0, 2, 7, 9]
    ];

    var output = [
        [0, 0, 0, 0],
        [0, 5, 0, 7],
        [0, 0, 0, 0]
    ];


    if (isEqual(ZeroMatrix(input), output)) {
        console.log('pass');
    } else {
        console.log('fail12');
    }

})();

// Comparing two dimensional arrays 
// You cannot compare 2D arrays like array1 == array2 in javascript 
function isEqual(array1, array2) {
    return (array1.join('-') == array2.join('-'));
}