import React from 'react';
import './App.css'

import Primeiro from'./components/Basicos/Primeiro';
import ComParametro from './components/Basicos/ComParametro';
import ComFilhos from'./components/Basicos/ComFilhos';
import Card from'./components/layout/Card';
import Repeticao from './components/Basicos/repeticao';
import Condicional from './components/Basicos/condicional';
import CondicionalComIf from './components/Basicos/condicionalComIf';
import  Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/input.jsx'
import Contador from './components/contador/contador.jsx'
import Mega from './components/Mega/Mega';



export default (props) => (
<div className='App'> 

    <h1>Fundamentos react</h1>
    
    <div className='Cards'>

     <Card titulo ='#11 - Contador' color = '#fdf5e6'>
         <Mega qtdeNumero={8}></Mega>
    </Card>   

    <Card titulo='#10 - Contador' color='#fdf5e6'>
        <Contador passo = {10} valor ={100} ></Contador>
    </Card>

    <Card titulo='#09-Input' color ='#D0E1F9'>
        <Input></Input>
    </Card>
   
    <Card titulo ='#08- comunicação indireta' color='#4D648D'>
        <Super></Super>
    </Card>

    <Card titulo='#07- comunicação direta' color='#283655'>
    <Pai sobrenome='Freitas'></Pai>
    </Card>

    <Card titulo='#06-Condicional V2' color = '#96CEB4'>
        <CondicionalComIf numero = {15} ></CondicionalComIf>
        </Card>

    <Card titulo='#05-Condicional V1' color='#88D9B0'>
        <Condicional numero = {10} ></Condicional>
        </Card>
    
    <Card titulo='#04-repetição' color='#6E7F80'>
    <Repeticao/>
    </Card>

    <Card titulo='#03-Componente Com Filhos' color='#8B9DC3'>
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
    </Card>

    <Card titulo ="#02-Componente Com Parametros" color='#DFE3EE'>
        <ComParametro titulo='Esse é o Título'
        subtitulo='Esse é o Subtítulo'/>
    </Card>

    <Card titulo ='#01-Primeiro Componente' color='#BDEAEE'>
        <Primeiro/>
    </Card>
    
    
    </div>

    
</div>
)