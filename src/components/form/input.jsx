import React,{useState} from 'react';

export default  (props) => {
    const [Nome, setNome] = useState('pedro')


    return(
        <>
        <h3>{Nome}</h3>
        <input type="text" value ={Nome} 
        onChange ={e => setNome(e.target.value)} />
        </>
    );
};