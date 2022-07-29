import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './PoolManager.css'

const PoolManager = () => {
    
    const [lifeguardList, setLifeguardList] = useState([])

    useEffect(() => {
        const getLifeguardList = () => {
            axios.get('/getLifeguards').then(response => {
                setLifeguardList(response.data)
            })
        }
        getLifeguardList()
    }, [])

    return(
        <div className='poolManager'>
            
            <div className='pool-container'>
                <h1>Upper Pool</h1>

            </div>
            <div className='guard-stands'>
                <div className='gs-up1'>
                    <label htmlFor="lg1">Assign Lifeguard: </label>

                    <select className='lg1'>
                        <option>...</option>
                        {  
                            lifeguardList.map((lifeguard, index) => {
                                return(<option key={index}>{lifeguard.name}</option>)
                        })}
                    </select>

                </div>
                <div className='gs-up2'>
                    <label htmlFor="lg2">Assign Lifeguard: </label>

                    <select name='lg2'>
                        <option>...</option>
                            {  
                                lifeguardList.map((lifeguard, index) => {
                                    return(<option key={index}>{lifeguard.name}</option>)
                            })}
                    </select>

                </div>
                <div className='gs-up3'>
                    <label htmlFor="lg3">Assign Lifeguard: </label>

                    <select name='lg3'>
                        <option>...</option>
                            {  
                                lifeguardList.map((lifeguard, index) => {
                                    return(<option key={index}>{lifeguard.name}</option>)
                            })}
                    </select>

                </div>
                <div className='gs-up4'>
                    <label htmlFor="lg4">Assign Lifeguard: </label>

                    <select name='lg4'>
                        <option>...</option>
                            {  
                                lifeguardList.map((lifeguard, index) => {
                                    return(<option key={index}>{lifeguard.name}</option>)
                            })}
                    </select>

                </div>

            </div>
        </div>
    )
}

export default PoolManager; 