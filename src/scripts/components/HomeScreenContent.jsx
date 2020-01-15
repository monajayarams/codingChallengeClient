import React, { Component } from 'react';
import * as data from '../../dataStore.json';
import axios from 'axios';
import {ContentScreenList} from './ContentScreenList.jsx';
import {ContentScreenTile} from './ContentScreenTile.jsx';
import {ContentScreenDescription} from './ContentScreenDescription.jsx';

export class HomeScreenContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            responseJSONData : []
        }
    }

    componentDidMount(){
        this.fetchJSONData()
        .then((response) => {
            this.setState({ responseJSONData:response })
        });
    }
    
    async fetchJSONData(){
        const response = await fetch('http://localhost:3000/getCodeChallengeListItems');
        let resp;
        if (response.status === 200) {
            resp =  await response.json();;
        }else {
            resp = data;
        }
        return resp;
    }

    render(){
        return(
            <div className="contentDiv">
                    <div className="column first">
                        <ContentScreenTile tileContent={this.state.responseJSONData.tileContent}/>
                    </div>
                    <div className="column second">
                        <ContentScreenList listItems={this.state.responseJSONData.listItems}/>
                    </div>
                    <div className="column third">
                        <ContentScreenDescription description={this.state.responseJSONData.description}/>
                    </div>
            </div>
        );
    }
};


