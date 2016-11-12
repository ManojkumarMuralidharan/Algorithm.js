// Given a node n in a binary search tree, explain and code the most efficient way to find the successor of n.
// Analyze the runtime complexity of your solution.

/* i/p is node n
/* o/p is successor node n
*/
function BST_Successor(node) {
    var given_node = node;
    if (node.right) {
        //find the lowest child on the right;
        return find_leftmostchild(node.right);
    } else {
        node = node.parent;
        while (node.parent != null) {
            if (node.right === given_node) {
                given_node = node;
                node = node.parent;
            } else if (node.left === given_node) {
                return node;
            }
        }
        return null;
    }

}

function find_leftmostchild(node) {
    //Hit the leaf node, return node
    if (!node.left) {
        return node.value;
    } else {
        return find_leftmostchild(node.left);
    }
}

function Node(value) {
    this.value = value;
    this.left = this.right = undefined;
}

(function unitTest() {
    var Tree = new Node(15);
    var output_1 = 1;
    Tree.left = new Node(9);
    Tree.right = new Node(21);
    Tree.left.left = new Node(7);
    Tree.left.left.left = new Node(5);
    Tree.left.left.left.left = new Node(1);
    if (find_leftmostchild(Tree) === output_1) {
        console.log('passed');
    } else {
        console.log('failed');
    }
})();




// Thoughts
//   binary search tree
//   givemn
//   // node n
//      -> This has a link to its parent  // if its a root then no parent
//      -> and its children ( left and the right )


//          21
//     7         52
//   5    12     
// 1  6 11  15

// if n = 5 // o/p = 6
// if n = 6  // o/p = 7


// // brute force
//    copy all the elements in the bst into an array // do an inorder traversal
//    [1,5,6,7,12,15]
//    -> 5 the next element is my answer 
//    run time - O( n ) vs o( n log n) => o( n log n)
//    space - o( n )

// // recursive  - do it iterative 

//    //already given  a node
//    //if the node has a right subtree
//       then find the lowest value child in that right subtree
//    //if there is no right subtree
//       then go one level up
//       check if the given node is the right child of the current node
//                then go more level up
//             else if given node is the left child of the current node
//                then return the current node