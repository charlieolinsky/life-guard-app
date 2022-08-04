import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './PoolManager.css'

const PoolManager = () => {
    
    const [lifeguardList, setLifeguardList] = useState([])
    const [headLifeguardList, setHeadLifeguardList] = useState([])

    useEffect(() => {
        const getLifeguardList = () => {
            axios.get('/getLifeguards').then(response => {
                setLifeguardList(response.data)
            })
        }
        getLifeguardList()
    }, [])

    useEffect(() => {
        const getHeadLifeguardList = () => {
            axios.get('/getHeadLifeguards').then(response => {
                setHeadLifeguardList(response.data)
            })
        }
        getHeadLifeguardList()
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
                <div className='hg-up1'>
                    <label htmlFor="lg4">Assign Head Lifeguard: </label>

                    <select name='hlg1'>
                        <option>...</option>
                            {  
                                headLifeguardList.map((headLifeguard, index) => {
                                    return(<option key={index}>{headLifeguard.name}</option>)
                            })}
                    </select>
                </div>

            </div>
        </div>
    )
}

export default PoolManager; 