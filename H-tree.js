// Construct an H-tree, given its center (x and y coordinates), starting_length and depth. 
// You can assume that you have a drawLine method. 

// As a reminder, this is an example of an H-tree.

// How to construct an H-tree?

// An H-tree can be constructed by starting with a line segment of arbitrary length, drawing two segments of the same length at right angles to the first through its endpoints, and continuing in the same vein, reducing (dividing) the length of the line segments drawn at each stage by √2.


// H - tree https: //upload.wikimedia.org/wikipedia/commons/a/af/H_tree.svg

function constructHTree(cords, length, depth) {

        var x = cords.x,
            y = cords.y;
        //Base condition 
        if (depth === 0) {
            //do nothing
            return;
        } else {
            //calculate the 4 co-ordinates;
            var x0 = x - length / 2;
            var x1 = x + length / 2;
            var y0 = y - length / 2;
            var y1 = y + length / 2;

            var topLeft = { 'x': x0, 'y': y1 },
                topRight = { 'x': x1, 'y': y1 },
                botLeft = { 'x': x0, 'y': y0 },
                botRight = { 'x': x0, 'y': y1 };
            //Draw three lines   
            drawLine(x0, y, x1, y);
            drawLine(x0, y0, x0, y1);
            drawLine(x1, 0, x1, y1);

            drawHtree(topLeft, length / Math.sqrt(2), depth - 1)

            drawHtree(topRight, length / Math.sqrt(2), depth - 1);

            drawHtree(botLeft, length / Math.sqrt(2), depth - 1);

            drawHtree(botRight, length / Math.sqrt(2), depth - 1);
        }

    }


//Thoughts
//Base condition:
//if(depth===0){
//stop recursion
//     }else{
//draw the H-tree for the current set of params   
//    [top right,top left,bot rt, bot left] =  Draw Htree( );
//do recurions on the above values in the arary
// when I compelte a H tree , reduce by depth by 1
// After drawing my frist H tree
// I get 
// the top left,constuctHtree( (x1,y1), length/sqrt(2) , depth -1 )
//     top right(x2,y2)
//      bottom left(x3,y3)
//     bottom right(x4,y4)
//     }

//   draw Line( {x,y}, {x1,y1}){
//     //this is given

//   }


//  x,y => center


//  [length/2,length]    |        [length,length]
//                       |
//  --------x/2----------(x,y)------
//                       |
//  [length/2,0]         |       [length,0]
//  draw a line is quivaluent to filling the array value to -
//              cols 0    1   2   3
//          rows
//            0      ||                  ||

//            1      |-    -   -   =  =  ||

//            2      ||                  ||

//            3      ||                  ||