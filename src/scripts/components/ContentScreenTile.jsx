import React, { Component } from 'react';
import tile from '../../images/tile.png';

export class ContentScreenTile extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let tileContent = this.props.tileContent ? this.props.tileContent : [];
        return(
            <div>
                {
                    tileContent.map((item,i)=>(
                     <div className="tileDiv" key={i}>
                        <img className="tileImg" src={tile}/>
                        <p className="tileImgContent">{item.title}</p>
                     </div>
                    ))
                }
            </div>
            
            
        );
    }
};
