import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './ShowEmployees.css'; 

const ShowEmployees = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const getEmployees = () =>{
            axios.get('/getEmployees').then(response => {
                setEmployees(response.data)
            })
        }
        getEmployees()
    }, [])
    
    return(
        <div className='show-employees'>
            <label>Employee View</label>
                <div className='employee-table'>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Salary</th>
                        </tr>
                            {employees.map((employees, key) => {
                                return(
                                    <tr>
                                        <td>{employees.id}</td>
                                        <td>{employees.name}</td>
                                        <td>{employees.position}</td>
                                        <td>{employees.salary}</td>
                                    </tr>
                                )
                            })}
                    </table>
                </div>
        </div>
    )
}

export default ShowEmployees; 