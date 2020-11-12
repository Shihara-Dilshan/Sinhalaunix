// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import "./../App.css";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";


type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
       <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
    );
  }
}
