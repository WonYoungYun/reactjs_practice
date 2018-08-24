import React, {Component} from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  /*
  movies: {
      title_english: "Transformer",
      medium_cover_image: Transformer,
      genres: 'robot',
      synopsis: 'Treansformer coming!'
}
  //...this.state.movies,//이전 영화리스트를 그대로 두고 새로운 영화를 추가
*/


state={
};

 componentDidMount(){
    this._getMovies();
 }
_renderMovies = () =>{
  const movies = this.state.movies.map(movie => {
    return (<Movie
      title={movie.title_english}
      poster={movie.medium_cover_image}
      key={movie.id}
      genres = {movie.genres}
      synopsis={movie.synopsis}
      />
    );
  });
  return movies;
};

_getMovies = async() => {
  const movies = await this._callAPI();
  //callAPI 가 끝나기 전까지 실행하지 않는다.
  this.setState({
    movies
  });
};

_callAPI  = () => {
  return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count').then(response => response.json()).then(json => json.data.movies).catch(err => console.log(err));
}

  render() {
    const { movies } = this.state; 
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
