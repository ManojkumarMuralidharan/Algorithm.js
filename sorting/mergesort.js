

Algorithm.mergesort=function(input,start,end){

	/*Check the array size - do not use length or check end<1 , check onlyt start==end*/
	if(start==end){
		return input;
	}
	/*If they are more than two split it into two arrays  */
	var split = Math.floor((start+end)/2)+1;
	/*First partition*/
	var left_partition=input.slice(0,split);
	/*Second partition*/
	var right_partition=input.slice(split);
	
	/*Recursively apply MergeSort on them*/
	left_partition = this.mergesort(left_partition,0,left_partition.length-1);
	right_partition = this.mergesort(right_partition,0,right_partition.length-1);


	/*Merge the sorted first and second partition*/
	return this.mergesort.merge(left_partition,right_partition);
};


Algorithm.mergesort.merge=function(left_partition,right_partition){


var left_index = 0;
var right_index = 0;
var result_array=[];
while(left_index<left_partition.length&&right_index<right_partition.length){
 
 if(left_partition[left_index]<right_partition[right_index]){
 	result_array.push(left_partition.splice(left_index,1)[0]);
 	//left_index++;
 }else{
 	result_array.push(right_partition.splice(right_index,1)[0]);
 	//right_index++;
 }

}


if(left_index<left_partition.length){

	result_array=Array.prototype.concat(result_array,(left_partition.slice(left_index,left_partition.length - left_index)));
}

if(right_index<right_partition.length){
	result_array=Array.prototype.concat(result_array,(right_partition.slice(right_index,right_partition.length - right_index)));
}


return result_array;


}

Algorithm.mergesort.test=function(input){
	
var test_input = Algorithm.utils.isArray(input)?input:[5,3,1,4,8,19,5,2,31,19];
//test_input=[5,4,3,2,1];
console.log(Algorithm.mergesort(test_input,0,test_input.length-1));
};