function head(list) {
    return list[0]
}



function tail(list) {
    return Array.prototype.slice.call(list, 1)
}



var c1 = function(input) {

    function foo(accumulate, remaining) {
        if (remaining.length === 0) {
            console.log(accumulate)
        } else {
            var node = head(remaining)
            remaining = tail(remaining)
            foo(accumulate, remaining)
            foo(accumulate.concat(node), remaining)
        }
    }
    foo([], input)
}



c1([1, 2, 3])



var removeIndex = function(list, index) {
    var l1 = list.slice(0, index)
    var l2 = list.slice(index + 1, list.length)

    return l1.concat(l2)
}



var c2 = function(input) {

    function foo(solutions, list) {
        if (list.length) {
            console.log(solutions)
            list.forEach(function(current, index) {
                solutions.push(current)
            })
        }
    }
    foo([], input)
}



c2([1, 2, 3])



/** /

a
ab
ac
abc
b
bc
c

a
b
c
ab
ac
bc
abc
 
a
b
ab
c
ac
bc
abc
//*/