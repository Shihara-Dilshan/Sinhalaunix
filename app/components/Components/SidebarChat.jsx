import React, { Component } from "react";

class SidebarChat extends Component {
  // eslint-disable-next-line
  constructor(props){
      super(props);
  }

  addLocal = (e) => {
      window.localStorage.setItem('currentDef', this.props.definitions);
      const current = e.target.id;
       window.localStorage.setItem('currentValue', current);
  }


  render() {
    return (
      <div className="sidebarChat" id={this.props.word} onClick={this.addLocal}> 
        
        <div className="sidebarChat__info">
          <h4 id={this.props.word}>{this.props.word}</h4>
          
        </div>
      </div>
    );
  }
}

export default SidebarChat;
