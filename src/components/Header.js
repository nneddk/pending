import React, {useState} from "react";
import '../stylesheet/components/Header.css'
/* API: https://v6.exchangerate-api.com/v6/e667579449fad91748dcaa24/latest/PHP */

window.addEventListener('scroll' ,(e) => {
    const headerExtended = document.querySelector('.header');
    if(window.scrollY > 0){
        headerExtended.style.height = '0';
    }
    
    if(window.scrollY === 0){
        headerExtended.style.height = '80vh';
        
    }
});

const Header = () =>{
    
    
    const [currentBalance, setCurrentBalance] = useState(1000.00);
    return(
        <div className="header">
            
            <div className="current-balance-div">
                {currentBalance}
                </div>
        </div>
    );
};
export default Header;