
Algorithm.quicksort.partition=function(input,start_pointer,end_pointer){
/*Determine the partitioning point after moving elements into their right partition*/
	
	var pivot = input[Math.floor((start_pointer+end_pointer)/2)+1]; // Fixed Bug: 1] use (start_pointer+end_pointer)/2 instead of (start_pointer+end_pointer/2) 
	                                                                //            2] Make sure the pivot elment is captured and not he index, since the value of 
	                                                                //				 pivot will change or jump we take index for pivot

	while(start_pointer<end_pointer){

		/*Move the left pointer so the left partition has all elements < value of pivot */
		while(input[start_pointer]<pivot){
		   start_pointer++;
		}
		/*Move the left pointer so the right partition has all elements > value of pivot */
		while(input[end_pointer]>pivot){
			end_pointer--;
		}

		/*If the pointer have not crossed each other, then we swap the elements that are out of place and move the pointers fwd*/
		if(start_pointer<end_pointer){
		input=this.quicksort.swap_elements(input,start_pointer,end_pointer);
		start_pointer++;
		end_pointer--;
		}
		console.log(input);
		

	}
	return start_pointer;
	

};

/* Swap the elements when the pointers still haven't crossed as they are in the wrong partition */
Algorithm.quicksort.swap_elements=function(input,elm_first,elm_sec){
	var temp= input[elm_first];
	input[elm_first]=input[elm_sec];
	input[elm_sec]=temp;
	return input;
};

Algorithm.quicksort=function(input,start,end){
	/*Check for input length*/
	if(input.length<2){
		return input;
	}
	/*Call partition method to split the array into 2 parts i.e., first half <= pivot and second half >=pivot */
	var partition_index=this.quicksort.partition(input,start,end);

	//console.log('Partition Index:'+partition_index+'['+input+']');

	/*check if there are any elements on the left partition that need to be sorted and then recursively call the quicksort on left partition, */
	if(start<partition_index-1){
		this.quicksort(input,start,partition_index-1);
	}

	/*check if there are any elements on the right partition that need to be sorted and then recursively call the quicksort on right partition*/
	if(partition_index<end){
		this.quicksort(input,partition_index,end);
	}

	return input;

};

Algorithm.quicksort.test=function(input){
	
var test_input = Algorithm.utils.isArray(input)?input:[5,3,1,4,8,19,5,2,31,19];
//test_input=[5,4,3,2,1];
console.log(Algorithm.quicksort(test_input,0,test_input.length-1));
};

