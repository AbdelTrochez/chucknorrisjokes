import React from 'react';
import Cards from './Cards'

const CardList = ({ findJoke, termSearch})=>{
     return(
          <div className="container col-12 p-5 row">
              {
                   findJoke.map((joke,i)=>{
                        return(
                             <Cards 
                                   key={i}
                                   pict={joke.icon_url}
                                   joke={joke.value}
                                   termSearch={termSearch}
                             />
                        )
                   })
              }
          </div>
     )
}

export default CardList;