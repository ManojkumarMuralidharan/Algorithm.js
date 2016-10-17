function LRUCache(size){
    var capacity;
    var currentQueueSize;
    var queueHead;
    var hashMap = {};
    var tail;
    function Node(key,value){
        this.key = key;
        this.value = value;
        this.left = null, this.right =null;
    }
    function init(size){
        console.log('LRU Cache initialized with size:',size);
        capacity = size; 
        currentQueueSize = 0;
    }
  
    function moveToHead(node){
        if(queueHead===undefined){
            queueHead = node;
            tail = node;
            return;
        }
        //If already in the front don't do anything
        if(queueHead===node){return;}
        //if not in the front of the queue
        var temp = queueHead;
        if(tail===node){
            tail = node.left;
        }
        if(node.left){
            var leftNode = node.left;
            leftNode.right = node.right;
        }
        if(node.right){
            var righttNode = node.right;
            righttNode.left = node.left;
        }
        //console.log('moving stuff from queueHead',queueHead);
        //console.log('moving stuff from temp',temp);
        node.right = temp;
        node.left = temp.left;
        temp.left = node;
        queueHead = node;
          
    }

    function get(key){
        if(hashMap[key]!==undefined){
            //read the value 
            hashMap[key].value;
            //also move it to the front of the queueHead
            //console.log('Getting node:',hashMap[key]);
            if(hashMap[key].right===undefined){
                tail = hashMap[key].left;
            }
            moveToHead(hashMap[key]);

            return hashMap[key].value;
        }else{
            return -1;
        }
    }
    function removeTail(){
        console.log('Tail is:',tail);
            if(tail===undefined){
                return;
            }else if(tail.left===null){
                hashMap[tail.key]=undefined;
                queueHead = undefined;
                tail = undefined;
            }else{
                hashMap[tail.key]=undefined;
                
                var lastBeforeTail = tail.left;
                //console.log('left of tails is ',lastBeforeTail);
                lastBeforeTail.right = undefined;
                tail = lastBeforeTail;
               // console.log('left of tails is ',lastBeforeTail);

            }
    }
    function set(key,value){
        
        //if the key already exist
        if(hashMap[key]!==undefined){
           var node = hashMap[key];
           //console.log('Node : ',node,'retrived');
           moveToHead(node);
           node.value=value; 
           return;
        } 
        //else if the key doesnt exist
        //check if we are at capacity
        if(capacity === currentQueueSize){
            //we are at size destroy one
           console.log('Capacity Exceeded :');
            removeTail();
            currentQueueSize--;
           // console.log('After removing :');
            printSize();
        }

        if(hashMap[key]===undefined){
            var node = new Node(key,value);
           // console.log('New node :',node,' created');
            moveToHead(node);
            hashMap[key] = node;
            currentQueueSize++;
        }
        
    }
    function printSize(){
        //console.log('currentQueueSize:',currentQueueSize);
        var temphead = queueHead; 
        var printString = '';
        //console.log('-----Queue------');
        while(temphead!=null){
            printString = printString + '| Key ['+temphead.key+']:'+temphead.value+', left:'+temphead.left+', right:'+temphead.right+' | --->';
            // if(temphead.left){
            //     printString = printString + 'left key:' + temphead.left.key;
            // }
            // if(temphead.right){
            //     printString = printString + 'right key:' + temphead.right.key;
            // }
            temphead=temphead.right;
        }
        //console.log('QueueHead --->'+printString+'Null');
        
        //console.log('-----HashMap------');
    //    for(var i in hashMap){
    //        console.log('key:',i,'value:',hashMap[i]);
    //    }
     //  console.log('tail is ',tail);
    }
    function getTail(){
        return tail;
    }

    init(size);
    return {
        get : get,
        set : set,
        printSize : printSize,
        tail : getTail,
        size : capacity
    }
};

var LRUCache1 = new LRUCache(2);

// LRUCache1.set(2,1);
// LRUCache1.printSize();
// console.log('tail is :',LRUCache1.tail());
// console.log('-------');

// LRUCache1.set(1,1);
// LRUCache1.printSize();
// //console.log('tail is :',LRUCache1.tail());
// //console.log('-------');
// console.log(LRUCache1.get(2));
// LRUCache1.printSize();
// //console.log('tail is :',LRUCache1.tail());
// //console.log('-------');
// LRUCache1.set(4,1); 
// LRUCache1.printSize();
// //console.log('-------');
// console.log(LRUCache1.get(1));
// //console.log('-------');
// console.log(LRUCache1.get(2));

//-----
console.log(LRUCache1.get(2)); //-1
LRUCache1.set(2,6);
LRUCache1.printSize();
console.log(LRUCache1.get(1));
LRUCache1.set(1,5);
LRUCache1.printSize();
LRUCache1.set(1,2);
LRUCache1.printSize();
console.log(LRUCache1.get(1));
console.log(LRUCache1.get(2));
//-----
//console.log('-------');
//LRUCache1.printSize();
// LRUCache1.set(7,'m');
// LRUCache1.printSize();
// LRUCache1.set(8,'a');
// LRUCache1.printSize();
// LRUCache1.set(5,'p');
// LRUCache1.printSize();
// LRUCache1.set(6,'k');
// LRUCache1.printSize();
// LRUCache1.get(8);
// LRUCache1.printSize();
// LRUCache1.set(1,'t');
// LRUCache1.printSize();

