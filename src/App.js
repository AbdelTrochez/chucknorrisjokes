import React, { Component, Fragment } from 'react';
import SearchBar from './components/SearchBar';
import JokeCard from './components/JokeCard';
import CardList from './components/CardList';
import Contact from './components/Contact';


class App extends Component {
  
  constructor(){
		super()
		this.state={
      randomJoke:'',
      category:[],
      findJoke:[],
      termSearch:'',
      totalJokes:''
		}
  }
  findJokeWith=(term)=>{
    this.setState({termSearch:term});
    if(term.length>0){
    // Get joke by Search
      fetch(`https://api.chucknorris.io/jokes/search?query=${term}`)
			.then(response=>response.json())
      .then(getJoke=>{this.setState({findJoke:getJoke.result})
                      this.setState({totalJokes:getJoke.total})                  
    });
    }else{
      if(!this.state.totalJokes>0 || !term.length>0){
      // Reset Jokes
      fetch(`https://api.chucknorris.io/jokes/search?query=ggggggggggg`)
      .then(response=>response.json())
      .then(getJoke=>this.setState({findJoke:getJoke.result})); 
      }
    }
  }

	componentDidMount(){
    // Get random Joke
		fetch('https://api.chucknorris.io/jokes/random')
			.then(response=>response.json())
      .then(joke=> this.setState({randomJoke:joke.value}));

    // Get Categories
    fetch('https://api.chucknorris.io/jokes/categories')
			.then(response=>response.json())
      .then(cate=> this.setState({category:cate}));
	}

  render(){
    return (
      <Fragment>
      <Contact/>
      <h1 className="text-danger text-center mt-auto">{`<AbdelTrochez/>`}</h1>
      <div className="container">  
        <SearchBar  
          findJokeWith={this.findJokeWith}
        />
        <CardList 
          findJoke={this.state.findJoke}
          termSearch={this.state.termSearch}
        />
        <JokeCard 
          randomJoke={this.state.randomJoke} 
          category={this.state.category}
        />
      </div>
      </Fragment>
    );
  }
}

export default App;
