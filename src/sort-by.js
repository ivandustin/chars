function sort_by(array, property) {
    return array.sort(function(object_a, object_b) {
        let a = object_a[property]
        let b = object_b[property]
        return a - b
    })
}

module.exports = sort_by
