import React, { Component } from 'react';
import * as data from '../../dataStore.json';

export class ContentScreenList extends React.Component{
    constructor(props){
        super(props);
    }

    handleOnClick(event) {
        let currentClickedItem = event.currentTarget;
        let activeItem = document.getElementsByClassName("active");
        activeItem[0].classList.remove("active");
        currentClickedItem.classList.add("active");
    }
    
    render(){
        let listItems = this.props.listItems ? this.props.listItems : [];
        return(
            <div>
                {
                    listItems.map((item,i) => (
                        <ListItem key={i} id={i} title= {item.title} description={item.content} onClick={this.handleOnClick}/>
                    ))
                }
            </div>
        );
    }
};

export class ListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let activeClass = this.props.id === 0 ? "active" : "";
        return(
            <div className={`listContentDiv ${activeClass}`} key={this.props.id} onClick={this.props.onClick}>
                <div className="title">
                    {this.props.title}
                </div>
                <div className="description">
                    {this.props.description}
                </div>
            </div>
        );
    }
};

