var Calc = function (start) {
	this.add = function (x) {
		start = start + x;
	};

	this.multiply = function (x) {
		start = start * x;
	};

	this.equals = function (callback) {
		console.log(start);
	}	
};

var myCalc = new Calc(0);
myCalc.add(1);
myCalc.add(2);
myCalc.multiply(3);
myCalc.equals();

/*
NOTES:

# start is undefined outside Calc
# Trough js closures, we're going to be capturing the start value
# start is persisted throughout subsequent calls because of the closure
# the way closure works is that a function is going to scope its variables 
  at the time it's declared, not at the time it's run
# see closure-chain.js (chain design pattern)


*/