import React from 'react';
import PropTypes from "prop-types";

const PrimeraApp = ({saludo,subtitulo}) =>{
    // const saludo = "Hola Mundo";
    // const saludo = {
    //     nombre:"David",
    //     edad: 19
    // };
    //Para variables entre llaves
    
    return (
    <>
        <h1>{saludo}</h1>
        {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
        <p>{subtitulo}</p>
    </>
            
     );
}

PrimeraApp.propTypes = {
    //requiere que el prop sea string y que sea 
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo:"Soy un Subtitulo"
}

export default PrimeraApp;