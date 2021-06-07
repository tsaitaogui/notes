
// [92,38,59,57,14,52,19,69,23,84]

// [92, [[38, [[57, [69, 23]], [14, [84]]]], [59, [52, 19]]]]

function build_binarytree() {
    var tree = []
    var current = tree
    return function foo(node) {
        if (current === tree) {
            tree.push(node)
            current = []
            tree.push(current)
        } else {
            if (current.length < 2) {
                current.push(node)
            } else if (current.length === 2) {
                if (Array.isArray(current[0])) {
                    var arr = current[0]
                    if (arr[1].length < 2) {
                        arr[1].push(node)
                    } else {
                        if (Array.isArray(current[1])) {
                            var arr = current[1]
                            if (arr[1].length < 2) {
                                arr[1].push(node)
                            } else {
                                current = current[0][1]
                                foo(node)
                            }
                        } else {
                            current[1] = [current[1], [node]]
                        }
                    }
                } else {
                    current[0] = [current[0], [node]]
                }
            } else {
                throw Error(tree)
            }
        }
        return tree.slice()
    }
}

var tree = build_binarytree()
tree(92)
tree(38)
tree(59)
tree(57)
tree(14)
tree(52)
tree(19)
tree(69)
tree(23)
JSON.stringify(tree(84)) === JSON.stringify([92, [[38, [[57, [69, 23]], [14, [84]]]], [59, [52, 19]]]])