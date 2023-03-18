import React, { createContext, useReducer } from "react";

export const MoviesContext = createContext();
export const MoviesDispatchContext = createContext();


function moviesReducer(state, action) {
    switch (action.type) {
        case 'setMovies': {
          return {...state, 
            movies: action.movies,
          };
        }
        case 'clear': {
          return {...state,
            movies: [],
          };
        }
        case 'search': {
          return {
            ...state,
            searchedMovies: action.payload
          }
        }
        default: {
          throw Error('Unknown action: ' + action.type);
        }
    }
}

export default function MoviesContextProvider ({ children }) {
    const [auth, dispatch] = useReducer(moviesReducer, {
      searchedMovies: [],
      movies: []
    });
    return (
        <MoviesContext.Provider value={auth}>
            <MoviesDispatchContext.Provider value={dispatch}>
                { children }
            </MoviesDispatchContext.Provider>
        </MoviesContext.Provider>
    )
}