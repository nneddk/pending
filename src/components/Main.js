import React, {useState} from "react";
import '../stylesheet/components/Main.css'
const Main = () =>{
    const [currentExpenses, setCurrentExpenses] = useState([100, 100]);
    return(
        <div className="Main">
            <div className="main-sidebar">
                test
            </div>
            <div className="current-expenses-div">
                test
                </div>
        </div>
    );
};
export default Main;