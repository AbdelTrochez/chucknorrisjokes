import React, { Component } from 'react';

class SearchBar extends Component{
     searchTerm = React.createRef();

     sendSearchTerm=(e)=>{
          e.preventDefault();
          const term = this.searchTerm.current.value;
          this.props.findJokeWith(term);
     }

     render(){
          return(
               <div className="container mt-4 jumbotron">
                    <h1 className="text-center pb-3">Are you Ready?, Chuck is Coming...</h1>
                    <div className="row">
                         <div className="col-md-8">
                              <input ref={this.searchTerm} type="search"
                                   placeholder="Say Something..."
                                   className="form-control form-control-lg"
                              />
                         </div>
                         <div className="col-md-4">
                              <button onClick={this.sendSearchTerm} className="btn btn-danger btn-lg btn-block font-weight-bold">Search</button>
                         </div>
                    </div>          
               </div>
          );
     }
}


export default SearchBar;