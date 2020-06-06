import React, { Component } from 'react';

const firstLetter = (string)=> {
     return string.charAt(0).toUpperCase() + string.slice(1);
   }

class CategorySelect extends Component{
     
     categorySelected = React.createRef();

     sendCategory = (e) =>{
          e.preventDefault();
          const inputCategorySelected = this.categorySelected.current.value;
          this.props.currentCategory(inputCategorySelected);
     }

     render(){
          return(
               <div className="form-group">
               <select onClick={this.sendCategory} ref={this.categorySelected} className="form-control form-control-lg" id="exampleSelect1">
                    <option value="random">Random</option>
                    {this.props.category.map((cat,i)=>{
                    return(
                         <option   value={this.props.category[i]} 
                                   key={this.props.category[i]}>
                                   {firstLetter(this.props.category[i])}
                         </option>
                         );
                    })}
               </select>
             </div>
          );
     }
}

export default CategorySelect;