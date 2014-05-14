Algorithm.insertionsort=function(input){
/*	Insertion Sort Algorithm

	Get a list of unsorted numbers
	Set a marker for the sorted section after the first number in the list
	Repeat steps 4 through 6 until the unsorted section is empty
    Select the first unsorted number
    Swap this number to the left until it arrives at the correct sorted position
    Advance the marker to the right one position
	Stop
*/
	if(input.length<2){
		return input;
	}

	//outer loop to iterate over 0 to n-1 elements
	for(var outerIndex=0;outerIndex<input.length;outerIndex++){
		var currentElement= input[outerIndex];
		/* 
		 Innerloop should stop once it finds an element == currentElement or <currentElement,
		 as all element to the left of the currentElement is already sorted
		 Innerloop starts from outerIndex-1 to 0
		 */
		for(var innerIndex=outerIndex-1;innerIndex>=0&&input[innerIndex]>currentElement;innerIndex--){			
				input[innerIndex+1]=input[innerIndex];
		}
		/*
		 Finally replace the innerIndex-1 element with currentElement
		*/
		input[innerIndex+1]=currentElement;
	}

	return input;

}



Algorithm.insertionsort.test=function(input){
	var test_input=Algorithm.utils.isArray(input)?input:[5,3,1,4,8,19,5,2,31,19];
	console.log(Algorithm.insertionsort(test_input));
	return null;
}
