import React, {useState} from "react";
import '../stylesheet/components/Header.css'
/* API: https://v6.exchangerate-api.com/v6/e667579449fad91748dcaa24/latest/PHP */

window.addEventListener('scroll' ,() => {
    if(window.scrollY > 0 && isHeaderExtended){
        extendHeader();
    }
    if(window.scrollY === 0 && !isHeaderExtended){
        extendHeader();
    }   
});

let isHeaderExtended = true;
const extendHeader = () =>{
    const headerExtended = document.querySelector('.header');
    const balanceHeader = document.querySelector('.current-balance-div');
    if(isHeaderExtended){
        isHeaderExtended = !isHeaderExtended;
        headerExtended.style.height = '10vh';
        balanceHeader.style.fontSize = '4em';
    }else if(!isHeaderExtended){
        isHeaderExtended = !isHeaderExtended;
        headerExtended.style.height = '80vh';
        balanceHeader.style.fontSize = '15em'; 
    }
}



const Header = () =>{
    
    
    const [currentBalance, setCurrentBalance] = useState(1000.00);
    return(
        <>
            <div className="header" onClick={extendHeader}>
                <div className="current-balance-div">
                    {currentBalance}
                </div>
            </div>
        </>
        
    );
};
export default Header;