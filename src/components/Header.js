import React, {useState} from "react";
import '../stylesheet/components/Header.css'
/* API: https://v6.exchangerate-api.com/v6/e667579449fad91748dcaa24/latest/PHP */

window.addEventListener('scroll' ,(e) => {
    const headerExtended = document.querySelector('.header');
    const headerMinimized = document.querySelector('.header-minimized');
    if(window.scrollY > 0){
        headerExtended.style.height = '0';
        headerMinimized.style.transition = 'all 0.3s';
        headerMinimized.style.height = '10vh';
    }
    
    if(window.scrollY === 0){
        headerExtended.style.height = '80vh';
        headerMinimized.style.transition = 'all 0s';
        headerMinimized.style.height = '0';
        
        
    }
});

const Header = () =>{
    
    
    const [currentBalance, setCurrentBalance] = useState(1000.00);
    return(
        <>
            <div className="header">
                <div className="current-balance-div">
                    {currentBalance}
                </div>
            </div>
            <div className="header-minimized">
                <span>{currentBalance}</span>
            </div>
        </>
        
    );
};
export default Header;