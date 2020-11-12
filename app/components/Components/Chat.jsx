import React, { Component } from "react";

import "./../../chat.css";

import PopOver from "./PopOver";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	meaning : [],
    	word: "",
    };
  }
  
  componentDidMount(){
      if(window.localStorage.getItem('currentDef')){
          setInterval( () => {
          if( window.localStorage.getItem('currentDef') === null ||  window.localStorage.getItem('currentDef') === undefined){
          
          }else{
             this.setState({meaning: window.localStorage.getItem('currentDef').toString().split(",")});
             this.setState({word: window.localStorage.getItem('currentValue')});
          }
          
      },10);
      }
    
      
  }
  
  render() {
    return (
      <div className="chat">
        <div className="chat__header">
            
            <div className="chat__headerTitle">
            	<h3>{this.state.word}</h3>
            	
            </div>
            <div onClick={ () => {console.log(4)}} className="chat__headerIcons">
          
            <PopOver />
            </div>
        </div>
        <div className="chat__body">
        
            {this.state.meaning.map( def => {
                return (<h3 key={def} className="chat__message">
            {def}
            
            </h3>)
            })}
            
            
            
            
            
        </div>
        
      </div>
    );
  }
}

export default Chat;
