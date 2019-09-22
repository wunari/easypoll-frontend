import React, { Component } from 'react';

import Header from '../../components/Header';

import './styles.scss';

export default class Result extends Component {
  render() {
    return (
      <div className="result">
        <Header />
        <div className="container-result">
          <div className="result">
            <h2>Qual sua banda favorita ?</h2>
            <span>Asked by Wuzi 24 minutes ago</span>

            <div className="answer skew">
              <div className="result__title">
                <span>Coldplay</span>
                <span>100%</span>
              </div>
              
              <div className="progress-bar"></div>

              <span class="result__votes">1 Votes</span>
            </div>

            <div className="answer disabled">
              <div className="result__title">
                <span>Radiohead</span>
                <span>0%</span>
              </div>
              
              <div className="progress-bar"></div>

              <span class="result__votes">1 Votes</span>
            </div>

            <div className="answer disabled">
              <div className="result__title">
                <span>Jhon Mayer</span>
                <span>0%</span>
              </div>
              
              <div className="progress-bar"></div>

              <span class="result__votes">1 Votes</span>
            </div>
          </div>
          
          <div className="vote">
            <div className="vote__poll">
              <p>You voted Coldplay on this poll</p>
            </div>
            <div className="vote__share">
              <div className="information">
                <br/>
                <small>Votes</small>
                <div class="number">1</div>
                <br/><br/>
                <div class="share">Share</div>
                <small>Copy Link</small>
                <small>QR Code</small>
                <small>Share on Facebook</small>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}