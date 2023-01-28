import React, {useState} from "react";
import '../stylesheet/Header.css'
/* API: https://v6.exchangerate-api.com/v6/e667579449fad91748dcaa24/latest/PHP */
const Header = () =>{
    const [currentBalance, setCurrentBalance] = useState(1000.00);
    return(
        <div className="header">
            <button className="peso-usd">$</button>
            <div className="current-balance-div">{currentBalance}</div>
        </div>
    );
};
export default Header;