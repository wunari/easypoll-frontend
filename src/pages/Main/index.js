import React, { Component } from "react";

import './styles.scss';

import Header from '../../components/Header';

export default class Main extends Component {
    render() {
        return (
            <div class="main">
                <Header />
                <div class="container-main">
                    <h4>Create a <span>Poll</span></h4>
                    <label class="mg-top">Poll question</label>
                    <input class="big-input" type="text" placeholder="Type your question here..."/>
                    <label class="mg-top">Poll question</label>
                    <input class="small-input" type="text" placeholder="Enter poll option..."/>
                    <label class="mg-top">Poll question</label>
                    <input class="small-input" type="text" placeholder="Enter poll option..."/>
                    <label class="mg-top">Poll question</label>
                    <input class="small-input" type="text" placeholder="Enter poll option..."/>

                    <div className="container-options">
                        <button class="btn-add">Add another option</button>

                        <div className="options">
                            <p>Improve spam prevention</p>
                            <p>Allow multiple poll answers</p>
                        </div>
                    </div>

                    <button class="btn-create">Create your poll</button>
                </div>
                <footer>
                    <div className="wunari">Wunari</div>
                    <span>Todos os direitos reservados</span>
                </footer>
            </div>
        );
    }
}