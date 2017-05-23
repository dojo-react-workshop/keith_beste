// const array = [1,2,3,4];

// const sum = array.reduce((currentSum, currentVal) ==> {
// 	return currentSum + currentVal;
// });


const array = [1,2,3,4];

Array.prototype.reduce=function(cb, currentVal){
	let i = 0;

	if (currentVal === undefined){
		currentVal= this[0];
		i=1;
	}
	
	// var currentVal=this[0];

	for (i; i < this.length; i+=1){
		currentVal=cb(currentVal,val)
	}
	return currentVal;

}