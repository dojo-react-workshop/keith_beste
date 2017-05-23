// console.log (this);

function myFunc(){
	console.log (this);
}

// myFunc.apply('Charlie');
//find out difference between call and apply and bind!!!!!!!!!!!!
//different ways that "this" can be assigned
var newFunc = myFunc.bind('Charlie');

var obj = {
	someFunc: myFunc
}

var thing = new myFunc

obj.someFunc();
// myFunc();