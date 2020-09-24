import React,{useState} from 'react';
import Sub from './Sub';


export default (props) => {
    const [Valor, setValor] = useState('-')
    const [Texto, setTexto] = useState('Valor')

    
    function QuandoClicar(valorGerado,texto){
        setTexto(texto)
        setValor(valorGerado)
    }

    return(
        <div>
        <h4>{Texto}{Valor}</h4>
        <Sub onClicar ={QuandoClicar}>pedro</Sub>
    </div>
    );
};
   