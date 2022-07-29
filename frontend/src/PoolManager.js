import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './PoolManager.css'

const PoolManager = () => {
    
    const [lifeguardList, setLifeguardList] = useState([])
    
    const getLifeguardList = async () => {
        await axios.get('/getLifeguards').then(response => {
            setLifeguardList(response.data)
            console.log(lifeguardList)
        })
    }

    return(
        <div className='poolManager'>
            
        
            <div className='pool-container'>
                <h1>Upper Pool</h1>

            </div>
            <div className='guard-stands'>
                <div className='gs-up1'>
                    <label htmlFor="lg1">Assign Lifeguard: </label>

                    <select className='lg1' onClick={getLifeguardList}>
                        <option value="temp">temp</option>
                        <option value="temp">temp</option>
                        <option value="temp">temp</option>
                        <option value="temp">temp</option>
                        <option value="temp">temp</option>
                    </select>

                </div>
                <div className='gs-up2'>
                    <label htmlFor="lg2">Assign Lifeguard: </label>

                    <select name='lg2' onClick={getLifeguardList}>
                        <option value="temp">temp</option>
                        <option value="temp">temp</option>
                        <option value="temp">temp</option>
                        <option value="temp">temp</option>
                        <option value="temp">temp</option>
                    </select>

                </div>

            </div>
        </div>
    )
}

export default PoolManager; 