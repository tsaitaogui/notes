

function merge_sort(array) {
	if (array.length <= 1) {
		return array
	} else {
		var half = Math.ceil(array.length / 2)
		var sorted_upper_part = merge_sort(array.slice(0, half))
		var sorted_lower_part = merge_sort(array.slice(half, array.length))
		return merge(sorted_upper_part, sorted_lower_part, [])
	}
}

function merge(array1, array2, result) {
	if (array1.length && array2.length) {
		var a1 = array1[0]
		var a2 = array2[0]
		if (a1 > a2) {
			result.push(array1.shift())
		} else {
			result.push(array2.shift())
		}
		return merge(array1, array2, result)
	} else if (array1.length && array2.length === 0) {
		return result.concat(array1)
	} else if (array1.length === 0 && array2.length) {
		return result.concat(array2)
	} else {
		return result
	}		
}

merge_sort([2,3,1, 0,5,4])