var foo = function (num) {
	var solution = []
	function bar(baz, left, right) {
		if (left === 0 && right === 0) {
			return
		} else {
			if (left === 0 && right !== 0) {
				for (var i = 0; i < right; i++) {
					baz = baz + ')'
				}
				solution.push(baz)
				return
			} 
			if (right === 0 && left !== 0) {
				for (var i = 0; i < left; i++) {
					baz = baz + '('
				}
				solution.push(baz)
				return
			} 
			bar(baz + '(', left - 1, right)	
			bar(baz + ')', left, right - 1)
		}
	}
	bar('', num, num)

	return solution.filter(function (current) {
		var count = 0
		for (var i = 0; i < current.length; i++) {
			var ch = current.charAt(i)
			if (ch === '(') {
				count++
			} else {
				count--
			}
			if (count < 0) {
				return false
			}
		}
		return true
	})
}
foo(3)