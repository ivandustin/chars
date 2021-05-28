function stats(array) {
    let hash = {}
    array.forEach(function(item) {
        item.forEach(function(item) {
            let { manuscripts } = item
            manuscripts.forEach(function(manuscript) {
                let { words } = manuscript
                words.filter(identity).forEach(function(word) {
                    let characters = Array.from(word)
                    characters.forEach(function(character) {
                        if (!hash[character])
                            hash[character] = 0
                        hash[character]++
                    })
                })
            })
        })
    })
    return to_array(hash)
}

function identity(value) {
    return value
}

function to_array(hash) {
    let array = []
    for (let [ character, count ] of Object.entries(hash)) {
        let code = character.charCodeAt(0)
        array.push({ character, code, count })
    }
    return array
}

module.exports = stats
