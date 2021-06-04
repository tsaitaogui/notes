function $(fn) {
	function f0(x, n) {
		return fn(f1, x, n)
	}

	function f1(x, n) {
		return fn(f0, x, n)
	}

	return function (x, n) {
		return fn(f1, x, n)
	}
}

var foo = $(
function (myself, x, n) {
	if (n === 0) {
          return 1;
        } else if (n % 2 === 1) {
          return x * myself(x * x, Math.floor(n / 2));
        } else {
          return myself(x * x, n / 2);
        }
}
)

foo(2, 5)