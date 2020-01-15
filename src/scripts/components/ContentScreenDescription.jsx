import React, { Component } from 'react';
import * as data from '../../dataStore.json';
import GreyBoxBackground from '../../images/GreyBoxBackground.png';

export class ContentScreenDescription extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let description = this.props.description ? this.props.description : [];
        return(
            <div>
                <div className="contentScreenDesc">
                {
                    description.map((item,i) => (
                    <div key={i}>
                        <div className="contentTitle">
                        {item.title}
                        </div>
                        <div className="contentTagLine">
                        {item.tagline}
                        </div>
                        <div className="contentDesc">
                        {item.content}
                        </div>
                        <div>
                            <img className="contentImg" src={GreyBoxBackground}/>
                            <p className="contentImgDesc">{item.imgFooter}</p>
                        </div>
                    </div>
                ))
                }
                </div>
                <ContentScreenFooter/>
            </div>
        );
    }
};

export class ContentScreenFooter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textErrMsg: " Message...",
            messageStatus : "",
            messageStatusData : "",
            textErrClass : ""
        }
        this.hanldeClick = this.hanldeClick.bind(this);
        this.messageStatus = "";
        this.messageStatusData = "";
    }

    async hanldeClick(){
        let message = document.getElementById("textBox").value;
        if(message === undefined || message === "") {
            this.setState({
                textErrMsg : "Message is Mandatory",
                textErrClass : "mandate"
            });
        } else {
            let payload = {
                "message" : message
            };
    
            let response = await fetch('http://localhost:3000/sendMessage', {
                method: 'post',
                body: JSON.stringify(payload)
            });
            let messageStatus = response.status === 200 ? "success" : "failure";
            let responseData = await response.json();
            this.setState({
                messageStatus : messageStatus,
                messageStatusData : responseData,
                textErrClass : ""
            });
        }
    }

    render(){
        let errorClass = this.state.messageStatus === "failure" ? "error" : "";
        return(
            <div className="footer">
                <div className = {`messageStatus ${errorClass}`}>{this.state.messageStatusData.responseMessage}</div>
                <input id="textBox" className={`msgBox ${this.state.textErrClass}`} type="text" placeholder={this.state.textErrMsg} maxLength="150"/>
                <button className="submitBtn" type="submit" onClick={this.hanldeClick}>Submit</button>
            </div>
        );
    }
};

