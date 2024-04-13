import React from 'react';
import '../App.css';
import img from '../images/comida.png';


const  Header = () => {

  return (
    <div className="Header">
      
      <div className="info">
        
        <div className="container">
          
          <div className="header-info">
            
              <div className="header-info-dev">
               
                <span>SEJA BEM VINDO AO:</span>
                
                  <div className="title">

                    <h1>
                    FOOD
                    
                    </h1>

                    <h1>DELIVERY</h1>
      
                  </div>

                  
                <div className='button-info'>
                      <a href="#" target="_blank" rel='noreferrer'>CRIE SUA CONTA</a>
                      
                    </div>
                
              </div>

              <img className="img" alt="" width="24" src={img} />
          </div>


        
        </div>
      
      </div>

    </div>
  );
}

export default Header;