import React, { Component } from 'react';
import logo from '../../images/logo.svg'

export class HomeScreenHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="header">
                <img src={logo} />
                <h1>What is Lorem Ipsum?</h1>
            </div>
        );
    }
};
