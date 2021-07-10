/** /
"aa"
"a"
"aa"
"a*"
"aaa"
"a*a"
"mississippi"
"mis*is*ip*."
"ab"
".*c"
//*/
var foo = function(s, p) {
    var compiled_pattern = []
	for (var i = 0; i < p.length; i++) {
		var ch = p.charAt(i)
		if (ch === '*') {
			compiled_pattern[compiled_pattern.length - 1] = [compiled_pattern[compiled_pattern.length - 1]]
		} else {
			compiled_pattern.push(ch)
		}
	}

	current_state = 0
	for (var i = 0; i < s.length; i++) {
		if (current_state === compiled_pattern.length) {
			return false
		}
		var ch = s.charAt(i)
		if (Array.isArray(compiled_pattern[current_state])) {
			var success = do_kleene_star_check(ch, compiled_pattern)
			if (!success) {
				return false
			}
		} else {
			if (compiled_pattern[current_state] === '.') {
				current_state = current_state + 1
			} else {
				var expected = compiled_pattern[current_state]
				if (expected === ch) {
					current_state = current_state + 1
				} else {
					return false
				}
			}
		}
	}

	return (current_state === compiled_pattern.length || Array.isArray(compiled_pattern[compiled_pattern.length - 1]))

	function do_kleene_star_check(ch, compiled_pattern) {
		var current_ch = compiled_pattern[current_state][0]
		if (ch === current_ch || '.' === current_ch) {
			return true
		} else {
			var next_state = compiled_pattern[current_state + 1]
			if (Array.isArray(next_state)) {
				if (ch === next_state[0] || '.' === next_state[0]) {
					current_state = current_state + 1
					return true
				}
			} else if (ch === next_state || '.' === next_state) {
				current_state = current_state + 2
				return true			
			} else {
				return false
			}
		}
	}
}
	
