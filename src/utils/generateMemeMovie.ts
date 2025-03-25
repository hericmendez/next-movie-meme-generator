import { excludedWordsPortuguese } from "./excludedWords";

const isNumeric = (str: string) => {
  const possibleNum = parseInt(str)
  if (!Number.isNaN(possibleNum)){return true}
  return false;
}


const generateMemeMovie = (mod: string, movieTitle: string): string => {
  /*   const randomMovie = movieList[Math.floor(Math.random() * movieList.length)]; */
  
  const myArr = movieTitle.split(" ");

  let replaceableWords: string[] = myArr.filter(
    (element: string) =>
      !excludedWordsPortuguese.includes(element.toLowerCase() )
    
  );

  replaceableWords = replaceableWords.filter(
    (element: string) =>
      !isNumeric(element)
    
  );

  
  const rng =
    replaceableWords[Math.floor(Math.random() * replaceableWords.length)];

  const joined = myArr.join(" ");

  const newMovie = joined.replace(rng, mod);

  return newMovie;
};

export default generateMemeMovie;
