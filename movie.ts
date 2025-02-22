const filmes: string[] = [
  "O Senhor Dos Anéis: A Sociedade do Anel",
  "De Pernas Pro Ar",
  "Professor Aloprado",
  "Um Sonho de Liberdade",
  "O Poderoso Chefão",
  "Batman: Cavaleiro das Trevas",
  "A Lista de Shindler",
  "11 Homens e um Segredo",
  "Clube da Luta",
  "Forrest Gump: O Contador de Histórias",
  "Era Uma Vez em Hollywood",
  "Os Oito Odiados",
  "Django Livre",
  "Bastardos Inglórios",
  "Django Livre",
  "Kill Bill",
  "Cães de Aluguel",
];

const excludedWordsPortuguese: string[] = [
  // Artigos definidos
  "o",
  "a",
  "os",
  "as",
  "e",
  "um",
  "uma",
  "uns",
  "umas",
  "ao",
  "aos",
  "à",
  "às",
  "da",
  "das",
  "do",
  "dos",
  "de",
  "na",
  "nas",
  "no",
  "nos",
  "pra",
  "pro",
  "para",
  "num",
  "nuns",
  "numa",
  "numas",
  "dum",
  "duns",
  "duma",
  "dumas",
];
/* 
const excludedWordsEnglish: string[] = [
  "the",
  "a",
  "an",
  "of", //
  "in",
  "on",
  "at",
];
 */
const generateMemeMovie = (
  mod: string,
  movieTitle: string
): { original: string; alterado: string } => {
  /*   const randomMovie = movieList[Math.floor(Math.random() * movieList.length)]; */

  const myArr = movieTitle.split(" ");

  const replaceableWords: string[] = myArr.filter(
    (element: string) =>
      !excludedWordsPortuguese.includes(element.toLowerCase())
  );

  const rng =
    replaceableWords[Math.floor(Math.random() * replaceableWords.length)];

  const joined = myArr.join(" ");

  const newMovie = joined.replace(rng, mod);

  const newObj = {
    original: movieTitle,
    alterado: newMovie,
  };

  return newObj;
};

console.log(generateMemeMovie("Buceta", filmes[0]));
