import React, {useState} from "react";
import '../stylesheet/components/Main.css'
const Main = () =>{
    const [currentExpenses, setCurrentExpenses] = useState([]);
    return(
        <div className="Main">
            
            <div className="current-balance-div">
                {currentExpenses}
                </div>
        </div>
    );
};
export default Main;