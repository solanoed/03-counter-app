import React, {useState} from 'react'
import PropTypes from "prop-types";
// rafcp
import 'animate.css/animate.css'


const CounterApp = ({value})=>{


    const [counter,setCounter] = useState(value);

    const handleAdd = ()=>{
        setCounter(counter + 1)
    };
    const handleReset = ()=>{
        setCounter(value)
    };
    
    const handleSubstract = ()=>{
        if (counter>0) {
            setCounter(counter - 1)
        }   
    };

    return (
        <>
        <div>
            <h1>COUNTER APP</h1>
            <h2 id = "num" className="animate__animated animate__headShake"> { counter } </h2>
            
            <button className="button" onClick={handleAdd}> +1 </button>
        
            <button className="button" onClick={handleReset}> Reset </button>
        
            <button className="button" onClick={handleSubstract}> -1 </button>
                
        </div>
        <h2 className="message">Made with ❤️ by Letreveux</h2>
        </>
    )
}
CounterApp.propTypes = {
    value:PropTypes.number.isRequired
}
export default CounterApp;