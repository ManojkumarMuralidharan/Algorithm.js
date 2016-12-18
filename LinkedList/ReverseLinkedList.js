//http://javarevisited.blogspot.com/2013/03/top-15-data-structures-algorithm-interview-questions-answers-java-programming.html
// Given pointer to the head node of a linked list, the task is to reverse the linked list.


// Examples:

// Input : Head of following linked list  
//        1->2->3->4->NULL
// Output : Linked list should be changed to,
//        4->3->2->1->NULL

// Input : Head of following linked list  
//        1->2->3->4->5->NULL
// Output : Linked list should be changed to,
//        5->4->3->2->1->NULL

// Input : NULL
// Output : NULL

// Input  : 1->NULL
// Output : 1->NULL

function Node(value) {
    var value, next;
    this.value = value;
    this.next = undefined;
}

function createLinkedList(listOfValues) {
    var linkedList;
    var currentNode;
    listOfValues.forEach(function(element) {
        var newNode = new Node(element);
        if (linkedList) {
            currentNode.next = newNode;
            currentNode = newNode;
        } else {
            linkedList = newNode;
            currentNode = linkedList;
        }

    });
    return linkedList;
}

function printLinkedList(root) {
    var listString = '';
    while (root) {
        listString += root.next === undefined ? root.value : root.value + '->';
        root = root.next;
    }
    console.log(listString);
};


function reverseLinkedList(root) {
    //Take a three pointer approa
    var prev, current = root,
        next;

    while (current.next) {
        //store the next pointer
        next = current.next;
        //Update the next pointer to point backward
        current.next = prev;
        //update prev pointer
        prev = current;
        //update current pointer
        current = next;
    }
    current.next = prev;
    return current;
}

printLinkedList(reverseLinkedList(createLinkedList([1, 2, 3, 4, 5, 6, 7])));