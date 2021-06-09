// still under construction
var s1 = 'abcdbceea'
var s2 = 'cabdefga'
var s3 = 'dcea'

function foo(bar1, bar2) {
    var array = []
    Array.prototype.forEach.call(bar1, function(current, index) {
        array.push(bar2.indexOf(current))
    })


    function baz(input) {
        function f(array) {
            if (array.length === 1) {
                if (array[0] === -1) {
                    return [[]]
                } else {
                    return [[0]]
                }
            } else {
                var index = array.length - 1
                var table = f(array.slice(0, index))
                var node = array[index]
                if (node === -1) {
                    table.push([])
                    return table
                } else {
                    table.forEach(function(current) {
                        if (current.length > 0 && array[current.slice(-1)] < node) {
                            current.push(index)
                        }
                    })

                    table.push([index])
                    return table
                }
            }
        }
        return f(input)
    }

    return baz(array)
}

foo(s1, s3)