import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
    <div className="container">
        <div className="row">
            <div className="col s12">
                {
                    props.movies.map((movie, i) => { 
                        return {
                            <Movie key={i} image={movie.poster.path}/>
                        }
                    })
                }
            </div>
        </div>
    </div>
}

export default MovieList;