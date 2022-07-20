import React, { Component } from 'react';
import axios from 'axios'

export default class RandomUser extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "N/A",
            lastName: 'N/A',
            userName: "N/A",
            hashPassword: "N/A",
            pictureURL: "N/A"
        };
    }

    getUserFromAPI = () => {
        axios.get("/getRandomUsers").then(response => {
            
            this.setState({
                firstName : response.data.parsedData[0]['name']['first'],
                lastName : response.data.parsedData[0]['name']['last'],
                userName : response.data.parsedData[0]['login']['username'],
                hashPassword: response.data.parsedData[0]['login']['password'],
                pictureURL: response.data.parsedData[0]['picture']['large']
                
            })
        })
    };

    postUserToDB = () => {
        axios.post("/postRandomUser", { 
            

        })
    }

    render() {
        return(
            <div>
                <button onClick={() => this.getUserFromAPI()}>Generate Random User</button>
                <h1>User Info: </h1>
                    <h3>firstName = {this.state.firstName}</h3>
                    <h3>lastName = {this.state.lastName}</h3>
                    <h3>userName = {this.state.userName}</h3>
                    <h3>hashPassword = {this.state.hashPassword}</h3>
                    <h3>pictureURL = {this.state.pictureURL}</h3>
                
                <button onCLick={() => this.postUserToDB}>Add to DataBase</button> 
            </div>
        );
    }

}
    