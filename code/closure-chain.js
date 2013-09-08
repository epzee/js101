var Calc = function (start) {
	this.add = function (x) {
		start = start + x;
		return this;
	};

	this.multiply = function (x) {
		start = start * x;
		return this;
	};

	this.equals = function (callback) {
		console.log(start);
		return this;
	}	
};

var myCalc = new Calc(0);
myCalc.add(1)
      .add(2)
      .multiply(3)
      .equals();

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals();