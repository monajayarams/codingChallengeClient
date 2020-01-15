import React, { Component } from 'react';
import {HomeScreenHeader} from './HomeScreenHeader.jsx';
import {HomeScreenContent} from './HomeScreenContent.jsx';

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <HomeScreenHeader />
                <HomeScreenContent />
            </div>
        );
    }
};
