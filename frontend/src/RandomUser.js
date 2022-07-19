import React, { Component } from 'react';
import axios from 'axios'

export default class RandomUser extends Component {
    constructor() {
        super();
        this.state = {
            info: "N/A"
        }
    }

    componentDidMount = () => {
        axios.get("/getRandomUsers").then(response => {
            this.setState({
                info : response.data.userInfo
            })
        })
    };

    render() {
        return(
            <div>
                <button onClick={this.componentDidMount}>Get User Info</button>
                <p>User Info: {this.state.info} </p>
            </div>
        );
    }

}
    