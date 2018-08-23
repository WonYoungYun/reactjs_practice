import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

function Movie({title, poster, genres, synopsis}){
    return(
        <div className ="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        />   
                </p>
            </div>
        </div>
    );
}


function MoviePoster({alt, poster}){
    return (
        <img alt={alt} src={poster} className="Movie__poster"/>
    );
}
function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    );
}

Movie.prototype ={
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired
}


MoviePoster.prototype ={
    poster: PropTypes.string.isRequired
}

MovieGenre.prototype = {
    genres: PropTypes.string.isRequired
}

export default Movie;