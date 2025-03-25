import { BASE_URL, language } from "@/constants/app";
//import { API_KEY } from "../../API_KEY";

const API_KEY = "90552eb8ef64f977dd97e4d807bf03d4"
const now = new Date();

// Cria uma data de um ano atrás
const oneYearAgo = new Date();
oneYearAgo.setFullYear(now.getFullYear() - 1);

// Função para formatar a data no padrão YYYY-MM-DD
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

const primary_release_date_gte = formatDate(oneYearAgo);
const primary_release_date_lte = formatDate(now);

interface IgetMovieById {
    movie_id: string | number;
    language: string;
    region?: string; // Agora opcional
}


interface IGetMovies {
    language: string;
    region?: string; 
    page: string|number;
}




export const getTopRatedMovies
 = ({ language, region, page }: IGetMovies): string => {
    const url = `https://api.themoviedb.org/3/discover/movie?`
    +`api_key=${API_KEY}`
    +`&language=${language}`
    + (region ? `&region=${region}` : "")
    +`&sort_by=vote_average.desc`
    +`&vote_count.gte=1000`
    +`&page=${page}`

    return url;
};

export const getPopularMovies
 = ({ language, region, page }: IGetMovies): string => {
    const url = `https://api.themoviedb.org/3/discover/movie?`
    +`api_key=${API_KEY}`
    +`&language=${language}`
    + (region ? `&region=${region}` : "")
    +`&sort_by=vote_average.desc`
    +`&page=${page}`

    return url;
};


export const getLastYearMovies
 = ({ language, region, page }: IGetMovies): string => {
    const url = `https://api.themoviedb.org/3/discover/movie?`
    +`api_key=${API_KEY}`
    +`&language=${language}`
    + (region ? `&region=${region}` : "")
    + `&sort_by=release_date.desc`
    + `&primary_release_date.gte=${primary_release_date_gte}`
    + `&primary_release_date.lte=${primary_release_date_lte}`
    + `&vote_count.gte=1000`
    + `&page=${page}`

    return url;
};

export const getClassic90sMovies
 = ({ language, region, page }: IGetMovies): string => {
    const url = `https://api.themoviedb.org/3/discover/movie?`
    + `api_key=${API_KEY}`
    + `&language=${language}`
    + (region ? `&region=${region}` : "")
    + `&sort_by=release_date.desc`
    + `&primary_release_date.lte=1999-12-3` 
    + `&vote_count.gte=10001&page=${page}`
    
    return url;
};

export const getMovieById = ({ movie_id, language, region }: IgetMovieById): string => {
    const url = 
    `${BASE_URL}/3/movie/`
    +`${movie_id}?`
    +`api_key=${API_KEY}`
    +`&language=${language}`
    + (region ? `&region=${region}` : "");
        
    return url;
};

export const getMovieDirectorsById = (movie_id:number): string => {
    const url = 
    `${BASE_URL}/3/movie/`
    +`${movie_id}?`
    +`/credits?api_key=${API_KEY}`
    + `&language=${language}`
        
    return url;
};