function LRUCache(size){
    var capacity;
    var queueHead = null;
    var hashMap = {};
    function Node(data){
        var value = data;
        var left = null, right =null;
    }
    function init(size){
        console.log('LRU Cache initialized with size:',size);
        capacity = size; 
    }
    function insertNewIntoHead(node){
        var temp = queueHead;
        queueHead = node;
        node.left = null;
        node.right = temp;
        temp.left = node;
    }
    function moveToHead(node){
        var temp = queueHead;
        if(node.left){
            node.left.right = node.right;
        }
        queueHead = node;
        queueHead.left = null;
        queueHead.right = temp;
        temp.left=queueHead;  
    }
    function get(){

    }
    function set(){
        
    }

    init(size);
    return {
        get : get,
        set : set,
        size : capacity
    }
};

var LRUCache1 = new LRUCache(10);


