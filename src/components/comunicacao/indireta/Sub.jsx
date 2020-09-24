import React from 'react';

export default (props) => {
    return(
    <div>
        <button onClick={()=>{
            props.onClicar(Math.floor(Math.random()*100), 'Gerado.....' )
        
        }}> Alterar </button>
    </div>
    );
};
    