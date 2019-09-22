import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './styles.scss';

import Header from '../../components/Header';

export default class Vote extends Component {
  render() {
    return (
      <div className="vote">

        <Header />

        <div className="container">
          <h2>Qual sua banda favorita ?</h2>
          <span>Asked by Wuzi 24 minutes ago</span>

          <div className="answer mg-top">
            <input id="radio1" type="radio" />
            <label for="radio1">Coldplay</label>
          </div>

          <div className="answer mg-top">
            <input id="radio2" type="radio" />
            <label for="radio2">Radiohead</label>
          </div>

          <div className="answer mg-top">
            <input id="radio3" type="radio" />
            <label for="radio3">Jhon Mayer</label>
          </div>

          <Link to="/result"><button class="btn-create button-center">Submit your vote</button></Link>
        </div>

      </div>
    )
  }
}