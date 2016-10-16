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
    function get(){

    }
    function set(){

    }
    init();
    return {
        get : get,
        set : set,
        size : capacity
    }
};

var LRUCache1 = new LRUCache(10);


