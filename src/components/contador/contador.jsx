import React, { Component } from 'react';
import './contador.css';
import Display from './display.jsx';
import PassoForm from './PassoForm';
import Buttons from './Buttons';

export default class Contador extends Component {

        state = {
            passo: this.props.passo || 1,
            valor: this.props.valor || 0,
        }



        inc = () => {
            this.setState({
                valor:this.state.valor + this.state.passo
            })
        }

        dec = () => {
            this.setState({
                valor:this.state.valor - this.state.passo
            })
        }
        mudarPasso = (novoPasso) =>{
            this.setState({
                passo:novoPasso
            })
        }

render(){
    return (
        <div className='Contador'>
            <h2>Contador</h2>
            <PassoForm onPassoChange={this.mudarPasso} passo = {this.state.passo}></PassoForm>

            <Display valor ={this.state.valor}></Display>
        <Buttons inc={this.inc} dec={this.dec}></Buttons>
            
        </div>
    )
}
}