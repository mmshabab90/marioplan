import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import './App.css'
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div>This is the app component</div>
          </BrowserRouter>
        );
    }
}
