import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import './CreateUser.css';
import { useNavigate } from 'react-router-dom';
import { Location } from 'react-router-dom';

const CreateUser = () => {
    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [position, setPosition] = useState();
    const [salary, setSalary] = useState(); 

    // getUserFromAPI = async () => {
    //     axios.get("/getRandomUsers").then (response => {
    //         this.setState({
    //             firstName : response.data.parsedData[0]['name']['first'],
    //             lastName : response.data.parsedData[0]['name']['last'],
    //             userName : response.data.parsedData[0]['login']['username'],
    //             hashPassword: response.data.parsedData[0]['login']['password'],
    //             pictureURL: response.data.parsedData[0]['picture']['large']
                
    //         })
    //     })
    //     this.fillRandomForm()
    // };

    // fillRandomForm = () => {
    //     var fName = document.getElementById('fName');
    //     fName.value = this.state.firstName
    //     var lName = document.getElementById('lName');
    //     lName.value = this.state.lastName
    //     var uName = document.getElementById('uName');
    //     uName.value = this.state.userName
    //     var pWord = document.getElementById('pWord');
    //     pWord.value = this.state.hashPassword
    // }

    const addEmployee = () => {
        axios.post('http://localhost:5000/addEmployee', {
            name : name, 
            email : email, 
            phone : phone,
            position : position, 
            salary : salary
        }).then(() => {
            console.log('success'); 
        })
   }

   let navigate = useNavigate(); 
   const navPoolManager = (e) => {
        e.preventDefault();
        navigate('/PoolManager'); 
   }

   const addEmployeeButtonHandler = (e) => {
        addEmployee()
        window.location.reload(true); 

   }
    
        return(
            <div className='sign-up'>
                {/* <button onClick={() => this.getUserFromAPI()}>Generate Random User</button> */}
                    
                <div className='user-info'>
                    <label>Name:</label>
                    <input type='text' onChange={(event) => {
                        setName(event.target.value) 
                    }} />
                    
                    <label>E-mail:</label>
                    <input type='text' onChange={(event) => {
                        setEmail(event.target.value) 
                    }} />
                    
                    <label>Phone Number: </label>
                    <input type='text' onChange={(event) => {
                        setPhone(event.target.value) 
                    }} />
                    
                    <label>Position: </label>
                    <input type='text' onChange={(event) => {
                        setPosition(event.target.value) 
                    }} />
                    
                    <label>Salary: </label>
                    <input type='text' onChange={(event) => {
                        setSalary(event.target.value) 
                    }} />
                    
                    <button onClick={addEmployeeButtonHandler}>Add Employee</button> 
                    <button onClick={navPoolManager}>View Pool Manager</button> 
                            
                </div>             
                           
            </div>

        )
}

export default CreateUser; 
