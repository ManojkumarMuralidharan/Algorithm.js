// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20


// layerLength = rows / 2 = 2

// outer loop start at layer 0...1(layerlenght - 1)

// loop1 - print the(1....5)
// row = layer;
// 0
// col = layer;
// 0
// starting point(row, col)(0, 0)
// loop till col = 4
// 0, 0 0, 1 0, 2 0, 3 0, 4

// loop2 - print the(10...20)
// row = row + 1;
// col = col
// starting point(row, col)(1, 4)
// loop till row = 3
// 1, 4 2, 4 3, 4

//outer layers - 1 2 3 4 5 10 15 20 19 18 17 16 11 6    
//inner layers - 7 8 9 14 13 12   
function MatrixSpiralPrint(input) {
    var result = [];

    var layers = input.length / 2; //2
    var rows = input.length; //4
    var cols = input[0].length; //5

    for (var layerCount = 0; layerCount < layers; layerCount++) { //0,1

        var rowStarting = layerCount; //0 |  1
        var colStarting = layerCount; //0 |  1

        //arr[0][0]
        //\\ arr[1][1]

        for (; colStarting < cols; colStarting++) {
            result.push(input[rowStarting][colStarting]);
        }
        //arr[0][0] 1
        //arr[0][1] 2 
        //arr[0][2] 3 
        //arr[0][3] 4
        //arr[0][4] 5
        //   [0][5]- 5<5 -> fails


        colStarting--;
        // 12345 arr(0,4)
        rowStarting++;
        // 12345 arr(1,4)

        for (; rowStarting < rows; rowStarting++) {
            result.push(input[rowStarting][colStarting]);
        }
        // arr[1][4] 10
        // arr[2][4] 15
        // arr[3][4] 20
        //    4<4 -> fails
        rowStarting--;
        //arr(3,4)

        colStarting--;
        //arr(3,3)

        for (; colStarting >= 0; colStarting--) {
            result.push(input[rowStarting][colStarting]);
        }
        //arr[3][3] 19
        //arr[3][2] 18         
        //arr[3][1] 17
        //arr[3][0] 16
        //    [3] [-1] -> fails 
        colStarting++;
        //arr[3][0]

        rowStarting--;
        //arr[2][0]

        for (; rowStarting > 0; rowStarting--) {
            result.push(input[rowStarting][colStarting]);
        }
        //arr[2][0] 11
        //arr[1][0] 6
        //     0>0 -> fails


    }

    return result;
}


input = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

console.log(MatrixSpiralPrint(input));