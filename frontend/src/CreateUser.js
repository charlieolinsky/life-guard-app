import React, { Component } from 'react';
import axios from 'axios'
import './CreateUser.css';

export default class CreateUser extends Component {
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
        }).then(this.fillRandomForm())

        
    };

    fillRandomForm = () => {

        var fName = document.getElementById('fName');
        fName.value = this.state.firstName
        var lName = document.getElementById('lName');
        lName.value = this.state.lastName
        var uName = document.getElementById('uName');
        uName.value = this.state.userName
        var pWord = document.getElementById('pWord');
        pWord.value = this.state.hashPassword
    }

    render() {
        return(
            <div className='sign-up'>
                <button onClick={() => this.getUserFromAPI()}>Generate Random User</button>
                
                    <form className='sign-up-form' action='http://localhost:5000/insertUser' method='POST'>
                        <input type='text' name='firstName'placeholder='First Name' id='fName'/>


                        <input type='text' name='lastName' placeholder='Last Name' id='lName'/>
                        <input type='text' name='userName' placeholder='Username' id='uName'/>
                        <input type='text' name='hashPassword' placeholder='Password' id='pWord'/>
                        <input type='text' name='pictureURL' value='pictureURL' id='picURL'/>
                    
                    <div className='select-department'>
                        <fieldset>
                            <legend>User Job title: </legend>
                            <div>
                                <input type="radio" id="ad" name="job_title" value="Aquatics Director"/>
                                <label for="ad"> Aquatics Director</label>
                            </div>

                            <div>
                                <input type="radio" id="ehlg" name="job_title" value="Executive Head Lifeguard"/>
                                <label for="ehg"> Executive Head Lifeguard</label>
                            </div>

                            <div>
                                <input type="radio" id="hlg" name="job_title" value="Head Lifeguard"/>
                                <label for="hlg"> Head Lifeguard</label>
                            </div>

                            <div>
                                <input type="radio" id="lg" name="job_title" value="Lifeguard"/>
                                <label for="lg"> Lifeguard</label>
                            </div>   
                                
                        </fieldset>
                    </div>        

                        <input type='submit' value='Submit' />
                    </form>
            </div>
        );
    }

}
