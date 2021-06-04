
function quick_sort(array) {
	if (array.length <= 1) {
		return array
	} else {
		var pivot = Math.floor(Math.random() * array.length)
		var partition = array[pivot]
		var smaller_than_partition = []
		var greater_than_partition = []
		array.forEach(function (current, index) {
			if (index === pivot) {
				return
			} else {
				if (current < partition) {
					smaller_than_partition.push(current)
				} else {
					greater_than_partition.push(current)
				}
			}
		})
		smaller_than_partition = quick_sort(smaller_than_partition)
		greater_than_partition = quick_sort(greater_than_partition)
		array = smaller_than_partition.concat([partition]).concat(greater_than_partition)
		return array
	}
}

quick_sort([7, 5, 1, 4, 2, 3, 6])

quick_sort([4, 2, 1, 3])