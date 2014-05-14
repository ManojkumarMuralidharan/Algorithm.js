
Algorithm.bubblesort=function(input){
/*
  Has two loops running 
  outerloop runs from n-1 to 0
  innerloop runs from 0 to outerloop
  At each itereation of the outerloop
    at each iteration of the innerloop
      compare adjacent elements ( bubble up the bigger element )
*/
if(input.length<2){
		return input;
	}
 /* Outer loop runs from n-1 to 0*/
 for(var outerIndex=input.length-1;outerIndex>=0;outerIndex--){

 	/* Inner loop runs from 0 to outerLoop value */
 	for(var innerIndex=0;innerIndex<outerIndex;innerIndex++){
 		if(input[innerIndex]>input[innerIndex+1]){
 			input=this.swap_elements(input,innerIndex,innerIndex+1);
 		}
 	}
 }

 return input;

}

Algorithm.bubblesort.test=function(input){
	var test_input=Algorithm.utils.isArray(input)?input:[5,3,1,4,8,19,5,2,31,19];
	console.log(Algorithm.bubblesort(test_input));
	return null;
}
