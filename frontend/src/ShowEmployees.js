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
            <label className='show-employees-label'>Employee View</label>
            {
                employees.map((employees, key) => {
                    return(<table className='employee-table'>{key+". "+employees.name+", "+employees.position}</table>)
                })
            }
        </div>
        

    )
}

export default ShowEmployees; 