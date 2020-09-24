import React from 'react';
import Filho from './Filho'
export default props =>
    <div>
        <Filho {...props}><strong>joao</strong></Filho>
        {/* usando o spred para passar as propriedades que o pai recebe, para o filho */}
        <Filho sobrenome= {props.sobrenome}>maria</Filho>
        <Filho sobrenome='silva'>pedro</Filho>
    </div>