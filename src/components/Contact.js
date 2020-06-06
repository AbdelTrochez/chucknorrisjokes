import React from 'react';

const Contact = ()=>{
     return(
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
               <div className="container justify-content-center align-items-center h4 m-auto">
               <a className="nav-link mr-2" rel="noopener noreferrer" target="_blank" href="https://github.com/AbdelTrochez">
                    <i className="fab fa-github"></i> 
               </a>
               <a className="nav-link mr-2" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/abdel-alberto-trochez-rios-a25172108/">
                    <i className="fab fa-linkedin-in"></i>
               </a>
               <a className="nav-link mr-2" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/abdel.trochez">
                    <i className="fab fa-facebook-f"></i>
               </a>
               </div>
          </nav>
     );
}

export default Contact;