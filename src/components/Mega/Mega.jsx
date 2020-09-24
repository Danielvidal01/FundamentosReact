import React, { useState } from 'react';

export default (props) =>{

    const [Numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0))


    function gerarNumerosNaoContido(array){
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min

        return array.includes(novoNumero)? gerarNumerosNaoContido(array): novoNumero
    }

    function gerarNumeros(){

        const NovoArray = Array(props.qtdeNumero)
            .fill(0)
            .reduce(a=>[...a, gerarNumerosNaoContido(a)],[])
            .sort((a,b)=>a-b)

        setNumeros(NovoArray)
    }


    return(
        <>
        <h3>Mega</h3>
         <h4>{Numeros.join(' ')}</h4>
        <button onClick={gerarNumeros}>Gerar Números</button>
        </>
    )
}