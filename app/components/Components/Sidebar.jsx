import React, { Component } from "react";
import "./../../sidebar.css";
import { Button, FormControl, RadioGroup,FormControlLabel, Radio } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

import SidebarChat from './SidebarChat';
import en2sn from './../../en2sn.json';
import sn2en from './../../sn2en.json';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        english: undefined,
        results: [],
        language: "",
    };
  }
  
  componentDidMount(){
      this.setState({english: en2sn, language: "english"});
      
  }
  
  search = () => {
      const inputField =  document.getElementById('inputField');
      const inputValue = inputField.value;
      
      if(!inputValue || inputValue.trim().length === 0 ){
          return;
      }else{
          
          const results = this.state.english.filter( word => word.word.includes(inputValue));
          const finalResult = results.sort( (a,b) => {
              if(a.word.length <= b.word.length){
                  return -1;
              }else{
                  return 1;
              }
          });
          this.setState({results: finalResult});
      }


  }
  
   changeLanguage = (e) => {
      console.log(e.target.value)
      if(e.target.value === "english"){
          this.setState({english: en2sn, language: "english"});
      }else if(e.target.value === "sinhala"){
          this.setState({english: sn2en, language: "sinhala"});
      }
      
   }
  
  searchKey = (e) => {
      if(e.key !== "Enter") return;
    
      const inputField =  document.getElementById('inputField');
      const inputValue = inputField.value;
      
      if(!inputValue || inputValue.trim().length === 0 ){
          return;
      }else{
          
          const results = this.state.english.filter( word => word.word.includes(inputValue));
          const finalResult = results.sort( (a,b) => {
              if(a.word.length <= b.word.length){
                  return -1;
              }else{
                  return 1;
              }
          });
          this.setState({results: finalResult});
      }


  }

  show = () => {
    
    return{
       display: "block",
    }
  }
  
  hide = () => {
    return{
       display: "none",
    }
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar_header">
         
          <div className="sidebar_headerRight">
            <FormControl component="fieldset">

  <RadioGroup aria-label="gender" name="gender1" onChange={this.changeLanguage} style={{display:"inline"}}>
    <FormControlLabel value="english" control={<Radio />} label="English" />
    <FormControlLabel value="sinhala" control={<Radio />} label="සිංහල" />
    
  </RadioGroup>
</FormControl>
          </div>
        </div>
        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
              <SearchOutlined />
              <input autoFocus onKeyPress={this.searchKey} type="text" placeholder="Search..." id="inputField"/>
              
          </div>
          <Button variant="contained" onClick={this.search} style={{float: "right !important"}}>search</Button>
        </div>
        <h5 style={{padding: "5px", marginLeft: "20px"}}>Search Results</h5>        
        <div className="sidebar__chats" style={{backgroundColor: "white", height: "100%", overflow: "auto"}}>
          {this.state.results.map( result => {
              return <SidebarChat key={result.word} word={result.word} definitions={result.definitions} />;
          })}
          
      
        </div>
      </div>
    );
  }
}

export default Sidebar;
