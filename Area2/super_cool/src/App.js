import React, {Component} from 'react';
import './App.css';
import Movie from './Movie'

import Transformer from './images/Transformer.png';
import Alog_with_the_gods from './images/Along with the gods.png';
import Equalibrium from './images/Equalibrium.png';
import Your_name from './images/Your name.png';


class App extends Component {
  state = {
    greeting: 'Hello',
    movies : [
      {
        title: "Transformer",
        poster: Transformer
      },
      {
        title: "Alog wit the gods",
        poster: Alog_with_the_gods
      },
      {
        title: "Equalibrium",
        poster: Equalibrium
      },
      {
        title: "Your name",
        poster: Your_name
      }
    ]
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        greeting: "Hello again!"
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
          
        })}
      </div>
    );
  }
}

export default App;
