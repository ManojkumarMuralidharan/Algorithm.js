

Algorithm.heapsort=function(input){
	var result_array=[];
	if(input.length<2){
		return input;
	}
	/*construct the heap using heapify*/

	start=(Math.floor(input.length/2));
	
	while(start>=0){
	this.heapsort.heapify(input,start);
	start--;
	}


	while(input.length>1){
		/* Take the Last element*/
		var elementToBeMoved=input[input.length-1];
		result_array.push((input.splice(0,1))[0]);
		input.splice(0,0,elementToBeMoved);
		input.splice(input.length-1,1);
		//Next step is to heapify from the root
		this.heapsort.heapify(input,0);
	}
	result_array.push((input.splice(0,1))[0]);
	return result_array;
};


/*Takes a start index to know where to start the heapifying*/
Algorithm.heapsort.heapify=function(input,startIndex){
	/*
		floor(n/2) + 1 , floor(n/2)+2 ,.... are all leaves
		which means n/2 is the starting element
	*/
	
	/*Base Condition to stop the loop when index>n */


	
	/* since we are starting from index 0, we have left child = 2n+1 and right child = 2n+2 */
	var left=(startIndex*2)+1;
	var right=(startIndex*2)+2;
	var min;

	/*	
	  Is not the right approach as we might end up traversing both sides of the tree with two recursive calls
	  if(left<input.length && input[startIndex]>input[left]){
			Algorithm.swap_elements(input,startIndex,left);
			Algorithm.heapsort.heapify(input,left);
		}
		if(right<input.length && input[startIndex]>input[right]){
			Algorithm.swap_elements(input,startIndex,right);
			Algorithm.heapsort.heapify(input,right);
		}*/


	/* Do not run two heapify on two branches instead identify the minimum and then do heapify once*/
	if(left<input.length&&right<input.length){
		min=input[left]<input[right]?left:right;
	}

	if(left<input.length&&right>=input.length){
		min=left;
	}
	if(left>=input.length&&right<input.length){
		min=right;
	}
	/*Do Heapify only if there is a min element else do not do heapify, because it cld be a leaf node*/
	if(min&&input[min]<input[startIndex]){
		Algorithm.swap_elements(input,min,startIndex);
		Algorithm.heapsort.heapify(input,min);
	}

};




Algorithm.heapsort.test=function(input){
	var test_input = Algorithm.utils.isArray(input)?input:[5,3,1,4,8,19,5,2,31,19];
	console.log(Algorithm.heapsort(test_input));
	return;
};
