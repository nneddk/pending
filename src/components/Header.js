import React, {useState} from "react";
const Header = () =>{
    const [currentBalance, setCurrentBalance] = useState(0.00);
    return(
        <div id = 'header'>
            {currentBalance}
        </div>
    );
};
export default Header;