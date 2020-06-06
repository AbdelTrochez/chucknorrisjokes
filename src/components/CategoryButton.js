import React from 'react';


const CategoryButton = ({getJoke})=>{
     return(
          <button onClick={getJoke} className="btn btn-danger btn-lg btn-block font-weight-bold">
          Get Random Joke
          </button>
     );
}

export default CategoryButton;