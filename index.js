// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = name => cats.push(name)

const destructivelyPrependCat = name => cats.unshift(name)

const destructivelyRemoveLastCat = () => cats.pop()

const destructivelyRemoveFirstCat = () => cats.shift()

const appendCat = name => [...cats, name]

const prependCat = name => [name, ...cats]

const removeLastCat = () => cats.slice(0,cats.length-1)
//remember, with slice(x,y), y is non inclusive

const removeFirstCat = () => cats.slice(1, cats.length)
//remember, with slice(x,y), y is non inclusive

// function destructivelyAppendCat(name){
//     return cats.push(name)
// }