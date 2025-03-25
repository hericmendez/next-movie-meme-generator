import { excludedWordsPortuguese } from "./excludedWords"

const isNumeric = str => {
  const possibleNum = parseInt(str)
  if (!Number.isNaN(possibleNum)) {
    return true
  }
  return false
}

console.log(isNumeric("2"))
console.log("a3a")
console.log("abc")

const generateMemeMovie = (mod, movieTitle) => {
  /*   const randomMovie = movieList[Math.floor(Math.random() * movieList.length)]; */

  const myArr = movieTitle.split(" ")

  let replaceableWords = myArr.filter(
    element => !excludedWordsPortuguese.includes(element.toLowerCase())
  )

  console.log(replaceableWords)
  const rng =
    replaceableWords[Math.floor(Math.random() * replaceableWords.length)]

  const joined = myArr.join(" ")

  const newMovie = joined.replace(rng, mod)

  return newMovie
}

console.log(generateMemeMovie("cu", "left 4 dead")) 
